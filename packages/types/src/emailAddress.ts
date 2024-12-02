import type { IdentificationLinkResource } from './identificationLink';
import type { ClerkResource } from './resource';
import type { EmailCodeStrategy, EmailLinkStrategy, EnterpriseSSOStrategy } from './strategies';
import type {
  CreateEmailLinkFlowReturn,
  StartEmailLinkFlowParams,
  StartEnterpriseSsoFlowParams,
  StartEnterpriseSsoFlowReturn,
  VerificationResource,
} from './verification';

export type PrepareEmailAddressVerificationParams =
  | {
      strategy: EmailCodeStrategy;
    }
  | {
      strategy: EmailLinkStrategy;
      redirectUrl: string;
    }
  | {
      strategy: EnterpriseSSOStrategy;
      redirectUrl: string;
    };

export type AttemptEmailAddressVerificationParams = {
  code: string;
};

export interface EmailAddressResource extends ClerkResource {
  id: string;
  emailAddress: string;
  verification: VerificationResource;
  matchesEnterpriseConnection: boolean;
  linkedTo: IdentificationLinkResource[];
  toString: () => string;
  prepareVerification: (params: PrepareEmailAddressVerificationParams) => Promise<EmailAddressResource>;
  attemptVerification: (params: AttemptEmailAddressVerificationParams) => Promise<EmailAddressResource>;
  createEmailLinkFlow: () => CreateEmailLinkFlowReturn<StartEmailLinkFlowParams, EmailAddressResource>;
  createEnterpriseConnectionLinkFlow: () => StartEnterpriseSsoFlowReturn<
    StartEnterpriseSsoFlowParams,
    EmailAddressResource
  >;
  destroy: () => Promise<void>;
  create: () => Promise<EmailAddressResource>;
}
