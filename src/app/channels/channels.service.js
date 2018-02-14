(function () {
  'use strict';

  angular
    .module('app')
    .factory('channelsService', channelsService);

  /* @ngInject */
  function channelsService($http, API_ROOT, API_KEY) {

    var service = {
      getChannel: getChannel,
      getChannelPlaylists: getChannelPlaylists
    };

    return service;

    function getChannel(id) {
      var queryParams = '?key=' + API_KEY + '&part=snippet,contentDetails' + 
      '&id=' + id;

      return $http.get(API_ROOT + '/channels' + queryParams)
        .then(getChannelComplete)
        .catch(function () {
          return null;
        });

      function getChannelComplete(res) {
        return res.data;
      }
    }

    function getChannelPlaylists(id) {
      var queryParams = '?key=' + API_KEY + 
      '&part=snippet,contentDetails&maxResults=25' + '&channelId=' + id;

      return $http.get(API_ROOT + '/playlists' + queryParams)
        .then(getChannelPlaylistsComplete)
        .catch(function () {
          return null;
        });

      function getChannelPlaylistsComplete(res) {
        return res.data;
      }
    }
  
  }
})();