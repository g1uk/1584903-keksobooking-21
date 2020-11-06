'use strict';

const timeIn = document.querySelector(`#timein`);
const timeOut = document.querySelector(`#timeout`);

(() => {
  () => {
    timeIn.addEventListener(`change`, () => {
      timeOut.value = timeIn.value;
    });
    timeOut.addEventListener(`change`, () => {
      timeIn.value = timeOut.value;
    });
  };
})();
