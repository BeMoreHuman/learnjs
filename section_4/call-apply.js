// Task #1: Перепишите суммирование аргументов
// Есть функция sum, которая суммирует все элементы массива:
// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
// function sumArgs() {
//   /* ваш код */
// }
// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
// Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
function sumArgs() {
	let args = [].slice.call(arguments);
	return args.reduce(function(a, b) {
		return a + b;
	});
}

// Task #2: Примените функцию к аргументам
// Напишите функцию applyAll(func, arg1, arg2...), 
// которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), 
// то есть передать в func все аргументы, начиная со второго, и возвратить результат.
function applyAll(func) {
	let args = [].slice.call(arguments, 1);

	return func.apply(this, args);
}