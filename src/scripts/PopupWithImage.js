import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectors) {
        super(selectors);
        this._popupPlaceName = this._popup.querySelector('.popup__place-name');
        this._popupPlaceImage = this._popup.querySelector('.popup__place-image');
    }

    open({ name, link }) {
        super.open();

        this._popupPlaceName.textContent = name;
        this._popupPlaceImage.src = link;
        this._popupPlaceImage.alt = name;
    }

}