import {Component, FORM_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";

@Component({
	selector:'simple-form',
	directives: [FORM_DIRECTIVES],
	template:`
	    <div>
		  <form [ng-form-model]="movie">
		    <input type="text" ng-control="name">
		  </form>
		</div>
		{{movie.value | json}}
		`
})
export class SimpleForm{
		movie = new ControlGroup({
			name: new Control()
		})	
}