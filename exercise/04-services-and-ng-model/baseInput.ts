import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService";

@Component({
	selector: "base-input",
	providers: [NumberService],
	directives: [FORM_DIRECTIVES],
	templateUrl: "baseInput.html"
})
export class BaseInput{
	constructor(private numberService: NumberService) {
	}
}