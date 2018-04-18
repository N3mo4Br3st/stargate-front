import { Led } from '../../models/Led';
import { LedService } from '../../services/led/led.service';
import { Color } from '../../models/Color';
import * as angular from 'angular';


export class LedController {

  ledService: LedService;
  leds: Array<Led>;
  idRuban: number;
  currentColor: Color;
  expanded = false;
  isCheck = false;
  elements: NodeListOf<HTMLInputElement>;
  selectedLeds: Array<Led>;

  constructor(ledService: LedService) {
    'ngInject';
    this.ledService = ledService;
  }

  $onInit() {
    this.selectedLeds = new Array<Led>();
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

  checkboxes() {
    var element = <HTMLInputElement>document.getElementById("one");
    if (element.checked) {
      this.elements = document.getElementsByTagName("input")
      for(var i=0; i<this.elements.length; i++){
        this.elements[i].checked = true;
        //this.selectedLeds.push(led);
      }
    } else {
      this.elements = document.getElementsByTagName("input")
      for(var i=0; i<this.elements.length; i++){
        this.elements[i].checked = false;
        //this.selectedLeds.splice(this.selectedLeds.indexOf(led),1);
      }
    }
  }

  saveLed() {
    for (let led of this.selectedLeds) {
      led.color = this.currentColor;
    }
    this.ledService.saveLeds(this.selectedLeds);
  }

  getData(led : Led) {
    if (this.selectedLeds.indexOf(led) == -1) {
      this.selectedLeds.push(led);
    } else {
      this.selectedLeds.splice(this.selectedLeds.indexOf(led),1);
    }

    this.setColor();
  }

  setColor() {
    if (this.selectedLeds.length != 1) {
      this.currentColor = <Color>{blue:0, red:0, green:0};
    } else {
      this.currentColor = angular.copy(this.selectedLeds[0].color);
    }
  }
}
