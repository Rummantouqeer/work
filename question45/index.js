"use strict";
function makeCar(manufacturer, model, options) {
    let car = { manufacturer, model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}
let car = makeCar('Toyota', 'Camry', { color: 'red', year: 2020 });
console.log(car);
