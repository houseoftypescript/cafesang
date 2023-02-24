// Input.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../';

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Input
      id="id"
      name="name"
      placeholder="Placeholder"
      value=""
      onChange={() => {}}
    />
  ),
};
