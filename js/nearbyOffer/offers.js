"use strict";

(function () {
  window.offers = function () {
    function markersLoad(cards) {
      cards.forEach(function (item) {
        window.marks.activateNearbyOffersMarks(item);
      });
    }

    function onSuccess(cards) {
      window.activateMapButton.handler(cards, markersLoad);
    }

    window.http(onSuccess, function () {});
  };
  console.log(window.offers());
})();
