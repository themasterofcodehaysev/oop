//This exercise is the same with exercise2 but the code in this file is the Ai code

class Salary {
    nodeJsExperience: number;
    vueJsExperience: number;
    oopKnowledge: string;
  
    constructor(nodeJsExperience: number, vueJsExperience: number, oopKnowledge: string) {
      this.nodeJsExperience = nodeJsExperience;
      this.vueJsExperience = vueJsExperience;
      this.oopKnowledge = oopKnowledge;
    }
  
    getSalary() {
      const hasNodeJsExperience = this.nodeJsExperience >= 1;
      const hasVueJsExperience = this.vueJsExperience >= 1;
      const hasOopKnowledge = this.oopKnowledge === 'yes';
  
      if (!hasNodeJsExperience && !hasVueJsExperience && !hasOopKnowledge) {
        return 250;
      } else if (!hasNodeJsExperience && hasVueJsExperience && !hasOopKnowledge) {
        return 350;
      } else if (hasNodeJsExperience && hasVueJsExperience && !hasOopKnowledge) {
        return 450;
      } else {
        return 700;
      }
    }
  }
  
  let robert = new Salary(1.5, 1.5, 'yes');
  console.log(robert.getSalary());