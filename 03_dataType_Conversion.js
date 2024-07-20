let score=33;     //jb ap backend pr kam kr rhe ho aur ap ko pta hi nhi h ki fronted se consi value a rhi h to
                     // ho skta h object ho , number ho, string ho pta hi nhi h
                     // ex const {score} = req.body
//yha to hme pta h ki score ak number datatype h

console.log(typeof score)           //number
console.log(typeof(score));    //number

let new_score="33"
console.log(typeof new_score);            //string

let ss = new String("nnn")
console.log(typeof ss);                    // object

//lekin ap ke pass string a rhi h ----> pr ap ko pta h ki operaton muje number pr hi krna h
//then you can do
let valueNumber = Number(new_score);
console.log(typeof valueNumber);        //number
console.log(valueNumber);                 // 33

let a="321as"    //string h
let numberValue=Number(a)
console.log(typeof numberValue);      //number     pr 324as to number nhi h      typeof number o/p dedega to dyan rkhna
console.log(numberValue);            //NaN   not a number

let b=""
let b_num=Number(a)
console.log(typeof numberValue);      //number   
console.log(numberValue);             //0

let a1=null
let valuenumber1=Number(a1);
console.log(typeof valuenumber1);       //number
console.log(valuenumber1);              //0

let a2=undefined         // Nan likhe ge to bhi yhi o/p ayega
let valuenumber2=Number(a2)
console.log(typeof valuenumber2);          //number
console.log(valuenumber2);                 //Nan

let a3=true
let valuenumber3=Number(a3)
console.log(typeof valuenumber3);          //number
console.log(valuenumber3);                 //1

let a4=false
let valuenumber4=Number(a4)
console.log(typeof valuenumber4);          //number            //obiously typeof nuber hi aye ga-->Number(..)
console.log(valuenumber4);                //0

let a5=NaN
console.log(typeof a5);          //number
console.log(a5)                   //Nan


//Note: 
// "33"  --->Number("33")   ====>33
// true => 1
// false  => 0
// NaN => NaN
// undefine => NaN
// null => 0
// "33ac" => Nan


let isLoggedIn = 1                           //1             // 0       // ""         // "nnn" 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);      //string       //string      //string      //string
console.log(booleanIsLoggedIn);            //true          //false       //false        //true 

let s=true
let x=String(s) 
console.log(x);    //true    tyoeof obious string ayega




