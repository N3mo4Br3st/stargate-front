import {Led} from '../../models/Led';
import { Color } from '../../models/Color';

export class LedService {

  leds : Map<number,Led>;

  constructor () { 'ngInject'; 

    this.leds = new Map<number,Led>();

    let led1 = new Led(1, 1, <Color> {red: 200, green: 145, blue: 80 });
    let led2 = new Led(2, 1, <Color> {red: 80, green: 145, blue: 143 });
    let led3 = new Led(3, 2, <Color> {red: 145, green: 145, blue: 80 });
    let led4 = new Led(4, 2, <Color> {red: 200, green: 200, blue: 75 });
    let led5 = new Led(5, 2, <Color> {red: 200, green: 145, blue: 80 });
    let led6 = new Led(6, 3, <Color> {red: 49, green: 201, blue: 97 });

    this.leds.set(led1.id,led1);
    this.leds.set(led2.id,led2);
    this.leds.set(led3.id,led3);
    this.leds.set(led4.id,led4);
    this.leds.set(led5.id,led5);
    this.leds.set(led6.id,led6);
  }

  private saveLed(led : Led) {
    this.leds.set(led.id,led);
  }

  public saveLeds(leds : Array<Led>) {
    for (let led of leds) {
      this.saveLed(led);
    }
  }


  public getLeds(idRuban : number) : Array<Led> {
    let returnArray = new Array<Led>();

    if (idRuban === 1) {
      returnArray.push(this.leds.get(1));
      returnArray.push(this.leds.get(2));
    }

    if (idRuban === 2) {
      returnArray.push(this.leds.get(3));
      returnArray.push(this.leds.get(4));
      returnArray.push(this.leds.get(5));
    }

    if (idRuban === 3) {
      returnArray.push(this.leds.get(6));
    }

    return returnArray;
  }
}
