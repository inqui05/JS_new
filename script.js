'use strict';
let books = document.querySelectorAll('.book'),
    elements = document.querySelectorAll('li');

const newChapter = document.createElement('li'),
    body = document.querySelector('body'),
    advertising = document.querySelector('.adv');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

//меняем фоновую картинку
document.body.style.backgroundImage = "url('http://127.0.0.1:5500/image/you-dont-know-js.jpg')";

//изменяем название книги
books[4].innerHTML =  books[4].innerHTML.replace('Книга 3. this и Пропопипы Объектов', 'Книга 3. this и Прототипы Объектов');

//удаляем рекламу
advertising.remove();

//восставливаем порядок глав
elements[9].after(elements[2]);
elements[4].before(elements[8]);
elements[3].after(elements[6]);
elements[47].after(elements[55]);
elements[54].before(elements[51]);
elements[52].before(elements[48]);

//вставляем дополнительную главу в книгу 6
newChapter.textContent = 'Глава 8: За пределами ES6';
elements[25].after(newChapter);