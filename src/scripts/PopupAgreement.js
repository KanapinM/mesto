import { Popup } from "./Popup.js";

export class PopupAgreement extends Popup {
    constructor(popup, data) {
        super(popup);
        this._agreementSubmitButton = this._popup.querySelector('.popup__submit-button_type_agreement');
        this._data = data;
    }

    open() {
        super.open()
        //     this.card = card;
        //     this.id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        // this._acceptButton.addEventListener('click', () => {
        //     this._callback(this.card, this.id);
        // });
    }
}