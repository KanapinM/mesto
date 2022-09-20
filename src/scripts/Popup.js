export class Popup {
    constructor(selectors) {
        this.selectors = selectors;
        this._popup = document.querySelector(`.${this.selectors.popup}`);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this.close()
        }
    };

    _closeByOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close()
        }
    };

    _closeByButton = () => {
        this.close();
    }

    open() {
        this._popup.classList.add(this.selectors.popupOpenedClass);
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._closeByOverlay);
        this._popupCloseButton.addEventListener('click', this._closeByButton);
    }

    close() {
        this._popup.removeEventListener('click', this._closeByOverlay);
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove(this.selectors.popupOpenedClass);
        this._popupCloseButton.removeEventListener('click', this._closeByButton);
    }

    setEventListenner() {

    }
}