'use strict';

(function () {
  const activateNearbyOfferCard = function () {

    const elementList = document.querySelector(`.map__pins`);

    const addressCard = document.querySelector(`#card`)
  .content
  .querySelector(`.map__card`);

    const offerList = window.list.nearbyOfferList();

    const fragment = document.createDocumentFragment();

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
      popupPhoto.src = photos[0];
      popupAvatar.src = author.avatar;
      return offerAddress;
    };

    offerList.forEach(function (item, i, arr) {

      fragment.append(createAddressCard(arr[0]));

    });

    elementList.append(fragment);
  };
  window.card = {
    activateNearbyOfferCard
  };
})();
