const element = document.querySelector('.element');
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

function addPlace() {
    openPopup(popupAddPlace);
};

function renderItem(text, href) {
    const cardTemplate = document.querySelector('.element-template').content;/*дубль кода ниже */

    const newElement = cardTemplate.querySelector.cloneNode(true);
    newTitle.querySelector('.element__tittle').innerText = text;
    newPhoto.querySelector('.element__photo').innerText = href;
    element.appendChild(cardElement);
//    elements.insertAdjacentHTML('afterbegin', `
//            <article class="element">
//                 <button type="button" aria-label="delete" class="element__delete-button"></button>
//                 <img class="element__photo" src=${href} alt="#">
//                  <div class="element__place">
//                      <h2 class="element__tittle">${text}</h2>
//                      <button type="button" aria-label="like" class="element__like element__like-disabled"></button>
//                  </div>
//            </article>
//                    `); 
};

function createPlace(e) {
    e.preventDefault();
    renderItem(inputPlace.value, inputPhoto.value);
//    const cardTemplate = document.querySelector('.element-template').content;/*работающее с хтмл положение*/
//    inputPlace.value = elementTitle.textContent;/*присваивание имени*/
//    inputPhoto.value = elementPhoto.textContent;/*присваивание активностей*/
    closePopup(popupAddPlace);
    console.log(1);
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

function deleteOnePlace(e) { if 
    (e.target.matches('.element__delete-button'))
    e.target.closest('element')
    element.remove();
    console.log(1);
};


edit.addEventListener('click', () => {
    editProfile();
});

add.addEventListener('click', () => {
    addPlace();
});

//like.addEventListener('click', activeLike);
popupCloseButtonProfile.addEventListener('click', closePopup);
popupCloseButtonPlace.addEventListener('click', closePopup);
delteButton.addEventListener('click', deleteOnePlace);

profileForm.addEventListener('submit', submitForm);/*было popupForm.addEventListener('submit', submitForm);*/
placeForm.addEventListener('submit', createPlace);