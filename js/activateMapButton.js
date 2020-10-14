'use strict';

(function () {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const activateWindowsFunctions = function () {
    window.page.activate();
    window.form.completion();
    window.mark.activateNearbyOffersMarks();
    window.card.activateNearbyOfferCard();
  };
  mapPinMain.addEventListener(`mousedown`, function (evt) {
    if (evt.button === PRIMARY_MOUSE_BUTTON) {
      activateWindowsFunctions();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please click your primary mouse button`);
    }
  });
  mapPinMain.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      activateWindowsFunctions();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please press 'Enter' button`);
    }
  });
})();
