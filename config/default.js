module.exports = {
  port: 2604,
  liveReloadPort: 35729,

  // Persona settings...
  // We only trust one issuer to grant us unverified emails.
  // If UNVERIFIED_ISSUER is set to None, forceIssuer will not
  // be sent to the client or the verifier.
  browseridUnverifiedIssuer: 'firefoxos.persona.org',
  browseridJsURL: 'https://login.persona.org/include.js',

  // You'll want to override these in you local settings.
  verifyUserURL: 'http://localhost:9000/mozpay/auth/verify',
  reVerifyUserURL: 'http://localhost:9000/mozpay/auth/reverify',
  resetUserURL: 'http://localhost:9000/mozpay/auth/reset_user',

  styleguide: {
    port: 7779,
    liveReloadPort: 35729,
  },
  // Unittests.
  test: {
    port: 2599,
  },

  showClientConsole: false,
  staticDocsURL: 'https://marketplace-dev-cdn.10allday.com/',
  useMinCSS: true,
  useMinJS: true,
};
