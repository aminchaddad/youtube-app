(function () {
  'use strict';

  angular
    .module('app')
    .controller('SearchFilterController', SearchFilterController);

  /* @ngInject */
  function SearchFilterController($timeout) {
    var vm = this;
    vm.filterCollapsed = true;
    vm.triggerChange = triggerChange
    vm.setUploadDate = setUploadDate;
    vm.setType = setType;
    vm.setOrder = setOrder;
    vm.$onInit = onInit;
    
    function onInit() {
      
    }

    function triggerChange() {
      $timeout(function () {
        vm.onChange();
      });
    }

    function setUploadDate(value) {
      if(value !== vm.uploadDate) {
        vm.uploadDate = value;
        vm.filterCollapsed = true;
        vm.triggerChange();
      }
    }

    function setType(value) {
      if(value !== vm.type) {
        vm.type = value;
        vm.filterCollapsed = true;
        vm.triggerChange();
      }
    }

    function setOrder(value) {
      if(value !== vm.order) {
        vm.order = value;
        vm.filterCollapsed = true;
        vm.triggerChange();
      }
    }

  }
})();