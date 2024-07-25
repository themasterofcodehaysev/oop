class Arm{
    isLeft : boolean;

    constructor(isLeft:boolean){
        this.isLeft = isLeft;
    }
}

class Man{
    leftArm : Arm = new Arm(true);
    rightArm : Arm = new Arm(false);
}

let man = new Man();
console.log(man)