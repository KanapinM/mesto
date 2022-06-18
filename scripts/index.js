const edit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupCloseButton = document.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__input_name');
const inputInterest = document.querySelector('.popup__input_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');


function openPopup() {
    popup.classList.add('popup_open');
}

function closePopup() {
    popup.classList.remove('popup_open');
}

function editProfile() {
    openPopup();
    inputName.value = profileName.textContent;
    inputInterest.value = profileInterest.textContent;
}

function sumbitForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileInterest.textContent = inputInterest.value;
    closePopup();
}

edit.addEventListener('click', editProfile);
popupCloseButton.addEventListener('click', closePopup);

popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        closePopup();
    }
});

popupForm.addEventListener('sumbit', sumbitForm);
