function multiply(p, q, callback) {
	callback(p * q);
}

let user = {
	a: 2,
	b:3,
	findMultiply: function() {
		multiply(this.a, this.b, function(total) {
			console.log(total);
			console.log(this === window);
		})
	}
}

user.findMultiply();
//Prints 6
//Prints true