'use strict';

(() => {
  const completion = () => {
    const mapButton = document.querySelector(`.map__pin--main`);
    const address = document.querySelector(`#address`);
    const buttonStyle = getComputedStyle(mapButton);
    const buttonLeftStyle = parseInt(mapButton.style.left, 10);
    const buttonTopStyle = parseInt(mapButton.style.top, 10);
    const buttonWidthStyle = parseInt(buttonStyle.width, 10);
    const buttonHeightStyle = parseInt(buttonStyle.height, 10);

    address.classList.add(`placeholder`);
    address.placeholder = `${buttonLeftStyle + Math.round(buttonWidthStyle / 2)}, ${buttonTopStyle + buttonHeightStyle}`;
    address.value = `${buttonLeftStyle + Math.round(buttonWidthStyle / 2)}, ${buttonTopStyle + buttonHeightStyle}`;
  };

  window.form = {
    completion
  };

})();

