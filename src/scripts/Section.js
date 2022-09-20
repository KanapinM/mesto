export class Section {
    constructor(containerSelector, renderer) {
        this._container = containerSelector;
        this._renderer = renderer;
    }

    addItem(node) {
        this._container.prepend(node);
    }

    renderItems(dataArray) {
        dataArray.forEach(dataItem => {
            this._renderer(dataItem);
        });
    }
}