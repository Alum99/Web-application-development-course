/* Минимальное значение в массиве, принимает массив чисел numbers */
function findMin(numbers)
{
    let min = numbers[0];   //let — это ключевое слово для объявления переменной

    for (let i = 1; i < numbers.length; i++)   // numbers.length - кол-во эл-ов в массиве
    {
        if (numbers[i] < min)   // сравниваем и если меньше, то обновляем min
        {
            min = numbers[i];
        }
    }
    return min;
}

/* Сколько раз встречается минимальный элемент */
function countMin(numbers)
{
    let min = findMin(numbers);
    let count = 0;

    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] == min)
        {
            count++;
        }
    }
    return count;
}

/* Количество ненулевых элементов в массиве */
function countNonZero(numbers)
{
    let count = 0;

    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] != 0)
        {
            count++;
        }
    }
    return count;
}

/* Основная функция, кот вызывается при нажатии на кнопку */
function calculate()
{
    let input = document.getElementById("numbers").value;    // беру значение из поля ввода с id="numbers"
    let array = input.split(" ");                            // разбиение строки на массив по пробелам

    for (let i = 0; i < array.length; i++)    // преобразуем каждый элемент массива из строки в число
    {
        array[i] = Number(array[i]);
    }

    // вызываем все эти функции
    let min = findMin(array);
    let minCount = countMin(array);
    let nonZero = countNonZero(array);

    // нахожу абзац с id="result", текст с результатами и <br> для переноса строк
    document.getElementById("result").innerHTML =
        "Минимальный элемент: " + min + "<br>" +
        "Количество минимальных: " + minCount + "<br>" +
        "Количество ненулевых: " + nonZero;
}