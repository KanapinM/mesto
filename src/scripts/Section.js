export class Section {
    constructor({ cards, renderer }, containerSelector) {
        this._container = containerSelector;
        this._renderer = renderer;
        this._cards = cards;
    }

    addItem(node) {
        this._container.prepend(node);
    }

    renderItems() {
        // dataArray.reverse();
        this._cards.forEach(dataItem => {
            this._renderer(dataItem);
        });
    }
}