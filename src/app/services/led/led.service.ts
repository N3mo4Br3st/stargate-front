import {Led} from '../../models/Led';

export class LedService {

  constructor () { 'ngInject'; }

  public getLeds(idRuban : number) : Array<Led> {

    let led1 = new Led(1,1);
    let led2 = new Led(2,1);
    let led3 = new Led(3,2);
    let led4 = new Led(4,2);
    let led5 = new Led(5,2);
    let led6 = new Led(6,3);

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
    returnArray.push(led6);
    return returnArray;
  }
}
