import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

const cardsContainer = document.querySelector('.elements');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupImage = document.querySelector('.popup_type_image');

const profileForm = document.querySelector('.popup__form_type_profile');
const placeForm = document.querySelector('.popup__form_type_place');
const popupCloseButtonProfile = document.querySelector('.popup__close-button_profile');
const popupCloseButtonPlace = document.querySelector('.popup__close-button_place');
const popupCloseButtonImage = document.querySelector('.popup__close-button_image');

const inputName = document.querySelector('.popup__input_type_name');
const inputInterest = document.querySelector('.popup__input_type_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputPhoto = document.querySelector('.popup__input_type_photo');

//const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  error: '.popup__input-error'
};

const selectors = {
  template: '.element-template'

}

/*  Рендер первоначальных карточек */
initialCards.forEach((card) => {
  renderCard(card);
})


/*  Открытие/закрытие попапов */
function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('click', closeByOverlay);
};

function closePopup(popup) {
  popup.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_open');
};

const closeByEsc = function (e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  }
};
const closeByOverlay = function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

/*  Рендер  карточек */

function buildInputObject() {
  const objectCard = {
    name: inputPlace.value,
    link: inputPhoto.value
  }

  return objectCard;
}

function createCard(name, link) {
  const newCard = new Card(name, link, selectors, openPopup);
  const cardElement = newCard.generateCard();

  return cardElement;
}

function renderCard(card) {
  cardsContainer.prepend(createCard(card.name, card.link));
}

/* открытие профиля */
buttonEditProfile.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputInterest.value = profileInterest.textContent;
  profileFormValidator.removeInputError();
  profileFormValidator.toggleButtonState();
  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  placeForm.reset();
  placeFormValidator.toggleButtonState();
  placeFormValidator.removeInputError();
  openPopup(popupAddPlace);
});

popupCloseButtonImage.addEventListener('click', () => {
  closePopup(popupImage);
});
popupCloseButtonProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
popupCloseButtonPlace.addEventListener('click', () => {
  closePopup(popupAddPlace);
});

/*  Редактирование профиля */

profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;/*замена имени на полученное*/
  profileInterest.textContent = inputInterest.value;/*замена активностей на полученные*/
  closePopup(popupEditProfile);
});

/* Создание новой карточки */

placeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderCard(buildInputObject());
  closePopup(popupAddPlace);
});

const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();