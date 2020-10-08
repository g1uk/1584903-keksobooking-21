'use strict';

(function () {
  const ENTER_KEYCODE = 13;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  mapPinMain.addEventListener(`mousedown`, function (evt) {
    if (evt.button === 0) {
      window.page.activate();
      window.form.completion();
      window.mark.activateNearbyOffers();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please click your primary mouse button`);
    }
  });
  mapPinMain.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.page.activate();
      window.form.completion();
      window.mark.activateNearbyOffers();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please press 'Enter' button`);
    }
  });
})();
