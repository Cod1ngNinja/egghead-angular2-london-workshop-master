import {Component, bootstrap} from "angular2/angular2";
import {Brother} from "./brother";
import {Sister} from "./sister";

@Component({
	selector: 'app',
	directives: [Brother, Sister]
	template: `
	   <div><brother></brother><sister></sister></div>
	`
})
class App{
}

// foodservice instance will now be available throughout the children of my app
bootstrap(App);