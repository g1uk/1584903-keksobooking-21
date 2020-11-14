'use strict';

(() => {
  const publishForm = document.forms[`ad-form`];
  const buttonReset = document.querySelector(`.ad-form__reset`);

  buttonReset.addEventListener(`click`, () => {
    publishForm.reset();
    window.filter.deactivate();
    window.card.remove();
    window.disabled();
  });
})();
