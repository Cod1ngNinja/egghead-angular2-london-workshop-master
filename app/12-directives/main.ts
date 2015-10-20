import {Component, bootstrap, Directive, HostListener, HostBinding} from "angular2/angular2";

@Directive({
	selector: '[hi]'
})
class Hi{
	@HostListener('click') onClick() {
		console.log("clicked on the host", this.message);
	}
	
	@HostBinding('innerHTML') message = '<div>Awesome</div>';
}

@Component({
    selector: `app`,
	directives: [Hi],
    template: `
		<div hi>
			Hello World
		</div>
	`
})
class App {}

bootstrap(App);