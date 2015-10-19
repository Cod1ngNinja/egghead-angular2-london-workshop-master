import {Component, bootstrap} from "angular2/angular2";
import {Movie} from "./movie";
import {Theatre} from "./theatre";

@Component({
	selector: 'app',
	template: `
	   <div>Hello</div>
	`
})
class App{
}

bootstrap(App, [Movie, Theatre]);