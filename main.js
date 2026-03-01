const celsius = 25;
const fahrenheit = (celsius * 9/5)+32;
console.log("Температура у Фаренгейтах:" + fahrenheit)
const daysInMonth = 31;
const hoursInMonth = (daysInMonth * 24);
const minutesInMonth = (hoursInMonth * 60);
console.log("Днів у місяці:" + daysInMonth);
console.log("Годин у місяці:" + hoursInMonth);
console.log("Хвилин у місяці:" + minutesInMonth);
let health = 100;
let energy = 100;
health = health-50;
console.log("Здоров'я гравця: " + health);
const totalPrice = 1000;
const discount = 0.1;
const discountedPrice = totalPrice * (1 - discount)
console.log("Ціна зі знижкою:" + discountedPrice)
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log("Округлене число до меншого:" + roundedDown)
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log("Перетворене число:" + parsedFloat)
const intString = "123";
const parsedInt = parseInt(intString);
console.log("Перетворене ціле число:", parsedInt);
const number = 16;
const sqrtNumber = Math.sqrt(number);
console.log("Квадратний корінь числа:", sqrtNumber);
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log("Перетворене ціле число:", convertedInt);
const convertedString = integer.toString();
console.log("Перетворене число у рядок:", convertedString);

