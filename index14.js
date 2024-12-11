'use strict';

// concat() //

const array = ["dog"];
const array1 = ["cat"];
const full = array.concat(array1);
console.log(full)
//


console.log("       ")




//    every()      //

const check = (a) => a = a/2;

const array2 = [2, 20, 100];

console.log(array2.every(check));
//


console.log("       ")



//      fill()        //

const fille = [1,1,1,1,1,1];
const filled = fille.fill(7)
console.log(filled)

//


console.log("       ")


//      filter()        //
const words = ['bomb','booooom','pew','kabooom'];

const result = words.filter((word) => word.length > 6);

console.log(result);

//


console.log("       ")


//       find()      //

const array_find = [4, 22, 7, 404];

const found = array_find.find((element) => element > 100);

console.log(found);
//


console.log("       ")



//        findindexof()          //
const array100 = [52, 122, 81, 130, 4444];

const Large = (element) => element == 130;

console.log(array100.findIndex(Large));


//



console.log("       ")


//     foreach()       //
const array200 = ['(⓿_⓿)', '^_____^', '(✿◕‿◕✿)'];

array200.forEach((a) => console.log(a));
//



console.log("       ")



//      includes()     //
const asd = [421, 2452, 4523, 1];

console.log(asd.includes(1));
//



console.log("       ")


//      indexof()        //
const indexses = [":(","wow","cool"];
console.log(indexses.indexOf('cool'));

//


console.log("       ")



//     join()         //
const combine = ['aaa', 'aaaaa', 'aaah'];
console.log(combine.join(""));
//


console.log("       ")


//      lastindexof        //
console.log(indexses.lastIndexOf("wow"));
console.log(indexses.lastIndexOf("cool"));
//


console.log("       ")


//    lenght   //
const long = [,56,2,41,7,98,5,2,4];
console.log(long.length);
//


console.log("       ")


//     map()     //
const abc = [2,4,5,6,];

const map1 = abc.map((x) => x * 2);

console.log(map1);
//


console.log("       ")


//    pop()      //
const aaa = [8,8,6,2,"dont belong"];
aaa.pop();
console.log(aaa)
//

