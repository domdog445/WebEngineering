import { createPage4EL } from './Page4Einkaufsliste'
import { createPage4RL } from './Page4Rednerliste'
import { createPage4TC } from './Page4Tabellencalc'
import { createPage4HTMLE } from './Page4HTMLEditor'
export default {
  title: 'Lösungen der Übungen/Übung 04 DOM',
  argTypes: {},
};

const Template = (args) => createPage4EL(args);
export const Einkaufsliste = Template.bind({});


const TemplateRL = (args) => createPage4RL(args);
export const Rednerliste = TemplateRL.bind({});


const TemplateTC = (args) => createPage4TC(args);
export const Tabellenkalkulation = TemplateTC.bind({});

const TemplateHTMLE = (args) => createPage4HTMLE(args);
export const HtmlEditor = TemplateHTMLE.bind({});