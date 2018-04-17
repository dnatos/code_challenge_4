const fs = require('fs');

let floor = 0;
let basement = 0;


const content = fs.readFileSync('./input.txt', 'utf8');

console.time('code_challenge_4');

for (let i = 0; i < content.length; i++) {
	content[i] === '(' ? floor++ : floor--;

	if(floor === -1 && basement < 1) {
		console.log('basement position:', i+1);
		basement++;
	}
}

console.log("floor:", floor);
console.timeEnd('code_challenge_4');
