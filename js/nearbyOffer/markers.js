'use strict';

(function () {
  window.markers = function () {
    window.offers().forEach(function (card) {
      console.log(card)
      window.mark.activateNearbyOffersMarks(card);
    }, function () {});
  };
})();
