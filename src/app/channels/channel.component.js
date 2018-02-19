(function() {
  'use strict';

  angular
  .module('app')
  .component('ytChannel', {
    controller: 'ChannelController',
    controllerAs: 'vm',
    templateUrl: 'app/channels/channel.html',
  });

})();
