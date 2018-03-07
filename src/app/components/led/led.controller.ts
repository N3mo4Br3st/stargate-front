import {Led} from '../../models/Led';
import {LedService} from '../../services/led/led.service';
import * as angular from 'angular';

export class LedController {

  ledService: LedService;
  leds: Array<Led>;
  idRuban: number;
  
  constructor (ledService: LedService) {
    'ngInject';
    this.ledService = ledService;
  }


  $onInit () {
    console.log('init led component' + this.idRuban);
  }

  $onChanges(changesObj: ng.IOnChangesObject) {
    if (changesObj.idRuban) {
      this.idRuban = Number(angular.copy(changesObj.idRuban.currentValue));
      this.leds = this.ledService.getLeds(this.idRuban);
    }
  }

}
