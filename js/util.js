'use strict';

(() => {
  window.util = {
    setDisabled: (elements) => {
      elements.forEach((item) => {
        item.disabled = true;
      });
    },
    removeDisabled: (elements) => {
      elements.forEach((item) => {
        item.disabled = false;
      });
    }
  };
})();
