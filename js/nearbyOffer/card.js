'use strict';

(() => {
  const elementList = document.querySelector(`.map__pins`);
  const addressCard = document.querySelector(`#card`)
    .content
    .querySelector(`.map__card`);
  let closeButton;

  const createNearbyOffer = ({offer, author}) => {

    const img = document.createElement(`img`);
    img.width = 45;
    img.height = 40;
    img.alt = `Фотография жилья`;
    img.className = `popup__photo`;

    const imgFragment = document.createDocumentFragment();
    const offerCard = addressCard.cloneNode(true);
    const popupTitle = offerCard.querySelector(`.popup__title`);
    const popupTextAddress = offerCard.querySelector(`.popup__text--address`);
    const popupTextPrice = offerCard.querySelector(`.popup__text--price`);
    const popupType = offerCard.querySelector(`.popup__type`);
    const popupTextCapacity = offerCard.querySelector(`.popup__text--capacity`);
    const popupTextTime = offerCard.querySelector(`.popup__text--time`);
    const popupFeatures = offerCard.querySelector(`.popup__features`);
    const popupDescription = offerCard.querySelector(`.popup__description`);
    const popupPhotos = offerCard.querySelector(`.popup__photos`);
    const popupAvatar = offerCard.querySelector(`.popup__avatar`);
    const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;

    popupTitle.textContent = title;
    popupTextAddress.textContent = address;
    popupTextPrice.textContent = `${price}₽/ночь`;
    popupType.textContent = type;
    popupTextCapacity.textContent = `${rooms} комнаты для ${guests} гостей.`;
    popupTextTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}.`;
    popupFeatures.textContent = features.toString();
    popupDescription.textContent = description;
    photos.forEach((item) => {
      const photo = img.cloneNode();
      photo.src = item;
      imgFragment.append(photo);
    });
    popupPhotos.append(imgFragment);
    popupAvatar.src = author.avatar;

    removeCard();
    elementList.append(offerCard);
    closeButton = offerCard.querySelector(`.popup__close`);
    closeButton.addEventListener(`click`, onCloseClick);
    document.addEventListener(`keydown`, onKeyDown);
    return offerCard;
  };

  const onCloseClick = () => {
    removeCard();
  };

  const onKeyDown = (evt) => {
    if (evt.key === `Escape`) {
      removeCard();
    }
  };

  const removeCard = () => {
    const mapCard = document.querySelector(`.map__card`);
    if (mapCard) {
      closeButton.removeEventListener(`click`, onCloseClick);
      document.removeEventListener(`keydown`, onKeyDown);
      mapCard.remove();
    }
  };

  window.card = {
    createNearbyOffer,
    remove: removeCard
  };
})();
