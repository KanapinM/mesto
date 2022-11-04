import { apiConfig, /*initialCards,*/ cardsContainer, buttonEditProfile, buttonAddCard, buttonSubmitProfile, buttonSubmitCard, buttonSubmitAvatar, avatar, avatarForm, profileForm, placeForm, profileName, profileAbout, inputName, inputAbout, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAvatarSelectors, popupAgreementSelectors, validationConfig } from '../scripts/constants.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupAgreement } from '../scripts/PopupAgreement.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import './index.css';
import { Api } from '../scripts/Api.js';


const userInfo = new UserInfo({ profileName, profileAbout });///
function submitButtonText(submitButton, text) {
  submitButton.textContent = text;
}


const section = new Section(renderer, cardsContainer)
function renderer(data) {
  section.addItem(createCard(data));
}

const api = new Api(apiConfig);
// api.getInitialCards()
//   .then((data) => {
//     console.log(data);
//     section.renderItems(data);
//   })
//   .catch(function (err) {
//     console.error('Ошибка', err);
//   })

// console.log(api);

function createCard(data) {
  const newCard = new Card(data, selectors, handleCardClick, handleRemoveCard, handleAddlike, handleRemovelike, userInfo.getUserId());
  const cardElement = newCard.generateCard();
  return cardElement;
}

function handleCardClick(data) {
  popupImage.open(data);
}
function handleRemoveCard(card, cardId) {
  // console.log(cardId);
  popupAgreement.open(card, cardId);
  // api.removeCard(cardId);
  // card.remove(card, cardId);
}
function handleAddlike(cardId) {
  return api.likeCard(cardId);
}
function handleRemovelike(cardId) {
  return api.unlikeCard(cardId);
}




// Вариант
function downloadPage() {
  return Promise.all([api.getUserData(), api.getInitialCards()])
    .catch((err) => console.log(err))
    .then(([user, cards]) => {
      userInfo.setUserInfo({
        name: user.name,
        about: user.about,
        id: user._id,
        avatar: user.avatar,
      });
      avatar.style.backgroundImage = `url('${user.avatar}')`;
      return [user, cards];
    })
    .catch((err) => console.log(err))
    .then(([user, cards]) => {
      section.renderItems(cards);

      // return (cardList = new Section( { }, '.cards' ));
    })
    // .then((res) => res.addItems())
    .catch((err) => console.log(err));
}
downloadPage();




const popupImage = new PopupWithImage(popupSelectorsImage);

const popupAddCard = new PopupWithForm(popupSelectorsAddCard, handleFormCardSubmit);
function handleFormCardSubmit(formDataObject) {
  submitButtonText(buttonSubmitCard, 'Сохранение...');
  api.addCard(formDataObject)
    .then(function (formDataObject) {
      section.addItem(createCard(formDataObject))
    })
    .catch(function (err) {
      console.error('Ошибка при добавлении карточки', err);
    })
    .finally((res) => submitButtonText(buttonSubmitCard, 'Сохранить'));
};
console.log(userInfo);

const popupUserInfo = new PopupWithForm(popupUserInfoSelectors, handleFormInfoSubmit);
function handleFormInfoSubmit(userData) {
  submitButtonText(buttonSubmitProfile, 'Сохранение...');
  api.editUserData(userData)
    .then(function (userData) {
      // userInfo.setUserInfo(popupUserInfo.getInputValues(userData));***
      userInfo.setUserInfo(userData);
    })
    .catch(function (err) {
      console.error('Ошибка при изменении данных о пользователе', err);
    })
    .finally((res) => submitButtonText(buttonSubmitProfile, 'Сохранить'));
}

const popupChangeAvatar = new PopupWithForm(popupAvatarSelectors, handleFormAvatar);
function handleFormAvatar(url) {
  //  avatarImage.style.backgroundImage = 'popupChangeAvatar.getInputValues().link';***
  submitButtonText(buttonSubmitAvatar, 'Сохранение...');
  api.changeAvatar(url.link)
    .then(function (responce) {
      console.log(responce);
      avatar.style.backgroundImage = `url('${responce.avatar}')`;
      // avatar.style.backgroundImage = `url('${popupChangeAvatar.getInputValues(url).link}')`
    })
    .catch(function (err) {
      console.error('Ошибка при изменении аватара пользователя', err);
    })
    .finally((response) => submitButtonText(buttonSubmitAvatar, 'Сохранить'));
}


const popupAgreement = new PopupAgreement(popupAgreementSelectors, answer)
function answer(card, cardId) {
  api.removeCard(cardId);
  card.remove(card, cardId);
  popupAgreement.close();
}


popupAgreement.setEventListeners();

avatar.addEventListener('click', () => {
  avatarFormValidator.toggleButtonState();
  avatarFormValidator.removeInputError();
  popupChangeAvatar.open();
});

buttonEditProfile.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name;
  inputAbout.value = userInfo.getUserInfo().about;
  profileFormValidator.removeInputError();
  profileFormValidator.toggleButtonState();
  popupUserInfo.open();
});

buttonAddCard.addEventListener('click', () => {
  placeFormValidator.toggleButtonState();
  placeFormValidator.removeInputError();
  popupAddCard.open();
});


/*  Редактирование профиля */

// profileForm.addEventListener('submit', (evt) => {***
//   evt.preventDefault();***
//   userInfo.setUserInfo(popupUserInfo.getInputValues());***
//   popupUserInfo.close();***
// });


const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

// console.log(userInfo.getUserInfo());//
// section.renderItems(initialCards);***
