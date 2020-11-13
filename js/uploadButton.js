'use strict';

(() => {
  const publishForm = document.forms[`ad-form`];

  publishForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    window.http(
        window.successUpload,
        window.errorMessage,
        new FormData(publishForm));
  });
})();
