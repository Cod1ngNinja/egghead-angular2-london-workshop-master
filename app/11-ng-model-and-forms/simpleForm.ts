import {Component, FORM_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";

@Component({
	selector:'simple-form',
	directives: [FORM_DIRECTIVES],
	template:`
	    <div>
		  <form [ng-form-model]="movie" (ng-submit)="onSubmit()">
		    <input type="text" ng-control="name">
		    <input type="text" ng-control="two">
		    <input type="submit" value="Submit">
			
		  </form>
		</div>
		{{movie.value | json}}
		`
})
export class SimpleForm{
		movie = new ControlGroup({
			name: new Control("Klas"),
			two: new Control()
		})	
		
		onSubmit(){
			console.log(this.movie.value);
		}
}