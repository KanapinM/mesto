import { initialCards, cardsContainer, buttonEditProfile, buttonAddCard, popupEditProfile, profileForm, placeForm, profileName, profileInterest, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, validationConfig } from '../scripts/constants.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import './index.css';

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


function handleFormSubmit(formDataObject) {
  section.addItem(createCard(formDataObject));
};
const popupAddCard = new PopupWithForm(popupSelectorsAddCard, handleFormSubmit);
popupAddCard._setEventListenner();


const popupUserInfo = new PopupWithForm(popupUserInfoSelectors);
const userInfo = new UserInfo({ profileName, profileInterest });


buttonEditProfile.addEventListener('click', () => {
  userInfo.getUserInfo();
  profileFormValidator.removeInputError();
  profileFormValidator.toggleButtonState();
  popupUserInfo.open(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  placeFormValidator.toggleButtonState();
  placeFormValidator.removeInputError();
  popupAddCard.open(popupSelectorsAddCard.popup);
});

/*  Редактирование профиля */

profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupUserInfo.getInputValues());
  popupUserInfo.close(popupEditProfile);
});


const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();