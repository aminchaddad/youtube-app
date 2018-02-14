(function () {
  'use strict';

  angular
    .module('app')
    .factory('playlistsService', playlistsService);

  /* @ngInject */
  function playlistsService($http, API_ROOT, API_KEY) {

    var service = {
      getPlaylistItems: getPlaylistItems
    };

    return service;

    function getPlaylistItems(id) {
      var queryParams = '?key=' + API_KEY + 
      '&part=snippet,contentDetails&maxResults=25' + '&playlistId=' + id;

      return $http.get(API_ROOT + '/playlistItems' + queryParams)
        .then(getPlaylistItemsComplete)
        .catch(function () {
          return null;
        });

      function getPlaylistItemsComplete(res) {
        return res.data;
      }
    }
  
  }
})();