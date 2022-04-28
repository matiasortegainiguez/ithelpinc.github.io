import { CSSProperties } from '@material-ui/styles';
import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React, { ComponentProps } from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Design System/Atoms/TextInput',
  component: TextInput
};

const style: CSSProperties = {
  padding: '2rem',
  backgroundColor: 'gray'
}

const Template: Story<ComponentProps<typeof TextInput>> = ({ initialErrors, ...args }) => (
  <div style={style}>
    <Formik initialValues={{
      phrase: 'foo'
    }}
      initialErrors={initialErrors}
      initialTouched={{
        phrase: true
      }}
      // tslint:disable-next-line: no-empty
      onSubmit={() => { }}
    >
      <TextInput {...args} />
    </Formik>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'phrase',
  type: 'text',
  placeholder: 'Phrase'
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  initialErrors: {
    phrase: 'You need a better phrase!'
  }
};