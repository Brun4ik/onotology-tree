import {Example} from "../interfaces/example";

export class Tree {
    public roots: any = [];

    public createTree(data: Example[]) {
        let map: any = {}, node, i;
        for (i = 0; i < data.length; i += 1) {
            map[data[i].id] = i;
            data[i].children = [];
        }
        for (i = 0; i < data.length; i += 1) {
            node = data[i];
            if (node.parent_id != 0) {
                data[map[node.parent_id]].children.push(node);
            } else {
                this.roots.push(node);
            }
        }
        console.log(this.roots)
        return this.roots;

    }

    // private hasChildren(data: Example[]) {
    //     let chi: boolean
    //     data.forEach(item => {
    //         if(item.children) {
    //             return chi = true;
    //         } else {
    //             return chi = false;
    //         }
    //     })
    // }
}