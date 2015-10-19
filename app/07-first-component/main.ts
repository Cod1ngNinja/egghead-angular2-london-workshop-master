import {Component, bootstrap} from "angular2/angular2";
import {FirstComponent} from "./firstComponent";
import {SecondComponent} from "./secondComponent";

@Component({
	selector: 'app',
	directives: [FirstComponent, SecondComponent],
	template: `
	   <div>
	     <first-component></first-component>
	     <second-component></second-component>
	   </div>
	`
})
class App{}

bootstrap(App);