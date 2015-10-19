import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
	selector: 'app',
	directives: [Computer, Mouse],
	template: `
	   <div>
	     <computer #computer brand="PC"></computer>
	     <mouse (hand-off)="computer.startTimer()" (hand-on)="computer.cancelTimer()"></mouse>
	   </div>
	`
})
class App {
	message: string;

	constructor() {
	}
}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);