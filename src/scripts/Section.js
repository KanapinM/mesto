export class Section {
    constructor(renderer, containerSelector) {
        this._container = containerSelector;
        this._renderer = renderer;
    }

    addItem(node) {
        this._container.prepend(node);
    }

    renderItems(dataArray) {
        dataArray.reverse();
        dataArray.forEach(dataItem => {
            this._renderer(dataItem);
        });
    }
}