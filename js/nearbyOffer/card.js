'use strict';

(function () {
  const activateNearbyOfferCard = function () {

    const elementList = document.querySelector(`.map__pins`);

    const addressCard = document.querySelector(`#card`)
  .content
  .querySelector(`.map__card`);

    const imgFragment = document.createDocumentFragment();

    const createAddressCard = function ({offer, author}) {
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
      const popupPhoto = offerAddress.querySelector(`.popup__photo`);
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
      photos.forEach(function (item, index) {
        if (index > 0) {
          const photo = popupPhoto.cloneNode();
          photo.src = item;
          imgFragment.append(photo);
        } else {
          popupPhoto.src = item;
        }
      });
      popupPhotos.append(imgFragment);
      popupAvatar.src = author.avatar;
      return offerAddress;
    };

    window.load(function (cards) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < cards.length; i++) {
        fragment.append(createAddressCard(cards[0]));
      }
      elementList.append(fragment);
    }, function () {});
  };
  window.card = {
    activateNearbyOfferCard
  };
})();
