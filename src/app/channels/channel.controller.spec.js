(function () {
  
  'use strict';

  describe('ChannelController', function() {
    var channelController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      channelController = _$controller_('ChannelController');
    }));

    it('should exist', function() {
      expect(channelController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(channelController.$onInit).toBeDefined();
      });
    });

    describe('.getChannel()', function() {
      it('should exist', function() {
        expect(channelController.getChannel).toBeDefined();
      });
    });

    describe('.getChannelPlaylists()', function() {
      it('should exist', function() {
        expect(channelController.getChannelPlaylists).toBeDefined();
      });
    });

    describe('.channel', function() {
      it('should exist', function() {
        expect(channelController.channel).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(channelController.channel).toEqual({});
      });
    });

    describe('.playlists', function() {
      it('should exist', function() {
        expect(channelController.playlists).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(channelController.playlists).toEqual([]);
      });
    });

  });
})();