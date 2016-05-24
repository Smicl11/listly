angular.module('ListlyApp', ['ngRoute', 'templates'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider ) {
  $routeProvider
  .when('/', {
    templateUrl: 'lists.template.html',
    controller: 'ListsController',
    controllerAs: 'listsCrtl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
