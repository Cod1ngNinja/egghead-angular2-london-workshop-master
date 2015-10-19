import {Component} from "angular2/angular2";
import {FoodService} from "./foodService";

@Component({
	providers: [FoodService],
	selector: "brother",
	templateUrl: "brother.html"
})
export class Brother {	
	constructor(foodService:FoodService) {
		console.log(foodService);
	}};