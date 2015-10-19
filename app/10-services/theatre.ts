import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {Movie} from "./movie"

@Component({
	selector: 'theatre',
	directives: [CORE_DIRECTIVES],
	styles:[`
	.doc{
		background-color: gray;
	}
	`]
	template: `<div>
	             <ul>
				   <li [ng-class]="getClass(member)" *ng-for="#member of movie.cast">{{member}}</li>
				 </ul>
			   </div>`
})
export class Theatre{
	constructor(
		public movie:Movie
	) {
		
	}
	
	getClass(member): string {
		if(member === 'Doc') return 'doc';
	}
}