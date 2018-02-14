(function() {
  'use strict';

  angular
  .module('app')
  .component('playlist', {
    controller: 'PlaylistController',
    controllerAs: 'vm',
    templateUrl: 'app/playlists/playlist.html',
  });

})();
