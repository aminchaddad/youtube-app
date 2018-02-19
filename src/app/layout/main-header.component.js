(function() {
  'use strict';

  angular
  .module("app")
  .component("ytMainHeader",{
    controller: 'MainHeaderController',
    controllerAs: 'vm',
    templateUrl: 'app/layout/main-header.html'
  });
})();