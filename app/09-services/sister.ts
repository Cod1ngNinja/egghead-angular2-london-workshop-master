import {Component} from "angular2/angular2";
import {FoodService} from "./foodService";

@Component({
	providers: [FoodService]
	selector: "sister",
	templateUrl: "sister.html"
})
export class Sister{
	/**
	 *
	 */
	constructor(foodService:FoodService) {
		console.log(foodService);
	}
};