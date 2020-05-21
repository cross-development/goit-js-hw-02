'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
	const min = 4;
	const max = 16;

	if (login.length >= min && login.length <= max) {
		return true;
	}

	return false;
};

const isLoginUnique = function (allLogins, login) {
		if (allLogins.includes(login)) {
			return false;
		}

	return true;
};

const addLogin = function (allLogins, login) {
	const resultOfLoginValid = isLoginValid(login);
	const resultOfLoginUnique = isLoginUnique(allLogins, login);

	if (!resultOfLoginValid) {
		return 'Ошибка! Логин должен быть от 4 до 16 символов';
	} 

	if (!resultOfLoginUnique) {
		return 'Такой логин уже используется!';
	}

	logins.push(login);
	return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Ajax')); // 'Такой логин уже используется!' - проверка функций после добавления нового логина в массив