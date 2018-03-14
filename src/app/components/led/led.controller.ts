import { Led } from '../../models/Led';
import { LedService } from '../../services/led/led.service';
import * as angular from 'angular';

export class LedController {

  ledService: LedService;
  leds: Array<Led>;
  idRuban: number;
  expanded = false;
  isCheck = false;
  elements: NodeListOf<HTMLInputElement>;


  constructor(ledService: LedService) {
    'ngInject';
    this.ledService = ledService;
  }


  $onInit() {
    console.log('init led component' + this.idRuban);
  }

  $onChanges(changesObj: ng.IOnChangesObject) {
    if (changesObj.idRuban) {
      this.idRuban = Number(angular.copy(changesObj.idRuban.currentValue));
      this.leds = this.ledService.getLeds(this.idRuban);
    }
  }

  showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }

  Checkboxes() {
    var element = <HTMLInputElement>document.getElementById("one");
    if (element.checked) {
      this.elements = document.getElementsByTagName("input")
      for(var i=0; i<this.elements.length; i++){
        this.elements[i].checked = true;
      }
    }else{
      this.elements = document.getElementsByTagName("input")
      for(var i=0; i<this.elements.length; i++){
        this.elements[i].checked = false;
      }
    }
  }

}
