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
  createCard(card);
})

/*  Открытие/закрытие попапов */
function openPopup(popup) {
  popup.classList.add('popup_open');
};

function closePopup(popup) {
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

function render(card) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__tittle').textContent = card.name;
  let image = newCard.querySelector('.element__photo')
  image.alt = card.name;
  image.src = card.link;

  //  cardsContainer.prepend(newCard);

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
    popupImagePhoto.src = image.src;
    popupImagePhoto.alt = image.alt;
    popupImageName.textContent = image.alt;
    openPopup(popupImage);
  });
  return newCard;
}

function createCard(card) {
  cardsContainer.prepend(render(card));
}
/* открытие профиля */
buttonEditProfile.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputInterest.value = profileInterest.textContent;
  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
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

buttonSubmitProfileForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;/*замена имени на полученное*/
  profileInterest.textContent = inputInterest.value;/*замена активностей на полученные*/
  closePopup(popupEditProfile);
});

/* Создание новой карточки */

buttonSubmitAddCardForm.addEventListener('click', (e) => {
  e.preventDefault();
  createCard(buildInputObject());
  closePopup(popupAddPlace);
  document.querySelector('.popup__form_type_place').reset();
});

