(function () {
  
  'use strict';

  describe('VideoController', function() {
    var videoController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      videoController = _$controller_('VideoController');
    }));

    it('should exist', function() {
      expect(videoController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(videoController.$onInit).toBeDefined();
      });
    });

    describe('.getRelatedVideos()', function() {
      it('should exist', function() {
        expect(videoController.getRelatedVideos).toBeDefined();
      });
    });

    describe('.relatedVideos', function() {
      it('should exist', function() {
        expect(videoController.relatedVideos).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(videoController.relatedVideos).toEqual([]);
      });
    });

  });
})();