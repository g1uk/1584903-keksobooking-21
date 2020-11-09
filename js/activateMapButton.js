"use strict";

(() => {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const activateWindowsFunctions = (cards, cb) => {
    window.page.activate();
    window.form.completion();
    cb(cards);
  };

  const activate = (cards, cb) => {
    mapPinMain.addEventListener(`mousedown`, (evt) => {
      if (evt.button === PRIMARY_MOUSE_BUTTON) {
        activateWindowsFunctions(cards, cb);
      }
    });
    mapPinMain.addEventListener(`keydown`, (evt) => {
      if (evt.key === `Enter`) {
        activateWindowsFunctions(cards, cb);
      }
    });
  };

  window.mainButton = {activate};
})();
