/* Everyday Types */
// Primitive Types
let str: string = 'Hello, World!'
let number: number = 1
let boolean: boolean = true

// Arrays
let listNumber: number[] = [1, 2, 3]

// Any
let anyType: any = 1
anyType = 'string'
anyType = {
  name: 'Canh Vo'
}
anyType = [1,2,3]

// Function
// Function: Parameter Type Annotations
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet('Canh')
// greet(42); // Argument of type 'number' is not assignable to parameter of type 'string'.

// Function: Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

// function sum(a: number, b: number): number {
//   return a + b.toString(); // ts erro: Type 'string' is not assignable to type 'number'.
// }

// Function: Anonymous Functions
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
  // console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

names.forEach((s) => {
  // console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Object Types: Optional Properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union Types
let Record: (Number| Boolean)

Record = 1
// Record = "A" // error: Type 'string' is not assignable to type 'Number | Boolean'.
Record = true

let Result: string | string[]

Result = "Done"
Result = ["Done", "Failed", "Success"]
// Result = [1,2,3] // error: Type 'number' is not assignable to type 'string'

// Type Aliases
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

type Student = {
  readonly id: number;
  name: string;
  age?: number; // optional
  }

// Interfaces
interface Teacher {
  readonly id: number;
  name: string;
  age?: number; // optional
  }

// Type Assertions
let sum: any
let total = <number>sum 
total = 10
// total = "Total" //Type 'string' is not assignable to type 'number'.

let grade: number | string
// let bobScore = grade as string
// let trumpScore = <boolean>grade // Conversion of type 'string | number' to type 'boolean' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// bobScore = 10 // Type 'number' is not assignable to type 'string'
// bobScore = "A"

// Literal Types
let count: 1;
let channelName: 'easy';
let isActive: false;
let student: null;

// let count: 1 = 2; //Type '2' is not assignable to type '1'

// Enums
enum Status { 
  Active = 'ACTIVE', 
  Deactivate = 1, 
  Pending
}
console.log(Status.Active) // 'ACTIVE'
console.log(Status['Active']) //'ACTIVE'
console.log(Status[2]) // 2


/* CLasses */
// Class Members: Fields, Contructor, Methods
class Students {
	
  // fields
	studentName: string; 

  // constructor
	constructor(name: string) {
	  this.studentName = name;
	}
   
  // method
	getName(): string {
	  return this.studentName;
	}
  }
   
// let student = new Students("UncleBob");

// Class Heritage
// Class Heritage: extends Clauses
class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

// Class Heritage: implements Clauses
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
// class Ball implements Pingable {
//   // Class 'Ball' incorrectly implements interface 'Pingable'.
//   //  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }

// Member Visibility
// Member Visibility: public(allow access at any location)
// class Greeter {
//   public greet() {
//     console.log("hi!");
//   }
// }
// const g = new Greeter();
// g.greet();

// Member Visibility: protected(only allow access inside that class and inside the derived class)
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
// g.getName(); //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

// Member Visibility: private(only allow access inside that class)
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside subclasses
// console.log(b.x); // Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    // console.log(this.x);
    //Property 'x' is private and only accessible within class 'Base'.
  }
}

// Static Members
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class Group extends MyClass {
  myGroup = Group.printX()
}

// Generic Classes
// Generic types
function getArray<T>(items: T[]) : T[] {
  return new Array().concat(items);
}

let stringArr = getArray<string>(["Tom", "Bob", "Justice"])
let numbArr = getArray<number>([1,2,3,4,5,6,7])

// Generic interface
interface IElement<T, U> {
  key: T;
  value: U;
}

let newElement: IElement<number, string> = { key: 0, value: "Academy"}
let compElement: IElement<string, string> = { key: "Company", value: "Yeulaptrinhvn"}

// Generic Class
class ObjectElement<T,U>
{ 
    private key: T;
    private val: U;
    
    constructor(key: T, val: U) {
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let newObjectElement = new ObjectElement<number, string>(0, "Academy") // { key: 0, val: 'Academy' }

// Class Expressions
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
 
const m = new someClass("Hello, world");

// abstract Classes and Members
abstract class ExamplesAbstract {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
class Example extends ExamplesAbstract {
  getName() {
    return "world";
  }
}
 
const c = new Example();
c.printName();

// Relationships Between Classes
class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}

const p: Point1 = new Point2(); // OK

/* Variable Declaration */
// var, let, const declarations

// Destructuring
// Array destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // 1
console.log(second); // 2

[first, second] = [second, first]; //swap variables

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1,2]);

let [st, ...rest] = [1, 2, 3, 4];
console.log(st); // 1
console.log(rest); // [ 2, 3, 4 ]

let [a] = [1, 2, 3, 4];
console.log(a); // 1

// Object destructuring
let o = {
  x: "foo",
  y: 12,
  z: "bar",
};
let { x, y } = o;

({ x, y } = { x: "baz", y: 101 });

// Use ... to get again of
// let { x, ...passthrough } = o;

// Can change the obtained attribute name
let { x: newName1, y: newName2 } = o;

// Function declarations
type C = { a: string, b?: number }
function v({ a, b }: C): void {
    // ...
}

// Remember to use defaults wisely
function h({ a = "", b = 0 } = {}): void {
  // ...
}
h();

// Can be combined with default value for Object
function u({ a, b = 0 } = { a: "" }): void {
  // ...
}
u({ a: "yes" }); // ok, default b = 0
u(); // ok, default to { a: "" }, which then defaults b = 0
// u({}); // error, 'a' is required if you supply an argument

// Spread
// Expand from an existing array into another array.
let arrayA = [1, 2];
let arrayB = [3, 4];
let bothPlus = [0, ...arrayA, ...arrayB, 5]; // [0, 1, 2, 3, 4, 5]

// add to Object
// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { food: "rich", ...defaults }; // { food: "spicy", price: "$$", ambiance: "noisy" };

// If the attributes are the same, the ones placed behind will be overwritten with the previous ones in order
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" }; // { food: "rich", price: "$$", ambiance: "noisy" };

/*Utility Types*/
interface Todo {
  title: string;
  description: string;
}
// Partial<Type>
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//Required<Type>
interface Props {
  a?: number;
  b?: string;
}

const obj2: Required<Props> = { a: 5, b: 'b'};

//Readonly<Type>
const todo: Readonly<Todo> = {
  description: "des",
  title: "Delete inactive users",
}
// todo.title = "hello" // Cannot assign to 'title' because it is a read-only property

//Record<Keys, Type>
interface CatInfo {
  age: number
  breed: string
}
 
type CatName = "miffy" | "boris" | "mordred"
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}

//Pick<Type, Keys>
type TodoPreview1= Pick<Todo, "title" | "description">

const todoPreview: TodoPreview1 = {
  title: 'sdfds',
  description: 'des fsdf',
}

//Omit<Type, Keys>
type TodoPreview2 = Omit<Todo, "completed">;
const todoPreview2: TodoPreview2 = {
  title: 'abc',
  description: 'abc'
}

//Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">

//Extract<Type, Union>
type T1 = Extract<"a" | "b" | "c", "a" | "f">

//NonNullable<Type>
type T2 = NonNullable<string[] | null | undefined>

//Parameters<Type>
type T3 = Parameters<() => string>

//ConstructorParameters<Type>
type T4 = ConstructorParameters<ErrorConstructor>

//ReturnType<Type>
type T5 = ReturnType<() => string>

//InstanceType<Type>
class E {
  x = 0;
  y = 0;
}
 
type T6 = InstanceType<typeof E>

//ThisParameterType<Type>
function toHex(this: Number) {
  return this.toString(16);
}
 
function numberToString1(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

//OmitThisParameter<Type>
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log(fiveToHex());

//ThisType<Type>
type ObjectDescriptor<D, M> = {
  data?: D
  methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

/*Decorators*/
// Class Decorators
// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

// @sealed
// class GreeterClassDecorators {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greetClassDecorators() {
//     return "Hello, " + this.greeting;
//   }
// }

// // Method Decorators
// function enumerable(value: boolean) {
//   return function (
//       target: any,
//       propertyKey: string,
//       descriptor: PropertyDescriptor
//   ) {
//       descriptor.enumerable = value;
//   }
// }

// class GreeterMethodDecorators {
//   greeting: string;
//   constructor(message: string) {
//       this.greeting = message
//   }

//   @enumerable(false)
//   greetMethodDecorators() {
//       return "Hello, " + this.greeting
//   }
// }

// Modules
import * as Emp from "./examples-modules"

console.log(Emp.age); // 20

let empObj = new Emp.Employee("Bill Gates" , 2);
empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates