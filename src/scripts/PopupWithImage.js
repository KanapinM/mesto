import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectors) {
        super(selectors);
    }

    open({ name, link }) {
        super.open();

        this._popup.querySelector('.popup__place-name').textContent = name;
        this._popup.querySelector('.popup__place-image').src = link;
        this._popup.querySelector('.popup__place-image').alt = name;
    }
}