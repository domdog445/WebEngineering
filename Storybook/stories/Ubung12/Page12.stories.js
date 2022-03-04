import { createPage12Arraywrapper } from './Page12ArrayWrapper'
import { createPage12A1 } from './Page12A1'
import { createPage12A7 } from './Page12A7'


export default {
  title: 'Lösungen der Übungen/Übung 12',
  argTypes: {},
};

const TemplateArrayWrapper = (args) => createPage12Arraywrapper(args);
export const Arraywrapper = TemplateArrayWrapper.bind({});

const TemplateA1 = (args) => createPage12A1(args);
export const A1WebGoatInjection = TemplateA1.bind({});

const TemplateA7 = (args) => createPage12A7(args);
export const A7WebGoatXSS = TemplateA7.bind({});



