(function () {
  
  'use strict';

  describe('MainHeaderController', function() {
    var mainHeaderController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      mainHeaderController = _$controller_('MainHeaderController');
    }));

    it('should exist', function() {
      expect(mainHeaderController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(mainHeaderController.$onInit).toBeDefined();
      });
    });

    describe('.onKeyPress()', function() {
      it('should exist', function() {
        expect(mainHeaderController.onKeyPress).toBeDefined();
      });
    });

    describe('.onButtonClick()', function() {
      it('should exist', function() {
        expect(mainHeaderController.onButtonClick).toBeDefined();
      });
    });

    describe('.showTextInput', function() {
      it('should exist', function() {
        expect(mainHeaderController.showTextInput).toBeDefined();
      });

      it('should be false by default', function() {
        expect(mainHeaderController.showTextInput).toEqual(false);
      });
    });

  });
})();