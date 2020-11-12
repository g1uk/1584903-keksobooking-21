'use strict';

(() => {
  const DEBOUNCE_INTERVAL = 500;

  window.debounce = (cb) => {
    let lastTimeout = null;

    return (...options) => {
      // eslint-disable-next-line no-undef
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        // eslint-disable-next-line prefer-spread
        cb.call(null, options);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
