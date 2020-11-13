'use strict';

(() => {
  const errorPopupTemplate = document.querySelector(`#error`)
    .content
    .querySelector(`.error`);
  const tryAgainButton = errorPopupTemplate.querySelector(`.error__button`);

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

  window.errorMessage = (errorMessage) => {
    const errorPopup = errorPopupTemplate.cloneNode(true);
    const message = errorPopup.querySelector(`.error__message`);

    message.innerText = errorMessage;
    document.body.append(errorPopup);
    document.addEventListener(`keydown`, onKeydown);
    document.addEventListener(`click`, onClosePopup);
    tryAgainButton.addEventListener(`click`, onButtonClick);
  };
})();
