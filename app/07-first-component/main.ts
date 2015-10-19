import {Component, bootstrap} from "angular2/angular2";
import {FirstComponent} from "./firstComponent";

@Component({
	selector: 'app',
	directives: [FirstComponent],
	template: `
	   <div><first-component></first-component></div>
	`
})
class App{}

bootstrap(App);