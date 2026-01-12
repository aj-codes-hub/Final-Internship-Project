// Social Media Login URLs
export const socialAuthUrls = {
  google: {
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    params: {
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      redirect_uri: 'http://localhost:3000/auth/google/callback',
      response_type: 'code',
      scope: 'email profile',
      access_type: 'offline',
      prompt: 'consent'
    }
  },
  
  facebook: {
    authUrl: 'https://www.facebook.com/v12.0/dialog/oauth',
    params: {
      client_id: 'YOUR_FACEBOOK_APP_ID',
      redirect_uri: 'http://localhost:3000/auth/facebook/callback',
      response_type: 'code',
      scope: 'email,public_profile'
    }
  },
  
  twitter: {
    authUrl: 'https://twitter.com/i/oauth2/authorize',
    params: {
      client_id: 'YOUR_TWITTER_CLIENT_ID',
      redirect_uri: 'http://localhost:3000/auth/twitter/callback',
      response_type: 'code',
      scope: 'users.read tweet.read',
      state: 'state',
      code_challenge: 'challenge',
      code_challenge_method: 'plain'
    }
  },
  
  github: {
    authUrl: 'https://github.com/login/oauth/authorize',
    params: {
      client_id: 'YOUR_GITHUB_CLIENT_ID',
      redirect_uri: 'http://localhost:3000/auth/github/callback',
      scope: 'user:email'
    }
  },
  
  discord: {
    authUrl: 'https://discord.com/api/oauth2/authorize',
    params: {
      client_id: 'YOUR_DISCORD_CLIENT_ID',
      redirect_uri: 'http://localhost:3000/auth/discord/callback',
      response_type: 'code',
      scope: 'identify email',
      prompt: 'consent'
    }
  }
};

// Generate OAuth URL
export const getSocialAuthUrl = (provider) => {
  const { authUrl, params } = socialAuthUrls[provider];
  const queryParams = new URLSearchParams(params).toString();
  return `${authUrl}?${queryParams}`;
};

// Open OAuth Popup
export const openSocialAuthPopup = (provider) => {
  const url = getSocialAuthUrl(provider);
  const width = 600;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  const popup = window.open(
    url,
    `${provider}Login`,
    `width=${width},height=${height},top=${top},left=${left}`
  );

  return popup;
};