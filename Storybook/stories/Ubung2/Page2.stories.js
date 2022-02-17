import { createPage2_1 } from './Page2.1'
import { createPage2_2 } from './Page2.2';
import { createPage2_3Flex } from './Page2.3Flex';
import { createPage2_3Grid } from './Page2.3Grid';
import { createPage2_4 } from './Page2.4';
export default {
  title: 'Lösungen der Übungen/Übung 02',
  argTypes: {},
};

const Template = (args) => createPage2_1(args);

export const FlexboxDesktopFirst  = Template.bind({});
FlexboxDesktopFirst.args = {
};

const Template2 = (args) => createPage2_2(args);

export const GridMobileFirst = Template2.bind({});
GridMobileFirst.args = {
};

const Template3F = (args) => createPage2_3Flex(args);

export const HolyGrailFlex = Template3F.bind({});
HolyGrailFlex.args = {
};
const Template3G = (args) => createPage2_3Grid(args);

export const HolyGrailGrid = Template3G.bind({});
HolyGrailGrid.args = {
};

const Template4 = (args) => createPage2_4(args);

export const ResponsivMitGridJavaScript = Template4.bind({});
ResponsivMitGridJavaScript.args = {
};
