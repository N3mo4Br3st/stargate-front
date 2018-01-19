import * as angular from 'angular';

import { AppModule } from '../../app.module';
import { LedService } from './led.service';

describe ('LedService', () => {
  let ledService: LedService;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($injector: angular.auto.IInjectorService) => {
    ledService = $injector.get<LedService>('ledService');
  }));

  it ('should create', () => {
    expect(ledService).toBeTruthy();
  });

});
