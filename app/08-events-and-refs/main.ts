import {Component, bootstrap} from "angular2/angular2";
import {EventDemo} from "./eventDemo";

@Component({
	selector: 'app',
	directives: [EventDemo],
	template: `
	   <div><event-demo></event-demo></div>
	`
})
class App{}

bootstrap(App);