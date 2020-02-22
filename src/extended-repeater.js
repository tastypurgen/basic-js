module.exports = function repeater(
	str,
	{ repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator }
) {
	function add() {
		return addition ? addition : '';
	}

	let result = str;
	for (let i = 1; i < repeatTimes; i++) {
		result += add() + separator + str;
	}
	return result + add();
};
