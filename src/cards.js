import {productsObj} from './products.js';
let cards = Array.from(document.querySelectorAll(".card"));
console.log(cards);
cards.forEach(function (elem, index) {
    elem.querySelector("img").src = `img/${productsObj[index].imgSrc}`;
    elem.querySelector("h5").innerHTML = `<br>${productsObj[index].nameProduct}`;
    let str = `<br>Корпус: ${productsObj[index].body}
    <br>Ремешок: ${productsObj[index].strap}
    <br>Размер дисплея: ${productsObj[index].displaySize}
    <br>Тип дисплея: ${productsObj[index].displayType}`;
    if (productsObj[index].bluetooth) str += "<br>Блютуз: есть";
    else str += "<br>Блютуз: нет";
    str += `<br>Операционные системы: ${productsObj[index].OS.os1}, ${productsObj[index].OS.os2}`;
    elem.querySelector(".card-text").innerHTML = str;
});
