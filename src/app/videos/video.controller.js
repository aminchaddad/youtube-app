(function () {
  'use strict';

  angular
    .module('app')
    .controller('VideoController', VideoController);

  /* @ngInject */
  function VideoController($state,videosService) {
    var vm = this;
    vm.relatedVideos = [];
    vm.videoId = $state.params.videoId;
    vm.getRelatedVideos = getRelatedVideos;
    vm.$onInit = onInit;

    function onInit() {
      activate();
    }

    function activate() { 
      return getRelatedVideos();
    }

    function getRelatedVideos() {
      return videosService.getRelatedVideos(vm.videoId).then(function (data) {
        vm.relatedVideos = data?data.items:[];
        return vm.relatedVideos;
      });
    }
  }
})();