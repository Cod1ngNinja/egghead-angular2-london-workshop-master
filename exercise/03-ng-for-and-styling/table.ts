import {Component, CORE_DIRECTIVES} from "angular2/angular2"
import {starwarsPeople} from "./starwarsPeople";

@Component({
	selector: 'table',
	directives: [CORE_DIRECTIVES],
	templateUrl: 'table.html'
})
export class Table{
	people: any[] = starwarsPeople;
	
	constructor() {
		// people = starwarsPeople;
		//console.log(people);
	}
}