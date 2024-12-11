"use strict";
// 1
const abcd = ['A','B','C','D']
const rng = Array.from({ length: 200 }, () => abcd[Math.floor(Math.random() * abcd.length)]);
console.log(rng)

// 2 //

const sort = rng.sort();
console.log(sort)

// 3 //

function generate(len, min, max, un = new Set()) {
    if (un.size === len) {
        return Array.from(un);
    } // check if there's enough numbers generated

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // generates the numbers
    un.add(randomNum); // change dupe

    return generate(len, min, max, un);
}

const gen = generate(100,100,999);
console.log(gen);
const gen2 = generate(100,100,999);
console.log(gen2);



// 4 //

const array = gen;
console.log(array);

// 5 //
const gen3 = gen.concat(gen2)
console.log(gen3)

// 6 //

// idk //