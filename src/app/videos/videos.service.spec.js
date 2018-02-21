(function () {
  
  'use strict';

  describe('VideosService', function() {
    var videosService;
    beforeEach(module('app'));

    beforeEach(inject(function(_videosService_) {
      videosService = _videosService_;
    }));

    it('should exist', function() {
      expect(videosService).toBeDefined();
    });

    describe('.getItems()', function() {
      it('should exist', function() {
        expect(videosService.getItems).toBeDefined();
      });
    });

    describe('.getRelatedVideos()', function() {
      it('should exist', function() {
        expect(videosService.getRelatedVideos).toBeDefined();
      });
    });

    describe('.getVideo()', function() {
      it('should exist', function() {
        expect(videosService.getVideo).toBeDefined();
      });
    });

  });
})();