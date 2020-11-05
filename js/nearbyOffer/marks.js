'use strict';

(function () {
  const activateNearbyOffersMarks = function (offer) {

    const MAP_BUTTON_WIDTH = 50;
    const MAP_BUTTON_HEIGHT = 70;
    const MAP_BUTTON_WIDTH_GAP = MAP_BUTTON_WIDTH / 2;
    const MAP_BUTTON_HEIGHT_GAP = MAP_BUTTON_HEIGHT / 2;

    const elementList = document.querySelector(`.map__pins`);
    const fragment = document.createDocumentFragment();

    const addressMark = document.querySelector(`#pin`)
      .content
      .querySelector(`.map__pin`);

    window.form.completion();

    const offerMark = addressMark.cloneNode(true);
    const offerMarkImage = offerMark.querySelector(`img`);
    offerMark.style = `left: ${offer.location.x + MAP_BUTTON_WIDTH_GAP}px; top: ${offer.location.y + MAP_BUTTON_HEIGHT_GAP}px;`;
    offerMarkImage.src = `${offer.author.avatar}`;
    offerMarkImage.alt = `${offer.offer.title}`;
    fragment.append(offerMark);
    elementList.append(fragment);
    return offerMark;

    // window.http(function (cards) {
    //   const fragment = document.createDocumentFragment();
    //   cards.forEach(function (card) {
    //     const mark = createAddressMark(card);
    //     fragment.append(mark);
    //     mark.addEventListener('click', function () {
    //       window.card.activateNearbyOfferCard(card);
    //     });
    //     elementList.append(fragment);
    //   });
    //
    // }, function () {});

  };
  window.mark = {
    activateNearbyOffersMarks
  };
})();
