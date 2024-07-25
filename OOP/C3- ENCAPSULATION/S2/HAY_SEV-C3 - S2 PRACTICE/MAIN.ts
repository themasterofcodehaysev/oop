class Student {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  class Classroom {
    private name: string;
    private school: School;
    private students: Student[] = [];
  
    constructor(school: School, name: string) {
      this.school = school;
      this.name = name;
    }
  
    addStudent(student: Student) {
      this.students.push(student);
    }
  
    getNumberOfStudents(): number {
      return this.students.length;
    }
  }
  
  class School {
    private name: string;
    private classrooms: Classroom[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addClassroom(classroomName: string): Classroom {
      let newCLassroom = new Classroom(this, classroomName);
      this.classrooms.push(newCLassroom);
      return newCLassroom;
    }
  }
  
  // Create School
let PNC = new School("PNC");

// Add classrooms 
let WebA = PNC.addClassroom("WebA");
let WebB = PNC.addClassroom("WebB");

// Create students 
let John = new Student("John", "Doe");
let Jane = new Student("Jane", "Smith");

// Add students to classrooms 
WebA.addStudent(John);
WebB.addStudent(Jane);

// Create School 
let PSE = new School("PSE");

// Add classrooms to School 
let WebD = PSE.addClassroom("WebD");
let WebE = PSE.addClassroom("WebE");

// Create students 
let Alice = new Student("Alice", "Johnson");
let Bob = new Student("Bob", "Williams");

// Add students to classrooms 
WebD.addStudent(Alice);
WebE.addStudent(Bob);

// Get the number of students in each classroom of PNC
console.log("Number of students in Classroom WebA:", WebA.getNumberOfStudents()); 
console.log("Number of students in Classroom WebB:", WebB.getNumberOfStudents()); 

// Get the number of students in each classroom of PSE
console.log("Number of students in Classroom WebD:", WebD.getNumberOfStudents()); 
console.log("Number of students in Classroom WebE:", WebE.getNumberOfStudents()); 

// Get the full names of the students in PNC
console.log("Full name of student 1:", John.getFullName()); 
console.log("Full name of student 2:", Jane.getFullName()); 

// Get the full names of the students in PSE
console.log("Full name of student 3:", Alice.getFullName()); 
console.log("Full name of student 4:", Bob.getFullName());