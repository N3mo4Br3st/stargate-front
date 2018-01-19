import {Led} from '../../models/Led';
import {LedService} from '../../services/led/led.service';

export class LedController {

  ledService: LedService;
  public leds: Array<Led>;
  idRuban: number;


  constructor (ledService: LedService) {
    'ngInject';
    this.ledService = ledService;
    this.idRuban = 0;
  }

  $onInit () {
    this.leds = this.ledService.getLeds(this.idRuban);
  }

 $onChanges = function (idRuban) {
       this.leds = this.ledService.getLeds(idRuban);
  }
}
