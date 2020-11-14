'use strict';

(() => {
  window.disabled = () => {
    const MAP_BUTTON_LEFT = `570px`;
    const MAP_BUTTON_TOP = `375px`;
    const mapFadedToken = document.querySelector(`.map`);
    const adForm = document.querySelector(`.ad-form`);
    const adFormChildrenArray = Array.from(adForm.children);
    const mapFilters = document.querySelector(`.map__filters`);
    const mapPinMain = document.querySelector(`.map__pin--main`);

    mapPinMain.style.left = MAP_BUTTON_LEFT;
    mapPinMain.style.top = MAP_BUTTON_TOP;
    mapFadedToken.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);
    adFormChildrenArray.forEach((item) => {
      item.disabled = true;
    });
    mapFilters.classList.add(`hidden`);

    window.marks.remove();
    window.form.completion();
    window.rooms.onChangeRooms();
    window.marks.loadedPins = [];
  };
})();
