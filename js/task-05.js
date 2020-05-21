'use strict';

const checkForSpam = function (message) {
	const words = message.split(' ');
	const forbiddenWords = ['spam', 'sale'];

	for (let word of words) {
		word = word.toLowerCase();

		for (const forbidden of forbiddenWords) {
			if (word.includes(forbidden)) {
				return true;
			}
		}
	}

	return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
