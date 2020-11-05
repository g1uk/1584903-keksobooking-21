'use strict';

(function () {
  window.showCard = function (card) {
    const elementList = document.querySelector(`.map__pins`);
    const fragment = document.createDocumentFragment();

    fragment.append(card);
    elementList.append(fragment);
  };
})();
