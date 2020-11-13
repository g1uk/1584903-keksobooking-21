'use strict';

(() => {
  window.disabled = () => {
    const mapFadedToken = document.querySelector(`.map`);
    mapFadedToken.classList.add(`map--faded`);

    const adForm = document.querySelector(`.ad-form`);
    adForm.classList.add(`ad-form--disabled`);

    const adFormChildrenArray = Array.from(adForm.children);
    adFormChildrenArray.forEach((item) => {
      item.disabled = true;
    });

    const mapFilters = document.querySelector(`.map__filters`);
    mapFilters.classList.add(`hidden`);

    window.marks.remove();
  };
})();
