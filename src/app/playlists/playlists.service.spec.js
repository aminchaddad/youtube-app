(function () {
  
  'use strict';

  describe('PlaylistsService', function() {
    var playlistsService;
    beforeEach(module('app'));

    beforeEach(inject(function(_playlistsService_) {
      playlistsService = _playlistsService_;
    }));

    it('should exist', function() {
      expect(playlistsService).toBeDefined();
    });

    describe('.getPlaylistItems()', function() {
      it('should exist', function() {
        expect(playlistsService.getPlaylistItems).toBeDefined();
      });
    });
    
  });
})();