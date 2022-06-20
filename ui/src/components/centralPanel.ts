export class CentralPanel {
    public centerElemContent: HTMLPreElement;
    public centerElem: HTMLDivElement;

    constructor(container: HTMLDivElement) {
        this.centerElem = document.createElement('div');
        this.centerElemContent = document.createElement('pre');
        this.render();
        container.append(this.centerElem);
    }

    private render() {
        this.centerElem.classList.add('center_elem');
        this.centerElemContent.id = 'center_elem';
        this.centerElem.appendChild(this.centerElemContent);

    }
}