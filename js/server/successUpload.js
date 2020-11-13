'use strict';

(() => {
  const successPopup = document.querySelector(`#success`)
    .content
    .querySelector(`.success`);
  const form = document.forms[`ad-form`];

  const onKeydown = (evt) => {
    if (evt.key === `Escape`) {
      document.removeEventListener(`keydown`, onKeydown);
      document.querySelector(`.success`).remove();
      form.reset();
      window.filter.deactivate();
      window.disabled();
    }
  };

  const onClosePopup = () => {
    document.removeEventListener(`click`, onClosePopup);
    document.querySelector(`.success`).remove();
    form.reset();
    window.filter.deactivate();
    window.disabled();
  };

  window.successUpload = () => {
    const message = successPopup.cloneNode(true);
    document.body.append(message);

    document.addEventListener(`keydown`, onKeydown);
    document.addEventListener(`click`, onClosePopup);
  };
})();
