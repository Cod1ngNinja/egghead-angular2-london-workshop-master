// destructuring!
import { number } from "./anotherFile";

console.log("number:", number);

let person = {
	name: "John",
	height: 3
};

// destructuring
let {name } = person;

console.log(name);