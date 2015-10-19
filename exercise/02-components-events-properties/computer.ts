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
		setTimeout(() => {
			console.log("timeout");
			this.message = "I'm sleeping";
		}, 3000);
	}
	
	cancelTimer() {
		this.message="";
	}

	constructor() {}
}