import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
	selector: 'app',
	directives: [Computer, Mouse],
	template: `
	   <div>
	     <computer #computer brand="PC"></computer>
	     <mouse (hand-off)="computer.onHandOff()" (hand-on)="computer.onHandOn()"></mouse>
	   </div>
	`
})
class App {
	message: string;

	constructor() {
		this.message = "hello";
	}
}

bootstrap(App);