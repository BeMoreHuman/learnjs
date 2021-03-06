// Строки в JavaScript имеют внутреннюю кодировку Юникод. 
// При написании строки можно использовать специальные символы, 
// например \n и вставлять юникодные символы по коду.
// Мы познакомились со свойством length и методами charAt, toLowerCase/toUpperCase, substring/substr/slice 
// (предпочтителен slice). Есть и другие методы, например trim обрезает пробелы с начала и конца строки.
// Строки сравниваются побуквенно. Поэтому если число получено в виде строки, 
// то такие числа могут сравниваться некорректно, нужно преобразовать его к типу number.
// При сравнении строк следует иметь в виду, что буквы сравниваются по их кодам. 
// Поэтому большая буква меньше маленькой, а буква ё вообще вне основного алфавита.
// Для правильного сравнения существует целый стандарт ECMA 402. 
// Это не такое простое дело, много языков и много правил. 
// Он поддерживается во всех современных браузерах, кроме IE10-, 
// в которых нужна библиотека https:
//github.com/andyearnshaw/Intl.js/. Такое сравнение работает через вызов str1.localeCompare(str2).

// Task #1: Сделать первый символ заглавным.
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом.
function ucFirst(str) {
	str = str.trim();
	if (str) {
		str = str.charAt(0).toUpperCase() + str.slice(1);
	}

	return str;
}

// Task #2: Проверьте спам.
// Напишите функцию checkSpam(str), которая возвращает true, 
// если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру.
function checkSpam(str) {
	str = str.toLowerCase().trim();
	if (~str.indexOf("viagra") || ~str.indexOf("xxx")) {
		return true;
	}

	return false;
}

// Task #3: Усечение строки.
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
// и если она превосходит maxlength – заменяет конец str на "...", 
// так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка.
function truncate(str, maxlength) {
	if (str.length > maxlength) {
		str = str.slice(0, (maxlength - 3)) + '...';

		return str;
	}

	return str;
}

// Task #3: Выделить число.
// Есть стоимость в виде строки: "$120". 
// То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять число-значение, в данном случае 120.
function extractCurrencyValue(str) {
	str = str.trim().slice(1);

	return Number(str);
}









