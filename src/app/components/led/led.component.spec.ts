import * as angular from 'angular';

import { AppModule } from '../../app.module';

describe ('LedComponent', () => {
  let ledController;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($componentController: angular.IComponentControllerService) => {
    ledController = $componentController('led', {}, {});
  }));

  it ('should create', () => {
    expect(ledController).toBeTruthy();
  });

});
