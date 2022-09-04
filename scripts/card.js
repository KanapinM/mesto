

export class Card {

    constructor(name, link, selectors, openPopup) {
        this._name = name;
        this._link = link;;
        this._selectors = selectors;
        this._template = document.querySelector(selectors.template).content;
        this.openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = this._template.querySelector('.element').cloneNode(true);
        return cardElement;
    }


    _setEventListeners() {
        /* Удаление карточки */
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._element.remove();
        })


        /* Лайк карточки */
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._element.querySelector('.element__like').classList.toggle('element__like_active');
        });


        /*  Открытие/закрытие карточки во всплывающем окне */
        this._element.querySelector('.element__photo').addEventListener('click', () => {
            document.querySelector('.popup__place-name').textContent = this._name;
            document.querySelector('.popup__place-name').alt = this._name;
            document.querySelector('.popup__place-image').src = this._link;
            this.openPopup(document.querySelector('.popup_type_image'));
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__tittle').alt = this._name;
        this._element.querySelector('.element__tittle').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

}