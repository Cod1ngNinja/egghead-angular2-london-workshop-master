import {Component, bootstrap} from "angular2/angular2";
import {FoodService} from "./foodService";

@Component({
	selector: 'app',
	template: `
	   <div>Hello world</div>
	`
})
class App{
	constructor(foodService:FoodService) {
		console.log(foodService);
	}
}

// foodservice will now be available throughout my app
bootstrap(App, [FoodService]);