(function () {
  'use strict';

  angular
    .module('app')
    .factory('videosService', videosService);

  /* @ngInject */
  function videosService($http, API_ROOT, API_KEY) {

    var service = {
      getItems: getItems,
      getRelatedVideos: getRelatedVideos,
      getVideo: getVideo
    };

    return service;

    function getItems(query, order, pageToken , type, uploadDate) {
      var today = new Date();
      var range = 0;
      if (uploadDate == 'hour') {
        range = 3600000;
      }
      if (uploadDate == 'day') {
        range = 86400000;
      }
      else if (uploadDate == 'week') {
        range = 86400000*7;
      }
      else if (uploadDate == 'month') {
        range = 86400000*30;
      }
      var startDate = today.toISOString();
      var endDate = new Date(today.getTime()-range).toISOString();
      
      var queryParams = '?key=' + API_KEY + '&part=snippet&maxResults=25' + (query?'&q='+query:'') + (order?'&order='+order:'') + (pageToken?'&pageToken='+pageToken:'') + (type?'&type='+type:'') + (uploadDate?'&publishedBefore='+startDate:'') + (uploadDate?'&publishedAfter='+endDate:'');

      return $http.get(API_ROOT + '/search' + queryParams)
        .then(getItemsComplete)
        .catch(function () {
          return null;
        });

      function getItemsComplete(res) {
        return res.data;
      }
    }

    function getVideo(id) {
      var queryParams = '?key=' + API_KEY + 
      '&part=snippet,contentDetails,statistics' + '&id=' + id;

      return $http.get(API_ROOT + '/videos' + queryParams)
        .then(getVideoComplete)
        .catch(function () {
          return null;
        });

      function getVideoComplete(res) {
        return res.data;
      }
    }

    function getRelatedVideos(id) {
      var queryParams = '?key=' + API_KEY + 
      '&part=snippet&type=video&maxResults=25' + '&relatedToVideoId=' + id;

      return $http.get(API_ROOT + '/search' + queryParams)
        .then(getRelatedVideosComplete)
        .catch(function () {
          return null;
        });

      function getRelatedVideosComplete(res) {
        return res.data;
      }
    }
  
  }
})();