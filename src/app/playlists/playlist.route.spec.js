(function () {
  
  'use strict';
 
  describe('PlaylistRoute', function() {
    var state;
    var rootScope;
    beforeEach(module('app'));

    beforeEach(inject(function ($state,$rootScope) {
        state = $state;
        rootScope = $rootScope;
    }));

    it('should route to ytPlaylist', function() {
      state.go('playlist',{playlistId: 'test'});
      rootScope.$digest();
      expect(state.current.component).toBe("ytPlaylist", 
      "Component is not set");
      expect(state.current.name).toBe('playlist', "State is not set");
      expect(state.href(state.current.name)).toBe("/playlist/test");
    });

    it('should route to ytVideoDetails', function() {
      state.go('playlist.video',{playlistId: 'test1',videoId: 'test2'});
      rootScope.$digest();
      expect(state.current.component).toBe("ytVideoDetails", 
      "Component is not set");
      expect(state.current.name).toBe('playlist.video', "State is not set");
      expect(state.href(state.current.name)).toBe("/playlist/test1/video/test2");
    });

  });
})();