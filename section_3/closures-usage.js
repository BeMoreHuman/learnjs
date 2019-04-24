// Task #1: Сумма через замыкание
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
// Через двойные скобки (это не опечатка). Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4
function sum(firstNumber) {
	function addNumber(secondNumber) {
		return firstNumber + secondNumber;
	}

	return addNumber;
}

// Task #2: Функция - строковый буфер
// В некоторых языках программирования существует объект «строковый буфер», 
// который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
// - Добавить значение в буфер.
// - Получить текущее содержимое.
// ! Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, 
// которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, 
// а при вызове без аргументов buffer() – возвращает его.
// Вот пример работы:
// function makeBuffer() { /* ваш код */ }
// var buffer = makeBuffer();
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// // получить текущее значение
// alert( buffer() ); // Замыкания Использовать Нужно!
// Буфер должен преобразовывать все данные к строковому типу:
// var buffer = makeBuffer();
// buffer(0);
// buffer(1);
// buffer(0);
// alert( buffer() ); // '010'
// Решение не должно использовать глобальные переменные.
function makeBuffer() {
	let bufferArr = [];

	function buffer(value) {
		if (arguments.length !== 0) {
			bufferArr.push(String(value));
		} else {
			return bufferArr.join('');
		}
	}

	return buffer;
}

// Task #3: Строковый буфер с очисткой
// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), 
// который будет очищать текущее содержимое буфера:
// function makeBuffer() {
//   ...ваш код...
// }
// var buffer = makeBuffer();
// buffer("Тест");
// buffer(" тебя не съест ");
// alert( buffer() ); // Тест тебя не съест
// buffer.clear();
// alert( buffer() ); // ""
function makeBuffer() {
	let bufferArr = [];

	function buffer(value) {
		if (arguments.length !== 0) {
			bufferArr.push(String(value));
		} else {
			return bufferArr.join('');
		}
	}
	buffer.clear = function() {
		bufferArr = [];
	}

	return buffer;
}

// Task #4: Сортировка
// У нас есть массив объектов:
// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// Обычно сортировка по нужному полю происходит так:
// // по полю name (Вася, Маша, Петя)
// users.sort(function(a, b) {
//   return a.name > b.name ? 1 : -1;
// });
// // по полю age  (Маша, Вася, Петя)
// users.sort(function(a, b) {
//   return a.age > b.age ? 1 : -1;
// });

// Мы хотели бы упростить синтаксис до одной строки, вот так:
// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя
// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя

// То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)
// Напишите функцию byField(field), 
// которую можно использовать в sort для сравнения объектов по полю field, 
// чтобы пример выше заработал.
function byField(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	};
}

// Task #5: Фильтрация через функцию
// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, 
// в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: 
// inBetween(a,b) – «между a,b», 
// inArray([...]) – "в массиве [...]". 
// Использование должно быть таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

// Пример, как это должно работать:
/* .. ваш код для filter, inBetween, inArray */
// var arr = [1, 2, 3, 4, 5, 6, 7];
// alert(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6
// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
function filter(arr, func) {
	return arr.filter(func);
}
function inBetween(a,b) {
	return function(item) {
		return item >= a && item <= b;
	}
}
function inArray(arr) {
	return function(item) {
		return arr.indexOf(item) !== -1;
	}
}

// Task #6: Армия функций
// Следующий код создает массив функций-стрелков shooters. 
// По замыслу, каждый стрелок должен выводить свой номер:
function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}
// var army = makeArmy();
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
// // .. все стрелки выводят 10 вместо 0,1,2...9
// Почему все стрелки́ выводят одно и то же? 
// Поправьте код, чтобы стрелки работали как задумано. 
// Предложите несколько вариантов исправления.
function makeArmy() {
	var shooters = [];
	for (var i = 0; i < 10; i++) {
		var shooter = (function(x) {
			return function() {
				alert( x );
			}
		})(i);
		shooters.push(shooter);
	}

	return shooters;
}









