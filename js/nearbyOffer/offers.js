"use strict";

(() => {
  window.loadMarks = [];
  const markersLoad = (cards) => {
    cards.forEach((item) => {
      window.marks.createNearbyOfferMarks(item);
      // eslint-disable-next-line no-console
      console.log(item);
      window.marks.render(cards);
    });
  };

  const onSuccess = (cards) => {
    // eslint-disable-next-line no-console
    console.log(cards);
    window.mainButton.activate(cards, markersLoad);
    window.filter.activate();
  };

  window.http(onSuccess, () => {});
})();
