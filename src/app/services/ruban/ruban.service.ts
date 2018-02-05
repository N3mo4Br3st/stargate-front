import {Ruban} from '../../models/Ruban';

export class RubanService {

  constructor () { 'ngInject'; }

  public getRubans() : Array<Ruban> {
    let ruban1 = new Ruban(0, 'test0');
    let ruban2 = new Ruban(2, 'test2');
    let ruban3 = new Ruban(3, 'test3');
    let returnArray = new Array<Ruban>();
    returnArray.push(ruban1);
    returnArray.push(ruban2);
    returnArray.push(ruban3);
    return returnArray;
  }
}
