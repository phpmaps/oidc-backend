J_3TATnOoMlON9Byqy4Xx


PAYLOAD MASK
Claims {
  available: {
    sub: 'user',
    address: {
      country: '000',
      formatted: '000',
      locality: '000',
      postal_code: '000',
      region: '000',
      street_address: '000'
    },
    birthdate: '1987-10-16',
    email: 'johndoe@example.com',
    email_verified: false,
    family_name: 'Doe',
    gender: 'male',
    given_name: 'John',
    locale: 'en-US',
    middle_name: 'Middle',
    name: 'John Doe',
    nickname: 'Johny',
    phone_number: '+49 000 000000',
    phone_number_verified: false,
    picture: 'http://lorempixel.com/400/200/',
    preferred_username: 'johnny',
    profile: 'https://johnswebsite.com',
    updated_at: 1454704946,
    website: 'http://example.com',
    zoneinfo: 'Europe/Berlin',
    acr: undefined,
    amr: undefined,
    auth_time: 1673302263
  },
  client: Client {
    applicationType: 'web',
    grantTypes: [ 'refresh_token', 'authorization_code' ],
    idTokenSignedResponseAlg: 'RS256',
    postLogoutRedirectUris: [],
    requireAuthTime: false,
    responseTypes: [ 'code' ],
    subjectType: 'public',
    tokenEndpointAuthMethod: 'client_secret_basic',
    requirePushedAuthorizationRequests: false,
    clientId: 'ping',
    clientSecret: 'abc',
    redirectUris: [
      'http://localhost:8080/auth/callback',
      'https://oidcdebugger.com/debug',
      'https://auth.pingone.com/09862d22-4554-4677-abf7-72fea5ae1fa0/davinci/oauth2/callback'
    ]
  },
  ctx: {
    request: { method: 'POST', url: '/token', header: [Object] },
    response: {
      status: 404,
      message: 'Not Found',
      header: [Object: null prototype]
    },
    app: { subdomainOffset: 2, proxy: false, env: 'development' },
    originalUrl: '/token',
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>'
  },
  filter: {}
}