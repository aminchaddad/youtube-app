(function () {
  'use strict';

  angular
    .module('app')
    .controller('VideoDetailsController', VideoDetailsController);

  /* @ngInject */
  function VideoDetailsController(videosService) {
    var vm = this;
    vm.video = {};
    vm.$onInit= onInit;

    function onInit(){
      activate();
    }

    function activate() {  
      return getVideo();
    }

    function getVideo() {
      return videosService.getVideo(vm.videoId).then(function (data) {
        vm.video = data?data.items[0]:{};
        return vm.video;
      });
    }

  }
})();