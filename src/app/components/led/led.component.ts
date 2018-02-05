import { LedController } from './led.controller';
import './led.component.scss';

export const LedComponent: ng.IComponentOptions = {
  template  : require('./led.component.html'),
  controller: LedController,
  bindings : {
    idRuban: '<'
  }
};
