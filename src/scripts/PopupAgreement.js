import { Popup } from "./Popup.js";

export class PopupAgreement extends Popup {
    constructor(selectors, answer) {
        super(selectors);
        this._agreementSubmitButton = this._popup.querySelector('.popup__submit-button_type_agreement');
        this._answer = answer;
        // this._answer = this._answer.bind(this);
    }

    open(card, id) {
        super.open()
        this.card = card;
        this.id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        // this._agreementSubmitButton.addEventListener('click', (evt) => {
        //     if (evt.target === evt.currentTarget) {
        //         console.log(true);
        //     } else {
        //         console.log(false);
        //     }
        // })

        this._agreementSubmitButton.addEventListener('click', () => {
            this._answer(this.card, this.id);
        });


    }
}
