(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainHeaderController', MainHeaderController);

  /* @ngInject */
  function MainHeaderController($state,$rootScope) {
    var vm = this;
    vm.showTextInput = false;
    vm.searchQuery = $state.params.query?$state.params.query:'';
    vm.onKeyPress = onKeyPress;
    vm.onButtonClick = onButtonClick;
    
    function onKeyPress(event) {
      if (event.which === 13) {
        $state.go('search', {query: vm.searchQuery});
        vm.showTextInput = false;
      }
    }

    function onButtonClick() {
      if ($rootScope.mobileDevice) {
        $state.go('search', {query: vm.searchQuery});
      }
      else {
        if (vm.showTextInput) {
          $state.go('search', {query: vm.searchQuery});
          vm.showTextInput = false;
        }
        else {
          vm.searchQuery = '';
          vm.showTextInput = true;
        }
      }
    }
  }
})();