'use strict';
let elementOnPage = document.querySelector('.lesson14');

const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.creatElement = function(){
        let elem;
        if (this.selector[0] === '#'){
            elem = document.createElement("p");
            elem.innerHTML = 'Это параграф p!';
        } else if (this.selector[0] === '.'){
            elem = document.createElement("div");
            elem.innerHTML = '<strong>А вот и блок div!</strong>';
        }
        elem.setAttribute('id',selector.substr(1));
        elem.style.cssText = `height: ${this.height};
            background-color: ${this.bg};
            width: ${this.width};
            font-size: ${this.fontSize}`;
            elementOnPage.after(elem);
    };
};

let domElement = new DomElement('#lol', '150px', '800px', 'RGB(249, 201, 16)', '100px');

domElement.creatElement();