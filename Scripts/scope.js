var counter = 0;
var add = function () {
    return ++counter;
}

console.log(add());
console.log(add());
console.log(add());




var itens = [];
var add = function (params) {
    itens.push(params);
    return itens;
}

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));

console.log(add());