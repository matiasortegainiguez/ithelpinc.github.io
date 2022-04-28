import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React, { ComponentProps } from 'react';
import { ContactUsForm } from './ContactUsForm';

export default {
  title: 'Design System/Molecules/ContactUsForm',
  component: ContactUsForm
};

const Template: Story<ComponentProps<typeof ContactUsForm>> = ({ children, ...args }) => (
  <Formik
    initialValues={{
      name: '',
      email: ''
    }}
    // tslint:disable-next-line: no-empty
    onSubmit={() => { }}
  ><ContactUsForm {...args} /></Formik>
);

export const Primary = Template.bind({});
Primary.args = {};