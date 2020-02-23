class VigenereCipheringMachine {
	encrypt(message, key) {
		if (!message || !key) throw new Error();
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const maxLength = Math.max(message.length, message.length);
		let result = '';
		message = message.toUpperCase();
		key = key.toUpperCase();
		let newMessage = [];
		let newKey = '';
		let innerCount = 0;
		for (let i = 0; i < maxLength; i++) {
			if (alphabet.indexOf(message[i]) != -1) {
				newMessage.push(alphabet.indexOf(message[i]));
				if (innerCount >= key.length) {
					newKey += key[innerCount % key.length];
					innerCount++;
				} else {
					newKey += key[innerCount];
					innerCount++;
				}
			} else {
				newMessage.push(-1);
			}
		}
		innerCount = 0;
		for (let i = 0; i < maxLength; i++) {
			if (newMessage[i] == -1) {
				result += message[i];
			} else {
				result += alphabet[(newMessage[i] + alphabet.indexOf(newKey[innerCount])) % alphabet.length];
				innerCount++;
			}
		}
		return result;
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) throw new Error();
	}
}

module.exports = VigenereCipheringMachine;
