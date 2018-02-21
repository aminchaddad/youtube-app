(function () {
  
  'use strict';

  describe('SearchFilterController', function() {
    var searchFilterController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      searchFilterController = _$controller_('SearchFilterController');
    }));

    it('should exist', function() {
      expect(searchFilterController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(searchFilterController.$onInit).toBeDefined();
      });
    });

    describe('.triggerChange()', function() {
      it('should exist', function() {
        expect(searchFilterController.triggerChange).toBeDefined();
      });
    });

    describe('.setType()', function() {
      it('should exist', function() {
        expect(searchFilterController.setType).toBeDefined();
      });
    });

    describe('.setOrder()', function() {
      it('should exist', function() {
        expect(searchFilterController.setOrder).toBeDefined();
      });
    });

    describe('.setUploadDate()', function() {
      it('should exist', function() {
        expect(searchFilterController.setUploadDate).toBeDefined();
      });
    });

    describe('.filterCollapsed', function() {
      it('should exist', function() {
        expect(searchFilterController.filterCollapsed).toBeDefined();
      });

      it('should be true by default', function() {
        expect(searchFilterController.filterCollapsed).toEqual(true);
      });
    });

  });
})();