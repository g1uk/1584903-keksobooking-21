'use strict';

const publishForm = document.forms[`ad-form`];

publishForm.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  window.http(window.successUpload(), window.errorUpload(), new FormData(publishForm)); //todo вернуть readonly для адреса

});
