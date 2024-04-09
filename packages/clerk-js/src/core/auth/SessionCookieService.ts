import { setDevBrowserJWTInURL } from '@clerk/shared/devBrowser';
import { is4xxError, isClerkAPIResponseError, isNetworkError } from '@clerk/shared/error';
import type { Clerk, EnvironmentResource, TokenResource } from '@clerk/types';

import { inBrowser } from '../../utils';
import { clerkCoreErrorTokenRefreshFailed, clerkMissingDevBrowserJwt } from '../errors';
import { eventBus, events } from '../events';
import type { FapiClient } from '../fapiClient';
import type { ClientUatCookieHandler } from './cookies/clientUat';
import { createClientUatCookie } from './cookies/clientUat';
import type { SessionCookieHandler } from './cookies/session';
import { createSessionCookie } from './cookies/session';
import type { DevBrowser } from './devBrowser';
import { createDevBrowser } from './devBrowser';
import { SessionCookiePoller } from './SessionCookiePoller';

export class SessionCookieService {
  private environment: EnvironmentResource | undefined;
  private poller: SessionCookiePoller | null = null;
  private clientUat: ClientUatCookieHandler;
  private sessionCookie: SessionCookieHandler;
  private devBrowser: DevBrowser;

  constructor(private clerk: Clerk, fapiClient: FapiClient, multipleAppsSameDomainEnabled = false) {
    // set cookie on token update
    eventBus.on(events.TokenUpdate, ({ token }) => {
      this.updateSessionCookie(token?.getRawString());
      this.setClientUatCookieForDevelopmentInstances();
    });

    this.refreshTokenOnVisibilityChange();
    this.startPollingForToken();

    this.clientUat = createClientUatCookie(clerk.publishableKey, multipleAppsSameDomainEnabled);
    this.sessionCookie = createSessionCookie(clerk.publishableKey, multipleAppsSameDomainEnabled);
    this.devBrowser = createDevBrowser(
      {
        publishableKey: clerk.publishableKey,
        frontendApi: clerk.frontendApi,
        fapiClient,
      },
      multipleAppsSameDomainEnabled,
    );

    this.migrateCookieValues();
  }

  public setEnvironment(environment: EnvironmentResource) {
    this.environment = environment;
    this.setClientUatCookieForDevelopmentInstances();
  }

  public isSignedOut() {
    return this.clientUat.get() <= 0;
  }

  public async setupDevelopment() {
    await this.devBrowser.setup();
  }

  public setupProduction() {
    this.devBrowser.clear();
  }

  public async handleUnauthenticatedDevBrowser() {
    this.devBrowser.clear();
    await this.devBrowser.setup();
  }

  public urlWithAuth(url: URL): URL {
    const devBrowserJwt = this.devBrowser.getDevBrowserJWT();
    if (!devBrowserJwt) {
      return clerkMissingDevBrowserJwt();
    }

    return setDevBrowserJWTInURL(url, devBrowserJwt);
  }

  private migrateCookieValues() {
    this.clientUat.migrate();
    this.sessionCookie.migrate();
    this.devBrowser.migrate();
  }

  private startPollingForToken() {
    if (!this.poller) {
      this.poller = new SessionCookiePoller();
    }
    this.poller.startPollingForSessionToken(() => this.refreshSessionToken());
  }

  private refreshTokenOnVisibilityChange() {
    if (!inBrowser()) {
      return;
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        void this.refreshSessionToken();
      }
    });
  }

  private async refreshSessionToken(): Promise<void> {
    if (!inBrowser()) {
      return;
    }

    if (!this.clerk.session) {
      return;
    }

    try {
      this.updateSessionCookie(await this.clerk.session?.getToken());
    } catch (e) {
      return this.handleGetTokenError(e);
    }
  }

  private updateSessionCookie(token: TokenResource | string | undefined | null) {
    const rawToken = typeof token === 'string' ? token : token?.getRawString();

    if (rawToken) {
      return this.sessionCookie.set(rawToken);
    }
    return this.sessionCookie.remove();
  }

  private setClientUatCookieForDevelopmentInstances() {
    if (this.environment?.isDevelopmentOrStaging() && this.inCustomDevelopmentDomain()) {
      this.clientUat.set(this.clerk.client);
    }
  }

  private inCustomDevelopmentDomain() {
    const domain = this.clerk.frontendApi.replace('clerk.', '');
    return !window.location.host.endsWith(domain);
  }

  private handleGetTokenError(e: any) {
    //throw if not a clerk error
    if (!isClerkAPIResponseError(e)) {
      clerkCoreErrorTokenRefreshFailed(e.message || e);
    }

    //sign user out if a 4XX error
    if (is4xxError(e)) {
      void this.clerk.handleUnauthenticated();
      return;
    }

    if (isNetworkError(e)) {
      return;
    }

    clerkCoreErrorTokenRefreshFailed(e.toString());
  }
}
