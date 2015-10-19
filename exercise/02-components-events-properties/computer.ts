import {Component, Input} from "angular2/angular2";

@Component({
	selector: "computer",
	template: `I'm a {{brand}} computer {{message}}`
})
export class Computer {
	@Input() brand;
	message;
	
	startTimer() {
		console.log("getting sleepy method");
		this.message = "Getting sleepy";
	}
	
	cancelTimer() {
		this.message="";
	}

	constructor() {}
}