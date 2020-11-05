'use strict';

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const changeChoosenCheckInAndCheckout = function () {
  timeIn.addEventListener('change', function () {
    timeOut.value = timeIn.value;
  });
  timeOut.addEventListener('change', function () {
    timeIn.value = timeOut.value;
  });
};
changeChoosenCheckInAndCheckout();


