'use strict';

(() => {
  const roomsRules = {
    1: [
      {key: `1`, hide: false},
      {key: `2`, hide: true},
      {key: `3`, hide: true},
      {key: `0`, hide: true}
    ],
    2: [
      {key: `1`, hide: false},
      {key: `2`, hide: false},
      {key: `3`, hide: true},
      {key: `0`, hide: true}
    ],
    3: [
      {key: `1`, hide: false},
      {key: `2`, hide: false},
      {key: `3`, hide: false},
      {key: `0`, hide: true}
    ],
    100: [
      {key: `1`, hide: true},
      {key: `2`, hide: true},
      {key: `3`, hide: true},
      {key: `0`, hide: false}
    ]
  };

  const roomNumber = document.querySelector(`#room_number`);
  const numberOfGuests = document.querySelector(`#capacity`);
  const guestsModel = {};

  numberOfGuests.querySelectorAll(`option`).forEach((optionElement) => {
    guestsModel[optionElement.value] = optionElement;
  });

  const guestsRefreshHiddenField = (selected) => {
    roomsRules[selected].forEach(({key, hide}) => {
      guestsModel[key].hidden = hide;
    });
  };

  const changeRoomsHandler = () => {
    guestsRefreshHiddenField(roomNumber.value);
  };

  roomNumber.addEventListener(`change`, changeRoomsHandler);
  changeRoomsHandler();

})();
