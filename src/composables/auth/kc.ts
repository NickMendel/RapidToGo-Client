import Keycloak from 'keycloak-js';

const kcConfig = {
  url: import.meta.env.VITE_KC_URL || '',
  realm: import.meta.env.VITE_KC_REALM || '',
  clientId: import.meta.env.VITE_KC_CLIENT_ID || ''
};

const kcInitOptions = {
  onLoad: 'check-sso' as const,
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html` as const,
  pkceMethod: 'S256' as const
};

const kc = new Keycloak(kcConfig);

let token: string | undefined = '';

try {
  const authenticated = await kc.init(kcInitOptions);

  if (authenticated) {
    console.log('Authenticated');
    token = kc.token;
  } else {
    console.log('Not authenticated');
  }
} catch (error) {
  console.error('Failed to initialize Keycloak:', error);
}

kc.onTokenExpired = () => {
  kc.updateToken(30)
    .then(() => {
      token = kc.token;
    })
    .catch(() => {
      kc.logout();
    });
};

const login = async () => {
  try {
    await kc.login({
      redirectUri: window.location.origin
    });
  } catch (error) {
    console.error('Failed to login:', error);
  }
};

const logout = async () => {
  try {
    await kc.logout({
      redirectUri: window.location.origin
    });
  } catch (error) {
    console.error('Failed to logout:', error);
  }
};

const updateToken = () => {
  try {
    kc.updateToken(30);
  } catch (error) {
    console.error('Failed to update token:', error);
  }
};

const getToken = () => {
  return token;
};

export default { kc, updateToken, login, logout, getToken };
