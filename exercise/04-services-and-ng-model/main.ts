import {Component, bootstrap} from "angular2/angular2";
import {BaseInput} from "./baseInput"

@Component({
    selector: `app`,
	directives: [BaseInput],
    templateUrl: 'main.html'
})
class App {}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);;