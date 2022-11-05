export class Card {
    constructor(data, selectors, handleCardClick, handleRemoveCard, handleAddlike, handleRemovelike, userId) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._likes = data.likes.length;
        this._userId = userId;

        this._selectorsTemplate = selectors.content;
        this.handleCardClick = handleCardClick;
        this._handleRemoveCard = handleRemoveCard;
        this._handleRemoveCard = handleRemoveCard.bind(this);

        this._handleAddlike = handleAddlike;
        this._handleAddlike = this._handleAddlike.bind(this);
        this._handleRemovelike = handleRemovelike;
        this._handleRemovelike = this._handleRemovelike.bind(this);
        this._hasLiked = this._liked();

        this._popupImage = document.querySelector('.popup_type_image');
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementTitle = this._element.querySelector('.element__tittle');

        this._buttonDelete = this._element.querySelector('.element__delete-button');
        this._buttonLike = this._element.querySelector('.element__like-button');
        this._likesScorer = this._element.querySelector('.cards__likes-scorer');
    }

    _liked() {
        return this._data.likes.some((score) => {
            return score._id === this._userId;
        })
    }

    addLike(amountLikes) {
        this._buttonLike.classList.add('element__like-button_active');
        this._likesScorer.textContent = amountLikes;
    }

    removeLike(amountLikes) {
        this._buttonLike.classList.remove('element__like-button_active');
        this._likesScorer.textContent = amountLikes;
    }



    _getTemplate() {
        const cardElement = this._selectorsTemplate.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._buttonDelete.addEventListener('click', () => {
            this._handleRemoveCard(this._element, this._cardId);
        });

        this._buttonLike.addEventListener('click', () => {
            // this._buttonLike.classList.toggle('element__like-button_active');
            if (this._hasLiked) {
                this._hasLiked = false;
                this._handleRemovelike(this._cardId).then((res) => this.removeLike(res.likes.length));
            } else {
                this._hasLiked = true;
                this._handleAddlike(this._cardId).then((res) => this.addLike(res.likes.length));

            }
        });

        this._elementPhoto.addEventListener('click', () => this.handleCardClick(this._data));
    }

    generateCard() {
        this._elementPhoto.src = this._data.link;
        this._elementPhoto.alt = this._data.name;
        this._elementTitle.textContent = this._data.name;
        this._setEventListeners();

        if (this._userId === this._cardOwnerId) {
            this._buttonDelete.classList.add('element__delete-button_active');
        };

        if (this._liked()) {
            this._buttonLike.classList.add('element__like-button_active');
        };

        if (this._data.likes) {
            this._likesScorer.textContent = this._likes;
        } else {
            this._likesScorer.textContent = 0;
        };
        return this._element;
    }
}





