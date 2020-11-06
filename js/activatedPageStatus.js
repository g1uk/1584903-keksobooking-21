'use strict';

(() => {
  const activate = () => {
    const mapFadedToken = document.querySelector(`.map`);
    const adForm = document.querySelector(`.ad-form`);
    const adFormChildrenArray = Array.from(adForm.children);
    const mapFilters = document.querySelector(`.map__filters`);

    mapFadedToken.classList.remove(`map--faded`);
    adForm.classList.remove(`ad-form--disabled`);
    adFormChildrenArray.forEach((item) => {
      item.classList.remove(`disabled`);
    });
    mapFilters.classList.remove(`ad-form--disabled`);
  };
  window.page = {
    activate
  };
})();
