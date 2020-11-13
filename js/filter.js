"use strict";

(() => {
  const PriceRestrictions = {
    LOWER: 10000,
    UPPER: 50000,
  };

  const filters = document.querySelector(`.map__filters`);
  const filtersSelect = filters.querySelectorAll(`select`);
  const housingType = filters.querySelector(`#housing-type`);
  const housingPrice = filters.querySelector(`#housing-price`);
  const housingRooms = filters.querySelector(`#housing-rooms`);
  const housingGuests = filters.querySelector(`#housing-guests`);
  const housingFeatures = filters.querySelector(`#housing-features`);

  const deactivate = () => {
    filters.reset();
  };

  const activate = () => {
    window.util.removeDisabled(filtersSelect);
    housingFeatures.disabled = false;
  };

  const filterType = (offer) => {
    return (
      housingType.value === `any` || offer.offer.type === housingType.value
    );
  };

  const filterPrice = (offer) => {
    const PriceHandler = {
      any: true,
      low: offer.offer.price < PriceRestrictions.LOWER,
      middle: offer.offer.price >= PriceRestrictions.LOWER && offer.offer.price <= PriceRestrictions.UPPER,
      high: offer.offer.price > PriceRestrictions.UPPER
    };
    return PriceHandler[housingPrice.value];
  };

  const filterRooms = (offer) => {
    return (
      housingRooms.value === `any` ||
      offer.offer.rooms === parseInt(housingRooms.value, 10)
    );
  };

  const filterGuests = (offer) => {
    return (
      housingGuests.value === `any` ||
      offer.offer.guests === parseInt(housingGuests.value, 10)
    );
  };

  const filterFeatures = (offer) => {
    const checkedFeatures = housingFeatures.querySelectorAll(`input:checked`);
    return [].every.call(checkedFeatures, (element) => {
      return offer.offer.features.includes(element.value);
    });
  };

  const updateOffers = () => {
    window.marks.render(
        [filterType, filterPrice, filterRooms, filterGuests, filterFeatures]
        .reduce(
            (acc, filter) => acc.filter((pin) => filter(pin)),
            window.marks.loadedPins
        )
        .map((item) => window.marks.createNearbyOfferPins(item))
    );
  };

  const onFilterChange = window.debounce(() => {
    window.marks.remove();
    window.card.remove();
    updateOffers();
  });

  filters.addEventListener(`change`, onFilterChange);

  window.filter = {
    activate,
    deactivate,
    updateOffers,
  };
})();
