import { createPage5Promises } from './Page5Promises'
import { createPage5AsyncAwait } from './Page5AsyncAwait'
import { createPage5WebWorkers } from './Page5WebWorkers'
import { createPage5Primzahlen } from './Page5Primzahlen'
import { createPage5WWWNavigator} from './Page5WWWNavigator'
export default {
  title: 'Lösungen der Übungen/Übung 05',
  argTypes: {},
};

const TemplatePromise = (args) => createPage5Promises(args);
export const AB_Promises = TemplatePromise.bind({});

const TemplateAsync = (args) => createPage5AsyncAwait(args);
export const AB_AsyncAwait = TemplateAsync.bind({});

const TemplatePrimzahlen = (args) => createPage5Primzahlen(args);
export const PrimzahlenNormal = TemplatePrimzahlen.bind({});

const TemplatePrimWebworker = (args) => createPage5WebWorkers(args);
export const PrimzahlenWebworker = TemplatePrimWebworker.bind({});

const TemplateWWWNavigator= (args) => createPage5WWWNavigator(args);
export const WWWNavigator = TemplateWWWNavigator.bind({});

