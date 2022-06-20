export class RightPanel {
    public rightElem: HTMLDivElement;
    public rightElemContent: HTMLPreElement;
    constructor(container: HTMLDivElement) {
        this.rightElem = document.createElement('div');
        this.rightElemContent = document.createElement('pre');
        this.render();
        container.append(this.rightElem);
    }
    private render() {
        this.rightElem.classList.add('right_panel_elem');
        this.rightElemContent.classList.add('right_elem_content');
        this.rightElem.appendChild(this.rightElemContent);
    }
}