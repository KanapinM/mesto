const edit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const sumbit = document.querySelector('.popup__save-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__field_name');
const inputInterest = document.querySelector('.popup__field_interest');
const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');

function editProfileOnEnter(e) {
    if (e.key === 'Enter') {
        editProfile();
    }
    console.log(1);
}

function editProfile() {
    profileName.textContent = inputName.value;
    profileInterest.textContent = inputInterest.value;
    document.addEventListener('keydown', editProfileOnEnter);
    closePopup();
}


function openPopup() {
    popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', closePopupOnEsc);
}

function closePopup() {
    popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
    console.log(1);
}

edit.addEventListener('click', function () {
    openPopup();
});

popupCloseButton.addEventListener('click', function () {
    closePopup();
});

popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        closePopup();
    }
});

sumbit.addEventListener('click', function () {
    editProfile();
});

