import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {Movie} from "./movie"

@Component({
	selector: 'theatre',
	directives: [CORE_DIRECTIVES],
	template: `<div>
	             <ul>
				   <li *ng-for="#member of movie.cast">{{member}}</li>
				 </ul>
			   </div>`
})
export class Theatre{
	constructor(
		public movie:Movie
	) {
		
	}
}