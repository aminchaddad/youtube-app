(function() {
  'use strict';

  angular
  .module('app')
  .component('ytPlaylist', {
    controller: 'PlaylistController',
    controllerAs: 'vm',
    templateUrl: 'app/playlists/playlist.html',
  });

})();
