enum Genders {
    Male,
    Female
};

enum Major {
    WEP,
    SNA
};

enum Topic {
    JAVASCRIPT,
    PHP,
    HTML,
    TS,
    VUE
};

class Student {
    constructor(private name: string, private gender: Genders, private major: Major) {
      this.name = name;
      this.gender = gender;
      this.major = major;
    }
  }

class Result extends Student  {
    constructor(private score: number, private topic: Topic, name:string,gender:Genders,major: Major) {
        super(name, gender, major);
        this.score = score;
        this.topic = topic;

    }
}



const Thamoz = new Result(85, Topic.JAVASCRIPT, "Thamoz", Genders.Male, Major.WEP);
console.log(Thamoz);