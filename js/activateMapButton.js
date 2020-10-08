'use strict';

(function () {
  const ENTER_KEYCODE = 13;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const activateWindowsFunctions = function () {
    window.page.activate();
    window.form.completion();
    window.mark.activateNearbyOffers();
  };
  mapPinMain.addEventListener(`mousedown`, function (evt) {
    if (evt.button === 0) {
      activateWindowsFunctions();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please click your primary mouse button`);
    }
  });
  mapPinMain.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      activateWindowsFunctions();
    } else {
      // eslint-disable-next-line no-alert
      alert(`Please press 'Enter' button`);
    }
  });
})();
