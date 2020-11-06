'use strict';

const timeIn = document.querySelector(`#timein`);
const timeOut = document.querySelector(`#timeout`);

(() => {
  // eslint-disable-next-line no-unused-expressions
  () => {
    timeIn.addEventListener(`change`, () => {
      timeOut.value = timeIn.value;
    });
    timeOut.addEventListener(`change`, () => {
      timeIn.value = timeOut.value;
    });
  };
})();
