import { apiConfig, /*initialCards,*/ cardsContainer, buttonEditProfile, buttonAddCard, avatar, avatarForm, profileForm, placeForm, profileName, profileAbout, inputName, inputAbout, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAvatarSelectors, validationConfig } from '../scripts/constants.js';
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
const api = new Api(apiConfig);

function downloadPage() {
  return Promise.all([api.getUserData(), api.getInitialCards()])
    .catch((err) => console.log(err))
    .then(([user, cards]) => {
      // debugger;
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
      // const array = cards.reverse(); // Разворачиваем массив, что бы новые карточки появлялись в начале.
      // console.log(array);
      console.log(cards);
      debugger;
      return (cardList = new Section(
        {
          cardsContainer,
          renderer: (item, cardsContainer) => {
            console.log(item);
            const card = new Card(
              item,
              selectors,

              //handleCardClick
              (data) => {
                popupImage.open(data);
              },

              // handleRemoveCard
              (cardId) => {
                api.removeCard(cardId);
              },


              // handleAddlike
              (cardId) => {
                return api.likeCard(cardId);
              },

              // handleRemovelike
              (cardId) => {
                return api.unlikeCard(cardId);
              },

              userInfo.getUserId()

            ).generateCard();

            cardsContainer.prepend(card);
          },
        }/*эта по-идее не нужна*/
      ));//точно остается
    })//точно остается
    .then((res) => res.renderItems())
    .catch((err) => console.log(err));
}

downloadPage();

// const section = new Section(cardsContainer, (data) => {
//   section.addItem(createCard(data))
// })

// const api = new Api(apiConfig);
// api.getInitialCards()
//   .then((data) => {
//     console.log(data);
//     section.renderItems(data);
//   })
//   .catch(function (err) {
//     console.error('Ошибка', err);
//   })

// console.log(api.getUserData());

// function createCard(data) {
//   const newCard = new Card(data, selectors, handleCardClick, handleRemoveCard, handleAddlike, handleRemovelike);
//   const cardElement = newCard.generateCard();
//   return cardElement;
// }

// function handleCardClick(data) {
//   popupImage.open(data);
// }
// function handleRemoveCard(cardId) {
//   // console.log(cardId);
//   api.removeCard(cardId);
// }
// function handleAddlike(cardId) {
//   // console.log(cardId);
//   return api.likeCard(cardId);
// }
// function handleRemovelike(cardId) {
//   // console.log(cardId);
//   return api.unlikeCard(cardId);
// }






const popupImage = new PopupWithImage(popupSelectorsImage);

const popupAddCard = new PopupWithForm(popupSelectorsAddCard, handleFormCardSubmit);
function handleFormCardSubmit(formDataObject) {
  api.addCard(formDataObject)
    .then(function (formDataObject) {
      section.addItem(createCard(formDataObject))
    })
    .catch(function (err) {
      console.error('Ошибка', err);
    })
};

const popupUserInfo = new PopupWithForm(popupUserInfoSelectors, handleFormInfoSubmit);
function handleFormInfoSubmit(userData) {
  console.log(userData);
  submitButtonText(buttonEditProfile, 'Сохранение...');
  console.log(buttonEditProfile);
  api.editUserData(userData)
    .then(function (userData) {
      // userInfo.setUserInfo(popupUserInfo.getInputValues(userData));***
      userInfo.setUserInfo(userData);
      console.log(userData);
    })
    .catch(function (err) {
      console.error('Ошибка', err);
    })
}

const popupChangeAvatar = new PopupWithForm(popupAvatarSelectors, handleFormAvatar);
function handleFormAvatar(url) {
  // console.log(url.link);***
  //  avatarImage.style.backgroundImage = 'popupChangeAvatar.getInputValues().link';***
  console.log(url.link);
  api.changeAvatar(url.link);
  //   .then(function (url) {***
  //     avatarImage.style.backgroundImage = popupChangeAvatar.getInputValues(url).link;***

  avatar.style.backgroundImage = `url('${popupChangeAvatar.getInputValues(url).link}')`;
  // avatar.style.backgroundImage = `popupChangeAvatar.getInputValues(url);****
  //   })
  //   .catch(function (err) {***
  //     console.error('Ошибка', err);***
  //   })***
  // console.log(`url('${popupChangeAvatar.getInputValues(url).link}')`);***
}


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
