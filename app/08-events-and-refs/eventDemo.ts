import {Component} from "angular2/angular2";

@Component({
	selector:'event-demo',
	// parens give event bidning
	template:`
	<div>
	  <input #name-input type="text">
	  <button (click)="onClick(nameInput.value)">ClickMe</button>
	</div>
	`
})
export class EventDemo{
	onClick(name) {
		console.log(name);
	}
}