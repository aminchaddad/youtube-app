(function() {
  'use strict';

  angular
  .module('app')
  .component('channel', {
    controller: 'ChannelController',
    controllerAs: 'vm',
    templateUrl: 'app/channels/channel.html',
  });

})();
