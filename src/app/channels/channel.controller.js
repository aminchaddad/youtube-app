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
    vm.channelId = $state.params.channelId;
    vm.getChannel = getChannel;
    vm.getChannelPlaylists = getChannelPlaylists;
    vm.$onInit = onInit;
    
    function onInit() {
      activate();
    }

    function activate() {  
      var promises = [getChannel(), getChannelPlaylists()]; 
      return promises;
    }

    function getChannel() {
      return channelsService.getChannel(vm.channelId).then(function (data) {
        vm.channel = data?data.items[0]:{};
        return vm.channel;
      });
    }

    function getChannelPlaylists() {
      return channelsService.getChannelPlaylists(vm.channelId)
      .then(function (data) {
        vm.playlists = data?data.items:[];
        return vm.playlists;
      });
    }
  }
})();