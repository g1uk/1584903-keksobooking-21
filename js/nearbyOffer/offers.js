"use strict";

(() => {
  const markersLoad = (cards) => {
    cards.forEach((item) => {
      window.marks.createNearbyOfferMarks(item);
    });
  };

  const onSuccess = (cards) => {
    window.mainButton.activate(cards, markersLoad);
  };

  window.http(onSuccess, () => {});
})();
