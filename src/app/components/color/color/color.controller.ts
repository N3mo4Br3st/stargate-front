import { RzSlider } from 'angular';

export class ColorController {

  name: string;
  redOptions: RzSlider.RzOptions;
  greenOptions: RzSlider.RzOptions;
  blueOptions: RzSlider.RzOptions;
  redValue: number;
  greenValue: number;
  blueValue: number;

  constructor () { 'ngInject'; }

  $onInit () {
    this.name = 'Rouge';
    this.redOptions = <RzSlider.RzOptions> {
      floor: 0,
      ceil: 255,
      showSelectionBar: true,
      getSelectionBarColor: () => { return 'red'; },
      getPointerColor: () => { return 'red'; },
      hidePointerLabels: true
    };

    this.greenOptions = <RzSlider.RzOptions> {
      floor: 0,
      ceil: 255,
      showSelectionBar: true,
      getSelectionBarColor: () => { return 'green'; },
      getPointerColor: () => { return 'green'; },
      hidePointerLabels: true
    };

    this.blueOptions = <RzSlider.RzOptions> {
      floor: 0,
      ceil: 255,
      showSelectionBar: true,
      getSelectionBarColor: () => { return 'blue'; },
      getPointerColor: () => { return 'blue'; },
      hidePointerLabels: true
    };
  }

}
