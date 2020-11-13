'use strict';

(() => {
  const RoomsRules = {
    1: {
      defaultIndex: 2,
      sets: [
        {key: 1, hide: false},
        {key: 2, hide: true},
        {key: 3, hide: true},
        {key: 0, hide: true},
      ],
    },
    2: {
      defaultIndex: 2,
      sets: [
        {key: 1, hide: false},
        {key: 2, hide: false},
        {key: 3, hide: true},
        {key: 0, hide: true},
      ],
    },
    3: {
      defaultIndex: 2,
      sets: [
        {key: 1, hide: false},
        {key: 2, hide: false},
        {key: 3, hide: false},
        {key: 0, hide: true},
      ],
    },
    100: {
      defaultIndex: 3,
      sets: [
        {key: 1, hide: true},
        {key: 2, hide: true},
        {key: 3, hide: true},
        {key: 0, hide: false},
      ],
    },
  };
  const roomNumber = document.querySelector(`#room_number`);
  const numberOfGuests = document.querySelector(`#capacity`);
  const guestsModel = {};

  numberOfGuests.querySelectorAll(`option`).forEach((optionElement) => {
    guestsModel[optionElement.value] = optionElement;
  });

  const guestsRefreshHiddenField = (selected) => {
    RoomsRules[selected].sets.forEach(({key, hide}) => {
      guestsModel[key].hidden = hide;
    });
    numberOfGuests.selectedIndex = RoomsRules[selected].defaultIndex;
  };

  const onChangeRooms = () => {
    guestsRefreshHiddenField(roomNumber.value);
  };

  roomNumber.addEventListener(`change`, onChangeRooms);
  onChangeRooms();
})();
