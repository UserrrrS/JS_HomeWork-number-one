
// Задание 1
let Name = "Artem";
console.log ("Привет," + Name);


// Задание 2
console.log (30 * 50 / 2)


// Задание 3


n = Math.random() * (67 - 12) + 12;
console.log(n);


// Задание 4

const n1 = Math.floor(Math.random() * 256);
const n2 = Math.floor(Math.random() * 256);
const n3 = Math.floor(Math.random() * 256);
let n4 = (Math.random() * 1).toFixed(2);

let color = `rgba(${n1},${n2},${n3},${n4})`;
console.log(color)


// Задание 5

const time = Math.random() * (2592000000 - 86400000) + 86400000;

const days = Math.floor(time / (24 * 60 * 60 * 1000));
const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
const seconds = Math.floor((time % (60 * 1000)) / 1000);
const milliseconds = (time % 1000).toFixed();
console.log ("Дни:" + days)
console.log("Часы:" + hours);
console.log("Минуты:"+ minutes);
console.log("Секунды:" + seconds);
console.log("Миллисекунды:" + milliseconds);