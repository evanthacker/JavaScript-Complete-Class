/* Loops and iteration */



for (var i = 1; i <= 10; i++){
	console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1, 10 true, log i to the console, i++
//....
//i = 9, 1 < 10 true, log i to the console, i++
////i = 10, 10 < 10 false, exit the loop! 

for (var i = 1; i <= 10; i += 2){
	console.log(i);
}

/*

var john = ['John', 'Smith', 1990, 'designer', false];

//for loop

for (var i = 0; i < john.length; i++){
	console.log(john[i]);
}

var sam = ['sam', 'sally', 1990, 'marketer', true];


//while loop

var i = 0;
while (i < sam.length){
	console.log(john[i]);
	i++;
}

*/

// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false];

//for loop

for (var i = 0; i < john.length; i++){
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}

//looping backwards

for (var i = john.length - 1; i >= 0; i--){
	console.log(john[i]);
}








