(function() {
  'use strict';

  angular.module('app').run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {
    $rootScope.mobileDevice = detectMobile()

    function detectMobile() {
      return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/)
      .test(navigator.userAgent.toLowerCase())
    } 
  }

})();
