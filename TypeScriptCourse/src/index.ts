// Basic Types
let id: number = 5
let company: string = "MarcelTheory"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [5,6,7,8,9]
let arr: any[] = [1,2, false, "Boo"]

//Tuple
let person: [number, string, boolean] = [4, "Bitter", false]
//Tuple Array
let supe: [number, string][]

supe = [
    [39, "Scarlet Witch"],
    [45, "Vision"],
    [67, "Black Panther"],
    [99, "Iron Heart"]
]

// Union
let pid: string | number = 33
pid = '22'

//Enum
enum Direction2 {
    Up = 5,
    Down,
    Left,
    Right
}

enum Direction3 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

//console.log(Direction3.Left)


//Objects
type User = {
    id: number,
    name: string
}


const user: User = {
    id: 2,
    name: "Constantine"
}

//Type Assertion
let cid: any =  1
//let customerId = <number>cid
let customerId = cid as number


//Functions
function addNum(x: number, y: number):number {
    return x + y
}

//console.log(addNum(55,35))


//Void
function log(message: string | number): void {
    console.log(message)
}

//log("Hello")

//Interfaces for objects only.
interface UserInterface {
    readonly id: number,
    name: string
    age?: number
}


const user1: UserInterface = {
    id: 2,
    name: "Constantine"
}

interface Mathfunc {
    (x: number, y: number): number
}

const add: Mathfunc = (x: number, y:number): number => x + y
const sub: Mathfunc = (x: number, y:number): number => x - y


interface PersonInterface {
    id: number,
    name: string
    register(): string
}

//Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name:string) {
         this.id = id
         this.name = name
    }

    register() {
        return `${this.name} is now registered` 
    }
}

const Legion = new Person(4, 'David Haller')
const Dblo7 = new Person(7, 'James Bond')

// console.log(Legion.register())
// console.log(Dblo7.register())

// console.log(Legion,Dblo7)


// Sub-Class
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(65, 'Tyrone', 'Full Stack Developer')

//console.log(emp.register())



//Generics  Changed any to T
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([3,6,4,8])
let strArray = getArray<string>(["Miles","Corey","Spider","Megan"])

strArray.push("hey")
