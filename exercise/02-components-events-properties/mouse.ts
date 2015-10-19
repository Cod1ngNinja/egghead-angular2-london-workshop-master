import {Component, Output, EventEmitter} from "angular2/angular2";

@Component({
	selector: "mouse",
	templateUrl: "mouse.html" 
})
export class Mouse {
	@Output() handOff = new EventEmitter();
	@Output() handOn = new EventEmitter();
	constructor() {}
	
	mouseout() {
		console.log("mouseout");
		this.handOff.next({});
	}
	
	mouseover() {
		console.log("mouseover");
		this.handOn.next({});
	}
}