const initialCards = [
  {
    name: 'Москва',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/2472796/R_v9WXN-8LYsZS8UJ0IN2w4694/ocr'
  },
  {
    name: 'Казань',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/2101582/H0yZLleKYkZuNtcj48tW_A4669/ocr'
  },
  {
    name: 'Карелия',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/516813/EF-PmoItxIpcBD-BMbS4AA4647/ocr'
  },
  {
    name: 'Дагестан',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/1003516/-zMS2G57rBizXTVxoAqxpw4610/ocr'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/164193/BGoJv2o9bDd_TM-kFiYWbQ4585/ocr'
  },
  {
    name: 'Карачаевск',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/858759/sQpnJ9rcaOpxw6WJ1OauLw4020/ocr'
  }
];

const cards = document.querySelector('.elements');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('.popup__save-button');
const createButton = document.querySelector('.popup__create-button');



const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupImg = document.querySelector('.popup_type_img')
const profileForm = document.querySelector('.popup__form_type_profile');/*индивидуализирую форм, const popupForm = document.querySelector('.popup__form');*/
const placeForm = document.querySelector('.popup__form_type_place');
const popupCloseButtonProfile = document.querySelector('.popup__close-button_profile');
const popupCloseButtonPlace = document.querySelector('.popup__close-button_place');

const inputName = document.querySelector('.popup__input_type_name');
const inputInterest = document.querySelector('.popup__input_type_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputPhoto = document.querySelector('.popup__input_type_photo');
const cardTitle = document.querySelector('.element__tittle');
const cardPhoto = document.querySelector('.element__photo');
//const template = document.querySelector('.element-template');
const cardTemplate = document.getElementsByTagName('template')[0].content.children[0];


/* . Рендер первоначальных карточек */
initialCards.forEach((card) => {
  render(card);
})

/* 1. Открытие/закрытие попапов */
function openPopup(popup) {
  popup.classList.add('popup_open');
};

editButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

addButton.addEventListener('click', () => {
  openPopup(popupAddPlace);
});

function closePopup() {
  popupEditProfile.classList.remove('popup_open');
  popupAddPlace.classList.remove('popup_open');
  popupImg.classList.remove('popup_open');
};

popupCloseButtonProfile.addEventListener('click', closePopup);
popupCloseButtonPlace.addEventListener('click', closePopup);

/* 2. Редактирование профиля */

saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;/*замена имени на полученное*/
  profileInterest.textContent = inputInterest.value;/*замена активностей на полученные*/
  closePopup();
});

/* 3. Рендер  карточек */
function buildInputObject() {
  let object = {
    name: inputPlace.value,
    link: inputPhoto.value
  }
  console.log(object)
  return object;
}

function render(object) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__tittle').innerText = object.name;
  let img = newCard.querySelector('.element__photo')
  img.alt = object.name;
  img.src = object.link;
  cards.prepend(newCard);

  /* Удаление карточки */

  let deleteButton = newCard.querySelector('.element__delete-button')
  deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.remove();
  })

  /* . Лайк карточки */

  const likeButton = document.querySelector('.element__like');
  likeButton.addEventListener('click', () => {
    if (likeButton != document.querySelector('.element__like_active')) {
      likeButton.classList.add('element__like_active');
    } else {
      likeButton.classList.remove('element__like_active');
      likeButton.classList.add('element__like_disabled');
    }
  });


  img.addEventListener('click', () => {
    document.querySelector('.popup__place-img').src = img.src;
    document.querySelector('.popup__place-img').alt = img.alt;
    document.querySelector('.popup__place-name').innerText = img.alt;
    openPopup(popupImg);
  });

  const popupCloseButtonImg = document.querySelector('.popup__close-button_img');
  popupCloseButtonImg.addEventListener('click', closePopup);
}

/* 4. Создание новой карточки */

createButton.addEventListener('click', (e) => {
  e.preventDefault();
  render(buildInputObject());
  closePopup();
  inputPhoto.value = '';
  inputPlace.value = '';
  console.log(123);
});






/* 7. Открытие фотографии карточки во всплывающем окне */



console.log('asf');
//console.log(initialCards[1].name);
