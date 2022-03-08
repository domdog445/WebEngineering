import { createPage11WatGGT } from './Page11WATGGT'
import { createPage11Primzahlen } from './Page11Primzahlen'


export default {
  title: 'Lösungen der Übungen/Übung 11 WebAssembly',
  argTypes: {},
};

const TemplateWAT = (args) => createPage11WatGGT(args);
export const GGTMitWAT = TemplateWAT.bind({});

const TemplatePrim = (args) => createPage11Primzahlen(args);
export const PrimzahlenMitWAT = TemplatePrim.bind({});


