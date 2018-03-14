import * as angular from 'angular';

import '../vendor';

import { AppConfig } from './app.config';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { RubanComponent } from './components/ruban/ruban.component';
import { RubanService } from './services/ruban/ruban.service';
import { LedService } from './services/led/led.service';
import { LedComponent } from './components/led/led.component';
import { ColorComponent } from './components/color/color/color.component';

let module: ng.IModule = angular.module('stargate', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngCookies',
  'ui.router',
  'restangular',
  'oc.lazyLoad',
  'rzModule'
]);

module.constant('ENVIRONMENT', ENV);
module.constant('CONFIG', CONFIG);

module.config(AppConfig);
module.config(AppRoutes);

module.component('app', AppComponent);
module.component('ruban', RubanComponent);
module.component('led', LedComponent);
module.service('ledService', LedService);
module.service('rubanService', RubanService);
module.component('color', ColorComponent);

export const AppModule = module.name;
