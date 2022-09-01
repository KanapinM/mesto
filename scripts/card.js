export class Card {

    static _template = document.querySelector('.element-template').content;

    constructor() {
        console.log(123);
    }

    createCard() {
        this._view = Card._template.querySelector('.element').cloneNode(true);
        newCard.querySelector('.element__tittle').textContent = card.name;
        const image = newCard.querySelector('.element__photo')
        image.alt = card.name;
        image.src = card.link;

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
            popupImagePhoto.src = card.link;
            popupImagePhoto.alt = card.name;
            popupImageName.textContent = card.name;
            openPopup(popupImage);
        });
        return this._view;
    }
}