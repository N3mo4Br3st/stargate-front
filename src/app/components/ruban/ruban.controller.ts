import {Ruban} from '../../models/Ruban';
import {RubanService} from '../../services/ruban/ruban.service';
import * as angular from 'angular';

export class RubanController {

  rubanService: RubanService;
  rubans: Array<Ruban>;
  idRubanSelected: number;

  constructor (rubanService: RubanService) {
    'ngInject';
    this.rubanService = rubanService;
    this.idRubanSelected = 0;
  }

  $onInit () {
    this.rubans = this.rubanService.getRubans();
  }

  changeRuban(id: number) {
    let newId: number = angular.copy(id);
    this.idRubanSelected = newId;
    console.log(this.idRubanSelected);
  }

}
