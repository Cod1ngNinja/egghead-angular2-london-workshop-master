import {Component} from "angular2/angular2";

@Component({
	selector:'event-demo',
	template:`
	<div>
	  <button (click)="onClick()">ClickMe</button>
	</div>
	`
})
export class EventDemo{
	onClick() {
		console.log("clicked");
	}
}