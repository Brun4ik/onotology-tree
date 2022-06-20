import {Example} from "../interfaces/example";
import {Tree} from "./tree"

export class CentralPanel {
    readonly _container: HTMLDivElement;
    public leftPanel: HTMLDivElement;
    public inputElem: HTMLInputElement;
    public centerElemContent: HTMLPreElement;
    public leftPanelList: HTMLDivElement;
    public centerElem: HTMLDivElement;
    public rightElem: HTMLDivElement;
    public rightElemContent: HTMLPreElement;

    constructor(root: HTMLDivElement, data: Example[],) {
        this._container = document.createElement('div');
        this.leftPanel = document.createElement('div');
        this.inputElem = document.createElement('input');
        this.inputElem.value = '';
        this.centerElem = document.createElement('div');
        this.leftPanelList = document.createElement('div');
        this.rightElem = document.createElement('div');
        this.centerElemContent = document.createElement('pre');
        this.rightElemContent = document.createElement('pre');
        this.render();
        const tree = new Tree();
        tree.createTree(data);
        const listNameExamples = this.createList(tree.roots, document.body);
        this.leftPanelList.append(listNameExamples);

        root.append(this._container);
    }

    get container() {
        return this._container;
    }


    private render() {
        this.container.classList.add('container');
        this.leftPanel.classList.add('left_panel');
        this.container.appendChild(this.leftPanel);

        this.centerElem.classList.add('center_elem');
        this.container.appendChild(this.centerElem);

        this.leftPanelList.classList.add('left_Panel_List');
        this.leftPanel.appendChild(this.leftPanelList);

        this.rightElem.classList.add('right_panel_elem');
        this.container.appendChild(this.rightElem);

        this.centerElemContent.classList.add('v');
        this.centerElemContent.id = 'center_elem';
        this.centerElem.appendChild(this.centerElemContent);

        this.rightElemContent.classList.add('right_elem_content');
        this.rightElem.appendChild(this.rightElemContent);
    }


    private hasChildren(data: Example[]) {
        let chi: boolean
        data.forEach(item => {
            if(item.children) {
                return chi = true;
            } else {
                return chi = false;
            }
        })
    }

    private createList(data: Example[], el: any): HTMLElement {
        const listNameExamples = document.createElement('ul')

        data.forEach(item => {
                let li = document.createElement('li')
                let a = document.createElement('a')
                let div: HTMLElement;
                li.classList.add('liElem')
                a.appendChild(document.createTextNode(item.name));
                a.classList.add('items');
                li.appendChild(a);
                if(item.children){
                    div = document.createElement('div');
                    div.classList.add('childEls')
                    this.createList(item.children, div);
                    li.appendChild(div);
                }
                listNameExamples.appendChild(li);
                a.getElementsByClassName('items');

                a.onclick = (event:MouseEvent) => {
                    if (item.id) {
                        this.centerElemContent.textContent = item.text;
                        this.rightElemContent.textContent = item.description;
                    }
                    if(div.style.display === 'none') {
                        div.style.display = 'block';
                    } else {
                        div.style.display = 'none';
                    }
                }

            }
        )

        el.appendChild(listNameExamples);
        return listNameExamples;
    }
    public downloadClick() {

    }


}
