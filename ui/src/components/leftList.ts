export class LeftLList {
    public leftPanel: HTMLDivElement;
    public leftPanelList: HTMLDivElement;

    constructor(container: HTMLDivElement) {
        this.leftPanel = document.createElement('div');
        this.leftPanelList = document.createElement('div');
        this.render();
        container.append(this.leftPanel);
    }

    private render() {
        this.leftPanel.classList.add('left_panel');
        this.leftPanelList.classList.add('left_Panel_List');
        this.leftPanel.appendChild(this.leftPanelList);
    }


}