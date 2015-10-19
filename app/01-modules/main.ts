// destructuring!
import { number } from "./anotherFile";

// using default export
import hi from './anotherFile';

console.log("number:", number);

console.log("hi", hi);

let person = {
	name: "John",
	height: 3
};

// destructuring
let {name } = person;

console.log(name);