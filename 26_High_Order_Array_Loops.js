
//26 High Order Array Loops

//Array specific loop :

// //object iterable h, array iterable h, string itearable h, inpe ap loop lga skte ho.

// 1) for of :

// for (const element of object) {                           
//                  here object means, js ka object nhi h, mtlb he kis chij pr loop lga rhe h
// }

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                            
    // console.log(num)                                      
}
//advatage yhi h ki , no need of any condition and increment 

const str = "ABCD"
for (const character of str) {
    // console.log(character)
}

// const obj = {name: "nidhi", branch: "CS", target: "tcs"}
// for (const key of obj) {              // Error : obj is not iterable
//     console.log(obj);
// }


//MAP : Map object hold key-value pairs and remember the original insertion order of the key
//    : both  object and primitive values may used as either a key or a value
//    : key in map may only occur once ; it is unique in map collection

const map = new Map()
map.set("In","India")
map.set("Usa","United State Of America")
map.set("K","Korea")
map.set("In","India")
// console.log(map);
map.set(0,true);
// console.log(map);


for (const val of map) {
    // console.log(val);
}
// o/p:
// [ 'In', 'India' ]
// [ 'Usa', 'United State Of America' ]
// [ 'K', 'Korea' ]
// [ 0, true ]

//pr hme key value alg chahiye
for (const [key, value] of map) {      //destructure kr diya  // shyd hr iteration m array deta h
    // console.log(key + ":-" + value)
}
for (const val of map) {
    // console.log(`key: ${val[0]} ,  value: ${val[1]}`);       // this way also we can access value
}


// as we see this loop for of didn't work with object
//chalo fir ibject pr bhi loop lgate h

//*************************************************************************** */

//2)for in loop

// for (const key in object) {
//         const element = object[key];
// }

const obj = {
    name: "nidhi", 
    branch: "CS", 
    target: "tcs"
}
for(const key in obj){
    // console.log(key)
}
// name
// branch
// target

for(const key in obj){
    // console.log(obj[key]);        //jese hm array ki value find krne ke liye index dete h vese hi dena h, after all array bhi object ke form m hi rhta h
}
// nidhi
// CS
// tcs

for(const key in obj){
    // console.log(`key: ${key} and value: ${obj[key]}`)
}
// key: name and value: nidhi
// key: branch and value: CS
// key: target and value: tcs

const arr1 = [1, 2, 3, 4, 5]
for(const val in arr1){
    // console.log(val);       //<--- intersting h ye to index de rha h ha, just like key de rha tha object ki case m
}
// 0
// 1
// 2
// 3
// 4
for(const index in arr1){
    //console.log(arr1[index])    // <----- is trh use krna h     array[index]   object[key]
}
// 1
// 2
// 3
// 4
// 5

// const mp = new Map();
// mp.set(10, "a")
// mp.set(20, "b")
// mp.set(30, "c")
// for(const val in mp){
    // console.log(val);   // <----- no output KYO KI MAP ITERABLE NHI H, to ietrable nhi h to use
// }                       //        is trh loop m nhi likha ja skta h, VESE TARIKE H BAD M PDEGE.


//*************************************************************************** */

//3)forEach

//array ke property h length, vese hi prototype m ak aur property h that is forEach fn, jo ki value
// array pr iterate kr ta h 
//high order fn h forEach as parameter n fn h
//let see

const arr2 = [12, 13, 14, 15, 16]
arr2.forEach( function(val){                    //callback fn do   //jese ki yh fn array ke ander chal rha h, to yh jo val h automatic parameter ki trh val le ke aye ga ab ese kuch bhi likhiye
    // console.log(val);
} )
// 12
// 13
// 14
// 15
// 16
arr2.forEach( (item) => {        //wealso use arrow fn
    // console.log(item);
} )
// 12
// 13
// 14
// 15
// 16

// ALSO ONE INTERESTING WAY , SEE
function printMe(item){
    console.log(item);
}
arr2.forEach(printMe)       //dyan dena reference de rhe, call nhi kr rhe h,  ese--->printme()
// 12
// 13
// 14
// 15
// 16      //hena bda interesting

//Ab esa nhi h ki foreach ke fn ke pass ak hi parameter ke pass ak hi parameter ka access rhta, eske 
//pass kafi kuch aur access bhi hote h

// to dekho 

arr2.forEach( (item, index, array) =>{
    // console.log(`value : ${item} at index : ${index} in array : ${array}`);
    // console.log(item, index, array);
} )
// value : 12 at index : 0 in array : 12,13,14,15,16
// 12 0 [ 12, 13, 14, 15, 16 ]
// value : 13 at index : 1 in array : 12,13,14,15,16
// 13 1 [ 12, 13, 14, 15, 16 ]
// value : 14 at index : 2 in array : 12,13,14,15,16
// 14 2 [ 12, 13, 14, 15, 16 ]
// value : 15 at index : 3 in array : 12,13,14,15,16
// 15 3 [ 12, 13, 14, 15, 16 ]
// value : 16 at index : 4 in array : 12,13,14,15,16
// 16 4 [ 12, 13, 14, 15, 16 ]



// new Scenario
const letsCrackIt = [
    {
        name: "nidhi tcs",
        Aim: "Tcs"
    },
    {
        name: "nidhi amazon",
        Aim: "Amazon"
    },
    {
        name: "nidhi google",
        Aim: "Google"
    },
    {
        name: "nidhi Microsoft",
        Aim: "Microsoft"
    }
]

letsCrackIt.forEach( (item) =>{
    for (const key in item) {
        // console.log(key + " : " + item[key]);
    }
} )
// name : nidhi tcs
// Aim : Tcs
// name : nidhi amazon
// Aim : Amazon
// name : nidhi google
// Aim : Google
// name : nidhi Microsoft
// Aim : Microsoft

letsCrackIt.forEach(function(item){
    // console.log(item.Aim);
})
// Tcs
// Amazon
// Google
// Microsoft

// const map1 = new Map()
// map1.set("In","India")
// map1.set("Usa","United State Of America")
// map1.set("K","Korea")
// map1.set("In","India")
// map1.forEach( (val,key,mp) =>{
//     console.log(val,key,mp);
// } )




//conclusion 
// forof loop for -> array, map, string
// forin loop for -> Object, array(akhir kar array bhi object hi h)
// foreach loop for ->array, map

