import { createJson } from '../JsonDisplay';

import data from './Questions1.1.js';

export default {
  title: 'Lösungen der Übungen/Übung 01',
};


const Template = ({ label, ...args }) => {
  return createJson({ label, ...args });
};

export const FragenAusDerVorlesung = Template.bind({});

FragenAusDerVorlesung.args = {
  json: data.Questions
};
console.log(data.Questions)


