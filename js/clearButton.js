'use strict';

(() => {
  const publishForm = document.forms[`ad-form`];

  publishForm.addEventListener(`reset`, () => {
    publishForm.reset();
    window.filter.deactivate();
    window.card.remove();
    window.disabled();
  });
})();
