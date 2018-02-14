(function () {
  'use strict';

  angular
    .module('app')
    .controller('VideoController', VideoController);

  /* @ngInject */
  function VideoController($state,videosService) {
    var vm = this;
    vm.relatedVideos = [];
    vm.video = {}
    vm.id = $state.params.id ;
    vm.getVideo = getVideo;
    vm.getRelatedVideos = getRelatedVideos;

    activate();

    function activate() {  
      return getVideo() && getRelatedVideos();
    }

    function getVideo() {
      return videosService.getVideo(vm.id).then(function (data) {
        vm.video = data?data.items[0]:{};
        return vm.video;
      });
    }

    function getRelatedVideos() {
      return videosService.getRelatedVideos(vm.id).then(function (data) {
        vm.relatedVideos = data?data.items:[];
        return vm.relatedVideos;
      });
    }
  }
})();