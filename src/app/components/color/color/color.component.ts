import { ColorController } from './color.controller';
import './color.component.scss';

export const ColorComponent: ng.IComponentOptions = {
  template  : require('./color.component.html'),
  controller: ColorController,
  bindings: {
    redValue: '=',
    greenValue: '=',
    blueValue: '='
  }
};
