// Memory 

// early language like c : its our responsibility as programer to resereve memory and free the resereved memory
//                    ( reserve memory : Setting aside a portion of main memory for some purpose.)

// lekin ab ki language like js,.. ab apko memory pr etna control nhi diya jata, ab garbage collection ys sb 
//   hote h


// ab hmare pass do type ki memory hoti h
//  1) Stack Memory    (primitive)        //*****aur stack se koi value lete ho to apko uska copy/value hi milta h
//  2) Heap Memory     (non-primitive)    //***** aur heap se koi value lete ho to apko uska reference hi milte h

let myName = "nidhi";
let anotherName = myName;
console.log(anotherName)         //nidhi
anotherName = "sanu"
console.log(myName);               //nidhi
console.log(anotherName)           //sanu

let userOne = {                             //pura code { .......}   vala jayega heap m and user identifier 
    email: "user@google.com",            //jayega satck m aur yha se point point krega code ko jo ki heap m h               
    upi: "user@ybl"
}

let userTwo =  userOne;                //userTwo identifier stack m declare hoga but value userOne ke code ka hi reference milega reference mile ga 
userOne.email = "nidhi@google.com"
console.log(userOne.email);
console.log(userTwo.email);


//reference means any changes you make is done on orignal value



















// let a="ddddddd.dddd"
// console.log(a);       ddddddd.dddd
// let b="ddddddd   rffff"
// console.log(b);        ddddddd   rffff












