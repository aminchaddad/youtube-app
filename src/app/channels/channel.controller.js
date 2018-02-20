(function () {
  'use strict';

  angular
    .module('app')
    .controller('ChannelController', ChannelController);

  /* @ngInject */
  function ChannelController($state,channelsService) {
    var vm = this;
    vm.playlists = [];
    vm.channel = {};
    vm.id = $state.params.id;

    activate();

    function activate() {  
      var promises = [getChannel(), getChannelPlaylists()]; 
      return promises;
    }

    function getChannel() {
      return channelsService.getChannel(vm.id).then(function (data) {
        vm.channel = data?data.items[0]:{};
        return vm.channel;
      });
    }

    function getChannelPlaylists() {
      return channelsService.getChannelPlaylists(vm.id).then(function (data) {
        vm.playlists = data?data.items:[];
        return vm.playlists;
      });
    }
  }
})();