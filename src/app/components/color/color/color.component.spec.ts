import * as angular from 'angular';

import { AppModule } from '../../../app.module';

describe ('ColorComponent', () => {
  let colorController;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($componentController: angular.IComponentControllerService) => {
    colorController = $componentController('color', {}, {});
  }));

  it ('should create', () => {
    expect(colorController).toBeTruthy();
  });

});
