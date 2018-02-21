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
    vm.loading = false;
    vm.pageLoading = false;
    vm.searchQuery = $state.params.query;
    vm.type = '';
    vm.uploadDate = '';
    vm.resultCount = 0;
    vm.getItems = getItems;
    vm.nextPage = nextPage;
    vm.$onInit = onInit;
    
    function onInit() {
      activate();
    }

    function activate() {  
      return getItems();
    }

    function getItems() {
      vm.loading = true;
      return videosService.getItems(vm.searchQuery, vm.order, vm.pageToken,
      vm.type, vm.uploadDate).then(function (data) {
        vm.items = data?data.items:[];
        vm.pageToken = data.nextPageToken?data.nextPageToken:'';
        vm.resultCount = data.pageInfo.totalResults;
        vm.loading = false;
        return vm.items;
      });
    }

    function nextPage() {
      vm.pageLoading = true;
      return videosService.getItems(vm.searchQuery, vm.order, vm.pageToken,
      vm.type, vm.uploadDate).then(function (data) {
        vm.items = vm.items.concat(data?data.items:[]);
        vm.pageToken = data.nextPageToken?data.nextPageToken:'';
        vm.resultCount = data.pageInfo.totalResults;
        vm.pageLoading = false;
        return vm.items;
      });
    }
  }
})();