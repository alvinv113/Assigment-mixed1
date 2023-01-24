function avgrandom() {
	let avg = 0;
	let number = 0;
	for (let i = 0; i <= 4; i++) {
		let num = parseInt(Math.random() * 50);
		console.log(" five random no.s are: " + num);
		number += num;

	}



	console.log(" Sum of random numbers are :" + number);
	avg = parseInt(number / 5);
	console.log(" Avg of random numbers are :" + avg);
}
avgrandom();







