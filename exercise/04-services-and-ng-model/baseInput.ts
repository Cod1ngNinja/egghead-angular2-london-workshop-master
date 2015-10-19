import {Component} from "angular2/angular2";
import {NumberService} from "./numberService";

@Component({
	selector: "base-input",
	providers: [NumberService],
	templateUrl: "baseInput.html"
})
export class BaseInput{
	constructor(private numberService: NumberService) {
	}
}