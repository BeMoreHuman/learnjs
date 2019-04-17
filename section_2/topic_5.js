// Цикл по ключам: for (key in obj).
// Порядок перебора соответствует порядку объявления для нечисловых ключей, 
// а числовые – сортируются (в современных браузерах).
// Если нужно, чтобы порядок перебора числовых ключей соответствовал их объявлению в объекте, 
// то используют трюк: числовые ключи заменяют на похожие, но содержащие не только цифры. 
// Например, добавляют в начало +, как описано в примере выше, а потом, в процессе обработки, 
// преобразуют такие ключи в числа.

// Task #1: Определите, пуст ли объект.
// Создайте функцию isEmpty(obj), которая возвращает true, 
// если в объекте нет свойств и false – если хоть одно свойство есть.
function isEmpty(obj) {
	let counter = 0;

	for (let key in obj) {
		counter++;
	}
	if (counter) {
		return false;
	}

	return true;
}

// Task #2: Сумма свойств.
// Есть объект salaries с зарплатами. 
// Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
function sumSalaries(salaries) {
	let result = 0;

	for (let key in salaries) {
		result += salaries[key];
	}

	return result;
}

// Task #2: Свойство с наибольшим значением.
// Есть объект salaries с зарплатами. 
// Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// *** helper function
function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}

function getBiggestSalary(salaries) {
	if (isEmpty(salaries)) {
		return 'нет сотрудников';
	}
	let salariesArr = [];
	let biggestSalary = 0;

	for (let key in salaries) {
		salariesArr.push(salaries[key]);
	}

	biggestSalary = getMaxOfArray(salariesArr);

	for (let key in salaries) {
		if (salaries[key] === biggestSalary) {
			return key;
		}
	}
}

// Better way: (from Learn JS)
function getBiggestSalary2(salaries) {
	let max = 0;
	let maxName = "";

	for (let name in salaries) {
		if (max < salaries[name]) {
			max = salaries[name];
			maxName = name;
		}
	}

	if (maxName) {
		return maxName;
	}

	return 'нет сотрудников';
}

// Task #3: Умножьте численные свойства на 2.
// Создайте функцию multiplyNumeric, которая получает объект и 
// умножает все численные свойства на 2.
// *** helper function, для проверки на число
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (isNumeric(obj[key])) {
			obj[key] = obj[key] * 2;
		}
	}

	return obj;
}












