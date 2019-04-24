// Итого
// Полный список аргументов, с которыми вызвана функция, доступен через arguments.
// Это псевдомассив, то есть объект, который похож на массив, 
// в нём есть нумерованные свойства и length, но методов массива у него нет.
// В старом стандарте было свойство arguments.callee со ссылкой на текущую функцию, 
// а также свойство arguments.callee.caller, содержащее ссылку на функцию, которая вызвала данную. 
// Эти свойства устарели, при use strict обращение к ним приведёт к ошибке.
// Для указания аргументов по умолчанию, в тех случаях, когда они заведомо не false, удобен оператор ||.
// В тех случаях, когда возможных аргументов много и, в особенности, 
// когда большинство их имеют значения по умолчанию, 
// вместо работы с arguments организуют передачу данных через объект, который как правило называют options.
// Возможен и гибридный подход, при котором первый аргумент обязателен, 
// а второй – options, который содержит всевозможные дополнительные параметры:
// function showMessage(text, options) {
//   // показать сообщение text, настройки показа указаны в options
// }

// Task #1: Проверка на аргумент-undefined.
// Как в функции отличить отсутствующий аргумент от undefined?
function f(x) {
  // ..ваш код..
  return arguments.length > 0 ? 1 : 0;
  // выведите 1, если первый аргумент есть, и 0 - если нет
}
f(undefined); // 1
f(); // 0

// Task #2: Сумма аргументов.
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
function sum() {
	let result = 0;

	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}

	return result;
}













