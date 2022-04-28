import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React, { ComponentProps } from 'react';
import { useSnsEmail } from '../../hooks/SnsEmailHook';
import { RECAPTCHA_SITE_KEY } from '../../settings/Variables';
import { ContactFormData } from '../02-molecules/ContactUsForm';
import { ContactUsSection } from './ContactUsSection';

export default {
  title: 'Design System/Organisms/ContactUsSection',
  component: ContactUsSection
};

const state = useSnsEmail<ContactFormData>(RECAPTCHA_SITE_KEY);

const Template: Story<ComponentProps<typeof ContactUsSection>> = (args) => (
  <Formik
    initialValues={{
      name: '',
      email: ''
    }}
    // tslint:disable-next-line: no-empty
    onSubmit={() => { }}
  ><ContactUsSection {...args} /></Formik>

);

export const Primary = Template.bind({});
Primary.args = {
  state
};