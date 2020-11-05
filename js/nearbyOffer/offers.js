'use strict';

(function () {
  window.offers = function () {
    window.http(function (cards) {
      cards.forEach(function (item) {
        window.card.activateNearbyOfferCard(item);
      });
      return cards;
      console.log(cards)
    }, function () {});
  };
  console.log(window.offers())
})();
