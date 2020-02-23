class VigenereCipheringMachine {
	encrypt(message, key) {
		if (!message || !key) throw new Error();
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const maxLength = Math.max(message.length, message.length);
		let result = '';
		for (let i = 0; i < maxLength; i++) {
			const m = alphabet.indexOf(message[message.length <= i ? i % message.length : i].toUpperCase());
			console.log(m);
			const k = key[key.length <= i ? i % key.length : i];
			console.log(k);
			result += m == -1 ? message[i] : alphabet[(m + alphabet.indexOf(k.toUpperCase())) % alphabet.length];
			console.log(result);
		}
		return result;
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) throw new Error();
	}
}

module.exports = VigenereCipheringMachine;
