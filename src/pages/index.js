import { apiConfig, cardsContainer, buttonEditProfile, buttonAddCard, buttonSubmitProfile, buttonSubmitCard, buttonSubmitAvatar, avatar, avatarForm, profileForm, placeForm, profileName, profileAbout, inputName, inputAbout, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAvatarSelectors, popupAgreementSelectors, validationConfig } from '../scripts/constants.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupAgreement } from '../scripts/PopupAgreement.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import './index.css';
import { Api } from '../scripts/Api.js';


const userInfo = new UserInfo({ profileName, profileAbout, avatar });///
function setTextForButton(submitButton, text) {
  submitButton.textContent = text;
}

const section = new Section(renderer, cardsContainer)
function renderer(data) {
  section.addItem(createCard(data));
}

const api = new Api(apiConfig);


function createCard(data) {
  const newCard = new Card(data, selectors, handleCardClick, handleRemoveCard, handleAddlike, handleRemovelike, userInfo.getUserId());
  const cardElement = newCard.generateCard();
  return cardElement;
}

function handleCardClick(data) {
  popupImage.open(data);
}
function handleRemoveCard(card, cardId) {
  popupAgreement.open(card, cardId);
}
function handleAddlike(cardId) {
  return api.likeCard(cardId);
}
function handleRemovelike(cardId) {
  return api.unlikeCard(cardId);
}


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
      // avatar.style.backgroundImage = `url('${userInfo.getUserAvatar()}')`;
      return [user, cards];
    })
    .catch((err) => console.log(err))
    .then(([user, cards]) => {
      section.renderItems(cards);
    })
    .catch((err) => console.log(err));
}
downloadPage();


const popupImage = new PopupWithImage(popupSelectorsImage);

const popupAddCard = new PopupWithForm(popupSelectorsAddCard, handleFormCardSubmit);
function handleFormCardSubmit(formDataObject) {
  setTextForButton(buttonSubmitCard, 'Сохранение...');
  api.addCard(formDataObject)
    .then(function (formDataObject) {
      section.addItem(createCard(formDataObject))
      popupAddCard.close();
    })
    .catch(function (err) {
      console.error('Ошибка при добавлении карточки', err);
    })
    .finally((res) => setTextForButton(buttonSubmitCard, 'Сохранить'));
};

const popupUserInfo = new PopupWithForm(popupUserInfoSelectors, handleFormInfoSubmit);
function handleFormInfoSubmit(userData) {
  setTextForButton(buttonSubmitProfile, 'Сохранение...');
  api.editUserData(userData)
    .then(function (userData) {
      userInfo.setUserInfo(userData);
      popupUserInfo.close();
    })
    .catch(function (err) {
      console.error('Ошибка при изменении данных о пользователе', err);
    })
    .finally((res) => setTextForButton(buttonSubmitProfile, 'Сохранить'));
}

const popupChangeAvatar = new PopupWithForm(popupAvatarSelectors, handleFormAvatar);
function handleFormAvatar(url) {
  setTextForButton(buttonSubmitAvatar, 'Сохранение...');
  api.changeAvatar(url.link)
    .then(function (responce) {
      userInfo.setUserInfo(responce);

      popupChangeAvatar.close();
    })
    .catch(function (err) {
      console.error('Ошибка при изменении аватара пользователя', err);
    })
    .finally((response) => setTextForButton(buttonSubmitAvatar, 'Сохранить'));
}

const popupAgreement = new PopupAgreement(popupAgreementSelectors, removeCardCallback)
function removeCardCallback(card, cardId) {
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


const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();