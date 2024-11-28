// eslint-disable-next-line no-restricted-imports
import { css } from '@emotion/react';
import type { PointerEventHandler } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { LocalizationKey } from '../../customizables';
import { Col, descriptors, Flex, Link, Text } from '../../customizables';
import { Portal } from '../../elements/Portal';
import { InternalThemeProvider } from '../../styledSystem';
import { ClerkLogoIcon } from './ClerkLogoIcon';
import { KeySlashIcon } from './KeySlashIcon';

type AccountlessPromptProps = {
  url?: string;
};

type FabContentProps = { title?: LocalizationKey | string; signOutText: LocalizationKey | string; url: string };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FabContent = ({ title, signOutText, url }: FabContentProps) => {
  return (
    <Col
      sx={t => ({
        width: '100%',
        paddingLeft: t.sizes.$4,
        paddingRight: t.sizes.$6,
        whiteSpace: 'nowrap',
      })}
    >
      <Text
        colorScheme='secondary'
        elementDescriptor={descriptors.impersonationFabTitle}
        variant='buttonLarge'
        truncate
        localizationKey={title}
      />
      <Link
        variant='buttonLarge'
        elementDescriptor={descriptors.impersonationFabActionLink}
        sx={t => ({
          alignSelf: 'flex-start',
          color: t.colors.$primary500,
          ':hover': {
            cursor: 'pointer',
          },
        })}
        localizationKey={signOutText}
        onClick={
          () => (window.location.href = url)
          // clerk-js has been loaded at this point so we can safely access session
          // handleSignOutSessionClicked(session!)
        }
      />
    </Col>
  );
};

export const _AccountlessPrompt = (props: AccountlessPromptProps) => {
  // const { parsedInternalTheme } = useAppearance();
  const [isExpanded, setIsExpanded] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  //essentials for calcs
  // const eyeWidth = parsedInternalTheme.sizes.$16;
  // const eyeHeight = eyeWidth;
  const bottomProperty = '--cl-impersonation-fab-bottom';
  const rightProperty = '--cl-impersonation-fab-right';
  const defaultBottom = 50;
  const defaultRight = 50;

  const handleResize = () => {
    const current = containerRef.current;
    if (!current) {
      return;
    }

    const offsetRight = window.innerWidth - current.offsetLeft - current.offsetWidth;
    const offsetBottom = window.innerHeight - current.offsetTop - current.offsetHeight;

    const outsideViewport = [current.offsetLeft, offsetRight, current.offsetTop, offsetBottom].some(o => o < 0);

    if (outsideViewport) {
      document.documentElement.style.setProperty(rightProperty, `${defaultRight}px`);
      document.documentElement.style.setProperty(bottomProperty, `${defaultBottom}px`);
    }
  };

  const onPointerDown: PointerEventHandler = () => {
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener(
      'pointerup',
      () => {
        window.removeEventListener('pointermove', onPointerMove);
        handleResize();
      },
      { once: true },
    );
  };

  const onPointerMove = useCallback((e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const current = containerRef.current;
    if (!current) {
      return;
    }
    const rightOffestBasedOnViewportAndContent = `${
      window.innerWidth - current.offsetLeft - current.offsetWidth - e.movementX
    }px`;
    document.documentElement.style.setProperty(rightProperty, rightOffestBasedOnViewportAndContent);
    document.documentElement.style.setProperty(bottomProperty, `${current.offsetTop - -e.movementY}px`);
  }, []);

  const repositionFabOnResize = () => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  useEffect(repositionFabOnResize, []);

  if (!props.url) {
    return null;
  }

  return (
    <Portal>
      <Flex
        // ref={containerRef}
        elementDescriptor={descriptors.impersonationFab}
        onPointerDown={onPointerDown}
        align='center'
        onMouseEnter={() => setIsExpanded(true)}
        sx={t => ({
          //   touchAction: 'none', //for drag to work on mobile consistently
          position: 'fixed',
          bottom: `var(${bottomProperty}, ${defaultBottom}px)`,
          right: `var(${rightProperty}, ${defaultRight}px)`,
          zIndex: t.zIndices.$fab,
          height: `${t.sizes.$10}`,
          width: '18.5625rem',
          padding: `${t.space.$1x5} ${t.space.$1x5} ${t.space.$1x5} ${t.space.$3}`,
          borderRadius: '1.25rem',
          fontFamily: t.fonts.$main,

          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), #1f1f1f',
          boxShadow:
            '0px 0px 0px 0.5px #2f3037 inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset, 0px 0px 1px 1px rgba(255, 255, 255, 0.15) inset, 0px 0px 1px 0px rgba(255, 255, 255, 0.72), 0px 16px 36px -6px rgba(0, 0, 0, 0.36), 0px 6px 16px -2px rgba(0, 0, 0, 0.2)',

          transition:
            'width 300ms cubic-bezier(0.34, 1.2, 0.64, 1), height 300ms cubic-bezier(0.34, 1.2, 0.64, 1), border-radius 200ms cubic-bezier(0.6, 0.6, 0, 1)',

          ...(isExpanded && {
            flexDirection: 'column',
            height: '8.75rem',
            width: '16.125rem',
            gap: `${t.space.$1}`,
            padding: `${t.space.$2x5} ${t.space.$3} ${t.space.$3} ${t.space.$3}`,
            borderRadius: `${t.radii.$xl}`,
            transition: 'all 200ms cubic-bezier(0.6, 0.6, 0, 1)',
          }),
        })}
      >
        <Flex
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Flex
            sx={t => ({
              alignItems: 'center',
              gap: t.space.$2,
            })}
          >
            <div
              css={css`
                perspective: 1000px;
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                transform-style: preserve-3d;
                animation: ${isExpanded ? 'coinFlipAnimation 3.6s infinite cubic-bezier(0.6, 0.2, 0.4, 0.9)' : 'none'};

                @keyframes coinFlipAnimation {
                  0%,
                  35% {
                    transform: rotateY(360deg);
                  }
                  35%,
                  55% {
                    transform: rotateY(180deg);
                  }

                  90%,
                  100% {
                    transform: rotateY(360deg);
                  }
                }
              `}
            >
              <span
                className='coin-flip-front'
                css={css`
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  backface-visibility: hidden;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <ClerkLogoIcon />
              </span>

              <span
                className='coin-flip-back'
                css={css`
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  backface-visibility: hidden;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transform: rotateY(180deg);
                `}
              >
                <KeySlashIcon />
              </span>
            </div>

            <p
              data-text='Clerk is in keyless mode'
              css={css`
                color: #d9d9d9;
                font-size: 0.875rem;
                font-weight: 400;
                position: relative;
                isolation: isolate;

                &::after {
                  content: attr(data-text);
                  z-index: 1;
                  position: absolute;
                  left: 0;
                  top: 0;
                  color: transparent;
                  background: linear-gradient(
                    -100deg,
                    transparent 0%,
                    transparent 45%,
                    rgb(198, 179, 86) 51%,
                    rgb(198, 179, 86) 55%,
                    transparent 60%,
                    transparent 100%
                  );
                  background-size: 200% 100%;
                  -webkit-background-clip: text;
                  background-clip: text;
                  filter: blur(1px);
                  animation: text-shimmer 3.6s infinite linear;
                }

                &::before {
                  z-index: 2;
                  content: attr(data-text);
                  position: absolute;
                  left: 0;
                  top: 0;
                  color: transparent;

                  background: linear-gradient(
                    -100deg,
                    transparent 0%,
                    transparent 45%,
                    rgba(240, 214, 83, 0.7) 50%,
                    rgb(240, 214, 83) 51%,
                    rgb(240, 214, 83) 55%,
                    rgba(240, 214, 83, 0.7) 60%,
                    transparent 65%,
                    transparent 100%
                  );

                  background-size: 200% 100%;
                  -webkit-background-clip: text;
                  background-clip: text;
                  animation: text-shimmer 3.6s infinite linear;
                }

                @keyframes text-shimmer {
                  0% {
                    background-position: 120% center;
                  }
                  30%,
                  100% {
                    background-position: -60% center;
                  }
                }
              `}
            >
              Clerk is in keyless mode
            </p>
          </Flex>

          <Flex
            as='span'
            onClick={() => setIsExpanded(false)}
            sx={t => ({
              display: `${isExpanded ? 'block' : 'none'}`,
              cursor: 'pointer',
              color: '#8C8C8C',
              transition: `color ${t.transitionDuration.$fast} ${t.transitionTiming.$common}`,
              ':hover': { color: t.colors.$whiteAlpha800 },
            })}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.75 8H12.25'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Flex>
        </Flex>

        <p
          css={css`
            display: none;
            color: #b4b4b4;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 1%;

            ${isExpanded && `display:block`};
            animation: show-description 100ms ease-out forwards;
            transition: all ease-out;

            @keyframes show-description {
              from {
                transform: translateY(0.5px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}
        >
          We noticed your app was running without API Keys. Claim this instance by linking a Clerk account.{' '}
          <a
            href='/'
            css={css`
              text-decoration: underline solid;
              :hover {
                color: #eeeeee;
              }
            `}
          >
            Learn more
          </a>
        </p>

        <button
          type='button'
          css={css`
            position: absolute;
            right: 0.375rem;
            bottom: 0.375rem;
            height: 1.75rem;
            width: 5.125rem;
            padding: 0.25rem 0.625rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.12px;
            color: white;
            text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.32);
            white-space: nowrap;
            cursor: pointer;
            user-select: none;
            transition: all 200ms cubic-bezier(0.6, 0.6, 0, 1);

            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30.5%, rgba(0, 0, 0, 0.05) 100%), #636363;
            box-shadow:
              0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
              0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
              0px 0px 0px 1px rgba(0, 0, 0, 0.12),
              0px 1.5px 2px 0px rgba(0, 0, 0, 0.48),
              0px 0px 4px 0px rgba(243, 107, 22, 0) inset;

            animation: small-btn-glow 3.6s infinite;

            ${isExpanded &&
            ` right: 0.75rem;
              bottom: 0.75rem;
              width: 14.625rem;
              color: #FDE047;
              border-radius: 0.375rem;
              background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30.5%, rgba(0, 0, 0, 0.05) 100%), #454545;
              animation: expanded-btn-glow 2s infinite;
              box-shadow:
                0px 0px 3px 0px rgba(253, 224, 71, 0) inset,
                0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
                0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
                0px 0px 0px 1px rgba(0, 0, 0, 0.12),
                0px 1.5px 2px 0px rgba(0, 0, 0, 0.48);

            `}

            @keyframes expanded-btn-glow {
              0%,
              100% {
                box-shadow:
                  0px 0px 3px 0px rgba(253, 224, 71, 0) inset,
                  0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
                  0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
                  0px 0px 0px 1px rgba(0, 0, 0, 0.12),
                  0px 1.5px 2px 0px rgba(0, 0, 0, 0.48);
              }
              50% {
                box-shadow:
                  0px 0px 6px 0px rgba(253, 224, 71, 0.24) inset,
                  0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
                  0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
                  0px 0px 0px 1px rgba(0, 0, 0, 0.12),
                  0px 1.5px 2px 0px rgba(0, 0, 0, 0.48);
              }
            }

            @keyframes small-btn-glow {
              0%,
              20%,
              100% {
                box-shadow:
                  0px 0px 4px 0px rgba(243, 107, 22, 0) inset,
                  0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
                  0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
                  0px 0px 0px 1px rgba(0, 0, 0, 0.12),
                  0px 1.5px 2px 0px rgba(0, 0, 0, 0.48);
              }

              30% {
                box-shadow:
                  0px 0px 6px 0px #fde047 inset,
                  0px 0px 0px 1px rgba(255, 255, 255, 0.04) inset,
                  0px 1px 0px 0px rgba(255, 255, 255, 0.04) inset,
                  0px 0px 0px 1px rgba(0, 0, 0, 0.12),
                  0px 1.5px 2px 0px rgba(0, 0, 0, 0.48);
              }
            }
          `}
        >
          Claim keys
        </button>
      </Flex>
    </Portal>
  );
};

export const AccountlessPrompt = (props: AccountlessPromptProps) => (
  <InternalThemeProvider>
    <_AccountlessPrompt {...props} />
  </InternalThemeProvider>
);