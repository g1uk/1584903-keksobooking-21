'use strict';

(() => {
  const setDisabled = (elements) => {
    elements.forEach((item) => {
      item.disabled = true;
    });
  };

  const removeDisabled = (elements) => {
    elements.forEach((item) => {
      item.disabled = false;
    });
  };

  window.util = {
    setDisabled,
    removeDisabled
  };
})();
