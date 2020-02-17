module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error();
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next':
				i++;
				break;
			case '--discard-prev':
				result.pop();
				break;
			case '--double-next':
				if (i + 1 <= arr.length - 1) result.push(arr[i + 1]);
				break;
			case '--double-prev':
				if (i > 0) result.push(arr[i - 1]);
				break;
			default:
				result.push(arr[i]);
				break;
		}
	}
	// console.log(arr);
	return result;
};
