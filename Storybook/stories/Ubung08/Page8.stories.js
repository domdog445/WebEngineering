import { createPage8Einkaufsliste } from './Page8Einkausliste'
import { createPage8Rednerliste } from './Page8Rednerliste'
import { createPage8TabellenCalc } from './Page8TabellenCalc'
import { createPage8Bundestag } from './Page8Bundestag'
import { createPage8Bezier } from './Page8Bezier'
import { createPage8Kali } from './Page8Kali'
import { createPage8MenuComp } from './Page8MenuComponent'
import { createPage8WWWNavigator } from './Page8WWWNavigator'

export default {
  title: 'Lösungen der Übungen/Übung 08 Modular Web',
  argTypes: {},
};

const TemplateEinkaufsliste = (args) => createPage8Einkaufsliste(args);
export const EinkaufslisteWebComponent = TemplateEinkaufsliste.bind({});

const TemplateRednerliste = (args) => createPage8Rednerliste(args);
export const RednerlisteWebComponent = TemplateRednerliste.bind({});

const TemplateTabellenCalc = (args) => createPage8TabellenCalc(args);
export const TabellenKalkulationWebComponent = TemplateTabellenCalc.bind({});

const TemplateBundestag = (args) => createPage8Bundestag(args);
export const BundestagWebComponent = TemplateBundestag.bind({});

const TemplateBezier = (args) => createPage8Bezier(args);
export const BezierkurveWebComponent = TemplateBezier.bind({});

const TemplateKali = (args) => createPage8Kali(args);
export const KaligraphieWebComponent = TemplateKali.bind({});

const TemplateMenuComp = (args) => createPage8MenuComp(args);
export const MenuCompWebComponent = TemplateMenuComp.bind({});

const TemplateWWWNavi = (args) => createPage8WWWNavigator(args);
export const WWWNavigatorWebComponent = TemplateWWWNavi.bind({});

