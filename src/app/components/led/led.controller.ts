import {Led} from '../../models/Led';
import {LedService} from '../../services/led/led.service';

export class LedController {

  ledService: LedService;
  public leds: Array<Led>;
  idRuban: string;

  constructor (ledService: LedService) {
    'ngInject';
    this.ledService = ledService;
    
  }

  $onInit () {
  }

}
