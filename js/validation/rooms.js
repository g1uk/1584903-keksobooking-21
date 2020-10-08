'use strict';

(function () {
  const roomsRules = {
    one: [
      {key: `one`, hide: false},
      {key: `two`, hide: true},
      {key: `three`, hide: true},
      {key: `not`, hide: true}
    ],
    two: [
      {key: `one`, hide: false},
      {key: `two`, hide: false},
      {key: `three`, hide: true},
      {key: `not`, hide: true}
    ],
    three: [
      {key: `one`, hide: false},
      {key: `two`, hide: false},
      {key: `three`, hide: false},
      {key: `not`, hide: true}
    ],
    hundred: [
      {key: `one`, hide: true},
      {key: `two`, hide: true},
      {key: `three`, hide: true},
      {key: `not`, hide: false}
    ]
  };

  const roomNumber = document.querySelector(`#room_number`);
  const numberOfGuests = document.querySelector(`#capacity`);
  const guestsModel = {};

  numberOfGuests.querySelectorAll(`option`).forEach(function (optionElement) {
    guestsModel[optionElement.value] = optionElement;
  });

  const guestsRefreshHiddenField = function (selected) {
    roomsRules[selected].forEach(function ({key, hide}) {
      guestsModel[key].hidden = hide;
    });
  };

  const changeRoomsHandler = function () {
    guestsRefreshHiddenField(roomNumber.value);
  };

  roomNumber.addEventListener(`change`, changeRoomsHandler);
  changeRoomsHandler();

})();
