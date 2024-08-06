
//function : 10, 20 line ke code ko ak package m bnd kr dena - fn h, abap isko khi bhi use krskte ho

function sayMyName(){
    console.log('N')               // { to }: defination h fn k, () : synatx h
    console.log('i')
    console.log('d')
    console.log('h')
    console.log('i')
}
// sayMyName     : yh h reference              o/p nhi ayega 
// sayMyName()   : yh h execution

sayMyName()

//add 2 no.
function addTwoNumber(number1, number2){    //datatype nhi dege to bhi chalega
    // number1 + number2   esko print krana pde ese nhi likh skte  //return concept ni h rukho thoda
    console.log(number1 + number2);
}

addTwoNumber(1, 2)    //12
addTwoNumber(1, "3")   //13    
addTwoNumber()   //NaN
addTwoNumber(3, "ab")  //3abc
addTwoNumber(3, null) //3
 //ap user uda kr kuch bhi dedega ---> lekin hme ise handle krna pdega fn m hi

const result = addTwoNumber(3, 4)    // o/p : 7
console.log("result",result)      //o/p : result undefined


function multiplyTwoNumber(num1, num2){
    let result = num1 * num2
    return result                     //   <------ agya concept return ka, return type ki need nhi h we known hena
}

const Result = multiplyTwoNumber(3,4)
console.log("Result",Result);     // o/p : Result 12


function loginUserMessage(username){
    return `${username} just logged in`
}

const msg1 = loginUserMessage("nidhi")
console.log(msg1);      //nidhi just logged in

const msg2 = loginUserMessage("")                     //null
console.log(msg2);           //just logged in         //null just logged in 

//Interview question
//no argument pass then ---> we know that ans willl be undefine,  let see
const msg3 = loginUserMessage()
console.log(msg3);           // undefined just logged in

// function loginUserMessage(username){
//     if(username === undefined){              // !username   false value--> undefined, ""
//         console.log("please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// function loginUserMessage(username = "ram"){        //default value dedete h
//     if(username === undefined){              
//         console.log("please enter the username")
//         return
//     }                                                
//     return `${username} just logged in`        
// }
//         [ NOTE : ye ram kis case m ayega jb koi value pass nhi krege that is line54]


