import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selectors, submitHandler) {
        super(selectors);
        this._form = document.querySelector(selectors.popupForm);
        this._submitHandler = submitHandler;
    }


    getInputValues() {
        const formDataObject = {};
        const inputElements = this._form.querySelectorAll('.popup__input');
        inputElements.forEach((input) => {
            formDataObject[input.name] = input.value;
        })

        return formDataObject;
    }

    _setEventListenner() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this.getInputValues());

            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}