import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
	selector: 'app',
	directives: [Computer, Mouse],
	template: `
	   <div>
	     <computer brand="PC" [message]="message"></computer>
	     <mouse (hand-off)="gettingSleepy()" (hand-on)="onHandOn()"></mouse>
	   </div>
	`
})
class App {
	message: string;

	constructor() {
		this.message = "hello";
	}

    gettingSleepy() {
		console.log("getting sleepy method");
		this.message = "Getting sleepy";
	}
	
	onHandOn() {
		this.message="";
	}

}

bootstrap(App);