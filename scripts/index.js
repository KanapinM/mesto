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

const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');


/*  Рендер первоначальных карточек */
initialCards.forEach((card) => {
  renderCard(card);
})

/*  Открытие/закрытие попапов */
function openPopup(popup) {
  popup.classList.add('popup_open');
  const closeListenerEscape = function (e) {
    if (e.key === "Escape") {
      closePopup(popup, closeListenerEscape);
    }
  };
  document.addEventListener('keydown', closeListenerEscape);

  const closeListenerOverlay = function (evt) {
    if (evt.target === (evt.target).closest('.popup_open')) {
      closePopup(popup, closeListenerOverlay);
    }
  };
  document.addEventListener('click', closeListenerOverlay);
};

function closePopup(popup, closeListenerEscape, closeListenerOverlay) {
  document.removeEventListener('keydown', closeListenerOverlay);
  document.removeEventListener('keydown', closeListenerEscape);
  popup.classList.remove('popup_open');
};

/*  Рендер  карточек */

function buildInputObject() {
  const objectCard = {
    name: inputPlace.value,
    link: inputPhoto.value
  }

  return objectCard;
}

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__tittle').textContent = card.name;
  const image = newCard.querySelector('.element__photo')
  image.alt = card.name;
  image.src = card.link;

  /* Удаление карточки */

  const buttonDelete = newCard.querySelector('.element__delete-button')
  buttonDelete.addEventListener('click', () => {
    newCard.remove();
  })

  /* Лайк карточки */

  const buttonLike = newCard.querySelector('.element__like');
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('element__like_active');
  });

  /*  Открытие/закрытие карточки во всплывающем окне */

  image.addEventListener('click', () => {
    popupImagePhoto.src = card.link;
    popupImagePhoto.alt = card.name;
    popupImageName.textContent = card.name;
    openPopup(popupImage);
  });
  return newCard;
}

function renderCard(card) {
  cardsContainer.prepend(createCard(card));
}
/* открытие профиля */
buttonEditProfile.addEventListener('click', () => {
  buttonSubmitProfileForm.classList.add('popup__submit-button_inactive');
  inputName.value = profileName.textContent;
  inputInterest.value = profileInterest.textContent;
  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  buttonSubmitAddCardForm.classList.add('popup__submit-button_inactive');
  placeForm.reset();
  openPopup(popupAddPlace);
});

popupCloseButtonImage.addEventListener('click', () => {
  closePopup(popupImage);
});
popupCloseButtonProfile.addEventListener('click', () => {
  console.log(popupEditProfile.closest('.popup__container'));
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
  //  document.querySelector('.popup__form_type_place').reset();
});





