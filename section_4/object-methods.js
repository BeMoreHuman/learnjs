// Task #1: Создайте калькулятор

// Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
var calculator = {
	read: function() {
		this.firstNumber = Number(prompt('a?', 0));
		this.secondNumber = Number(prompt('b?', 0));
	},
	sum: function() {
		return String(this.firstNumber + this.secondNumber);
	},
	mul: function() {
		return this.firstNumber * this.secondNumber;
	},
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );