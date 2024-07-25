class DomElement {
    private _name: string;
    private _parent: DomElement | null;
    private _children: DomElement[];
    constructor(name: string) {
        this._name = name;
        this._parent = null;
        this._children = [];
    }

    public getName(): string {
        return this._name;
    }

    public isRoot(): boolean {
        return this._parent === null;
    }

    public addChild(child: DomElement): void {
        child._parent = this;
        this._children.push(child);
    }

    public setParent(parent: DomElement): void {
        this._parent = parent;
    }

    public get children(): DomElement[] {
        return this._children;
    }
}

const htmlElement = new DomElement("html");
const headElement = new DomElement("head");
const titleElement = new DomElement("title");
const bodyElement = new DomElement("body");
const h1Element = new DomElement("h1");
const aElement = new DomElement("a");

headElement.addChild(titleElement);
htmlElement.addChild(headElement);
htmlElement.addChild(bodyElement);
bodyElement.addChild(h1Element);
h1Element.addChild(aElement);

const nodeObject = htmlElement;
console.log(nodeObject);