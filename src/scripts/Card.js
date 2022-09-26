export class Card {
    constructor({ data, handleCardClick }, selectors) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._selectors = selectors;
        this._template = document.querySelector(selectors.template).content;
        this.handleCardClick = handleCardClick;
        this._popupImage = document.querySelector('.popup_type_image');
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementTitle = this._element.querySelector('.element__tittle');
        this._buttonDelete = this._element.querySelector('.element__delete-button');
        this._buttonLike = this._element.querySelector('.element__like');
    }


    _getTemplate() {
        const cardElement = this._template.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        /* Удаление карточки */
        this._buttonDelete.addEventListener('click', () => {
            this._element.remove();
        })

        /* Лайк карточки */
        this._buttonLike.addEventListener('click', () => {
            this._buttonLike.classList.toggle('element__like_active');
        });

        this._elementPhoto.addEventListener('click', () => this.handleCardClick(this._data));
    }

    generateCard() {
        this._elementPhoto.src = this._data.link;
        this._elementPhoto.alt = this._data.name;
        this._elementTitle.textContent = this._data.name;
        this._setEventListeners();

        return this._element;
    }
}