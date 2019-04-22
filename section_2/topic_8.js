// Методы массивов:
// push/pop, shift/unshift, splice – для добавления и удаления элементов.
// join/split – для преобразования строки в массив и обратно.
// slice – копирует участок массива.
// sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
// reverse – меняет порядок элементов на обратный.
// concat – объединяет массивы.
// indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).

// Дополнительно:
// Object.keys(obj) возвращает массив свойств объекта.

// Task #1: Добавить класс в строку.
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// var obj = {
//   className: 'open menu'
// }
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.
function addClass(obj, cls) {
	// 1 make array of classes
	let classArr = obj.className ? obj.className.split(' ') : [];
	// 2 add new class to array if such class doesn't exist in array yet
	if (classArr.indexOf(cls) === -1) {
		classArr.push(cls);
		classArr = classArr.join(' ');
		obj.className = classArr;
	}
}

// Task #2: Перевести текст вида border-left-width в borderLeftWidth.
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.
// Например:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// Такая функция полезна при работе с CSS.

// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
function camelize(str) {
	// 1 make array from string divided by < - >
	str = str.split('-');
	// 2 make all first letter are UpperCase from second item in array
	for (var i = 1; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	// 3 transform array to string
	str = str.join('');

	return str;
}



























