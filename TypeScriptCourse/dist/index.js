"use strict";
// Basic Types
let id = 5;
let company = "MarcelTheory";
let isPublished = true;
let x = "Hello";
let ids = [5, 6, 7, 8, 9];
let arr = [1, 2, false, "Boo"];
//Tuple
let person = [4, "Bitter", false];
//Tuple Array
let supe;
supe = [
    [39, "Scarlet Witch"],
    [45, "Vision"],
    [67, "Black Panther"],
    [99, "Iron Heart"]
];
// Union
let pid = 33;
pid = '22';
//Enum
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 5] = "Up";
    Direction2[Direction2["Down"] = 6] = "Down";
    Direction2[Direction2["Left"] = 7] = "Left";
    Direction2[Direction2["Right"] = 8] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
const user = {
    id: 2,
    name: "Constantine"
};
//Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(55,35))
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 2,
    name: "Constantine"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Legion = new Person(4, 'David Haller');
const Dblo7 = new Person(7, 'James Bond');
// console.log(Legion.register())
// console.log(Dblo7.register())
// console.log(Legion,Dblo7)
// Sub-Class
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(65, 'Tyrone', 'Full Stack Developer');
//console.log(emp.register())
//Generics  Changed any to T
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([3, 6, 4, 8]);
let strArray = getArray(["Miles", "Corey", "Spider", "Megan"]);
strArray.push("hey");
