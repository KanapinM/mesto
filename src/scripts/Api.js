export class Api {
    #onResponce(responce) {
        if (responce.ok) {
            return responce.json();
        }
        return Promise.reject(console.error(`Возникла ошибка, код - ${responce.status}`));
    }

    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }

    editUserData(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data),
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }

    changeAvatar(url) {
        // console.log(url);
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
            }),
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    };

    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        })
            .then((responce) => {
                // console.log(data);
                return this.#onResponce(responce);
            })
    }

    removeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }

    likeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }

    unlikeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    }
}