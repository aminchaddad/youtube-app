(function () {
  
  'use strict';

  describe('PlaylistController', function() {
    var playlistController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      playlistController = _$controller_('PlaylistController');
    }));

    it('should exist', function() {
      expect(playlistController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(playlistController.$onInit).toBeDefined();
      });
    });

    describe('.getPlaylistItems()', function() {
      it('should exist', function() {
        expect(playlistController.getPlaylistItems).toBeDefined();
      });
    });

    describe('.playlistItems', function() {
      it('should exist', function() {
        expect(playlistController.playlistItems).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(playlistController.playlistItems).toEqual([]);
      });
    });

  });
})();