"use strict";

(() => {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const activateWindowsFunctions = (cards, cb) => {
    window.page.activate();
    window.form.completion();
    cb(cards);
  };

  const handler = (cards, cb) => {
    mapPinMain.addEventListener(`mousedown`, (evt) => {
      if (evt.button === PRIMARY_MOUSE_BUTTON) {
        activateWindowsFunctions(cards, cb);
      } else {
        // eslint-disable-next-line no-alert
        alert(`Please click your primary mouse button`);
      }
    });
    mapPinMain.addEventListener(`keydown`, (evt) => {
      if (evt.key === `Enter`) {
        activateWindowsFunctions(cards, cb);
      } else {
        // eslint-disable-next-line no-alert
        alert(`Please press 'Enter' button`);
      }
    });
  };

  window.activateMapButton = {handler};
})();
