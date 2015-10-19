import {Component, bootstrap} from "angular2/angular2";
import {EventDemo} from "./eventDemo";

@Component({
	selector: 'app',
	directives: [EventDemo],
	template: `
	   <div><event-demo [title]="movieName"></event-demo></div>
	`
})
class App{
	movieName = "Back to the future"
}

bootstrap(App);