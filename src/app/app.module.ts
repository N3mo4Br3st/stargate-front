import * as angular from 'angular';

import '../vendor';

import { AppConfig } from './app.config';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { RubanComponent } from './components/ruban/ruban.component';
import { RubanService } from './services/ruban/ruban.service';

let module: ng.IModule = angular.module('stargate', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngCookies',
  'ui.router',
  'restangular',
  'oc.lazyLoad'
]);

module.constant('ENVIRONMENT', ENV);
module.constant('CONFIG', CONFIG);

module.config(AppConfig);
module.config(AppRoutes);

module.component('app', AppComponent);
module.component('ruban', RubanComponent);
module.service('rubanService', RubanService);

export const AppModule = module.name;
