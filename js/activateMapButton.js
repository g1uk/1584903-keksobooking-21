"use strict";

(function () {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const activateWindowsFunctions = function (cards, cb) {
    window.page.activate();
    window.form.completion();
    // window.mark.activateNearbyOffersMarks();
    cb(cards);
    // window.card.activateNearbyOfferCard();
  };

  function handler(cards, cb) {
    mapPinMain.addEventListener(`mousedown`, function (evt) {
      if (evt.button === PRIMARY_MOUSE_BUTTON) {
        activateWindowsFunctions(cards, cb);
      } else {
        // eslint-disable-next-line no-alert
        alert(`Please click your primary mouse button`);
      }
    });
    mapPinMain.addEventListener(`keydown`, function (evt) {
      if (evt.key === `Enter`) {
        activateWindowsFunctions(cards, cb);
      } else {
        // eslint-disable-next-line no-alert
        alert(`Please press 'Enter' button`);
      }
    });
  }

  window.activateMapButton = { handler };
})();
