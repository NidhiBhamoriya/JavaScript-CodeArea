
// Control Flow

//if
if("" == 0){   //true/false
    console.log("true");
}
if("" === 0){   //true/false                //strictly equal
    console.log("true");
}

const balance=1000
// if(balance>500){
//     console.log(`balance : ${balance}`); 
//     console.log("OK");
// }
    //  OR
if(balance>500) console.log(`balance : ${balance}`), console.log("OK");    //semicolon must
//but this not good practice


const UserLoggedIn = true
const debitCard = true
if(UserLoggedIn && debitCard){
    console.log("Allowed to buy course");
}
const loggedFromGoogle = false
const loggedFromEmail = true
const guestUser = false
if(loggedFromEmail || loggedFromGoogle || guestUser){    //kisi se bhi login ho login to h na
    console.log("Allowed to access the course");
}

 if(2<3 && 4<5 && 5<6 ){       // multiple ho skte h pr sbhi true hone chahiye tbhi chalega
    console.log("inside if");  //inside if
 }

 if(2>3 && 2>3 || 5<6){         //&& has higher priority
    console.log("38 line if true");  //38 line if true 
 }

 if(2<3 || 2>3 && 5<6){     // 
    console.log("42 line if true");    //42 line if true
 }

 if(2<3 || 2>3 && 5>6){     //
    console.log("46 line if true");    //46 line if true
 }

 console.log(2**3);   //8
 
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

//  switch :
switch ("a") {
    case "b":
        console.log("1case"); 
        break;
    case "a":             //'a'/`a`/"a"
        console.log("2case");
    case 'c':
        console.log("3case"); 
    default:
        console.log("default"); 
}

// if not use break than key mil jane ke bad pura chale ga nhi ruke ga , accor. to sir bola tha ruke
// pr nhi ruka


//++++++++++++++++++++++++++++ Intersting Truthy / Falsy ++++++++++++++++++++++++++++
//2==2 <---- it is strictly true
//2>4  <----- it is strictly false

let userEmail = "tcs.com";
if(userEmail){                               //here i don't do any comparision
    console.log("76 truthy")   //76 truthy
}

userEmail=""
if(userEmail){                               //here i don't do any comparision
    console.log("80 truthy")    //not execute
}
else{
    console.log("80 falsy")   //80 falsy
}

if(1){
    console.log("83 truthy")   //83 truthy
}

const arr=[]
if(arr){                               //here i don't do any comparision
    console.log("92 truthy")    //92 truthy
}
else{
    console.log("92 falsy")   //not execute
}

//falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN          (""/''/``:empty string)

//truthy values : other than falsy 
// some are:
// "0", 'false', " ", [], {}, function(){}


//how to check array is empty then
if(arr.length===0){  //==0
    console.log("Array is Empty");         //Array is Empty
}

//how to check object is empty or not
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");       //Object is Empty
}


//false == 0    true
//false == ""   true         0==0    ""/null->num->0    false->num->0   undefined->num->NaN
//0 == ''      true


//++++++++++++++++++++++++++++++++++++  Hide topic (that you not know)  +++++++++++++++++++++++ */

// Nullish Coalescing Operator  (??) : null / undefined

let val1

val1 = 5 ?? 10
console.log(val1) //5

val1 = null ?? 10
console.log(val1) //10
val1 = 29 ?? null
console.log(val1)  //10


val1 = undefined ?? 20
console.log(val1)  //20
val1 = 20 ?? undefined
console.log(val1)  //20

val = null ?? 15 ?? 20 ?? 2
console.log(val1)   //15         //phli value assign ho jaye gi

//response jb null aye ya aye hi na undefined --> jise pua code disturb ho jata h --> is special 
//case ke liye iska use kiya jata h
// abhi to yha value dikh rhi h 10, 20 pr yha pr complex function hota h , ye fn database call kr 
//rha h vha se va;ue a rhi h, value aa rhi ho to thik h nhi to, null assign kr do, us hisab se m 
//handle kr lu age ki situation ko



