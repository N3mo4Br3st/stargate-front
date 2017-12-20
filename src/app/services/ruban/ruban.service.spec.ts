import * as angular from 'angular';

import { AppModule } from '../../app.module';
import { RubanService } from './ruban.service';

describe ('RubanService', () => {
  let rubanService: RubanService;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($injector: angular.auto.IInjectorService) => {
    rubanService = $injector.get<RubanService>('rubanService');
  }));

  it ('should create', () => {
    expect(rubanService).toBeTruthy();
  });

});
