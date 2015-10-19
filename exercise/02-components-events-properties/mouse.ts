import {Component, Output, EventEmitter} from "angular2/angular2";

@Component({
	selector: "mouse",
	template: `<div (mouseout)="mouseout()" (mouseover)="mouseover()">I'm a mouse</div>`
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