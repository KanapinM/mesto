import { Popup } from "./Popup.js";

export class PopupAgreement extends Popup {
    constructor(popup, agree) {
        super(popup);
        this._agreementSubmitButton = this._popup.querySelector('.popup__submit-button_type_agreement');
        this._agree = agree;
        this._agree = this._agree.bind(this);
    }

    open(card, id) {
        super.open()
        this.card = card;
        this.id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._agreementSubmitButton.addEventListener('click', () => {
            this._agree(this.card, this.id);
        });
    }
}