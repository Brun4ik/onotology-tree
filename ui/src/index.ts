import { App } from "./app";
import './style/style.css';
import {http} from "./services/requests";
import {stringify} from "querystring";
const app = new App();

export const data = await http("http://localhost:5000/api/examples");

const root: HTMLDivElement | null = document.querySelector('#root');

if (root) {
    app.init(root, data).then()

}


