import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";

@Component({
	selector: 'app',
	directives: [Computer],
	template: `
	   <div><computer></computer></div>
	`
})
class App{

}

bootstrap(App);