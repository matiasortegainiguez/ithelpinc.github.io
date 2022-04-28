import { useEffect, useRef, useState } from 'react';

export interface RecaptchaState {
  ready: boolean;
  siteKey: string;
  reset: () => void;
  execute: () => void;
  setRecaptchaInstance: (instance: any) => void;
  recaptchaLoaded: () => void;
  setRecaptchaToken: (token: string) => void;
}

export const useRecaptcha = (
  siteKey: string,
  callback: (recaptchaToken: string, resetRecaptcha: () => void) => void,
): RecaptchaState => {
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaInstance = useRef<any>(null);
  const recaptchaSiteKey = useRef<string>(siteKey);

  const onLoadRecaptcha = (): void => {
    if (recaptchaInstance.current !== null) {
      recaptchaInstance.current.reset();
      setRecaptchaReady(true);
    }
  };

  useEffect(() => {
    if (recaptchaToken.length > 0) {
      callback(recaptchaToken, reset);
    }
  }, [recaptchaToken]);

  const logRecaptchaToken = (token: string): void => {
    setRecaptchaToken(token);
  };

  const reset = (): void => {
    if (recaptchaInstance.current !== null) {
      recaptchaInstance.current.reset();
    }
  };

  const execute = (): void => {
    if (recaptchaInstance.current !== null) {
      recaptchaInstance.current.execute();
    }
  };

  return {
    ready: recaptchaReady,
    siteKey: recaptchaSiteKey.current,
    reset,
    execute,
    setRecaptchaInstance: (instance: any) => {
      recaptchaInstance.current = instance;
    },
    recaptchaLoaded: onLoadRecaptcha,
    setRecaptchaToken: logRecaptchaToken,
  };
};
