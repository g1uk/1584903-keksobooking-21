'use strict';

(function () {
  const activate = function () {
    const mapFadedToken = document.querySelector(`.map`);
    mapFadedToken.classList.remove(`map--faded`);

    const adForm = document.querySelector(`.ad-form`);
    adForm.classList.remove(`ad-form--disabled`);

    const adFormChildrenArray = Array.from(adForm.children);
    adFormChildrenArray.forEach(function (item) {
      item.classList.remove(`disabled`);
    });

    const mapFilters = document.querySelector(`.map__filters`);
    mapFilters.classList.remove(`ad-form--disabled`);
  };
  window.page = {
    activate
  };
})();
