(function () {
  'use strict';

  angular
    .module('app')
    .directive('ytInfiniteScroll', ytInfiniteScroll);

  /* @ngInject */
  function ytInfiniteScroll($rootScope,$document,$window) {
    var directive = {
      link: link,
      scope: {
        'loadPage': '&',
        'loading': '=',
        'haveMore': '='
      },
      templateUrl: 'app/layout/infinite-scroll.html',
      restrict: 'E'
    };
    return directive;

    function link(scope, element) {
      if (!$rootScope.mobileDevice) {
        var raw = element[0];
        $document.bind('scroll', function () {
          if (!scope.loading && scope.haveMore &&
          raw.getBoundingClientRect().top - $window.innerHeight <= 100 ) {  
            scope.loadPage();
            scope.loading = true;
          }
        });
      }
    }
  }
})();