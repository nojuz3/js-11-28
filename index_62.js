"use strict";

const num = Array.from({ length: 30 }, () => Math.floor(Math.random() * (25 - 5 + 1)) + 5);
console.log(num);


// a //

const ten = num.filter((a,b) => a>10)
console.log(ten.length)

// b //

const max = Math.max(...num);
const idex = num
    .map((num, index) => (num === max ? index : -1))
    .filter(index => index !== -1);

console.log(idex)
console.log(max)

// c //

const lyg = num.filter((a,b) => a % 2 == 0);
const lyg_add = lyg.reduce((a,b) => a + b);
console.log(lyg_add)

// d  //

// -/-/-/-/-/- //

// e //

const num2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * (25 - 5 + 1)) + 5);
const addup = num.concat(num2)
console.log(addup)

// f //

const lyginis = [];
const nelyginis = [];

num.forEach(num => {
    if (num % 2 === 0) {
      lyginis.push(num);
    } else {
      nelyginis.push(num);
    }
});
console.log(lyginis)
console.log(nelyginis)

// G //

const G_uzd = num.map(a => (a > 15 ? 0 : a));
console.log(G_uzd);

// H //

const small = num.findIndex((a) => a > 10);
console.log(small)