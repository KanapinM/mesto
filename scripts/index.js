const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const edit = document.querySelector('.profile__edit-button');
const add = document.querySelector('.profile__add-button');
const like = document.querySelector('.element__like');


const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const profileForm = document.querySelector('.popup__form_type_profile');/*индивидуализирую форм, const popupForm = document.querySelector('.popup__form');*/ 
const popupCloseButton = document.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputInterest = document.querySelector('.popup__input_type_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputPhoto = document.querySelector('.popup__input_type_photo');
const elemetTitle = document.querySelector('.element__tittle');
const elementPhoto = document.querySelector('.element__photo');


const container = document.querySelector('.element');


function openPopup(popup) {
    popup.classList.add('popup_open'); /*открыть попап*/
};

function closePopup() {
    popup.classList.remove('popup_open');/*закрыть попап*/
};

function editProfile() {
    openPopup(popupEditProfile);
    inputName.value = profileName.textContent;/*присваивание имени*/
    inputInterest.value = profileInterest.textContent;/*присваивание активностей*/
};

function submitForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;/*замена имени на полученное*/
    profileInterest.textContent = inputInterest.value;/*замена активностей на полученные*/
    closePopup();
};

function addPlace() {
    openPopup(popupAddPlace);
};

function createPlace(e) {
    e.preventDefault();
    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    inputPlace.value = elementTitle.textContent;/*присваивание имени*/
    inputPhoto.value = elementPhoto.textContent;/*присваивание активностей*/
};


function pressLike() {
    like.classList.add('element__like-active');   
};

edit.addEventListener('click', () => {
    editProfile();
});

add.addEventListener('click', () => {
    addPlace();
});

like.addEventListener('click', pressLike);
popupCloseButton.addEventListener('click', closePopup);
profileForm.addEventListener('submit', submitForm);/*было popupForm.addEventListener('submit', submitForm);*/
