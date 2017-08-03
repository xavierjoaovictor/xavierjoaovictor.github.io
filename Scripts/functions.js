var counter = { 
    value: 0,
    add: function () {
        return ++this.value;
    }
}

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
// NaN
counter.value = undefined;
console.log(counter.add());

console.log(add());




// Function to Encapsulate - Factory Function

// var createCounter = function () {
//     var value = 0;

//     return {
//         add: function(){
//             return ++value; //Closure;
//         }
//     };
// };

// var counter = createCounter();
// console.log(counter.value);
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());




// Function to Encapsulate - Constructor Function

// var Counter = function () {
//     var value = 0;
//     this.add = function (){
//         return ++value;
//     }
// }

// var counter = new Counter();
// console.log(counter.value);
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
