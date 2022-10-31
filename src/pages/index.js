import { apiConfig, initialCards, cardsContainer, buttonEditProfile, buttonAddCard, avatarImage, avatarForm, profileForm, placeForm, profileName, profileInterest, inputName, inputInterest, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAvatarSelectors, validationConfig } from '../scripts/constants.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupAgreement } from '../scripts/PopupAgreement.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import './index.css';
import { Api } from '../scripts/Api.js';

const section = new Section(cardsContainer, (data) => {
  section.addItem(createCard(data))
})
section.renderItems(initialCards);


function handleCardClick(data) {
  popupImage.open(data);
}
function createCard(data) {
  const newCard = new Card({ data, handleCardClick }, selectors);
  const cardElement = newCard.generateCard();
  return cardElement;
}


const popupImage = new PopupWithImage(popupSelectorsImage);


function handleFormCardSubmit(formDataObject) {
  section.addItem(createCard(formDataObject));
};
const popupAddCard = new PopupWithForm(popupSelectorsAddCard, handleFormCardSubmit);
// popupAddCard.setEventListenner();

function handleFormInfoSubmit() {
  userInfo.setUserInfo(popupUserInfo.getInputValues());
}

function handleFormAvatar() {
  console.log(popupChangeAvatar.getInputValues());
  avatarImage.src = popupChangeAvatar.getInputValues().link;
  console.log(avatarImage.src);
}


const popupUserInfo = new PopupWithForm(popupUserInfoSelectors, handleFormInfoSubmit);
const userInfo = new UserInfo({ profileName, profileInterest });

const popupChangeAvatar = new PopupWithForm(popupAvatarSelectors, handleFormAvatar);

const api = new Api(apiConfig);
api.getInitialCards();

avatarImage.addEventListener('click', () => {
  avatarFormValidator.toggleButtonState();
  avatarFormValidator.removeInputError();
  popupChangeAvatar.open();
});

buttonEditProfile.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name;
  inputInterest.value = userInfo.getUserInfo().interest;
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

// profileForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   userInfo.setUserInfo(popupUserInfo.getInputValues());
//   popupUserInfo.close();
// });


const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();