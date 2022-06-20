import {Example} from "../interfaces/example";
import {Tree} from "./tree"
import {LeftLList} from "./leftList"
import {centralPanel} from "./centralPanel";
import {RightPanel} from "./rightPanel";
export class CentralPanel {
    readonly _container: HTMLDivElement;
    private centralPanelContent: any;
    private rightPanelContent: any;

    constructor(root: HTMLDivElement, data: Example[],) {
        this._container = document.createElement('div');
        const leftPanelVis = new LeftLList(this._container);
        this.centralPanelContent = new centralPanel(this._container)
        this.rightPanelContent = new RightPanel(this._container);
        this.render();
        const tree = new Tree();
        tree.createTree(data);
        const listNameExamples = this.createList(tree.roots, document.body);
        leftPanelVis.leftPanelList.append(listNameExamples);
        root.append(this._container);
    }

    get container() {
        return this._container;
    }


    private render() {
        this.container.classList.add('container');
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
                    li.style.listStyleImage = "url('../images/123.png')";
                }
                listNameExamples.appendChild(li);
                a.getElementsByClassName('items');

                a.onclick = (event:MouseEvent) => {
                    if (item.id) {
                        this.centralPanelContent.centerElemContent.textContent = item.text;
                        this.rightPanelContent.rightElemContent.textContent = item.description;
                    }
                    if(div.style.display === 'none') {
                        div.style.display = 'block';
                    } else {
                        div.style.display = 'none';
                    }
                }
                // if(item.children) {
                //     li.style.content = '\25ba';
                // } else {
                //     li.style.content = '';
                // }

            }
        )

        el.appendChild(listNameExamples);
        return listNameExamples;
    }
    public downloadClick() {

    }


}
