var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    return person;
}());
;
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    student.prototype.registerforcourse = function (course) {
        this.courses.push(course);
    };
    return student;
}(person));
;
var instructor = /** @class */ (function (_super) {
    __extends(instructor, _super);
    function instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    instructor.prototype.assigncourse = function (course) {
        this.courses.push(course);
    };
    return instructor;
}(person));
;
var course = /** @class */ (function () {
    function course(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    course.prototype.addstudent = function (std) {
        this.students.push(std);
        std.registerforcourse(this);
    };
    course.prototype.setinstractor = function (inst) {
        this.instructor.push(inst);
    };
    return course;
}());
;
var department = /** @class */ (function () {
    function department(name) {
        this.courses = [];
        this.name = name;
    }
    department.prototype.addcourse = function (course) {
        this.courses.push(course);
    };
    return department;
}());
;
//make students
var std1 = new student("ali", 12, 7);
var std2 = new student("ilyas", 18, 13);
//make instractors
var inst1 = new instructor("waqas", 30, 10000);
var inst2 = new instructor("hussain", 34, 14000);
//make courses
var course1 = new course(3, "Block chain");
var course2 = new course(8, "Metaverse");
//add students in courses
course1.addstudent(std1);
course1.addstudent(std2);
course2.addstudent(std1);
//set instractors for courses
course1.setinstractor(inst1);
course1.setinstractor(inst2);
course2.setinstractor(inst1);
//set department
var D1 = new department("computer science");
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
