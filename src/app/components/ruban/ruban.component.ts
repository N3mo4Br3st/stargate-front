import { RubanController } from './ruban.controller';
import './ruban.component.scss';

export const RubanComponent: ng.IComponentOptions = {
  template  : require('./ruban.component.html'),
  controller: RubanController
};
