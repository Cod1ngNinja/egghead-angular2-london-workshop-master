import {Component, CORE_DIRECTIVES} from "angular2/angular2"
import {starwarsPeople} from "./starwarsPeople";

@Component({
	selector: 'table',
	directives: [CORE_DIRECTIVES],
	templateUrl: 'table.html',
	styleUrls: ['table.css']
})
export class Table{
	people: any[];
	
	constructor() {
		this.people = starwarsPeople;
	}
	
	getClass(height: number):string {
		console.log("in getClass");
		if(height > 200) {
			console.log("tall");
			return "tall";
		}
		if(height < 100) {
			return "short";
		}
		return "normal";
	}
}