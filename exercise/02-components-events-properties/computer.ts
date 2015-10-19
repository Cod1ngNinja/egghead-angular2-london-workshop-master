import {Component, Input} from "angular2/angular2";

@Component({
	selector: "computer",
	template: `I'm a {{brand}} computer <span [hidden]="hidden">{{message}}</span>`
})
export class Computer {
	@Input() brand;
	message;
	hidden: boolean;
	
	startTimer() {
		console.log("getting sleepy method");
		this.hidden = false;
		this.message = "Getting sleepy";
		setTimeout(() => {
			console.log("timeout");
			this.message = "I'm sleeping";
		}, 3000);
	}
	
	cancelTimer() {
		this.hidden = true;
	}

	constructor() {}
}