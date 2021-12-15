import React from "react";
import { Meta } from "@storybook/react/types-7-0";
import { Story } from "@storybook/react";
import Divider, { DividerProps } from "./Divider";

export default {
    title: "Components/Divider",
    component: Divider
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<DividerProps> = (args) => <Divider {...args}/>

// Reuse that template for creating different stories
export const Start = Template.bind({});
Start.args = { alignment: "start", style: "solid", weight: "light", label: "Start" };

export const Center = Template.bind({});
Center.args = { alignment: "center", style: "dashed", weight: "regular", label: "Center" };

export const End = Template.bind({});
End.args = { alignment: "end", style: "dotted", weight: "heavy", label: "End" };