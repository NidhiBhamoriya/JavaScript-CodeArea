const marvel_hero = ["spiderman", "thor", "ironman"]
const dc_heros = ["batman", "superman", "flash"]

 //jese hmne pda ki array koi bhi data le leta h fir vo boolean , array , object etc kyoo n ho

 // **** M1

//  console.log(marvel_hero);   //[ 'spiderman', 'thor', 'ironman' ]
 
//  marvel_hero.push(dc_heros);   //ble const array pr hm assign nhi krrhe h value push kr rhe h

//  console.log(marvel_hero);  //[ 'spiderman', 'thor', 'ironman', [ 'batman', 'superman', 'flash' ] ]
 
// //for access
// console.log(marvel_hero[3][1]);


//**** M2
// marvel_hero.concat(dc_heros);     
// //concate fn : Combines two or more arrays. This method returns a new array without modifying any 
// //             existing arrays.
// console.log(marvel_hero);  // [ 'spiderman', 'thor', 'ironman' ]
// const all_heroes = marvel_hero.concat(dc_heros)
// console.log(all_heroes);     // [ 'spiderman', 'thor', 'ironman', 'batman', 'superman', 'flash' ]
// console.log(marvel_hero);   // [ 'spiderman', 'thor', 'ironman' ]


//**** M3
// given 4 line possible if array is not constant
// marvel_hero = [...dc_heros];    //error aye gi constant array ko bdl rhe h ,assigmnet operation kr rhe h
// console.log(marvel_hero)      //pr let ho to ans ye ayega :- [ 'batman', 'superman', 'flash' ]
//or
// marvel_hero = [...marvel_hero, ...dc_heros]
// console.log(marvel_hero);   //[ 'spiderman', 'thor', 'ironman', 'batman', 'superman', 'flash' ]
const all_heroes = [...marvel_hero, ...dc_heros]   //multivalue de skte h aur concate hota jayega
console.log(all_heroes);

const compleArr = [1, 2, 3, [10, 20, 30], 4, [40, 50, [100, 200, 300]], 5]
const simplifiedArray = compleArr.flat(Infinity)  //(depth) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(simplifiedArray)   //[ 1,  2,  3,  10,  20,  30, 4, 40, 50, 100, 200, 300, 5 ]
//if flat(1) --> o/p: [ 1, 2, 3, 10, 20, 30, 4, 40, 50, [ 100, 200, 300 ], 5 ]
//if flat(2) --> o/p: [ 1,  2,  3,  10,  20,  30, 4, 40, 50, 100, 200, 300, 5 ]
//direct hi depth infinity likh do
//if flat(Infinity) --> o/p: [ 1,  2,  3,  10,  20,  30, 4, 40, 50, 100, 200, 300, 5 ]


// method that is used most when you do scarping (data ata h to pta nhi rhta ki kis form m a rha h
//  nodelist, object, string   ---->   pr chahiye to array)

console.log(Array.isArray("nidhi"))   //false
console.log(Array.from("nidhi"));   // [ 'n', 'i', 'd', 'h', 'i' ]   //Creates an array from an iterable object.
console.log(Array.from({name : "nidhi"}));   //[]  ----> interesting case 
//from se jo convert nhi hoga to empty array dedega--> hme yha btana pdega key se array bnao, value se bnao esa


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]   //Returns a new array from a set of elements.
