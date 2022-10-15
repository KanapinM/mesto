export class UserInfo {
    constructor({ profileName, profileInterest }) {
        this._name = profileName;
        this._interest = profileInterest;
        // this._inputName = document.querySelector('.popup__input_type_name');
        // this._inputInterest = document.querySelector('.popup__input_type_interest');
    }


    getUserInfo() {
        return {
            name: this._name.textContent,
            interest: this._interest.textContent
        }
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._interest.textContent = formData.interest;
    }

}