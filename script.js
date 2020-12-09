'use strict';
class first{
    constructor(something = 'Классы'){
        this.something = something;
    }

    hello(){
        console.log('Привет я метод родителя!');
    }
}

class second extends first{
    constructor(something, somethingNew = 'Или нет?'){
        super(something);
        this.somethingNew = somethingNew;
    }

    hello(){
        super.hello();
        console.log('А я наследуемый метод!');
    }
}

let doSomething = new first();
let doMore = new second();

doMore.hello();