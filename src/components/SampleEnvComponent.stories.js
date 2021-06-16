import SampleComponentWithEnv from "./SampleEnvComponent";

export default {
  component: SampleComponentWithEnv,
  title: "SampleComponent/WithEnvVars",
};

const Template = (args) => <SampleComponentWithEnv {...args} />;

export const SampleStory = Template.bind({});

SampleStory.args = {
  propertyA: process.env.STORYBOOK_SOME_ENV_VAR,
  propertyB: process.env.STORYBOOK_ANOTHER_ENV_VAR,
};
