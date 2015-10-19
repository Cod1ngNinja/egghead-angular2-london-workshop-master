export class VideoGame {
	constructor(public name: string) {}
	
	public play() {
		return `Playing... ${this.name}`;
	}
}