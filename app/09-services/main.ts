import {provide, Component, bootstrap} from "angular2/angular2";
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

// foodservice instance will now be available throughout the children of my app
bootstrap(App, 
  // duck typing in TypeScript
  provide(FoodService, {useValue: {fruit:"banana"}}));