import {Component, FORM_DIRECTIVES, ControlGroup, Control, CORE_DIRECTIVES, Validators} from "angular2/angular2";

@Component({
	selector:'simple-form',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template:`
	    <div>
		  <form [ng-form-model]="movie" (ng-submit)="onSubmit()">
		    <input type="text" ng-control="name">
		    <input type="color" ng-control="two">
			
			<select ng-control="select">
			  <option *ng-for="#o of selectOptions">{{o}}</option>
			</select>
			
		    <input type="submit" value="Submit">
			
		  </form>
		</div>
		{{movie.value | json}}
		`
})
export class SimpleForm{
	selectOptions = ["fire", "earth", "wind"]
	
		movie = new ControlGroup({
			name: new Control("Klas", Validators.required),
			two: new Control("#FFEEAA"),
			select: new Control(this.selectOptions[0])
		})	
		
		onSubmit(){
			console.log(this.movie.value);
			console.log(this.movie.valid);
		}
}