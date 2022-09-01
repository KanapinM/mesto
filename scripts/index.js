
const cardsContainer = document.querySelector('.elements');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonSubmitProfileForm = document.querySelector('.popup__submit-button_type_profile');
const buttonSubmitAddCardForm = document.querySelector('.popup__submit-button_type_place');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupImage = document.querySelector('.popup_type_image');
const popupImagePhoto = document.querySelector('.popup__place-image');
const popupImageName = document.querySelector('.popup__place-name');
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
// 
const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');

import { Card } from './card.js';
const cardItem = new Card();
console.dir(cardItem);

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
  if (evt.target === (evt.target).closest('.popup_open')) {
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

// function createCard(card) {
//   const newCard = cardTemplate.cloneNode(true);
//   newCard.querySelector('.element__tittle').textContent = card.name;
//   const image = newCard.querySelector('.element__photo')
//   image.alt = card.name;
//   image.src = card.link;

//   /* Удаление карточки */

//   const buttonDelete = newCard.querySelector('.element__delete-button')
//   buttonDelete.addEventListener('click', () => {
//     newCard.remove();
//   })

//   /* Лайк карточки */

//   const buttonLike = newCard.querySelector('.element__like');
//   buttonLike.addEventListener('click', () => {
//     buttonLike.classList.toggle('element__like_active');
//   });

//   /*  Открытие/закрытие карточки во всплывающем окне */

//   image.addEventListener('click', () => {
//     popupImagePhoto.src = card.link;
//     popupImagePhoto.alt = card.name;
//     popupImageName.textContent = card.name;
//     openPopup(popupImage);
//   });
//   return newCard;
// }

function renderCard(card) {
  // cardsContainer.prepend(createCard(card)); !!! временно посмотреть сво-во!!!
}
/* открытие профиля */
buttonEditProfile.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputInterest.value = profileInterest.textContent;
  profileForm.querySelectorAll('.popup__input').forEach(text => { text.classList.remove('popup__input_type_error') });
  profileForm.querySelectorAll('.popup__input-error').forEach(line => { line.classList.remove('popup__input-error_active') });

  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  buttonSubmitAddCardForm.classList.add('popup__submit-button_inactive');
  buttonSubmitAddCardForm.setAttribute('disabled', 'disabled');
  placeForm.querySelectorAll('.popup__input').forEach(text => { text.classList.remove('popup__input_type_error') });
  placeForm.querySelectorAll('.popup__input-error').forEach(line => { line.classList.remove('popup__input-error_active') });
  placeForm.reset();
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