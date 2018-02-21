(function () {
  
  'use strict';
 
  describe('AppRoute', function() {
    var state;
    var rootScope;
    beforeEach(module('app'));

    beforeEach(inject(function ($state,$rootScope) {
        state = $state;
        rootScope = $rootScope;
    }));

    it('should route to search state when entering an invalid url', function() {
      state.go('wrongState');
      rootScope.$digest();
      expect(state.current.name).toEqual('search');
    });


  });
})();