import {Component, Input} from "angular2/angular2";

@Component({
	selector: "computer",
	template: `I'm a {{brand}} computer {{message}}`
})
export class Computer {
	@Input() brand;
	message;
	
	onHandOff() {
		console.log("getting sleepy method");
		this.message = "Getting sleepy";
	}
	
	onHandOn() {
		this.message="";
	}

	constructor() {}
}