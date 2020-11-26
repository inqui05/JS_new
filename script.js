'use strict';
let number = Math.floor(Math.random() * 100) + 1;
let text = 'Угадай число от 1 до 100';

function isNumber( data ){
    return !isNaN( parseFloat( data )) && isFinite( data );
}

function askPersonNumber(text){
    let ask = prompt(text); 
    console.log(ask);
    if (ask === null){
        alert('Игра окончена!');
    } else if (!isNumber(ask)){
        askPersonNumber('Введи число!');
    } else {
        if(+ask === number){
            alert('Поздравляю, Вы угадали!!!');
        } else if (+ask > number){
            alert('Загаданное число меньше');
            askPersonNumber('Ещё попыточка?');
        } else {
            alert('Загаданное число больше');
            askPersonNumber('Ещё попыточка?');
        }
    }
}

askPersonNumber(text);