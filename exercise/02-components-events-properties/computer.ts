import {Component, Input} from "angular2/angular2";

@Component({
	selector: "computer",
	template: `I'm a {{brand}} computer`
})
export class Computer {
	@Input() brand;
	constructor() {}
}