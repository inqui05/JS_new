'use strict';
let elementOnPage = document.querySelector('.lesson14');

const DomElement = function(){
    this.selector = 0;
    this.height = '150px';
    this.width = '800px';
    this.bg = 'RGB(249, 201, 16)';
    this.fontSize = '100px';
    this.creatElement = function(selector){
        let elem;
        if (selector[0] === '#'){
            elem = document.createElement("p");
            elem.setAttribute('id',selector.substr(1));
            elem.style.cssText = `height: ${this.height};
                background-color: ${this.bg};
                width: ${this.width};
                font-size: ${this.fontSize}`;
            elem.innerHTML = 'Это параграф p!';
            elementOnPage.after(elem);
        } else if (selector[0] === '.'){
            elem = document.createElement("div");
            elem.className = selector.substr(1);
            elem.style.cssText = `height: ${this.height};
                background-color: ${this.bg};
                width: ${this.width};
                font-size: ${this.fontSize}`;
            elem.innerHTML = '<strong>А вот и блок div!</strong>';
            elementOnPage.after(elem);
        }
    };
};

let domElement = new DomElement();

domElement.creatElement('.lol');