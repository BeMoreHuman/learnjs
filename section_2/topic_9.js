// Методы массивов:
// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

// Task #1: Перепишите цикл через map.
// Код ниже получает из массива строк новый массив, содержащий их длины:
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
alert( arrLength ); // 4,5,2,5
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
let arrItemsLength = arr.map((item) => {
	return item.length;
});
alert(arrItemsLength);

// Task #2: Массив частичных сумм.
// На входе массив чисел, например: 
arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.
function getSums(arr) {
	let result = [];
	let sum;
	arr.reduce((previousValue, currentItem, index, arr) => {
		sum = previousValue + currentItem;
		result.push(sum);
		return sum;
	}, 0);

	return result;
}












