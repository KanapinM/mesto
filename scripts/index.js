const edit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupCloseButton = document.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputInterest = document.querySelector('.popup__input_type_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');


function openPopup() {
    popup.classList.add('popup_open'); /*открыть попап*/
}

function closePopup() {
    popup.classList.remove('popup_open');/*закрыть попап*/
}

function editProfile() {
    openPopup();
    inputName.value = profileName.textContent;/*присваивание имени*/
    inputInterest.value = profileInterest.textContent;/*присваивание активностей*/
}

function submitForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;/*замена имени на полученное*/
    profileInterest.textContent = inputInterest.value;/*замена активностей на полученные*/
    closePopup();
}

edit.addEventListener('click', editProfile);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);
