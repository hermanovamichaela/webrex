export const authConfig = {
    issuer: 'https://37.205.12.245:9443/auth/realms/linup',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'web_app',
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: true,
    resourceServer: {
      allowedUrls: ['http://localhost:4230'], // Upravte podle vašich potřeb
      sendAccessToken: true,
    },
  };