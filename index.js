"use strict";
//     Push()        //

const list = ['tim','tom'];

const longer = list.push('bob')
console.log(list)
console.log(longer)

//


console.log("         ");


//   Reduce()   //
const array = [8, 7, 6, 5];

const reduced = array.reduce((a,b) => a + b);

console.log(reduced);

//


console.log("         ");


//    reverse()    //

const backwards = [4,3,2,1];

const forwards = backwards.reverse();

console.log(forwards);

//


console.log("         ");


//      ToReversed()        //
// Geresnis revere()
const order = [1, 2, 3, 4, 5, 6];

const reversedorder = order.toReversed();

console.log(reversedorder);
console.log(order);

//


console.log("         ");


//        shift()          //

const name = ['Timmy','Jimmy','Kevin'];

const remove_first = name.shift();

console.log(name)

//


console.log("         ");


//         slice()            //

const full = ["ab","cd","ef","gh","ij","kl"];

console.log(full.slice(2,4));
console.log(full.slice(1,-2));

//


console.log("         ");


//        some()          //

const num = [1,2,3,4,5,6];

const check = (Element) => Element == 8;

console.log(num.some(check));
//


console.log("         ");


//          Sort()               //

const numbers = [1,2,3,4,5,6];
numbers.sort((a,b) => b - a);
console.log(numbers);

function compare(a, b) {
    return a - b;
  }

const numbers2 = [6,3,2,4,1,5];
numbers2.sort(compare)
console.log(numbers2)

function compareFn(a, b) {
    if (a>b ) {
      return -1;
    } else if (a < 0) {
      return 1;
    }else{
        return 0;
    }
};
numbers2.sort(compareFn)
console.log(numbers2)
//


console.log("          ")


//        toSorted()         //
// Toks pats principas kaip Sort() tik kad masyvas nekeiciamas
const TOnumbers = [1,2,3,4,5,6];
const sorted = TOnumbers.toSorted((a,b) => b - a);
console.log(sorted);
console.log(TOnumbers);

//


console.log("          ")


//        splice()         //
const unc = [1,2,3,4,5,6];
unc.splice(4,1,400)
console.log(unc)

//


console.log("          ")


//       unshift()          //
const array400 = [1,2,3,4,5]
console.log(array400.unshift(400, 500));
console.log(array400);

//