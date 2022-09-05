export class Card {

    constructor(name, link, selectors, openPopup) {
        this._name = name;
        this._link = link;;
        this._selectors = selectors;
        this._template = document.querySelector(selectors.template).content;
        this.openPopup = openPopup;
        this._popupImage = document.querySelector('.popup_type_image')
        this._popupPlaceName = this._popupImage.querySelector('.popup__place-name');
        this._popupPlaceImage = this._popupImage.querySelector('.popup__place-image');
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

        /*  Открытие/закрытие карточки во всплывающем окне */
        this._elementPhoto.addEventListener('click', () => {
            this.openPopup(this._popupImage);
            this._popupPlaceName.textContent = this._name;
            this._popupPlaceImage.src = this._link;
            this._popupPlaceImage.alt = this._name;
        });
    }

    generateCard() {
        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

}