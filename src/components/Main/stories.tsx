import Main from './index'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta<typeof Main>

export const Basic: Story = () => <Main />
