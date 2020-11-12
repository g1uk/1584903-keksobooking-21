'use strict';

(() => {
  const DEBOUNCE_INTERVAL = 500;

  window.debounce = (cb) => {
    let lastTimeout = null;

    return (...options) => {
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }
      lastTimeout = setTimeout(() => {
        cb.call(null, options);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
