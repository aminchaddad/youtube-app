(function () {
  'use strict';

  angular
    .module('app')
    .controller('SearchController', SearchController);

  /* @ngInject */
  function SearchController($state,videosService) {
    var vm = this;
    vm.items = [];
    vm.order = 'relevance';
    vm.pageToken = '';
    vm.searchQuery = $state.params.query;
    vm.selectedType = '';
    vm.selectedUploadDate = '';
    vm.getItems = getItems;

    function activate() {  
      return getItems();
    }()

    function getItems() {
      return videosService.getItems(vm.searchQuery, vm.order, vm.pageToken,
      vm.selectedType, vm.selectedUploadDate).then(function (data) {
        vm.items = data?data.items:[];
        return vm.items;
      });
    }
  }
})();
