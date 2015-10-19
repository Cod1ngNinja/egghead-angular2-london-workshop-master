// decorators add behaviour by modifying original function

// docorator pattern
let go = function (){
	console.log("going");
}

let originalFunction = go;

go = function(){
	console.log("before");
	originalFunction();
	console.log("after");
}

go();

function MyDecorator({naame}) {
	return function(target) {
		target.naame = naame;
		return target;
	}
}

@MyDecorator({ naame: "John"})
class Person {
	static naame;
	
	public hi() {
		console.log(Person.naame);
	}
}

var per = new Person();
per.hi();