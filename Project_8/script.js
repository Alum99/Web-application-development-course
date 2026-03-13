// ------ Информация о ссылках и якорях ------
const links = document.querySelectorAll('a');   // выбирает все элементы <a> на странице (ссылки и якоря)
console.log("Все ссылки на странице:");         // выводит заголовок в консоль
links.forEach(link =>       // forEach перебирает все ссылки
{   // выводит текст и адрес каждой ссылки в консоль
    console.log(`Текст: "${link.textContent}", href: ${link.href}`);
});


// ------ Информация об изображениях -----
const images = document.querySelectorAll('img');   // Выбирает все элементы <img> на странице
console.log("Все изображения на странице:");       // Заголовок для консоли о том, что далее идёт информация о картинках
images.forEach(img => {                                         // Перебирает каждое изображение
    console.log(`alt: "${img.alt}", src: "${img.src}"`);        // Выводит в консоль информацию о каждой картинке
});


// ------ Обработчики событий -----
// click на ссылку
links.forEach(link => {                         // Перебираем все ссылки (links)
    link.addEventListener('click', event => {   // Для каждой ссылки устанавливаем обработчик события click
        console.log(`Кликнули на ссылку: ${link.textContent}`);    // выполняется функция: выводит в консоль текст ссылки
    });
});


// hover на картинку
images.forEach(img => {                          // Перебираем все изображения
    img.addEventListener('mouseover', () => {    // Добавляем обработчик события mouseover (мышь навела курсор на картинку)
        console.log(`Навели на картинку: ${img.alt}`);   // В консоль выводится alt изображения
    });
});


// hover на секцию
const sections = document.querySelectorAll('section');  // Выбираем все <section> на странице
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {      // Добавляем обработчик mouseenter (мышь вошла в область секции)
        console.log(`Навели на секцию: ${section.id || "без id"}`);  //В консоль выводится id секции или "без id", если id нет
    });
});


//// ----- Анимация / перелистывание картинок -------
//// Выбираем все изображения в первой строке галереи
//const galleryImages = document.querySelectorAll('.row:first-of-type .card-img-top');
//// Массив с путями к изображениям
//const gallerySrcs = [
//    "pictures/model1.jpg",
//    "pictures/model2.jpg",
//    "pictures/model3.jpg"
//];
// Переменная для отслеживания текущей картинки
// let currentIndex = 0;
// setInterval — выполняет функцию каждые 3000 мс (3 секунды)
//setInterval(() => {
//    // увеличиваем индекс и возвращаемся к нулю, если дошли до конца массива
//    currentIndex = (currentIndex + 1) % gallerySrcs.length;
//    galleryImages.forEach(img => {  // Каждое изображение в галерее меняет src на следующий
//        img.src = gallerySrcs[currentIndex];
//    });
//}, 3000); // меняем картинку каждые 3 секунды


// ------ Появление элементов при прокрутке ------
// Ждём, пока весь HTML загрузится (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() {
    // Выбираем все заголовки <h2> и карточки .card для анимации появления
    const fadeElements = document.querySelectorAll('h2, .card');

    function checkVisibility() {   // checkVisibility() проверяет, видим ли элемент на экране
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();   // getBoundingClientRect() возвращает координаты элемента относительно окна
            if (rect.top < window.innerHeight - 50) {
            // Если верх элемента (rect.top) виден на экране, добавляем класс .visible → элемент плавно появляется (CSS-анимация)
                el.classList.add('visible');
            }
        });
    }
    // Добавляем проверку при прокрутке (scroll) страницы
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // чтобы элементы уже в зоне видимости сразу показались
});


// ------- Работа с объектами -------

// Получаем блок для вывода на страницу
const outputDiv = document.getElementById("objectOutput");

// Функция для вывода текста на страницу
function print(msg) {          // объявляем функцию с параметром msg (это текст, который хотим показать)
    const p = document.createElement("p");   // создаёт новый элемент <p> (параграф) в памяти
    p.textContent = msg;       // вставляем текст в параграф
    outputDiv.appendChild(p);  // добавляем этот параграф в блок #objectOutput на странице
}

// 1. Создание объекта через объектный литерал
const modelLiteral = {         // создаём объект литералом, сразу указываем свойства
    name: "Irina Shayk",
    country: "Russia",
    height: 178,
    introduce: function () {   // Метод introduce – функция внутри объекта, которая:
        // Создаёт текст с использованием this
        const text = `Модель: ${this.name}, страна: ${this.country}, рост: ${this.height} см`;
        console.log(text);     // Выводит текст в консоль (console.log)
        print(text);           // Выводит текст на страницу через print()
    }
};
modelLiteral.introduce();   // Вызывается метод объекта

// 2. Создание объекта через конструктор new Object(), свойства добавляем отдельно
const modelObject = new Object();
modelObject.name = "Gigi Hadid";
modelObject.country = "USA";
modelObject.height = 179;
modelObject.introduce = function () {
    const text = `Модель: ${this.name}, страна: ${this.country}, рост: ${this.height} см`;
    console.log(text);
    print(text);
};
modelObject.introduce();

// 3. Доступ к свойствам объекта
// modelLiteral.name – прямой доступ к свойству
console.log("Чтение свойства name:", modelLiteral.name);
modelLiteral.height = 180;    // меняем значение свойства
console.log("Изменённый рост:", modelLiteral.height);
// доступ к свойству через квадратные скобки, как в массиве
console.log("Доступ как ассоциативный массив:", modelLiteral["country"]);
// разные синтаксические варианты работы с объектами
print(`Чтение свойства name: ${modelLiteral.name}`);
print(`Изменённый рост: ${modelLiteral.height}`);
print(`Доступ как ассоциативный массив: ${modelLiteral["country"]}`);

// 4. Конструктор собственного объекта
function Model(name, country, height) {   // Функция-конструктор
    this.name = name;           // this – ссылается на создаваемый объект
    this.country = country;
    this.height = height;
    // Позволяет создавать множество объектов с одинаковой структурой
}

// 5. Методы через прототип,
// позволяет добавлять методы ко всем объектам, созданным через конструктор
Model.prototype.showInfo = function () {   // showInfo() – выводит общую информацию о модели
    const text = `Модель ${this.name} из ${this.country}, рост ${this.height} см`;
    console.log(text);
    print(text);
};
Model.prototype.isTall = function () {    // isTall() – проверяет рост и выводит сообщение
    // this для доступа к свойствам конкретного объекта
    const text = this.height >= 178 ? `${this.name} считается высокой моделью`
                                     : `${this.name} имеет стандартный рост модели`;
    console.log(text);
    print(text);
};

// создаём объекты через конструктор
const modelA = new Model("Barbara Palvin", "Hungary", 175);
const modelB = new Model("Valentina Yashina", "Russia", 170);
const modelC = new Model("Gigi Hadid", "USA", 179);

modelA.showInfo();
modelB.showInfo();
modelC.showInfo();
modelC.isTall();

// 6. Расширение встроенного типа (Array) для среднего
Array.prototype.average = function () { // новый метод average ко всем массивам
    let sum = 0;
    this.forEach(num => sum += num); // this – текущий массив
    return sum / this.length;        // Суммируем все элементы, делим на длину массива
};

// массив ростов моделей
const modelHeights = [178, 175, 179, 170];
const avgHeight = modelHeights.average();   // метод .average() для среднего
// Результат выводим и в консоль, и на страницуы
console.log("Средний рост моделей:", avgHeight);
print(`Средний рост моделей: ${avgHeight}`);