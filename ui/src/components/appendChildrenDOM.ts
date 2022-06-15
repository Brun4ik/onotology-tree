export const appendChildrenDOM = (parent: HTMLDivElement, ...children: (Element | HTMLButtonElement)[]): void => {
    children.forEach((child) => parent.appendChild(child));
};