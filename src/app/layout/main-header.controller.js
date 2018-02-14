(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainHeaderController', MainHeaderController);

  /* @ngInject */
  function MainHeaderController($state) {
    var vm = this;
    vm.searchQuery = '';
    vm.onKeyPress = onKeyPress;
    
    function onKeyPress(event) {
      if (event.which === 13) {
        $state.go('search', {query: vm.searchQuery})
      }
    }
  }
})();