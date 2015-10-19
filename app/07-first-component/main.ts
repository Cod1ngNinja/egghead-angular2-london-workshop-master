import {Component, bootstrap} from "angular2/angular2";
import {DEFAULT_COMPONENTS} from "./allComponents";


@Component({
	selector: 'app',
	directives: [DEFAULT_COMPONENTS],
	template: `
	   <div>
	     <first-component></first-component>
	     <second-component></second-component>
	   </div>
	`
})
class App{}

bootstrap(App);