import { Popup } from "./Popup.js";

export class PopupAgreement extends Popup {
    constructor(selectors, answer) {
        super(selectors);
        this._agreementSubmitButton = this._popup.querySelector('.popup__submit-button_type_agreement');
        this._answer = answer;
    }

    open(item, id) {
        super.open()
        this.item = item;
        this.id = id;
    }

    setEventListeners() {
        super.setEventListeners();

        this._agreementSubmitButton.addEventListener('click', () => {
            this._answer(this.item, this.id);
        });

    }
}
