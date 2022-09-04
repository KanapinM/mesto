export class FormValidator {

    constructor(validationConfig, formSelector) {
        this._validationConfig = validationConfig;
        this._formElement = formSelector;
    }

    _showInputError(errorMessage) {
        const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
        this._inputElement.classList.add(this._validationConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validationConfig.errorClass);
    };

    _hideInputError() {
        const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
        this._inputElement.classList.remove(this._validationConfig.inputErrorClass);
        errorElement.classList.remove(this._validationConfig.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity() {
        if (!this._inputElement.checkValidity()) {
            this._showInputError(this._inputElement.validationMessage);
        } else {
            this._hideInputError();
        }
    };

    _setEventListeners() {
        this._inputList = this._formElement.querySelectorAll(this._validationConfig.inputSelector);
        this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._inputElement = inputElement;
                this._checkInputValidity();
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };

    // _hasInvalidInput() {
    //     // return this._inputList.some((this._inputElement) => {
    //     return !this._inputElement.validity.valid;
    //     // });
    // };
    _disableSubmitButton() {
        this._buttonElement.setAttribute('disabled', 'disabled');
        this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
    }

    _enableSubmitButton() {
        this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState() {
        if (!this._formElement.checkValidity()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };


}