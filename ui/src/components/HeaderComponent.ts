export class HeaderComponent {
    private readonly _headerBlock: HTMLDivElement;
    public firstButtonDiv: HTMLDivElement;
    public secondButtonDiv: HTMLDivElement;

    constructor(root: HTMLDivElement) {
        this._headerBlock = document.createElement('div');
        this.firstButtonDiv = document.createElement('div');
        this.secondButtonDiv = document.createElement('div');
        this.render();
        root.append(this._headerBlock);
    }

    get headerBlock() {
        return this._headerBlock;
    }


    private render() {
        this.headerBlock.classList.add('header');
        this.firstButtonDiv.classList.add('header_text');
        this.headerBlock.appendChild(this.firstButtonDiv);
        this.firstButtonDiv.innerHTML = 'База знаний для языка С#'



    }
}


