import {Ruban} from '../../models/Ruban';
import {RubanService} from '../../services/ruban/ruban.service';

export class RubanController {

  rubanService: RubanService;
  public rubans: Array<Ruban>;
  idRubanSelected: number;

  constructor (rubanService: RubanService) {
    'ngInject';
    this.rubanService = rubanService;
    this.idRubanSelected = 0;
  }

  $onInit () {
    this.rubans = this.rubanService.getRubans();
  }

  test(id: number) {
    this.idRubanSelected = id;
    console.log(this.idRubanSelected);
  }

}
