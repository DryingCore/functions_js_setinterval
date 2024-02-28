console.log("app initialized");

setTimeout(() => {
	console.log("running timer: 0 to 3 soon");
}, 1000 * 1);

setTimeout(() => {
	let number = 0;
	const setIntervalId = setInterval(() => {
		number += 1;
		console.log(`${number} seconds`);

		if (number >= 3) {
			clearInterval(setIntervalId);
		}
	}, 1000);
}, 2000);
