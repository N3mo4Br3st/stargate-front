import * as angular from 'angular';

import { AppModule } from '../../app.module';
import { ColorComponent } from './color.component';

describe ('ColorComponent', () => {
  let colorController;
  
  beforeEach (angular.mock.module(AppModule));

  beforeEach (angular.mock.inject(($componentController: angular.IComponentControllerService) => {
    colorController = $componentController('color', {}, {});
  }));

  it ('should create', () => {
    expect(ColorComponent).toBeTruthy();
  });

});
