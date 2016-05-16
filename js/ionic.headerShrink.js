angular.module('ionic.ion.headerShrink', [])

.directive('fakeStatusbar', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="fake-statusbar"><div class="pull-left">Carrier</div><div class="time">3:30 PM</div><div class="pull-right">50%</div></div>'
  }
})
.directive('headerShrink', function($document) {
  var fadeAmt;

  var shrink = function(subHeader, header, amt, dir) {
    ionic.requestAnimationFrame(function() { 
      //amt = 2.0*Math.round(amt/2.0);
      if(dir === 1) {
        var _amt = Math.min(65, amt - 65);
      } else if(dir === -1) {
        var _amt = Math.max(0, amt - 65);
      }
//      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0,-' + _amt + 'px, 0)';
      subHeader.style[ionic.CSS.TRANSFORM] = 'translate3d(0,-' + amt + 'px, 0)';
    });
  };

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = $scope.$eval($attr.headerShrink) || 0;
      var shrinkAmt;
      
      var header = $document[0].body.querySelector('.bar-header');
      var subHeader = $document[0].body.querySelector('.bar-subheader');
      var headerHeight = header.offsetHeight;
      var subHeaderHeight = subHeader.offsetHeight;

      var prev = 0
        , delta = 0
        , dir = 1
        , prevDir = 1
        , prevShrinkAmt = 0;
      
      $element.bind('scroll', function(e) {
		  console.log(1234);
        delta = e.detail.scrollTop - prev;
        dir = delta >= 0 ? 1 : -1;
        // Capture change of direction
        if(dir !== prevDir) 
          starty = e.detail.scrollTop;
        // If scrolling up
        if(dir === 1) {
          // Calculate shrinking amount
          shrinkAmt = headerHeight + subHeaderHeight - Math.max(0, (starty + headerHeight + subHeaderHeight) - e.detail.scrollTop);
          // Start shrink
          shrink(subHeader, header, Math.min(129, shrinkAmt), dir);
          // Save prev shrink amount
          prevShrinkAmt = Math.min(129, shrinkAmt);
        }
        // If scrolling down
        else {
          // Calculate expansion amount
          shrinkAmt = prevShrinkAmt - Math.min(129, (starty - e.detail.scrollTop));
          shrink(subHeader, header, shrinkAmt, dir);
        }
        prevDir = dir;
        prev = e.detail.scrollTop;
      });
    }
  }
});  