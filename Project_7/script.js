// 1. Информация о ссылках и якорях
const links = document.querySelectorAll('a');   // выбирает все элементы <a> на странице (ссылки и якоря)
console.log("Все ссылки на странице:");         // выводит заголовок в консоль
links.forEach(link =>       // forEach перебирает все ссылки
{   // выводит текст и адрес каждой ссылки в консоль
    console.log(`Текст: "${link.textContent}", href: ${link.href}`);
});

// 2. Информация об изображениях
const images = document.querySelectorAll('img');   // Выбирает все элементы <img> на странице
console.log("Все изображения на странице:");       // Заголовок для консоли о том, что далее идёт информация о картинках
images.forEach(img => {                                         // Перебирает каждое изображение
    console.log(`alt: "${img.alt}", src: "${img.src}"`);        // Выводит в консоль информацию о каждой картинке
});

// 3. Обработчики событий
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

// 4. Анимация / перелистывание картинок, возьмем первую галерею (первые 3 картинки)
// Выбираем все изображения в первой строке галереи
const galleryImages = document.querySelectorAll('.row:first-of-type .card-img-top');
// Массив с путями к изображениям
const gallerySrcs = [
    "pictures/model1.jpg",
    "pictures/model2.jpg",
    "pictures/model3.jpg"
];
// Переменная для отслеживания текущей картинки
let currentIndex = 0;
// setInterval — выполняет функцию каждые 3000 мс (3 секунды)
setInterval(() => {
    // увеличиваем индекс и возвращаемся к нулю, если дошли до конца массива
    currentIndex = (currentIndex + 1) % gallerySrcs.length;
    galleryImages.forEach(img => {  // Каждое изображение в галерее меняет src на следующий
        img.src = gallerySrcs[currentIndex];
    });
}, 3000); // меняем картинку каждые 3 секунды

// Появление элементов при прокрутке
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