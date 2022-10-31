export { apiConfig, initialCards, cardsContainer, buttonEditProfile, buttonAddCard, avatarImage, profileForm, placeForm, avatarForm, profileName, profileInterest, inputName, inputInterest, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAvatarSelectors, validationConfig };
const initialCards = [
    {
        name: 'Москва',
        link: 'https://doninturflot.com/upload/iblock/3ac/u4cxwquh2sh7zo4kngfn26c8tgsuhjxw/moscow3.jpg'
    },
    {
        name: 'Казань',
        link: 'https://thumbs.dreamstime.com/b/дворец-хуторянин-в-казань-республика-tatarstan-26347233.jpg'
    },
    {
        name: 'Карелия',
        link: 'https://russia.meteors.ru/component/ajax/?p=image&src=WyJpbWFnZXNcL2phdG9tc1wvdG91cnNcL2Rlc3lhdC1jaHVkZXMta2FyZWxpaVwvMTYzNDA0NWFiZTFkNGRhYWIzNWVkMTc4YzI3MDdlYjUuanBlZyIsW1sidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&hash=a724ca3f6828434c5864f63af6133c38'
    },
    {
        name: 'Дагестан',
        link: 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/7f19a29e-d1f2-11ec-a383-ea308159fb4d.1600x900.jpeg'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://static.tildacdn.com/tild6566-3865-4936-a165-666130613164/WhatsApp_Image_2022-.jpeg'
    },
    {
        name: 'Карачаевск',
        link: 'https://gorodarus.ru/images/karachaevsk/karachaevsk4.jpg'
    }
];

const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: 'e0b445b1-a635-48e2-bbd4-c08ec3e337e5',
        'Content-Type': 'application/json'
    },
}

const cardsContainer = document.querySelector('.elements');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const profileForm = document.querySelector('.popup__form_type_profile');
const placeForm = document.querySelector('.popup__form_type_place');
const avatarForm = document.querySelector('.popup__form_type_avatar');

const profileName = document.querySelector('.profile__name');
const profileInterest = document.querySelector('.profile__interest');

const inputName = document.querySelector('.popup__input_type_name');
const inputInterest = document.querySelector('.popup__input_type_interest');

const avatarImage = document.querySelector('.profile__avatar');

const selectors = {
    template: '.element-template'
}
const popupSelectorsImage = {
    popup: 'popup_type_image',
    popupOpenedClass: 'popup_open'
}
const popupSelectorsAddCard = {
    popup: 'popup_type_add-place',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_place'
}
const popupUserInfoSelectors = {
    popup: 'popup_type_edit-profile',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_profile'
}
const popupAvatarSelectors = {
    popup: 'popup_type_change_avatar',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_avatar'
}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    error: '.popup__input-error'
};

