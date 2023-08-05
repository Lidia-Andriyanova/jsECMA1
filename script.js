// 1. Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

console.log('Задание 1');
const minNum = (nums) => Math.min(...nums)
console.log(minNum([1, 5, 7, 9]));


// 2. Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
console.log('Задание 2');

const createCounter = (count) => {
    {
        return {
            inc() {
                return ++count;
            },
            dec() {
                return  --count;
            }
        }
    }
}

const counter = createCounter(0);
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.dec());

// 3. Напишите функцию, которая будет находить факториал числа с использованием рекурсии.
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)
console.log('Задание 3');

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);

console.log(factorial(5));
console.log(factorial(0));