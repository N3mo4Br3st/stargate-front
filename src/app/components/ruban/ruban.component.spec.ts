import * as angular from 'angular';

import { AppModule } from '../../app.module';

describe ('RubanComponent', () => {
  let rubanController;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($componentController: angular.IComponentControllerService) => {
    rubanController = $componentController('ruban', {}, {});
  }));

  it ('should create', () => {
    expect(rubanController).toBeTruthy();
  });

});
