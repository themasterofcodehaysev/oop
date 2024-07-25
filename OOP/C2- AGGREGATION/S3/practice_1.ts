class house{
    numberDoor:number;
    owner:string;
    trees:Tree[] = [];

    constructor(numberDoor:number,owner:string){
        this.numberDoor = numberDoor;
        this.owner = owner;
        
    }
    setTree(tree:Tree){
        this.trees.push(tree);
    }
}

class Tree{
    size: number;

    constructor(size:number){
        this.size = size;
    }
}

let tree1 = new Tree(12);
let tree2 = new Tree(13);
let tree3 = new Tree(8);
let JacksonHouse = new house(3,'Jackson');

JacksonHouse.setTree(tree1);
JacksonHouse.setTree(tree2);
JacksonHouse.setTree(tree3);

console.log(JacksonHouse);