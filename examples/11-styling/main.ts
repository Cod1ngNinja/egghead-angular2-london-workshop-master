import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"


@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <h1>Styles can be handled in many ways</h1>
        <my-awesome-component></my-awesome-component>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log("app starting..."),
    error => console.log(error)
);