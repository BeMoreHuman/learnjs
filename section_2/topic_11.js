// Дата и Время
// Дата и время представлены в JavaScript одним объектом: Date. 
// Создать «только время» при этом нельзя, оно должно быть с датой. 
// Список методов Date вы можете найти в справочнике Date.
// Отсчёт месяцев начинается с нуля.
// Отсчёт дней недели (для getDay()) тоже начинается с нуля (и это воскресенье).
// Объект Date удобен тем, что автокорректируется. Благодаря этому легко сдвигать даты.
// При преобразовании к числу объект Date даёт количество миллисекунд, прошедших с 1 января 1970 UTC. 
// Побочное следствие – даты можно вычитать, результатом будет разница в миллисекундах.
// Для получения текущей даты в миллисекундах лучше использовать Date.now(), 
// чтобы не создавать лишний объект Date (кроме IE8-)
// Для бенчмаркинга лучше использовать performance.now() (кроме IE9-), он в 1000 раз точнее.
new Date(year, month, date, hours, minutes, seconds, ms)

// Task #1: Создайте дату.
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная. Выведите его на экран.
let date_2012_02_20 = new Date(2012, 1, 20, 3, 12);
alert(date_2012_02_20);

// Task #2: Имя дня недели.
// Создайте функцию getWeekDay(date), 
// которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
// Например:
// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'
function getWeekDay(date) {
	let options = {
		weekday: 'short'
	}
	date = new Date(date);

	return date.toLocaleString('ru', options);
}
// Task #3: День недели в европейской нумерации.
// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
// День нужно возвратить в европейской нумерации, 
// т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
// var date = new Date(2012, 0, 3);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2
function getLocalDay(date) {
	let day = date.getDay();
	if (day == 0) { // день 0 становится 7
		day = 7;
	}

	return day;
}

// Task #4: День указанное количество дней назад.
// Создайте функцию getDateAgo(date, days), которая возвращает число, 
// которое было days дней назад от даты date.
// Например, для 2 января 2015:
var date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
function getDateAgo(date, days) {
	let daysAgo = new Date( +date - (days * 24 * 3600 * 1000) );
	let numberOfDay = daysAgo.toLocaleString('ru', {
		day: 'numeric'
	});

	return numberOfDay;
}

// Task #5: Последний день месяца?
// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
// Параметры:
// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth(year, month) {
	let lastDay = new Date(year, (month + 1), 0).toLocaleString('ru', {
		day: 'numeric'
	});

	return lastDay;
}

// Task #6: Сколько секунд уже прошло сегодня?
// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
// Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToday() {
	let todayBegin = new Date();
	let today = new Date();
	todayBegin.setHours(0, 0, 0, 0);

	return (+today - +todayBegin) / 1000;
}

// Task #7: Сколько секунд - до завтра?
// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, 
// т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToTomorrow() {
	let tomorrow = new Date();
	let today = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setHours(0, 0, 0, 0);

	return (+tomorrow - +today) / 1000;
}

// Task #8: Вывести дату в формате дд.мм.гг
// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
// Например:
var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'
// P.S. Обратите внимание, ведущие нули должны присутствовать, 
// то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
function formatDate(date) {
	let resultArr = [];
	let result;
	let dateYear = (date.getFullYear() + '').slice(-2);
	let dateMonth = date.getMonth() + 1;
	let dateDay = date.getDate();
	if (dateMonth < 10) {
		dateMonth = '0' + dateMonth;
	}
	if (dateDay < 10) {
		dateDay = '0' + dateDay;
	}
	resultArr.push(dateDay, dateMonth, dateYear);
	result = resultArr.join('.');

	return result;
}


















