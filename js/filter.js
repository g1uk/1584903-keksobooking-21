'use strict';

(() => {
  const PriceRestrictions = {
    LOWER: 10000,
    UPPER: 50000
  };

  const filters = document.querySelector(`.map__filters`);
  const filtersSelect = filters.querySelectorAll(`select`);
  const housingType = filters.querySelector(`#housing-type`);
  const housingPrice = filters.querySelector(`#housing-price`);
  const housingRooms = filters.querySelector(`#housing-rooms`);
  const housingGuests = filters.querySelector(`#housing-guests`);
  const housingFeatures = filters.querySelector(`#housing-features`);

  const deactivateFilters = () => {
    filters.reset();
    window.util.setDisabled(filtersSelect);
    housingFeatures.disabled = true;
  };

  // deactivateFilters();

  const activateFilters = () => {
    window.util.removeDisabled(filtersSelect);
    housingFeatures.disabled = false;
  };

  const filterType = (offer) => {
    return housingType.value === `any` || offer.offer.type === housingType.value;
  };

  const filterPrice = (offer) => {
    if (housingPrice.value === `any`) {
      return true;
    } else if (housingPrice.value === `low`) {
      return offer.offer.price < PriceRestrictions.LOWER;
    } else if (housingPrice.value === `middle`) {
      return offer.offer.price >= PriceRestrictions.LOWER && offer.offer.price <= PriceRestrictions.UPPER;
    } else if (housingPrice.value === `high`) {
      return offer.offer.price > PriceRestrictions.UPPER;
    }
    return true;
  };

  const filterRooms = (offer) => {
    return housingRooms.value === `any` || offer.offer.rooms === parseInt(housingRooms.value, 10);
  };

  const filterGuests = (offer) => {
    return housingGuests.value === `any` || offer.offer.guests === parseInt(housingGuests.value, 10);
  };

  const filterFeatures = (offer) => {
    const checkedFeatures = housingFeatures.querySelectorAll(`input:checked`);
    return [].every.call(checkedFeatures, (element) => {
      return offer.offer.features.includes(element.value);
    });
  };

  const updateOffers = () => {
    const marksCopy = [].slice();
    const filterMarks = marksCopy.filter((pin) => {
      return filterType(pin) && filterPrice(pin) && filterRooms(pin) && filterGuests(pin) && filterFeatures(pin);
    });
    window.marks.render(filterMarks);
  };

  const onFilterChange = window.debounce(() => {
    window.marks.remove();
    window.card.remove();
    updateOffers();
  });

  filters.addEventListener(`change`, onFilterChange);

  window.filter = {
    activate: activateFilters,
    deactivate: deactivateFilters
  };

})();

