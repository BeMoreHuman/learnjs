// Task #1: Счетчик объектов
// Добавить в конструктор Article:
// - Подсчёт общего количества созданных объектов.
// - Запоминание даты последнего созданного объекта.
// - Используйте для этого статические свойства.

// Пусть вызов Article.showStats() выводит то и другое.
function Article() {
	this.created = new Date();
	Article.count++;
	Article.lastCreationDate = this.created;
}
Article.count = 0;
Article.showStats = function() {
	alert('Всего: ' + this.count + ', Последняя: ' + this.lastCreationDate);
}