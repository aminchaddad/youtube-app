(function () {
  
  'use strict';
 
  describe('ChannelRoute', function() {
    var state;
    var rootScope;
    beforeEach(module('app'));

    beforeEach(inject(function ($state,$rootScope) {
        state = $state;
        rootScope = $rootScope;
    }));

    it('should route to ytChannel', function() {
      state.go('channel',{channelId: 'test'});
      rootScope.$digest();
      expect(state.current.component).toBe("ytChannel", 
      "Component is not set");
      expect(state.current.name).toBe('channel', "State is not set");
      expect(state.href(state.current.name)).toBe("/channel/test");
    });

  });
})();