import { createPage6createFiles } from './Page7CreateFiles'
import {createPage6MergeFiles} from './Page7Merge'
import {createPage6Express} from './Page7ExpressServer'

export default {
  title: 'Lösungen der Übungen/Übung 07 Node & npm & Deno',
  argTypes: {},
};

const TemplatecreateFiles = (args) => createPage6createFiles(args);
export const FileGeneratoren = TemplatecreateFiles.bind({});

const TemplateMerge = (args) => createPage6MergeFiles(args);
export const FileMergen = TemplateMerge.bind({});

const TemplateExpress= (args) => createPage6Express(args);
export const ExpressServer = TemplateExpress.bind({});



