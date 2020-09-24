'use strict';

const AUTHOR_AVATAR = ``;
const OFFER_TITLE = ``;
const OFFER_ADDRESS = `600, 350`;
const OFFER_GUESTS = 0;
const OFFER_DESCRIPTION = ``;
const OFFER_PRICE = 0;
const LOCATION_X = 0;
const LOCATION_Y = 0;
const MIN_X = 100;
const MAX_X = 600;
const MIN_Y = 130;
const MAX_Y = 630;
const MIN_OFFER_PRICE = 1000;
const MAX_OFFER_PRICE = 10000;
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
const NEARBY_OFFERS_AMOUNT = 8;

let randomOfNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let arrayRandomElement = function (array) {
  let randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};
let elementsOfRandomArrayLength = function (array) {
  let newArray = [];
  for (let i = 0; i < randomOfNumbers(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

let nearbyOffer = {
  "author": {
    "avatar": AUTHOR_AVATAR
  },
  "offer": {
    "title": OFFER_TITLE,
    "address": OFFER_ADDRESS,
    "price": OFFER_PRICE,
    "type": OFFER_TYPE,
    "rooms": OFFER_ROOMS,
    "guests": OFFER_GUESTS,
    "checkin": OFFER_CHECKIN,
    "checkout": OFFER_CHECKOUT,
    "features": OFFER_FEATURES,
    "description": OFFER_DESCRIPTION,
    "photos": OFFER_PHOTOS
  },
  "location": {
    "x": LOCATION_X,
    "y": LOCATION_Y
  }
};

let mapFadedToken = document.querySelector(`.map`);
mapFadedToken.classList.remove(`map--faded`);

let elementList = document.querySelector(`.map__pins`);

let addressMark = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);

let fragment = document.createDocumentFragment();

let generateNearbyOffers = function () {
  let newArray = [];
  for (let i = 1; i <= NEARBY_OFFERS_AMOUNT; i++) {
    nearbyOffer.author.avatar = `img/avatars/user0${i}.png`;
    nearbyOffer.location.x = randomOfNumbers(MIN_X, MAX_X);
    nearbyOffer.location.y = randomOfNumbers(MIN_Y, MAX_Y);
    nearbyOffer.offer.title = `Заголовок предложения ` + i;
    nearbyOffer.offer.address = `${nearbyOffer.location.x}, ${nearbyOffer.location.y}`;
    nearbyOffer.offer.price = randomOfNumbers(MIN_OFFER_PRICE, MAX_OFFER_PRICE);
    nearbyOffer.offer.type = arrayRandomElement(OFFER_TYPE);
    nearbyOffer.offer.rooms = arrayRandomElement(OFFER_ROOMS);
    nearbyOffer.offer.guests = nearbyOffer.offer.rooms + 1;
    nearbyOffer.offer.checkin = arrayRandomElement(OFFER_CHECKIN);
    nearbyOffer.offer.checkout = arrayRandomElement(OFFER_CHECKOUT);
    nearbyOffer.offer.features = elementsOfRandomArrayLength(OFFER_FEATURES);
    nearbyOffer.offer.description = `Отличная квартира типа ` + nearbyOffer.offer.type + `, цена: ` + nearbyOffer.offer.price;
    nearbyOffer.offer.photos = elementsOfRandomArrayLength(OFFER_PHOTOS);

    newArray.push(JSON.parse(JSON.stringify(nearbyOffer)));
  }
  return newArray;
};
generateNearbyOffers();

let createAddressMark = function (offer) {
  let offerMark = addressMark.cloneNode(true);
  offerMark.style = `left: ${offer.location.x}px; top: ${offer.location.y}px;`;
  offerMark.querySelector(`img`).src = `${offer.author.avatar}`;
  offerMark.querySelector(`img`).alt = `${offer.offer.title}`;
  return offerMark;
};

for (let i = 0; i < generateNearbyOffers().length; i++) {
  fragment.appendChild(createAddressMark(generateNearbyOffers()[i]));
}

elementList.appendChild(fragment);


