/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const csCZ: LocalizationResource = {
  locale: 'cs-CZ',
  backButton: 'Zpět',
  badge__default: 'Výchozí',
  badge__otherImpersonatorDevice: 'Jiné zařízení představitele',
  badge__primary: 'Hlavní',
  badge__requiresAction: 'Vyžaduje akci',
  badge__thisDevice: 'Toto zařízení',
  badge__unverified: 'Nepotvrzené',
  badge__userDevice: 'Zařízení uživatele',
  badge__you: 'Vy',
  createOrganization: {
    formButtonSubmit: 'Vytvořit organizaci',
    invitePage: {
      formButtonReset: 'Přeskočit',
    },
    title: 'Vytvořit organizaci',
  },
  dates: {
    lastDay: "Včera v {{ date | timeString('cs-CZ') }}",
    next6Days: "Příští  {{ date | weekday('cs-CZ','long') }} v {{ date | timeString('cs-CZ') }}",
    nextDay: "Zítra v {{ date | timeString('cs-CZ') }}",
    numeric: "{{ date | numeric('cs-CZ') }}",
    previous6Days: "Minulý {{ date | weekday('cs-CZ','long') }} v {{ date | timeString('cs-CZ') }}",
    sameDay: "Dnes v  {{ date | timeString('cs-CZ') }}",
  },
  dividerText: 'nebo',
  footerActionLink__useAnotherMethod: 'Použít jinou metodu',
  footerPageLink__help: 'Nápověda',
  footerPageLink__privacy: 'Ochrana soukromí',
  footerPageLink__terms: 'Podmínky',
  formButtonPrimary: 'Pokračovat',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'Zapomněli jste heslo?',
  formFieldError__matchingPasswords: 'Hesla se shodují.',
  formFieldError__notMatchingPasswords: 'Hesla se neshodují.',
  formFieldError__verificationLinkExpired: 'Odkaz pro ověření již expiroval. Prosím, požádejte o nový.',
  formFieldHintText__optional: 'Volitelné',
  formFieldHintText__slug:
    'Slug je člověkem čitelný identifikátor, který musí být unikátní. Často použit v URL adresách.',
  formFieldInputPlaceholder__backupCode: undefined,
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Smazat účet',
  formFieldInputPlaceholder__emailAddress: undefined,
  formFieldInputPlaceholder__emailAddress_username: undefined,
  formFieldInputPlaceholder__emailAddresses:
    'Zadejte nebo vložte jednu nebo více emailových adres oddělených mezerou nebo čárkou',
  formFieldInputPlaceholder__firstName: undefined,
  formFieldInputPlaceholder__lastName: undefined,
  formFieldInputPlaceholder__organizationDomain: undefined,
  formFieldInputPlaceholder__organizationDomainEmailAddress: undefined,
  formFieldInputPlaceholder__organizationName: undefined,
  formFieldInputPlaceholder__organizationSlug: undefined,
  formFieldInputPlaceholder__password: undefined,
  formFieldInputPlaceholder__phoneNumber: undefined,
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations: 'Enable automatic invitations for this domain',
  formFieldLabel__backupCode: 'Záložní kód',
  formFieldLabel__confirmDeletion: 'Potvrzení',
  formFieldLabel__confirmPassword: 'Potvrdit heslo',
  formFieldLabel__currentPassword: 'Stávající heslo',
  formFieldLabel__emailAddress: 'Emailová adresa',
  formFieldLabel__emailAddress_username: 'Emailová adresa nebo uživatelské jméno',
  formFieldLabel__emailAddresses: 'Emailové adresy',
  formFieldLabel__firstName: 'Jméno',
  formFieldLabel__lastName: 'Příjmení',
  formFieldLabel__newPassword: 'Nové heslo',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: 'Název organizace',
  formFieldLabel__organizationSlug: 'URL adresa',
  formFieldLabel__passkeyName: undefined,
  formFieldLabel__password: 'Heslo',
  formFieldLabel__phoneNumber: 'Telefonní číslo',
  formFieldLabel__role: 'Role',
  formFieldLabel__signOutOfOtherSessions: 'Odhlásit se ze všech ostatních zařízení',
  formFieldLabel__username: 'Uživatelské jméno',
  impersonationFab: {
    action__signOut: 'Odhlásit se',
    title: 'Přihlášen(a) jako {{identifier}}',
  },
  maintenanceMode: undefined,
  membershipRole__admin: 'Správce',
  membershipRole__basicMember: 'Člen',
  membershipRole__guestMember: 'Host',
  organizationList: {
    action__createOrganization: 'Create organization',
    action__invitationAccept: 'Join',
    action__suggestionsAccept: 'Request to join',
    createOrganization: 'Create Organization',
    invitationAcceptedLabel: 'Joined',
    subtitle: 'to continue to {{applicationName}}',
    suggestionsAcceptedLabel: 'Pending approval',
    title: 'Choose an account',
    titleWithoutPersonal: 'Choose an organization',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Automatic invitations',
    badge__automaticSuggestion: 'Automatic suggestions',
    badge__manualInvitation: 'No automatic enrollment',
    badge__unverified: 'Unverified',
    createDomainPage: {
      subtitle:
        'Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.',
      title: 'Add domain',
    },
    invitePage: {
      detailsTitle__inviteFailed: 'Pozvánky se nepodařilo odeslat. Opravte následující a zkuste to znovu:',
      formButtonPrimary__continue: 'Odeslat pozvánky',
      selectDropdown__role: 'Select role',
      subtitle: 'Pozvat nové členy do této organizace',
      successMessage: 'Pozvánky byly úspěšně odeslány',
      title: 'Pozvat členy',
    },
    membersPage: {
      action__invite: 'Pozvat',
      activeMembersTab: {
        menuAction__remove: 'Odstranit člena',
        tableHeader__actions: undefined,
        tableHeader__joined: 'Připojil se',
        tableHeader__role: 'Role',
        tableHeader__user: 'Uživatel',
      },
      detailsTitle__emptyRow: 'Žádní členové k zobrazení',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.',
          headerTitle: 'Automatic invitations',
          primaryButton: 'Manage verified domains',
        },
        table__emptyRow: 'No invitations to display',
      },
      invitedMembersTab: {
        menuAction__revoke: 'Zrušit pozvání',
        tableHeader__invited: 'Pozváni',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.',
          headerTitle: 'Automatic suggestions',
          primaryButton: 'Manage verified domains',
        },
        menuAction__approve: 'Approve',
        menuAction__reject: 'Reject',
        tableHeader__requested: 'Requested access',
        table__emptyRow: 'No requests to display',
      },
      start: {
        headerTitle__invitations: 'Invitations',
        headerTitle__members: 'Members',
        headerTitle__requests: 'Requests',
      },
    },
    navbar: {
      description: 'Manage your organization.',
      general: 'General',
      members: 'Members',
      title: 'Organization',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: 'Are you sure you want to delete this organization?',
          messageLine2: 'This action is permanent and irreversible.',
          successMessage: 'You have deleted the organization.',
          title: 'Delete organization',
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: 'Opravdu chcete opustit tuto organizaci? Ztratíte přístup k této organizaci a jejím aplikacím.',
          messageLine2: 'Tato akce je trvalá a nevratná.',
          successMessage: 'Opustili jste organizaci.',
          title: 'Opustit organizaci',
        },
        title: 'Upozornění',
      },
      domainSection: {
        menuAction__manage: 'Manage',
        menuAction__remove: 'Delete',
        menuAction__verify: 'Verify',
        primaryButton: 'Add domain',
        subtitle:
          'Allow users to join the organization automatically or request to join based on a verified email domain.',
        title: 'Verified domains',
      },
      successMessage: 'Organizace byla aktualizována.',
      title: 'Profil organizace',
    },
    removeDomainPage: {
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
      title: 'Remove domain',
    },
    start: {
      headerTitle__general: 'General',
      headerTitle__members: 'Členové',
      profileSection: {
        primaryButton: undefined,
        title: 'Organization Profile',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'Removing this domain will affect invited users.',
        removeDomainActionLabel__remove: 'Remove domain',
        removeDomainSubtitle: 'Remove this domain from your verified domains',
        removeDomainTitle: 'Remove domain',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Users are automatically invited to join the organization when they sign-up and can join anytime.',
        automaticInvitationOption__label: 'Automatic invitations',
        automaticSuggestionOption__description:
          'Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.',
        automaticSuggestionOption__label: 'Automatic suggestions',
        calloutInfoLabel: 'Changing the enrollment mode will only affect new users.',
        calloutInvitationCountLabel: 'Pending invitations sent to users: {{count}}',
        calloutSuggestionCountLabel: 'Pending suggestions sent to users: {{count}}',
        manualInvitationOption__description: 'Users can only be invited manually to the organization.',
        manualInvitationOption__label: 'No automatic enrollment',
        subtitle: 'Choose how users from this domain can join the organization.',
      },
      start: {
        headerTitle__danger: 'Danger',
        headerTitle__enrollment: 'Enrollment options',
      },
      subtitle: 'The domain {{domain}} is now verified. Continue by selecting enrollment mode.',
      title: 'Update {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'Enter the verification code sent to your email address',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
      subtitle: 'The domain {{domainName}} needs to be verified via email.',
      subtitleVerificationCodeScreen: 'A verification code was sent to {{emailAddress}}. Enter the code to continue.',
      title: 'Verify domain',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'Vytvořit organizaci',
    action__invitationAccept: 'Join',
    action__manageOrganization: 'Spravovat organizaci',
    action__suggestionsAccept: 'Request to join',
    notSelected: 'Není vybrána žádná organizace',
    personalWorkspace: 'Osobní pracovní prostor',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: 'Další',
  paginationButton__previous: 'Předchozí',
  paginationRowText__displaying: 'Zobrazuje se',
  paginationRowText__of: 'z',
  reverification: {
    alternativeMethods: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__backupCode: undefined,
      blockButton__emailCode: undefined,
      blockButton__password: undefined,
      blockButton__phoneCode: undefined,
      blockButton__totp: undefined,
      getHelp: {
        blockButton__emailSupport: undefined,
        content: undefined,
        title: undefined,
      },
      subtitle: undefined,
      title: undefined,
    },
    backupCodeMfa: {
      subtitle: undefined,
      title: undefined,
    },
    emailCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    noAvailableMethods: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCodeMfa: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    totpMfa: {
      formTitle: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Add account',
      action__signOutAll: 'Sign out of all accounts',
      subtitle: 'Select the account with which you wish to continue.',
      title: 'Choose an account',
    },
    alternativeMethods: {
      actionLink: 'Získat pomoc',
      actionText: 'Don’t have any of these?',
      blockButton__backupCode: 'Použít záložní kód',
      blockButton__emailCode: 'Odeslat ověřovací kód na email {{identifier}}',
      blockButton__emailLink: 'Odeslat odkaz na email {{identifier}}',
      blockButton__passkey: undefined,
      blockButton__password: 'Přihlásit se pomocí hesla',
      blockButton__phoneCode: 'Poslat SMS kód na telefonní číslo {{identifier}}',
      blockButton__totp: 'Použít autentizační aplikaci',
      getHelp: {
        blockButton__emailSupport: 'Podpora přes email',
        content:
          'Pokud máte potíže s přihlášením do svého účtu, kontaktujte nás emailem a pokusíme se vám co nejdříve obnovit přístup.',
        title: 'Získat pomoc',
      },
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      title: 'Použít jinou metodu',
    },
    backupCodeMfa: {
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Zadejte záložní kód',
    },
    emailCode: {
      formTitle: 'Ověřovací kód',
      resendButton: 'Znovu poslat kód',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Zkontrolujte svůj email',
    },
    emailLink: {
      clientMismatch: {
        subtitle: undefined,
        title: undefined,
      },
      expired: {
        subtitle: 'Vraťte se do původního okna pro pokračování.',
        title: 'Tento ověřovací odkaz vypršel',
      },
      failed: {
        subtitle: 'Vraťte se do původního okna pro pokračování.',
        title: 'Tento ověřovací odkaz je neplatný',
      },
      formSubtitle: 'Použijte ověřovací odkaz zaslaný na váš email',
      formTitle: 'Ověřovací odkaz',
      loading: {
        subtitle: 'Brzy budete přesměrováni',
        title: 'Přihlašuji...',
      },
      resendButton: 'Znovu poslat odkaz',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Zkontrolujte svůj email',
      unusedTab: {
        title: 'Můžete zavřít toto okno',
      },
      verified: {
        subtitle: 'Brzy budete přesměrováni',
        title: 'Úspěšně přihlášeno',
      },
      verifiedSwitchTab: {
        subtitle: 'Vraťte se do původního okna pro pokračování',
        subtitleNewTab: 'Vraťte se do nově otevřeného okna pro pokračování',
        titleNewTab: 'Přihlášeno v jiném okně',
      },
    },
    forgotPassword: {
      formTitle: 'Ověřovací kód pro obnovení hesla',
      resendButton: 'Znovu poslat kód',
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      title: 'Reset password',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'Obnovit heslo',
      label__alternativeMethods: 'Nebo se přihlaste pomocí jiné metody.',
      title: 'Zapomněli jste heslo?',
    },
    noAvailableMethods: {
      message: 'Nelze pokračovat v přihlášení. Není k dispozici žádná dostupná autentifikační metoda.',
      subtitle: 'Došlo k chybě',
      title: 'Nelze se přihlásit',
    },
    passkey: {
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: 'Použít jinou metodu',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Zadejte své heslo',
    },
    passwordPwned: {
      title: undefined,
    },
    phoneCode: {
      formTitle: 'Ověřovací kód',
      resendButton: 'Znovu odeslat kód',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Zkontrolujte svůj telefon',
    },
    phoneCodeMfa: {
      formTitle: 'Ověřovací kód',
      resendButton: 'Znovu odeslat kód',
      subtitle: undefined,
      title: 'Zkontrolujte svůj telefon',
    },
    resetPassword: {
      formButtonPrimary: 'Obnovit heslo',
      requiredMessage: 'For security reasons, it is required to reset your password.',
      successMessage: 'Vaše heslo bylo úspěšně změněno. Přihlašuji vás, prosím počkejte okamžik.',
      title: 'Obnovit heslo',
    },
    resetPasswordMfa: {
      detailsLabel: 'Před obnovením hesla je třeba ověřit vaši totožnost.',
    },
    start: {
      actionLink: 'Registrovat se',
      actionLink__join_waitlist: undefined,
      actionLink__use_email: 'Použít email',
      actionLink__use_email_username: 'Použít email nebo uživatelské jméno',
      actionLink__use_passkey: undefined,
      actionLink__use_phone: 'Použít telefon',
      actionLink__use_username: 'Použít uživatelské jméno',
      actionText: 'Nemáte účet?',
      actionText__join_waitlist: undefined,
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Přihlásit se',
    },
    totpMfa: {
      formTitle: 'Ověřovací kód',
      subtitle: undefined,
      title: 'Dvoufaktorové ověření',
    },
  },
  signInEnterPasswordTitle: 'Zadejte své heslo',
  signUp: {
    continue: {
      actionLink: 'Přihlásit se',
      actionText: 'Máte účet?',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Vyplňte chybějící pole',
    },
    emailCode: {
      formSubtitle: 'Zadejte ověřovací kód poslaný na vaši emailovou adresu',
      formTitle: 'Ověřovací kód',
      resendButton: 'Znovu poslat kód',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Ověřte svůj email',
    },
    emailLink: {
      clientMismatch: {
        subtitle: undefined,
        title: undefined,
      },
      formSubtitle: 'Použijte ověřovací odkaz poslaný na vaši emailovou adresu',
      formTitle: 'Ověřovací odkaz',
      loading: {
        title: 'Probíhá registrace...',
      },
      resendButton: 'Znovu poslat odkaz',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Ověřte svůj email',
      verified: {
        title: 'Úspěšně zaregistrováno',
      },
      verifiedSwitchTab: {
        subtitle: 'Vraťte se do nově otevřeného okna pro pokračování',
        subtitleNewTab: 'Vraťte se do předchozího okna pro pokračování',
        title: 'Email úspěšně ověřen',
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy: undefined,
        label__onlyTermsOfService: undefined,
        label__termsOfServiceAndPrivacyPolicy: undefined,
      },
      continue: {
        subtitle: undefined,
        title: undefined,
      },
    },
    phoneCode: {
      formSubtitle: 'Zadejte ověřovací kód poslaný na vaše telefonní číslo',
      formTitle: 'Ověřovací kód',
      resendButton: 'Znovu poslat kód',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Ověřte svůj telefon',
    },
    restrictedAccess: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__emailSupport: undefined,
      blockButton__joinWaitlist: undefined,
      subtitle: undefined,
      subtitleWaitlist: undefined,
      title: undefined,
    },
    start: {
      actionLink: 'Přihlásit se',
      actionLink__use_email: undefined,
      actionLink__use_phone: undefined,
      actionText: 'Máte účet?',
      subtitle: 'pro pokračování do {{applicationName}}',
      title: 'Vytvořte si účet',
    },
  },
  socialButtonsBlockButton: 'Pokračovat s {{provider|titleize}}',
  socialButtonsBlockButtonManyInView: undefined,
  unstable__errors: {
    already_a_member_in_organization: undefined,
    captcha_invalid:
      'Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.',
    captcha_unavailable:
      'Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.',
    form_code_incorrect: undefined,
    form_identifier_exists: undefined,
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: undefined,
    form_param_format_invalid: undefined,
    form_param_format_invalid__email_address: 'Email address must be a valid email address.',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_max_length_exceeded__first_name: 'First name should not exceed 256 characters.',
    form_param_max_length_exceeded__last_name: 'Last name should not exceed 256 characters.',
    form_param_max_length_exceeded__name: 'Name should not exceed 256 characters.',
    form_param_nil: undefined,
    form_param_value_invalid: undefined,
    form_password_incorrect: undefined,
    form_password_length_too_short: undefined,
    form_password_not_strong_enough: 'Vaše heslo není dostatečně silné.',
    form_password_pwned: 'Toto heslo bylo nalezeno v rámci uniku dat a nemůže být použito, prosím zvolte jiné heslo.',
    form_password_pwned__sign_in: undefined,
    form_password_size_in_bytes_exceeded:
      'Vaše heslo překročilo maximální povolený počet bytů, prosím zkrátit ho nebo odstranit některé speciální znaky.',
    form_password_validation_failed: 'Nesprávné heslo',
    form_username_invalid_character: undefined,
    form_username_invalid_length: undefined,
    identification_deletion_failed: 'You cannot delete your last identification.',
    not_allowed_access: undefined,
    organization_domain_blocked: undefined,
    organization_domain_common: undefined,
    organization_domain_exists_for_enterprise_connection: undefined,
    organization_membership_quota_exceeded: undefined,
    organization_minimum_permissions_needed: undefined,
    passkey_already_exists: undefined,
    passkey_not_supported: undefined,
    passkey_pa_not_supported: undefined,
    passkey_registration_cancelled: undefined,
    passkey_retrieval_cancelled: undefined,
    passwordComplexity: {
      maximumLength: 'méně než {{length}} znaků',
      minimumLength: '{{length}} nebo více znaků',
      requireLowercase: 'malé písmeno',
      requireNumbers: 'číslici',
      requireSpecialCharacter: 'speciální znak',
      requireUppercase: 'velké písmeno',
      sentencePrefix: 'Vaše heslo musí obsahovat',
    },
    phone_number_exists: 'This phone number is taken. Please try another.',
    zxcvbn: {
      couldBeStronger: 'Vaše heslo funguje, ale mohlo by být silnější. Zkuste přidat více znaků.',
      goodPassword: 'Dobrá práce. Toto je vynikající heslo.',
      notEnough: 'Vaše heslo není dostatečně silné.',
      suggestions: {
        allUppercase: 'Použijte velká písmena pouze u některých, ne všech písmen.',
        anotherWord: 'Přidejte více slov, která nejsou tak běžná.',
        associatedYears: 'Vyhněte se letopočtům, které jsou s vámi spojené.',
        capitalization: 'Písmena pište s velkým počátečním písmenem a více než jen první písmeno.',
        dates: 'Vyhněte se datům a letopočtům, které jsou s vámi spojené.',
        l33t: "Vyhněte se předvídatelným náhradám písmen, například '@' místo 'a'.",
        longerKeyboardPattern: 'Použijte delší vzory na klávesnici a měňte směr psaní vícekrát.',
        noNeed: 'Můžete vytvářet silná hesla i bez použití symbolů, čísel nebo velkých písmen.',
        pwned: 'Pokud používáte toto heslo i jinde, měli byste ho změnit.',
        recentYears: 'Vyhněte se nedávným rokům.',
        repeated: 'Vyhněte se opakujícím se slovům a znakům.',
        reverseWords: 'Vyhněte se obráceným pravopisům běžných slov.',
        sequences: 'Vyhněte se běžným sekvencím znaků.',
        useWords: 'Použijte více slov, ale vyhněte se běžným frázím.',
      },
      warnings: {
        common: 'Toto je běžně používané heslo.',
        commonNames: 'Běžná jména a příjmení jsou snadno uhádnutelná.',
        dates: 'Datum je snadno uhádnutelné.',
        extendedRepeat: 'Opakující se vzory znaků jako "abcabcabc" jsou snadno uhádnutelné.',
        keyPattern: 'Krátké vzory na klávesnici jsou snadno uhádnutelné.',
        namesByThemselves: 'Samostatná jména nebo příjmení jsou snadno uhádnutelná.',
        pwned: 'Vaše heslo bylo odhaleno při úniku dat na internetu.',
        recentYears: 'Nedávné roky jsou snadno uhádnutelné.',
        sequences: 'Běžné sekvence znaků jako "abc" jsou snadno uhádnutelné.',
        similarToCommon: 'Toto je podobné běžně používanému heslu.',
        simpleRepeat: 'Opakující se znaky jako "aaa" jsou snadno uhádnutelné.',
        straightRow: 'Řady kláves na klávesnici jsou snadno uhádnutelné.',
        topHundred: 'Toto je často používané heslo.',
        topTen: 'Toto je často používané heslo.',
        userInputs: 'Heslo by nemělo obsahovat osobní nebo stránkou související údaje.',
        wordByItself: 'Samostatná slova jsou snadno uhádnutelná.',
      },
    },
  },
  userButton: {
    action__addAccount: 'Přidat účet',
    action__manageAccount: 'Spravovat účet',
    action__signOut: 'Odhlásit se',
    action__signOutAll: 'Odhlásit se ze všech účtů',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'Zkopírováno!',
      actionLabel__copy: 'Zkopírovat vše',
      actionLabel__download: 'Stáhnout .txt',
      actionLabel__print: 'Vytisknout',
      infoText1: 'Pro tento účet budou povoleny záložní kódy.',
      infoText2:
        'Záložní kódy uchovávejte tajně a bezpečně. Můžete vygenerovat nové záložní kódy, pokud máte podezření, že byly kompromitovány.',
      subtitle__codelist: 'Uchovávejte je bezpečně a tajně.',
      successMessage:
        'Záložní kódy jsou nyní povoleny. Pokud ztratíte přístup k vašemu ověřovacímu zařízení, můžete použít jeden z těchto kódů k přihlášení do svého účtu. Každý kód lze použít pouze jednou.',
      successSubtitle:
        'Použijte jeden z těchto kódů k přihlášení do svého účtu, pokud ztratíte přístup k vašemu ověřovacímu zařízení.',
      title: 'Přidat ověřování pomocí záložních kódů',
      title__codelist: 'Záložní kódy',
    },
    connectedAccountPage: {
      formHint: 'Vyberte poskytovatele pro připojení vašeho účtu.',
      formHint__noAccounts: 'Nejsou k dispozici žádní dostupní externí poskytovatelé účtů.',
      removeResource: {
        messageLine1: '{{identifier}} bude odebrán z tohoto účtu.',
        messageLine2: 'Nebudete již moci používat tento připojený účet a jakékoli závislé funkce přestanou fungovat.',
        successMessage: '{{connectedAccount}} byl odebrán z vašeho účtu.',
        title: 'Odstranit připojený účet',
      },
      socialButtonsBlockButton: 'Připojit účet {{provider|titleize}}',
      successMessage: 'Poskytovatel byl přidán k vašemu účtu.',
      title: 'Přidat připojený účet',
    },
    deletePage: {
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: 'Delete account',
      messageLine1: 'Are you sure you want to delete your account?',
      messageLine2: 'This action is permanent and irreversible.',
      title: 'Delete account',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'Na tuto e-mailovou adresu bude odeslán ověřovací kód.',
        formSubtitle: 'Zadejte ověřovací kód zaslaný na adresu {{identifier}}',
        formTitle: 'Ověřovací kód',
        resendButton: 'Znovu odeslat kód',
        successMessage: 'E-mailová adresa {{identifier}} byla přidána k vašemu účtu.',
      },
      emailLink: {
        formHint: 'Na tuto e-mailovou adresu bude odeslán ověřovací odkaz.',
        formSubtitle: 'Klikněte na ověřovací odkaz v e-mailu zaslaném na adresu {{identifier}}',
        formTitle: 'Ověřovací odkaz',
        resendButton: 'Znovu odeslat odkaz',
        successMessage: 'E-mailová adresa {{identifier}} byla přidána k vašemu účtu.',
      },
      removeResource: {
        messageLine1: '{{identifier}} bude odstraněna z tohoto účtu.',
        messageLine2: 'Nebudete se moci přihlásit pomocí této e-mailové adresy.',
        successMessage: '{{emailAddress}} byla odebrána z vašeho účtu.',
        title: 'Odstranit e-mailovou adresu',
      },
      title: 'Přidat e-mailovou adresu',
      verifyTitle: 'Verify email address',
    },
    formButtonPrimary__add: 'Přidat',
    formButtonPrimary__continue: 'Pokračovat',
    formButtonPrimary__finish: 'Dokončit',
    formButtonPrimary__remove: 'Odstranit',
    formButtonPrimary__save: 'Uložit',
    formButtonReset: 'Zrušit',
    mfaPage: {
      formHint: 'Vyberte způsob přidání.',
      title: 'Přidat dvoufaktorové ověřování',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: 'Přidat telefonní číslo',
      removeResource: {
        messageLine1: '{{identifier}} již nebude dostávat ověřovací kódy při přihlašování.',
        messageLine2: 'Váš účet nemusí být tak bezpečný. Opravdu chcete pokračovat?',
        successMessage: 'Dvoufaktorové ověřování pomocí SMS kódu bylo odebráno pro {{mfaPhoneCode}}',
        title: 'Odstranit dvoufaktorové ověřování',
      },
      subtitle__availablePhoneNumbers:
        'Vyberte telefonní číslo pro registraci dvoufaktorového ověřování pomocí SMS kódu.',
      subtitle__unavailablePhoneNumbers:
        'Nejsou k dispozici žádná dostupná telefonní čísla pro registraci dvoufaktorového ověřování pomocí SMS kódu.',
      successMessage1:
        'When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      successMessage2:
        'Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.',
      successTitle: 'SMS code verification enabled',
      title: 'Přidat ověřování pomocí SMS kódu',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'Namísto toho naskenujte QR kód',
        buttonUnableToScan__nonPrimary: 'Nemůžete naskenovat QR kód?',
        infoText__ableToScan:
          'Nastavte novou metodu přihlášení ve vaší aplikaci pro ověřování a naskenujte následující QR kód, abyste jej propojili se svým účtem.',
        infoText__unableToScan:
          'Nastavte novou metodu přihlášení ve své aplikaci pro ověřování a zadejte níže poskytnutý klíč.',
        inputLabel__unableToScan1:
          'Ujistěte se, že je povoleno časově závislé nebo jednorázové heslo, a dokončete propojení vašeho účtu.',
        inputLabel__unableToScan2:
          'Alternativně, pokud vaše aplikace pro ověřování podporuje TOTP URI, můžete také zkopírovat celý URI.',
      },
      removeResource: {
        messageLine1: 'Při přihlašování již nebudou vyžadovány ověřovací kódy z této aplikace pro ověřování.',
        messageLine2: 'Váš účet nemusí být tak bezpečný. Opravdu chcete pokračovat?',
        successMessage: 'Dvoufaktorové ověřování pomocí aplikace pro ověřování bylo odebráno.',
        title: 'Odstranit dvoufaktorové ověřování',
      },
      successMessage:
        'Dvoufaktorové ověřování je nyní povoleno. Při přihlášení budete muset zadat ověřovací kód z této aplikace pro ověřování jako další krok.',
      title: 'Přidat aplikaci pro ověřování',
      verifySubtitle: 'Zadejte ověřovací kód generovaný vaší aplikací pro ověřování',
      verifyTitle: 'Ověřovací kód',
    },
    mobileButton__menu: 'Menu',
    navbar: {
      account: 'Profil',
      description: 'Spravujte své údaje.',
      security: 'Zabezpečení',
      title: 'Účet',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: undefined,
        title: undefined,
      },
      subtitle__rename: undefined,
      title__rename: undefined,
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'Je doporučeno se odhlásit ze všech ostatních zařízeních, která mohla použít vaše staré heslo.',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      successMessage__set: 'Vaše heslo bylo nastaveno.',
      successMessage__signOutOfOtherSessions: 'Všechna ostatní zařízení byla odhlášena.',
      successMessage__update: 'Vaše heslo bylo aktualizováno.',
      title__set: 'Nastavit heslo',
      title__update: 'Změnit heslo',
    },
    phoneNumberPage: {
      infoText: 'Na toto telefonní číslo bude odeslána textová zpráva obsahující ověřovací odkaz.',
      removeResource: {
        messageLine1: '{{identifier}} bude odebráno z tohoto účtu.',
        messageLine2: 'Nebudete již moci přihlásit se pomocí tohoto telefonního čísla.',
        successMessage: '{{phoneNumber}} bylo odebráno z vašeho účtu.',
        title: 'Odstranit telefonní číslo',
      },
      successMessage: '{{identifier}} bylo přidáno k vašemu účtu.',
      title: 'Přidat telefonní číslo',
      verifySubtitle: 'Enter the verification code sent to {{identifier}}',
      verifyTitle: 'Verify phone number',
    },
    profilePage: {
      fileDropAreaHint: 'Nahrajte obrázek ve formátech JPG, PNG, GIF nebo WEBP s velikostí menší než 10 MB',
      imageFormDestructiveActionSubtitle: 'Odstranit obrázek',
      imageFormSubtitle: 'Nahrát obrázek',
      imageFormTitle: 'Profilový obrázek',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'Váš profil byl aktualizován.',
      title: 'Aktualizovat profil',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'Odhlásit se z zařízení',
        title: 'Aktivní zařízení',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'Zkusit znovu',
        actionLabel__reauthorize: 'Autorizovat nyní',
        destructiveActionTitle: 'Odstranit',
        primaryButton: 'Připojit účet',
        subtitle__disconnected: undefined,
        subtitle__reauthorize:
          'The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues',
        title: 'Připojené účty',
      },
      dangerSection: {
        deleteAccountButton: 'Smazat účet',
        title: 'Zrušení účtu',
      },
      emailAddressesSection: {
        destructiveAction: 'Odstranit emailovou adresu',
        detailsAction__nonPrimary: 'Nastavit jako hlavní',
        detailsAction__primary: 'Dokončit ověření',
        detailsAction__unverified: 'Dokončit ověření',
        primaryButton: 'Přidat emailovou adresu',
        title: 'Emailové adresy',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      headerTitle__account: 'Účet',
      headerTitle__security: 'Bezpečnost',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'Obnovit kódy',
          headerTitle: 'Záložní kódy',
          subtitle__regenerate:
            'Získejte novou sadu zabezpečených záložních kódů. Předchozí záložní kódy budou smazány a nelze je použít.',
          title__regenerate: 'Obnovit záložní kódy',
        },
        phoneCode: {
          actionLabel__setDefault: 'Nastavit jako výchozí',
          destructiveActionLabel: 'Odstranit telefonní číslo',
        },
        primaryButton: 'Přidat dvoufaktorové ověření',
        title: 'Dvoufaktorové ověření',
        totp: {
          destructiveActionTitle: 'Odstranit',
          headerTitle: 'Aplikace Authenticator',
        },
      },
      passkeysSection: {
        menuAction__destructive: undefined,
        menuAction__rename: undefined,
        title: undefined,
      },
      passwordSection: {
        primaryButton__setPassword: 'Nastavit heslo',
        primaryButton__updatePassword: 'Změnit heslo',
        title: 'Heslo',
      },
      phoneNumbersSection: {
        destructiveAction: 'Odstranit telefonní číslo',
        detailsAction__nonPrimary: 'Nastavit jako hlavní',
        detailsAction__primary: 'Dokončit ověření',
        detailsAction__unverified: 'Dokončit ověření',
        primaryButton: 'Přidat telefonní číslo',
        title: 'Telefonní čísla',
      },
      profileSection: {
        primaryButton: undefined,
        title: 'Profil',
      },
      usernameSection: {
        primaryButton__setUsername: 'Nastavit uživatelské jméno',
        primaryButton__updateUsername: 'Změnit uživatelské jméno',
        title: 'Uživatelské jméno',
      },
      web3WalletsSection: {
        destructiveAction: 'Odstranit peněženku',
        primaryButton: 'Web3 peněženky',
        title: 'Web3 peněženky',
      },
    },
    usernamePage: {
      successMessage: 'Vaše uživatelské jméno bylo aktualizováno.',
      title__set: 'Aktualizovat uživatelské jméno',
      title__update: 'Aktualizovat uživatelské jméno',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} bude odebrána z tohoto účtu.',
        messageLine2: 'Nebudete se již moci přihlásit pomocí této web3 peněženky.',
        successMessage: '{{web3Wallet}} byla odebrána z vašeho účtu.',
        title: 'Odstranit web3 peněženku',
      },
      subtitle__availableWallets: 'Vyberte web3 peněženku k připojení k vašemu účtu.',
      subtitle__unavailableWallets: 'Nejsou k dispozici žádné dostupné web3 peněženky.',
      successMessage: 'Peněženka byla přidána k vašemu účtu.',
      title: 'Přidat web3 peněženku',
      web3WalletButtonsBlockButton: undefined,
    },
  },
  waitlist: {
    start: {
      actionLink: undefined,
      actionText: undefined,
      formButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    success: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
} as const;
