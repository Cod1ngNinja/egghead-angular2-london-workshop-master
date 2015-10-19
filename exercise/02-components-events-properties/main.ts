import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
	selector: 'app',
	directives: [Computer, Mouse],
	template: `
	   <div>
	     <computer></computer>
	     <mouse></mouse>
	   </div>
	`
})
class App{

}

bootstrap(App);