//Lecture 3:-  JS (Object Oriented Programming)
const stu1 = {
    name : "adam",
    age : 23,
    marks : 90, 
    getmarks: function() {
        return this.marks;
    }
};

const stu2 = {
    name : "eve",
    age: 25,
    marks : 99,
    getmarks: function() {
        return this.marks;
    }
}

const stu3 = {
    name: "casey",
    age: 24,
    marks : 85,
    getmarks: function() {
        return this.marks;
    }
}

// Lecture 4
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

arr.sayHello = () =>{
    console.log("hello , I am arr")
};  
arr2.sayHello = () =>{
    console.log("hello , I am arr")
};  
arr.sayHello === arr2.sayHello;   //false
arr.toUpperCase == arr2.toUpperCase //true

// Lecture 5 - factory function  
function personMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}
let p4 = personMaker("adam", 32);
let p5 = personMaker("eve", 32);

// Lecture  6 - constructor - dosen't return anything & start with capital letter 
function Person(name, age){
    this.name = name ;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

let p = new Person("adam", 23);
let p3 = new Person("eve", 23);

// // Lecture 7- classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 23);
let p2 = new Person("eve", 23);

// Lecture 8- Inheritence

class Person{
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age); //parent class constructory is being called
        this.marks = marks;
    }
}
    class Teacher extends Person{
    constructor(name, age, subject) {
        console.log("Teacher class constructor");
        super(name, age); //parent class constructor is being called
        this.subject = subject;
    }
}

class Mamal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mamal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woof...");
    }
}

class Cat extends Mamal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("meow...");
    }
}