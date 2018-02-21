(function () {
  
  'use strict';

  describe('SearchController', function() {
    var searchController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      searchController = _$controller_('SearchController');
    }));

    it('should exist', function() {
      expect(searchController).toBeDefined();
    });

    describe('.onInit()', function() {
      it('should exist', function() {
        expect(searchController.$onInit).toBeDefined();
      });
    });

    describe('.getItems()', function() {
      it('should exist', function() {
        expect(searchController.getItems).toBeDefined();
      });
    });

    describe('.nextPage()', function() {
      it('should exist', function() {
        expect(searchController.nextPage).toBeDefined();
      });
    });

    describe('.items', function() {
      it('should exist', function() {
        expect(searchController.items).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(searchController.items).toEqual([]);
      });
    });

    describe('.order', function() {
      it('should exist', function() {
        expect(searchController.order).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(searchController.order).toEqual('relevance');
      });
    });

    describe('.pageToken', function() {
      it('should exist', function() {
        expect(searchController.pageToken).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(searchController.pageToken).toEqual('');
      });
    });

    describe('.type', function() {
      it('should exist', function() {
        expect(searchController.type).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(searchController.type).toEqual('');
      });
    });

    describe('.uploadDate', function() {
      it('should exist', function() {
        expect(searchController.uploadDate).toBeDefined();
      });

      it('should be empty by default', function() {
        expect(searchController.uploadDate).toEqual('');
      });
    });

    describe('.resultCount', function() {
      it('should exist', function() {
        expect(searchController.resultCount).toBeDefined();
      });

      it('should be zero by default', function() {
        expect(searchController.resultCount).toEqual(0);
      });
    });

    describe('.loading', function() {
      it('should exist', function() {
        expect(searchController.loading).toBeDefined();
      });

      it('should be false by default', function() {
        expect(searchController.loading).toEqual(false);
      });
    });

    describe('.pageLoading', function() {
      it('should exist', function() {
        expect(searchController.pageLoading).toBeDefined();
      });

      it('should be false by default', function() {
        expect(searchController.pageLoading).toEqual(false);
      });
    });

  });
})();