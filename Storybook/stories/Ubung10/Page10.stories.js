import { createPage10EingabeFeld } from './Page10EingabeFeld.js'
import { createPage10MenuComp } from './Page10MenuComp'
import {createPage10WWWapp} from './Page10App'
import {createPage10Code} from './Page10Code'


export default {
  title: 'Lösungen der Übungen/Übung 10',
  argTypes: {},
};

const TemplateEingabefeld = (args) => createPage10EingabeFeld(args);
export const Eingabefelder = TemplateEingabefeld.bind({});


const TemplateMenuComp = (args) => createPage10MenuComp(args);
export const MenuKomponente = TemplateMenuComp.bind({});

const TemplateWWWApp = (args) => createPage10WWWapp(args);
export const WWWmitVue = TemplateWWWApp.bind({});

const TemplateCode = (args) => createPage10Code(args);
export const Code = TemplateCode.bind({});

MenuKomponente.args = {
  MenuItems: ["Opera","Chrome","Firefox","Edge","Internet Explorer"],
  ColumnMode: true
};
