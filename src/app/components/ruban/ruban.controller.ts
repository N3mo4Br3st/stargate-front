import {Ruban} from '../../models/Ruban';
import {RubanService} from '../../services/ruban/ruban.service';

export class RubanController {

  rubanService: RubanService;
  public rubans: Array<Ruban>;

  constructor (rubanService: RubanService) {
    'ngInject';
    this.rubanService = rubanService;
  }

  $onInit () {
    this.rubans = this.rubanService.getRubans();
  }

}
