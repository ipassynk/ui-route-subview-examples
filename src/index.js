import angular from 'angular';
import 'angular-ui-router';
import './index.scss';

import routesConfig from './routes';

angular
  .module('app', ['ui.router'])
  .config(routesConfig);
