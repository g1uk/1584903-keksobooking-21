'use strict';

(function () {

  const offerTypes = {
    palace: {
      name: `Дворец`,
      min: 5000},
    flat: {
      name: `Квартира`,
      min: 1000},
    house: {
      name: `Дом`,
      min: 10000},
    bungalow: {
      name: `Бунгало`,
      min: 0
    }
  };

  const priceField = document.querySelector(`#price`);
  const typeHousingField = document.querySelector(`#type`);
  const customPriceValidation = function (cost) {
    priceField.setCustomValidity(`Минимальная стоимость этого жилья равна ${cost}`);
  };
  priceField.addEventListener(`input`, function () {
    const typeHousingValue = typeHousingField.value;
    const priceValue = priceField.value.input;
    const minValue = offerTypes[typeHousingValue].min;

    priceField.min = minValue;
    if (priceValue < minValue) {
      customPriceValidation(minValue);
    }
    priceField.reportValidity();
  });

})();
