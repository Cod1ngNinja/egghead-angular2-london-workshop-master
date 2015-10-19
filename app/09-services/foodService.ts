import {Injectable} from "angular2/angular2";

// Injectable is not really necessary, just declares it for tools that might need it
@Injectable()
export class FoodService {
	fruit = Math.random();
}