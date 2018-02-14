(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlaylistController', PlaylistController);

  /* @ngInject */
  function PlaylistController($state,playlistsService) {
    var vm = this;
    vm.playlistItems = [];
    vm.id = $state.params.id ;
    vm.getPlaylistItems = getPlaylistItems;

    activate();

    function activate() {  
      return getPlaylistItems();
    }

    function getPlaylistItems() {
      return playlistsService.getPlaylistItems(vm.id).then(function (data) {
        vm.playlistItems = data?data.items:[];
        return vm.playlistItems;
      });
    }
  }
})();