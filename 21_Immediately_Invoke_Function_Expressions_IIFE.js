 
//Immediately_Invoke_Function_Expressions_IIFE

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed 
// immediately after they are defined

//jese hi apne fn likha use turnt / usi vkt execute krana

//use :1) jese ki apne ak file likhi sirf database connection h aur hm chahte h ki jese hi hmari 
//      application start ho vese hi hamare database ka connection start ho jaye
//     2) as we know ki global veriable access ho jate h child se, to hm nhi chahte ki global data
//        koi problem kre, hm particular code ko likh kr vhi execute kr dege
//        global scope se chije pollute hoti h kai bar aur hm chahte h atleast is fn m vo to nhi hona chahiye tha
//                           //or
//        2)MDM : avoid polluting the global namespace/scope:
//          Because our application could include many functions and global variables from different
//           source files, it's important to limit the number of global variables. If we have some
//          initiation code that we don't need to use again, we could use the IIFE pattern. As we
//          will not reuse the code again, using IIFE in this case is better than using a function
//          declaration or a function expression.
//
// CRYSTAL ClEAR ANS : IS GLOBAL KE POLLUTION SE PROBLEM HOTI H KAI BAR, TO ES GLOBAL SCOPE KE VARIABLE,
//                       ETC DECLARATION H USKE POLLUTION KO HTANE K LIYE HM IIFE KA USE KRTE H

//ye chij ko hm direct bhi ese krr skte h

function db(){
    console.log("DB CONNECTED") 
}
db();                                 //<------- lo turt/usi vkt chala diya

//thik h ese to kr diya, pr global scope case ka kya iske lliye if he use krege

(function(){
    console.log("iife")
})();

(() => {
    console.log("iife")
})();

(function chai(){
    //named iife 
    console.log("ye fn bhi chal gya wow")
})();           //;-ye nhi lgate tb to khud chl ga lekin age vala iife fn nhi chalega error ajayegi

(async () => {
    console.log("async fn");
})()                   //; nhi lgaya tb bhi hlo priint hogya me ifee ki bat ki thi iife nhi hoga sirf

console.log("hlo");

((name) => {
    console.log(`name is ${name}`);   //name is nidhi
})("nidhi")












//contains two major parts :
//1)grouping operator ().contain fn defination, This prevents accessing variables within the IIFE idiom as well as 
//polluting the global scope.
//2)The second part creates the immediately invoked function expression () 