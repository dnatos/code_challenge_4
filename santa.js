const fs = require('fs');

let floor = 0;
let basement = 0;

console.time('code_challenge_4');

const content = fs.readFileSync('./input.txt', 'utf8');

for (let i = 0; i < content.length; i++) {
	if(content[i] === "(") {
		floor++;
	} else if (content[i] === ")") {
		floor--;
	}

	if(floor === -1 && basement < 1) {
		console.log('basement position:', i+1);
		basement++;
	}
}

console.log("floor:", floor);
console.timeEnd('code_challenge_4');
