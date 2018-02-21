(function () {
  
  'use strict';
 
  describe('VideoRoute', function() {
    var state;
    var rootScope;
    beforeEach(module('app'));

    beforeEach(inject(function ($state,$rootScope) {
        state = $state;
        rootScope = $rootScope;
    }));

    it('should route to ytVideoDetails', function() {
      state.go('video.details',{videoId: 'test'});
      rootScope.$digest();
      expect(state.current.component).toBe("ytVideoDetails", 
      "Component is not set");
      expect(state.current.name).toBe('video.details', "State is not set");
      expect(state.href(state.current.name)).toBe("/video/test");
    });

    it('should have abstract state', function() {
      expect(state.get('video').abstract).toBeTruthy();
    });

  });
})();