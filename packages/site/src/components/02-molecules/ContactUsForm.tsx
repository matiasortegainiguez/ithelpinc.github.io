import { Form } from 'formik';
import * as React from 'react';
import { TextAreaInput } from '../01-atoms/TextAreaInput';
import { TextInput } from '../01-atoms/TextInput';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

export const ContactUsForm: React.FC = () => {
  return (
    <Form>
      <TextInput name='name' type='text' placeholder='Name*' />
      <TextInput name='email' type='email' placeholder='Email*' />
      <TextInput name='company' type='text' placeholder='Company' />
      <TextAreaInput name='message' placeholder='Message*' rows={5} />
    </Form>
  );
}