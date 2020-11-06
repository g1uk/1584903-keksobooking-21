"use strict";

(() => {
  window.offers = () => {
    const markersLoad = (cards) => {
      cards.forEach((item) => {
        window.marks.createNearbyOfferMarks(item);
      });
    };

    const onSuccess = (cards) => {
      window.activateMapButton.handler(cards, markersLoad);
    };

    window.http(onSuccess, () => {});
  };
  // eslint-disable-next-line no-console
  console.log(window.offers());
})();
