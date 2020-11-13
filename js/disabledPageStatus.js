'use strict';

(() => {
  window.disabled = () => {
    const mapFadedToken = document.querySelector(`.map`);
    const adForm = document.querySelector(`.ad-form`);
    const adFormChildrenArray = Array.from(adForm.children);
    const mapFilters = document.querySelector(`.map__filters`);

    mapFadedToken.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);
    adFormChildrenArray.forEach((item) => {
      item.disabled = true;
    });
    mapFilters.classList.add(`hidden`);

    window.marks.remove();
  };
})();
