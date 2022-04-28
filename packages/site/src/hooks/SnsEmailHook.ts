import { useState } from 'react';
import { RecaptchaState } from '../components/hooks/useRecaptcha';
import { useRecaptcha } from './RecaptchaHook';

export interface PayloadBase {
  name: string;
  email: string;
}

export type CallbackError<T extends PayloadBase> = {
  [P in keyof T]?: string;
} & {
  internal?: string;
  recaptcha?: string;
};

export type SentCallback<T extends PayloadBase> = (errors?: CallbackError<T>) => void;

export interface SnsEmailState<T extends PayloadBase> {
  ready: boolean;
  recaptchaState: RecaptchaState;
  send: (payload: T, callback: SentCallback<T>) => void;
}

interface PayloadState<T extends PayloadBase> {
  payload: T;
  callback: SentCallback<T>;
}

export const useSnsEmail = <T extends PayloadBase>(siteKey: string): SnsEmailState<T> => {
  const [payloadState, setPayloadState] = useState<PayloadState<T> | undefined>();

  const submitCallback = (recaptchaToken: string, recaptchaReset: () => void): void => {
    const payload = payloadState!.payload;
    const packagedPayload = {
      form: 'contact-us',
      token: recaptchaToken,
      from: payload.email,
      subject: `IT Help Inc | Please Contact: ${payload.name}<${payload.email}>`,
      messageModel: {
        ...payload,
      },
    };

    let errors: CallbackError<T> | undefined;

    fetch('/api/send', {
      body: JSON.stringify(packagedPayload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      const success = response.status === 200;
      if (!success && response.status !== 400) {
        errors = {
          internal:
            'Oops! We hit a snag on our end.  We really do want to hear from you! Please try again in a moment.',
        };
      } else if (!success) {
        response.json().then(data => {
          const invalidFields: string[] = data.invalidFields;
          const missingFields: string[] = data.missingFields;
          errors = {};
          if (invalidFields.indexOf('token') !== -1) {
            errors.recaptcha = 'Hmmm. Are you a bot? No? You failed the reCAPTCHA. Please try again.';
          } else {
            invalidFields.forEach(field => (errors![field] = 'Invalid value, please correct.'));
            missingFields.forEach(field => (errors![field] = 'This is a required field.'));
          }
        });
      }
      recaptchaReset();
      payloadState?.callback(errors);
      setPayloadState(undefined);
    });
  };

  const recaptchaState = useRecaptcha(siteKey, submitCallback);

  const send = (payload: T, callback: SentCallback<T>): void => {
    setPayloadState({ payload, callback });
    recaptchaState.execute();
  };

  return {
    ready: recaptchaState.ready,
    send,
    recaptchaState,
  };
};
