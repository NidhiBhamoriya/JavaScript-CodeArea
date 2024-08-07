/*
OBJECT:

->DECLARATION :
  > there are two ways of array declaration : 
    1) by litearl
    2) constructor   (diff of singleton ka h baki as it is h dono method)
     
  > SINGLETON:- jb ap constructor se object bnate h to singleton ak object bnata h(menas apne tarike ka ak hi object h)
             :- lekin jb ap literal se bnate h to singleton nhi bnata uske bhut sare instance bn jate h(kiske->object k)
    [note: litearl se banega to singleton nhi hoga, construcotr se bna to singleton hoga]
  > 2)BY CONSTRUCTOR METHOD :-
                             - Object.create
  > 1)OBJECT LITERAL:-
                     - const jsUser = {}    // ye braces hi  object ---> pr abhi empty h
                     - const jsUser = {
                          key : value
                       }
  >objects are containers for Properties and Methods.
  >Properties are named Values.  
  >Methods are Functions stored as Properties.  
  >Properties can be primitive values, functions, or even other objects.
  
  >-A primitive value is a value that has no properties or methods.
   -Primitive values are immutable :
      ex : if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
 
  >Objects are mutable: They are addressed by reference, not by value.

  >block the value: Object.freez(objectName)

  >typeof obj.fnName   o/p function
  >typeof obj.name/age     o/p string
  >typeof symbolname   o/p symbol

  >2) with help of constructor  ---> in next file

  >we can also merge the object as array

*/
//yha hm key bhi define kr skte h(name dena ho name do name ki jgh 0 likhna ho 0 likho), value
//bhi lekin array ke case m key define nhi kr skte h, direct value dete h aur access krne ka ak 
//hi tarika index se arr[0], arr[1] ese.
const jsUser = {
  name: "nidhi",    // ABE YHA NAME LIKHTE H PR BYDEFAULT SYSTEM ISKO "name" ese process krta h, jo ki string h, vese ap esa likhte nhi h kyo ki vo already man leta h ki ha me string hu
  1: "bhamoriya",
  "full name" : "nidhi bhamoriya",   //  <----- isko ap kbhi bhi . operator se access kr hi nhi skte ho
  "Branch" : "cs",
  age:  18,
  location: "barwaha m.p",
  email: "bhamoriyanidhi@tcs.com",
  isLogged: false,
  lastLoginDays: ["monday", "saturday"]
}
//value jo apki marji: number dijiye, string , boolean, fn, array, ak aur object dijiye apki mrji

//access 
console.log(jsUser.email);
// console.log(jsUser[email]);    ese nhi likh skte mene ap ko btaya tha behind the scene yh track 
//                                 ho rha h string ki trh.   to muje ese likhna hoga (dekho niche)
console.log(jsUser["email"]);  

console.log(jsUser.Branch);      //esko kr skte h access
// console.log(jsUser.full name);    //ESE TUM LIKH/ACCESS HI NHI KR SKTE
console.log(jsUser["full name"]);   //ESE HI ACCESS KRNA PDEGA


// Interesting way to use Symbol(datatype) in object :
//INTERVIEW QUE : use symbol as key or ak symbol lo object ki key m add kro aur print kr ke dikha do

//declaration of symbol
const mySym = Symbol("key1")     //or symbol()                // <-------- 1st step
// console.log(mySym);      //Symbol("key1")

const obj={
  name:"nidhi",
  branch:"cs",
  rollno: 129,
  //mySym: "mykey1",   //ese nhi likhe h,kyo ki yh ak symbol ki trh use nhi ho rha h (iska ak syntex h  sqr bracet)
  [mySym]: "mykey1",         //symbol ko key ki trh add kiya            //    <----- 2nd step      //ap (64line) es symbol ko refer ke rhe ho 
  // [mysym2]:Symbol("key2"),  ese bhi nhi kr skte h
}

// console.log(typeof obj.mySym);   //string   for 71th line ke liye h check kiya h (symbol o/p nhi aya -> iske kiye [] use krna pdega)

console.log(obj[mySym]);   //mykey1   //isko bhi sqr bracket se hi access krege   <------- 3rd step

// console.log(mySym);  //Symbol("key1")


obj.name="nidhi bhamoriya"            //overwrite the value
console.log(obj.name);       //nidhi bhamoriya
console.log(obj);

//lock the value (koi values ko change n kr ske)   // comment bcoz of fn check
// Object.freeze(obj)                     //obj object ko freez kr dijiye
// obj.name="pooja mukati"                 //chah kr bhi change nhi kr pai
// console.log(obj.name);  //nidhi bhamoriya
console.log(obj);
//  o/p:
// {
//   name: 'nidhi bhamoriya',     //pooja nhi aya ok    //if uncomment upper ki line
//   branch: 'cs',
//   rollno: 129,
//   [Symbol(key1)]: 'mykey1'     //<-- yhi to interview vala puch rha tha   //ydi upper sirf mysym likhte to o/p mysym: 'mykey1' aye ga as normal key jo string h
// }


//  you can also add property/method like this :  (
obj.greeting= function(){
  console.log("hello, i am nidhi")
}

console.log(obj.greeting)   //[Function (anonymous)] //fn return break  , fn execute nhi hua h fn ka reference aya h
console.log(obj.greeting())    //  hello, i am nidhi
                               //  undefined     //ye bhi ak extra execution hota h
     // pta chal gya undefine isliye a rha h kyo ki hm fn ko console kra rhe h, jiski need nhi h
console.log(obj)
//o/p : {
//   name: 'pooja mukati',
//   branch: 'cs',
//   rollno: 129,
//   greeting: [Function (anonymous)],
//   [Symbol(key1)]: 'mykey1'
// }

obj.greetingTwo = function(){
  console.log(`hello obj as user name : ${this.name}`);      //name ko reference krne ke liye this is nothing but obj
}

console.log(obj.greeting());     //hello, i am nidhi
console.log(obj.greetingTwo());   //hello obj as user name : nidhi bhamoriya


/*
 * Objects are objects
 * Maths are objects
 * Functions are objects
 * Dates are objects
 * Arrays are objects
 * Maps are objects
 * Sets are objects 
 */