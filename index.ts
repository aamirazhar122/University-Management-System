    class person{

name:string;
age:number;

constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}

};

class student extends person{
rollNumber:number;
courses:course[]=[];

    constructor(name:string,age:number,rollNumber:number){
        super(name,age);
        this.rollNumber=rollNumber;
    }
registerforcourse(course:course){
this.courses.push(course);

}

};

class instructor extends person{
    salary:number;
    courses:course[]=[];
    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary=salary
    }
    assigncourse(course:course){
        this.courses.push(course)


    }

};

class course{

id:number;
name:string;
students:student[]=[];
instructor:instructor[]=[];

constructor(id:number, name:string){
    this.id=id;
    this.name=name;


}
addstudent(std:student){
    this.students.push(std)
std.registerforcourse(this)
}

setinstractor(inst:instructor){
    this.instructor.push(inst)
}


};

class department{
    name:string;
    courses:course[]=[];
    constructor(name:string){
        this.name=name;

    }
        addcourse(course:course){
            this.courses.push(course)
        }
    };

//make students

const std1=new student("ali", 12, 7);
const std2=new student("ilyas", 18, 13);

//make instractors

const inst1=new instructor("waqas",30, 10000);
const inst2=new instructor("hussain",34, 14000);

//make courses

const course1= new course(3,"Block chain");

const course2= new course(8,"Metaverse");
//add students in courses

course1.addstudent(std1);
course1.addstudent(std2);

course2.addstudent(std1);

//set instractors for courses

course1.setinstractor(inst1);

course1.setinstractor(inst2);

course2.setinstractor(inst1);
//set department

const D1=new department("computer science");

// add courses in department

D1.addcourse(course1);
D1.addcourse(course2);
// assign course

inst1.assigncourse(course2);
inst2.assigncourse(course1);

//console.log(D1.courses[0]);

//console.log(course1.students);

//console.log(course2.instructor);

console.log(course1);