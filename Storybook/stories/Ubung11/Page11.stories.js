import { createPage11WatGGT } from './Page11WATGGT'
import { createPage11Primzahlen } from './Page11Primzahlen'


export default {
  title: 'Lösungen der Übungen/Übung 11',
  argTypes: {},
};

const TemplateWAT = (args) => createPage11WatGGT(args);
export const WATGGT = TemplateWAT.bind({});

const TemplatePrim = (args) => createPage11Primzahlen(args);
export const WATPrimzahlen = TemplatePrim.bind({});


