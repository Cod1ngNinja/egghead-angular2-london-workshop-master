import {Component} from "angular2/angular2";

@Component({
	selector:'event-demo',
	// parens give event bidning
	// square brackets can be removed, then it will just set it to the string value
	template:`
	<div>
	  <input #name-input type="text" [value]="title">
	  <button (click)="onClick(nameInput.value)">ClickMe</button>{{nameInput.value}}
	</div>
	`
})
export class EventDemo{
	title = "Back to the future";
	onClick(name) {
		console.log(name);
	}
}