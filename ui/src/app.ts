
import {ExampleId} from "./interfaces/exampleId";
import {HeaderComponent} from "./components/HeaderComponent";
import {Example} from "./interfaces/example";
import {ContainerComponent} from "./components/ContainerComponent";
//import { appendChildrenDOM } from "./components/appendChildrenDOM";


export class App {

    async init(root: HTMLDivElement, data: Example[]) {
        console.log(data)
        const headerBlock = new HeaderComponent(root);
        const container = new ContainerComponent(root, data);

    }
}



