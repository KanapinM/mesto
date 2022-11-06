export class UserInfo {
    constructor({ profileName, profileAbout, avatar }) {
        this._name = profileName;
        this._about = profileAbout;
        this._id = '';
        this._avatar = avatar;

    }

    getUserId() {
        return this._id;
    }

    getUserAvatar() {
        return this._avatar;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            id: this._id,
            avatar: this._avatar
        }
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._about.textContent = formData.about;
        this._id = formData.id;
        this._avatar.style.backgroundImage = `url('${formData.avatar}')`;
    }


}