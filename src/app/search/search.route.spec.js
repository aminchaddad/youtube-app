(function () {
  
  'use strict';
 
  describe('SearchRoute', function() {
    var state;
    var rootScope;
    beforeEach(module('app'));

    beforeEach(inject(function ($state,$rootScope) {
        state = $state;
        rootScope = $rootScope;
    }));

    it('should route to ytSearch', function() {
      state.go('search',{query: 'test'});
      rootScope.$digest();
      expect(state.current.component).toBe("ytSearch", 
      "Component is not set");
      expect(state.current.name).toBe('search', "State is not set");
      expect(state.href(state.current.name)).toBe("/search?query=test");
    });

  });
})();