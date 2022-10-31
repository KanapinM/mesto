import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selectors, submitHandler) {
        super(selectors);
        this._form = document.querySelector(selectors.popupForm);
        this._submitHandler = submitHandler;
        this._inputElements = this._form.querySelectorAll('.popup__input');

    }


    getInputValues() {
        const formDataObject = {};
        this._inputElements.forEach((input) => {
            formDataObject[input.name] = input.value;
        })

        return formDataObject;
    }

    _replaceForm = (e) => {
        e.preventDefault();
        this._submitHandler(this.getInputValues());

        this.close();
    }

    setEventListenners() {
        this._form.addEventListener('submit', this._replaceForm);
        super.setEventListenners();

    }


    close() {
        super.close();
        this._form.removeEventListener('submit', this._replaceForm);
        this._form.reset();
    }
}