const bookBlock = document.querySelectorAll('.book');
console.log(bookBlock);

bookBlock[0].before(bookBlock[1]);
bookBlock[3].before(bookBlock[4]);
bookBlock[5].after(bookBlock[2]);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

const heading2 = document.querySelectorAll('h2 > a');
heading2[2].textContent = 'Книга 3. this и Прототипы Объектов';
console.log(heading2[2]);

const googleCheap = document.querySelector('.adv');
googleCheap.remove();

//Задаем класс второй книге, чтобы подойти и переставить ее ли-шки
bookBlock[0].classList.add('second_book');

const liBookTwo = document.querySelectorAll('.second_book > ul > li');
console.log(liBookTwo);

liBookTwo[3].after(liBookTwo[6]);
liBookTwo[6].after(liBookTwo[8]);
liBookTwo[9].after(liBookTwo[2]);

//Задаем класс пятой книге
bookBlock[5].classList.add('fifth_book');
//Даем имя ли-шкам в пятой книге
const liBookFive = document.querySelectorAll('.fifth_book > ul > li');
console.log(liBookFive);

liBookFive[1].after(liBookFive[9]);
liBookFive[4].after(liBookFive[2]);
liBookFive[7].after(liBookFive[5]);

//Задаем класс 6 книге
bookBlock[2].classList.add('sixth_book');
const liBookSix = document.querySelectorAll('.sixth_book > ul > li');
console.log(liBookSix);

const newLiBookSix = document.createElement('li');
console.log(newLiBookSix);

let newChapter = bookBlock[2].append(newLiBookSix);
newLiBookSix.textContent = 'Глава 8: За пределами ES6';
liBookSix[8].after(newLiBookSix);














