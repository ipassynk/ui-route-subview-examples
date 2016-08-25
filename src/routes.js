export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/page1');

  $stateProvider
    .state('container', {
      abstract: true,
      template: `<div>
                    <a href="#/page1/foo">Page 1 Foo</a> | <a href="#/page2">Page 2</a>
                    <div ui-view="header"></div>
                    <div ui-view="main"></div>
                 </div>`,
      /** @ngInject */
      controller(permissions) {
        // do somme stuff here
      },
      resolve: {
        /** @ngInject */
        permissions($q) {
          // do some auth login here....
          return $q.resolve();
        }
      }
    })
    .state('container.page1', {
      url: '/page1',
      abstruct: true,
      views: {
        'header@container': {
          template: '<h1>Header Page 1 View</h1>'
        },
        'main@container': {
          template: `<div>
                         <h2>Main Page 1 View</h2>
                         <div ui-view="filter"></div>
                         <div ui-view="details"></div>
                         </div>`
        },
        'filter@container.page1': {
          template: `<div>
                        <h2>Filter View</h2>
                        <a href="#/page1/details/foo">Foo</a>
                        <a href="#/page1/details/boo">Boo</a>
                     </div>`
        }
      }
    })
    .state('container.page1.details', {
      url: '/details/:id',
      views: {
        'details@container.page1': {
          template: `<div><div>Details {{id}} View</div></div>`,
          /** @ngInject */
          controller($stateParams, $scope) {
            $scope.id = $stateParams.id;
          }
        }
      }
    })
    .state('container.page2', {
      url: '/page2',
      abstruct: true,
      views: {
        'header@container': {
          template: '<h1>Header Page 2 View</h1>'
        },
        'main@container': {
          template: `<div>
                         <h2>Main Page 2 Tab View</h2>
                          <a href="#/page2/tab1">tab1</a>
                          <a href="#/page2/tab2">tab2</a>
                          <div ui-view="tabs"></div>
                         </div>`
        }
      }
    })
    .state('container.page2.tab1', {
      url: '/tab1',
      views: {
        'tabs@container.page2': {
          template: `<div>
                         <div>Tab 1 data</div>
                         </div>`
        }
      }
    })
    .state('container.page2.tab2', {
      url: '/tab2',
      views: {
        'tabs@container.page2': {
          template: `<div>
                         <div>Tab 2 data</div>
                         </div>`
        }
      }
    })
  ;
}
