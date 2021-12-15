import React from "react";
import { Meta } from "@storybook/react/types-7-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}/>

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { primary: true, label: "Primary", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { primary: false, label: "Secondary", size: "large" };