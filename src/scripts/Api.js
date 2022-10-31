export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`)
            .then((responce) => {
                console.log(responce);
            })
    }

    // getInitialCards() {
    //     return fetch(`${this._baseUrl}/cards`, {
    //         method: 'GET', // GET - дефолтный метод отправки. Можно было и не указывать.
    //         headers: this._headers,
    //     }).then((res) => {
    //         if (this._checkRequestResult(res)) {
    //             return res.json();
    //         }
    //         return Promise.reject(console.log(`Что-то пошло не так с запросом к странице ${this._baseUrl}/cards`));
    //     });
    // }
}