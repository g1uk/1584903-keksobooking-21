"use strict";

(() => {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMain = document.querySelector(`.map__pin--main`);

  const onLoadOffers = (offers) => {
    window.marks.loadedPins = [...offers];
    window.filter.updateOffers();
  };

  const activateWindowsFunctions = () => {
    window.http(onLoadOffers, window.errorMessage);
    window.page.activate();
    window.filter.activate();
  };

  const activate = () => {
    mapPinMain.addEventListener(`mousedown`, (evt) => {
      const isNeedActivate = evt.button === PRIMARY_MOUSE_BUTTON && window.marks.loadedPins.length === 0;
      if (isNeedActivate) {
        activateWindowsFunctions();
      }
    });
    mapPinMain.addEventListener(`keydown`, (evt) => {
      const isNeedActivate = evt.key === `Enter` && window.marks.loadedPins.length === 0;
      if (isNeedActivate) {
        activateWindowsFunctions();
      }
    });
  };

  window.mainButton = {activate};
})();
