import { createPage6Bundestag } from './Page6Bundestag'
import { createPage6Bezier } from './Page6Bezierkurve'
import { createPage6Kalligraphie } from './Page6Kalligraphie'
import { createPage6Linien } from './Page6LinienTool'

var json = require('./Bundestagverteilung.json'); //with path

export default {
  title: 'Lösungen der Übungen/Übung 06',
  argTypes: {},
};

const TemplateBundestag = (args) => createPage6Bundestag(args);
export const BundestagSVG = TemplateBundestag.bind({});

BundestagSVG.args = {
  Parteien: json,
  svgwidth: "300px"
};


const TemplateBezier = (args) => createPage6Bezier(args);
export const Bezier = TemplateBezier.bind({});

const TemplateKalligraphie = (args) => createPage6Kalligraphie(args);
export const KalligraphieEditor = TemplateKalligraphie.bind({});


const TemplateLinien = (args) => createPage6Linien(args);
export const LinienEditor = TemplateLinien.bind({});



