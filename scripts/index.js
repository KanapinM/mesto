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

const element = document.querySelectorAll('.element');
const elements = document.querySelector('.elements');

const edit = document.querySelector('.profile__edit-button');
const add = document.querySelector('.profile__add-button');
const like = document.querySelector('.element__like');
const delteButton = document.querySelector('.element__delete-button');

const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
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
const elementTitle = document.querySelector('.element__tittle');
const elementPhoto = document.querySelector('.element__photo');
const elementTemplate = document.querySelector('.element-template').content;


function openPopup(popup) {
    popup.classList.add('popup_open'); /*открыть попап*/
};

function closePopup() {
    popupEditProfile.classList.remove('popup_open');/*закрыть попап*/
    popupAddPlace.classList.remove('popup_open');/*закрыть попап*/
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

function openPopupAddPlace() {
    openPopup(popupAddPlace);
};

//function placeInput(newPlace) {//test
//    createPlace(newPlace);//test
//    renderElement(newPlace);//test
//};//test

function renderElement(card) {


    elements.prepend(card);
    console.log(inputPhoto.value);

};

function createPlace(el) {    
    const newElement = elementTemplate.querySelector('.element').cloneNode(true);

    console.log(newElement);
    console.log(inputPlace.value);
//    newElement.querySelector('.element__photo').innerText = text;

    


//    newElement.querySelector('.element__photo').textContent = el.link;
//    newElement.querySelector('.element__tittle').textContent = el.name;
//    inputPlace.value = el.name;
//    inputPhoto.value = el.link;


//    let elementPhoto = newElement.querySelector('.element__photo');//test
//    let elementTittle = newElement.querySelector('.element__tittle');//test
//    elementTittle.textContent = el.name;//test
//    elementPhoto.src = el.link;//test
//    elementPhoto.alt = el.name;//test

    renderElement(newElement);//test
//    console.log(1);//test
//    return newElement;//test
};

function addNewElementPlace(evt) {
    evt.preventDefault();
//    inputPlace.value = placeForm.querySelector('.popup__input_type_photo').innerText;///

//    placeInput({name: inputPlace.value, link: inputPhoto.value});
    createPlace();
    closePopup(popupAddPlace);
    console.log(3);
};



//function activeLike() {
//        if (selectedLike) {
//        selectedLike.classList.add('element__like-active');
//    };
//    selectedLike = '.like';
//    selectedLike.classList.remove('element__like-active');
//    console.log(1); 
//    
//};

//function deleteOnePlace(e) { if 
//    (e.target.matches('.element__delete-button'))
//    e.target.closest('element')
//    element.remove();
//    console.log(1);
//};


edit.addEventListener('click', () => {
    editProfile();
});

add.addEventListener('click', () => {
    openPopupAddPlace();
});

//initialCards.forEach(renderElement);

//like.addEventListener('click', activeLike);
popupCloseButtonProfile.addEventListener('click', closePopup);
popupCloseButtonPlace.addEventListener('click', closePopup);
//delteButton.addEventListener('click', deleteOnePlace);

profileForm.addEventListener('submit', submitForm);/*было popupForm.addEventListener('submit', submitForm);*/
placeForm.addEventListener('submit', addNewElementPlace);