import { Example } from "../interfaces/example";
export declare class CentralPanel {
    readonly _container: HTMLDivElement;
    leftPanel: HTMLDivElement;
    inputElem: HTMLInputElement;
    centerElemContent: HTMLPreElement;
    leftPanelList: HTMLDivElement;
    centerElem: HTMLDivElement;
    rightElem: HTMLDivElement;
    rightElemContent: HTMLPreElement;
    roots: any;
    constructor(root: HTMLDivElement, data: Example[]);
    get container(): HTMLDivElement;
    private render;
    private createTree;
    private hasChildren;
    private createList;
    downloadClick(): void;
}
//# sourceMappingURL=CentralPanel_component.d.ts.map