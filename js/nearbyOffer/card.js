'use strict';

(function () {
  const activateNearbyOfferCard = function ({offer, author}) {

    // const elementList = document.querySelector(`.map__pins`);

    const addressCard = document.querySelector(`#card`)
  .content
  .querySelector(`.map__card`);

    const img = document.createElement(`img`);
    img.width = 45;
    img.height = 40;
    img.alt = `Фотография жилья`;
    img.className = `popup__photo`;

    const imgFragment = document.createDocumentFragment();
    const offerAddress = addressCard.cloneNode(true);
    const popupTitle = offerAddress.querySelector(`.popup__title`);
    const popupTextAddress = offerAddress.querySelector(`.popup__text--address`);
    const popupTextPrice = offerAddress.querySelector(`.popup__text--price`);
    const popupType = offerAddress.querySelector(`.popup__type`);
    const popupTextCapacity = offerAddress.querySelector(`.popup__text--capacity`);
    const popupTextTime = offerAddress.querySelector(`.popup__text--time`);
    const popupFeatures = offerAddress.querySelector(`.popup__features`);
    const popupDescription = offerAddress.querySelector(`.popup__description`);
    const popupPhotos = offerAddress.querySelector(`.popup__photos`);
    const popupAvatar = offerAddress.querySelector(`.popup__avatar`);
    const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;
    popupTitle.textContent = title;
    popupTextAddress.textContent = address;
    popupTextPrice.textContent = `${price}₽/ночь`;
    popupType.textContent = type;
    popupTextCapacity.textContent = `${rooms} комнаты для ${guests} гостей.`;
    popupTextTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}.`;
    popupFeatures.textContent = features.toString();
    popupDescription.textContent = description;
    photos.forEach(function (item) {
      const photo = img.cloneNode();
      photo.src = item;
      imgFragment.append(photo);
    });
    popupPhotos.append(imgFragment);
    popupAvatar.src = author.avatar;
    return offerAddress;

    // window.load(function (cards) {
    //   const fragment = document.createDocumentFragment();
    //   let card;
    //   cards.forEach(function (item) {
    //     card = createAddressCard(item);
    //   });
    //   fragment.append(card);
    //   elementList.append(fragment);
    // }, function () {});
  };
  window.card = {
    activateNearbyOfferCard
  };
})();
