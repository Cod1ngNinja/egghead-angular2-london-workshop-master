export class BoardGame {
	constructor(private name: string) {}
	
	play() {
		return `Playing... ${this.name}`;
	}
}