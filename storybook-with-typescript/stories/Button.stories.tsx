import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default Text',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am Secondary',
  onClick: action('secondary click'),
};
