"use strict";

(() => {

  window.form.completion();

  const markersLoad = (cards) => {
    window.marks.loadedPins = [...cards];
    window.filter.updateOffers();
  };

  const onSuccess = (cards) => {
    window.mainButton.activate(cards, markersLoad);
    window.filter.activate();
  };

  window.http(onSuccess, window.errorMessage);
})();
