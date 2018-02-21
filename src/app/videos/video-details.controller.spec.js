(function () {
  
  'use strict';

  describe('VideoDetailsController', function() {
    var videoDetailsController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      videoDetailsController = _$controller_('VideoDetailsController');
    }));

    it('should exist', function() {
      expect(videoDetailsController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(videoDetailsController.$onInit).toBeDefined();
      });
    });

    describe('.getVideo()', function() {
      it('should exist', function() {
        expect(videoDetailsController.getVideo).toBeDefined();
      });
    });

    describe('.video', function() {
      it('should exist', function() {
        expect(videoDetailsController.video).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(videoDetailsController.video).toEqual({});
      });
    });

  });
})();