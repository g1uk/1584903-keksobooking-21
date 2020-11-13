"use strict";

(() => {
  const MAP_BUTTON_WIDTH = 50;
  const MAP_BUTTON_HEIGHT = 70;
  const MAP_BUTTON_WIDTH_GAP = MAP_BUTTON_WIDTH / 2;
  const MAP_BUTTON_HEIGHT_GAP = MAP_BUTTON_HEIGHT / 2;
  const MARKS_COUNT = 5;
  const elementList = document.querySelector(`.map__pins`);
  const loadedPins = [];
  const addressMark = document
    .querySelector(`#pin`)
    .content.querySelector(`.map__pin`);

  const createMark = (offer) => {
    const offerMark = addressMark.cloneNode(true);
    const offerMarkImage = offerMark.querySelector(`img`);
    offerMark.style = `left: ${
      offer.location.x + MAP_BUTTON_WIDTH_GAP
    }px; top: ${offer.location.y + MAP_BUTTON_HEIGHT_GAP}px;`;
    offerMarkImage.src = `${offer.author.avatar}`;
    offerMarkImage.alt = `${offer.offer.title}`;
    return offerMark;
  };

  const createNearbyOfferPins = (offer) => {
    const marker = createMark(offer);

    marker.addEventListener(`click`, () => {
      window.card.createNearbyOffer(offer);
    });
    return marker;
  };

  const render = (offers) => {
    const fragment = document.createDocumentFragment();
    const preparedArray = offers.splice(0, MARKS_COUNT);
    preparedArray.forEach((item) => {
      fragment.append(item);
    });
    elementList.append(fragment);
  };

  const remove = () => {
    const mapMarksItems = document.querySelectorAll(
        `.map__pin:not(.map__pin--main)`
    );
    mapMarksItems.forEach((item) => {
      item.remove();
    });
  };

  window.marks = {
    loadedPins,
    createNearbyOfferPins,
    render,
    remove
  };
})();
