(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlaylistController', PlaylistController);

  /* @ngInject */
  function PlaylistController($state,playlistsService) {
    var vm = this;
    vm.playlistItems = [];
    vm.playlistId = $state.params.playlistId;
    vm.videoId = $state.params.videoId;
    vm.getPlaylistItems = getPlaylistItems;
    vm.$onInit = onInit;
    
    function onInit() {
      activate();
    }

    function activate() {  
      return getPlaylistItems();
    }

    function getPlaylistItems() {
      return playlistsService.getPlaylistItems(vm.playlistId)
        .then(function (data) {
        vm.playlistItems = data?data.items:[];
        if (!vm.videoId && vm.playlistItems.length > 0) {
          $state.go('playlist.video',{
            videoId: vm.playlistItems[0].snippet.resourceId.videoId
          });
        }
        return vm.playlistItems;
      });
    }
  }
})();