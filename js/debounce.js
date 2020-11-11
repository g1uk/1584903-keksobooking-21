'use strict';

(() => {
  const DEBOUNCE_INTERVAL = 500;

  window.debounce = (cb) => {
    let lastTimeout = null;

    return () => {
      // eslint-disable-next-line no-undef
      const parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        // eslint-disable-next-line prefer-spread
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
