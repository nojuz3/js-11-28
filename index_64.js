"use strict";

const ship = {
    name: 'HMS',
    age: 55,
    origin: 'London'
};
 // 1
ship.travel = 28811;

console.log(ship);
// 2
delete ship.age
console.log(ship);
// 3
console.log(ship.powers);

//4

const cool = {
    cool: 1,
    notcool: 7,
    verycool: 9
};
const sum = Object.values(cool).reduce((a,b) =>a + b,0 );
console.log(sum)

//5

const values = {
    a: 7,
    b: 10,
    c: 5,
    d: 2,
    e: 121
};

function notcool(obj) {
    return Object.entries(obj)
        .filter(([a, b]) => b > 6) 
        .reduce((acc, [a, b]) => {
            acc[a] = b; 
            return acc;
        }, {}); 
}
const gen = notcool(values);
console.log(gen);
// 6 

const tbf = {

};

function bobinator(){
    tbf.name = 'bob';
    tbf.lastname = 'bobsicle';
    tbf.age = '21';
    return tbf
}
const bobified = bobinator();
console.log(bobified);

// 7

function loong(obj) {
    return Object.values(obj).length;
}
const skillet = {
    name: 'skillet',
    lastname:'skeleton',
    age:555,
    spooked:{
        scared:'tom',
    },
    car:{
        notscared:'sudan',
        model:'pickup',
    },
};

const vals = loong(skillet);
console.log(vals);