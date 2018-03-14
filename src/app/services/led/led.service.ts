import {Led} from '../../models/Led';
import { Color } from '../../models/Color';

export class LedService {

  constructor () { 'ngInject'; }

  public getLeds(idRuban : number) : Array<Led> {

    let led1 = new Led(1, 1, <Color> {red: 200, green: 145, blue: 80 });
    let led2 = new Led(2, 1, <Color> {red: 80, green: 145, blue: 143 });
    let led3 = new Led(3, 2, <Color> {red: 145, green: 145, blue: 80 });
    let led4 = new Led(4, 2, <Color> {red: 200, green: 200, blue: 75 });
    let led5 = new Led(5, 2, <Color> {red: 200, green: 145, blue: 80 });
    let led6 = new Led(7, 3, <Color> {red: 49, green: 201, blue: 97 });

    let returnArray = new Array<Led>();

    if (idRuban === 1) {
      returnArray.push(led1);
      returnArray.push(led2);
    }

    if (idRuban === 2) {
      returnArray.push(led3);
      returnArray.push(led4);
      returnArray.push(led5);
    }

    if (idRuban === 3) {
      returnArray.push(led6);
    }

    return returnArray;
  }
}
