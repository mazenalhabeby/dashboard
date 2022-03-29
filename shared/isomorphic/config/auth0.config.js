export default {
  clientID: '11',
  domain: 'dashboard.leagueofpharaohs.com',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      responseType: 'token id_token',
      redirect: true,
      redirectUrl:
        process.env.NODE_ENV !== 'production'
          ? 'http://localhost:3000/auth0loginCallback'
          : 'http://dashboard.leagueofpharaohs.com/auth0loginCallback',
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    theme: {
      labeledSubmitButton: true,
      logo: 'your_logo_url',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
        },
      },
    },
  },
};
