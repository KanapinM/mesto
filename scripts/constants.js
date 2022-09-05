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



// export class Card {

//     constructor(name, link, selectors, openPopup) {
//         this._name = name;
//         this._link = link;;
//         this._selectors = selectors;
//         this._template = document.querySelector(selectors.template).content;
//         this.openPopup = openPopup;
//         this._popupImage = document.querySelector('.popup_type_image')
//         this._elementPhoto = this._template.querySelector('.element__photo');
//         this._elementTitle = this._template.querySelector('.element__tittle')
//         this._placeName = this._popupImage.querySelector('.popup__place-name');
//         this._placeImage = this._popupImage.querySelector('.popup__place-image');

//     }



//     _getTemplate() {
//         const cardElement = this._template.querySelector('.element').cloneNode(true);
//         return cardElement;
//     }


//     _setEventListeners() {
//         /* Удаление карточки */
//         this._element.querySelector('.element__delete-button').addEventListener('click', () => {
//             this._element.remove();
//         })


//         /* Лайк карточки */
//         this._element.querySelector('.element__like').addEventListener('click', () => {
//             this._element.querySelector('.element__like').classList.toggle('element__like_active');
//         });


//         /*  Открытие/закрытие карточки во всплывающем окне */
//         this._element.querySelector('.element__photo').addEventListener('click', () => {
//             this._placeName.textContent = this._name;
//             this._placeImage.alt = this._name;
//             this._placeImage.src = this._link;
//             this.openPopup(document.querySelector('.popup_type_image'));
//         });
//     }

//     generateCard() {
//         this._element = this._getTemplate();
//         this._elementPhoto.src = this._link;
//         this._elementPhoto.alt = this._name;
//         this._element.querySelector('.element__tittle').textContent = this._name;
//         this._setEventListeners();
//         return this._element;
//     }

// }
