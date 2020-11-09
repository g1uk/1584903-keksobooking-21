'use strict';

(() => {
  const errorPopup = document.querySelector(`#error`)
    .content
    .querySelector(`.error`);

  const tryAgainButton = errorPopup.querySelector(`.error__button`);

  const onKeydown = (evt) => {
    if (evt.key === `Escape`) {
      document.removeEventListener(`keydown`, onKeydown);
      document.querySelector(`.error`).remove();
    }
  };

  const onClosePopup = () => {
    document.removeEventListener(`click`, onClosePopup);
    document.querySelector(`.error`).remove();
  };

  const onButtonClick = () => {
    tryAgainButton.removeEventListener(`click`, onButtonClick);
    document.querySelector(`.error`).remove();
  };

  window.errorUpload = () => {
    const message = errorPopup.cloneNode(true);
    document.body.append(message);

    document.addEventListener(`keydown`, onKeydown);
    document.addEventListener(`click`, onClosePopup);
    tryAgainButton.addEventListener(`click`, onButtonClick);
  };
})();
