'use strict';

const OFFER_TYPE = [`palace`, `flat`, `house`, `bungalow`];
const OFFER_ROOMS = [1, 2, 3, 4, 5];
const OFFER_CHECKIN = [`12:00`, `13:00`, `14:00`];
const OFFER_CHECKOUT = [`12:00`, `13:00`, `14:00`];
const OFFER_FEATURES = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`
];
const OFFER_PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];
const MIN_LOCATION_X = 100;
const MAX_LOCATION_X = 600;
const MIN_LOCATION_Y = 130;
const MAX_LOCATION_Y = 630;
const MIN_OFFER_PRICE = 1000;
const MAX_OFFER_PRICE = 10000;
const NEARBY_OFFERS_AMOUNT = 8;
const MAP_BUTTON_WIDTH = 50;
const MAP_BUTTON_HEIGHT = 70;
const MAP_BUTTON_WIDTH_GAP = MAP_BUTTON_WIDTH / 2;
const MAP_BUTTON_HEIGHT_GAP = MAP_BUTTON_HEIGHT / 2;

const randomOfNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const arrayRandomElement = function (array) {
  const randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};
const elementsOfRandomArrayLength = function (array) {
  const randomLengthArray = [];
  for (let i = 0; i < randomOfNumbers(1, array.length); i += 1) {
    randomLengthArray.push(array[i]);
  }
  return randomLengthArray;
};

const mapFadedToken = document.querySelector(`.map`);
mapFadedToken.classList.remove(`map--faded`);

const elementList = document.querySelector(`.map__pins`);

const addressMark = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);

const addressCard = document.querySelector(`#card`)
  .content
  .querySelector(`.map__card`);

const fragment = document.createDocumentFragment();

const offersList = function () {
  const arrayForOffers = [];
  for (let i = 1; i <= NEARBY_OFFERS_AMOUNT; i += 1) {
    const nearbyOffer = {author: {}, offer: {}, location: {}};
    nearbyOffer.author.avatar = `img/avatars/user0${i}.png`;
    nearbyOffer.location.x = randomOfNumbers(MIN_LOCATION_X, MAX_LOCATION_X);
    nearbyOffer.location.y = randomOfNumbers(MIN_LOCATION_Y, MAX_LOCATION_Y);
    nearbyOffer.offer.title = `Заголовок предложения ${i}`;
    nearbyOffer.offer.address = `${nearbyOffer.location.x}, ${nearbyOffer.location.y}`;
    nearbyOffer.offer.price = randomOfNumbers(MIN_OFFER_PRICE, MAX_OFFER_PRICE);
    nearbyOffer.offer.type = arrayRandomElement(OFFER_TYPE);
    nearbyOffer.offer.rooms = arrayRandomElement(OFFER_ROOMS);
    nearbyOffer.offer.guests = nearbyOffer.offer.rooms + 1;
    nearbyOffer.offer.checkin = arrayRandomElement(OFFER_CHECKIN);
    nearbyOffer.offer.checkout = arrayRandomElement(OFFER_CHECKOUT);
    nearbyOffer.offer.features = elementsOfRandomArrayLength(OFFER_FEATURES);
    nearbyOffer.offer.description = `Отличная квартира типа ${nearbyOffer.offer.type}, цена: ${nearbyOffer.offer.price}`;
    nearbyOffer.offer.photos = elementsOfRandomArrayLength(OFFER_PHOTOS);

    arrayForOffers.push(nearbyOffer);
  }
  return arrayForOffers;
};
offersList();

const createAddressMark = function (offer) {
  const offerMark = addressMark.cloneNode(true);
  const offerMarkImage = offerMark.querySelector(`img`);
  offerMark.style = `left: ${offer.location.x + MAP_BUTTON_WIDTH_GAP}px; top: ${offer.location.y + MAP_BUTTON_HEIGHT_GAP}px;`;
  offerMarkImage.src = `${offer.author.avatar}`;
  offerMarkImage.alt = `${offer.offer.title}`;
  return offerMark;
};

const createAddressCard = function (offer) {
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
  popupTitle.textContent = offer.offer.title;
  popupTextAddress.textContent = offer.offer.address;
  popupTextPrice.textContent = `${offer.offer.price}₽/ночь`;
  popupType.textContent = offer.offer.type;
  popupTextCapacity.textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей.`;
  popupTextTime.textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}.`;
  popupFeatures.textContent = offer.offer.features.toString();
  popupDescription.textContent = offer.offer.description;
  popupPhoto.src = offer.offer.photos[0];
  popupAvatar.src = offer.author.avatar;
  return offerAddress;
};

offersList().forEach(function (item, i, arr) {
  fragment.append(createAddressMark(arr[i]));
  fragment.append(createAddressCard(arr[0]));
});

elementList.append(fragment);


