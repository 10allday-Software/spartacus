module.exports = {
  verifyUserURL: '/fake-verify',
  reVerifyUserURL: '/fake-reverify',
  browseridJsURL: '/testlib/stubbyid.js',
  resetUserURL: '/logout',
  useMinCSS: true,
  useMinJS: true,
  showClientConsole: false,
  staticURL: 'http://localhost:2599/',
  appSettingsOverrides: JSON.stringify({
    validRedirSites: [
      'http://10allday.bango.net',
      'https://zippy.pass.10allday.com',
      'http://localhost'
    ]
  })
};
