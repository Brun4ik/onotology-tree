import { HeaderComponent } from "./components/header-component";
import { CentralPanel } from "./components/CentralPanel_component";
import {Example} from "./interfaces/example";
//import { appendChildrenDOM } from "./components/appendChildrenDOM";


export class App {

    async init(root: HTMLDivElement, data: Example[]) {
        console.log(data)
        const headerBlock = new HeaderComponent(root);
        const container = new CentralPanel(root, data);

    }
}



