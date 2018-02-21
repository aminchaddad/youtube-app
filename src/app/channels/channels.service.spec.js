(function () {
  
  'use strict';

  describe('ChannelsService', function() {
    var channelsService;
    beforeEach(module('app'));

    beforeEach(inject(function(_channelsService_) {
      channelsService = _channelsService_;
    }));

    it('should exist', function() {
      expect(channelsService).toBeDefined();
    });

    describe('.getChannel()', function() {
      it('should exist', function() {
        expect(channelsService.getChannel).toBeDefined();
      });
    });

    describe('.getChannelPlaylists()', function() {
      it('should exist', function() {
        expect(channelsService.getChannelPlaylists).toBeDefined();
      });
    });
    
  });
})();