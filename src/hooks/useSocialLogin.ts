import { useState } from 'react';

// Type definitions
interface UserData {
  name: string;
  email: string;
  provider: string;
  id?: string;
}

interface SocialLoginResult {
  success: boolean;
  data?: UserData;
  error?: string;
}

// Mock user data
const mockUsers: Record<string, UserData> = {
  facebook: { 
    name: 'John Doe', 
    email: 'john@facebook.com', 
    provider: 'facebook',
    id: 'fb_12345'
  },
  google: { 
    name: 'Jane Smith', 
    email: 'jane@gmail.com', 
    provider: 'google',
    id: 'go_12345'
  },
  github: { 
    name: 'Dev User', 
    email: 'dev@github.com', 
    provider: 'github',
    id: 'gh_12345'
  },
  twitter: { 
    name: 'Twitter User', 
    email: 'user@twitter.com', 
    provider: 'twitter',
    id: 'tw_12345'
  },
  discord: { 
    name: 'Discord User', 
    email: 'user@discord.com', 
    provider: 'discord',
    id: 'dc_12345'
  },
  apple: { 
    name: 'Apple User', 
    email: 'user@apple.com', 
    provider: 'apple',
    id: 'ap_12345'
  }
};

const useSocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSocialLogin = async (provider: string): Promise<SocialLoginResult> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get mock user data
      const userData = mockUsers[provider];
      
      if (!userData) {
        throw new Error(`Provider ${provider} not supported`);
      }
      
      setIsLoading(false);
      return { success: true, data: userData };
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setIsLoading(false);
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  return {
    handleSocialLogin,
    isLoading,
    error
  };
};

export default useSocialLogin;