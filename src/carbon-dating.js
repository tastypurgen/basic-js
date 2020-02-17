const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
let sampleActivity = '9.8888';
module.exports = function dateSample(sampleActivity) {
	let parsedActivity = parseFloat(sampleActivity);
	if (
		typeof sampleActivity !== 'string' ||
		sampleActivity === null ||
		isNaN(parsedActivity) ||
		parsedActivity <= 0 ||
		parsedActivity > MODERN_ACTIVITY
	)
		return false;
	return Math.ceil(Math.log(MODERN_ACTIVITY / parsedActivity) / (0.693 / HALF_LIFE_PERIOD));
};

// 3446
