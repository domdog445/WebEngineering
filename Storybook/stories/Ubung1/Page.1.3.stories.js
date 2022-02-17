import { createPage3 } from './Page1.3';
import { createPage4 } from './Page1.4';
import { createPage5 } from './Page1.5';
export default {
  title: 'Lösungen der Übungen/Übung 01',
  argTypes: {},
};

const Template = (args) => createPage3(args);

export const TributePage = Template.bind({});
TributePage.args = {
   title: 'Dr. Norman Borlaug',
   subtitle: "The man who saved a billion lives",
};

const Template2 = (args) => createPage4(args);

export const SurveyForm = Template2.bind({});
SurveyForm.args = {
   title: 'Survey Form',
   subtitle: "Let us know how we can improve freeCodeCamp",
};

const Template3 = (args) => createPage5(args);

export const Wireframe = Template3.bind({});
Wireframe.args = {
   title: 'Wireframe with HTML and CSS: Product Landingpage',
};
