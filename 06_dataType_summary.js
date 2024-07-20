//official document m:
 
// datatype are categoried in 2 parts:
    //   1) primitive
    //   2) not primitive
// this categoritation is doned on the basis of  : 1) how data is stored in memory              
//                                                 2) and how you can access the data  from memory

// primitive data , non-primitive or reference type

// 1) primitive  :  
            //   -> the datatype of primitive are call by value hote h
            //   -> 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 2) Reference type (non primitive ) :
            //  -> call by reference   (reference provide kiya jata h)
            //  -> Array, Object, function


// que : js dynamicallly typed language ya statically typed language h ????
// ans : *ab languages m kya hota h ---> btatna pdta h varible ka type kya h defined krna pdta h 
//        ydi apki language m type define krna h, to obious h thodi safety bd jati h   int a=2;
//            but 
//      *JS m eski koi jrurt nhi h
//           let value = "123"
//         hmne js ko kbhi nhi btaya ki yh string type value h, boolean type value h           
//          js m kbhi language defined krne ki jrurt nhi nhi pdi
//          that why==>
// ***[JavaScript is a dynamically typed language, which means that data types of variables are determined by
// the value they hold at runtime and can change throughout the program as we assign different values to them]       

//js ka ak cosin bhai h 
//   typeSript:  *  in which defined type of variable  is neccessary
//               * stataic typed language
//               * const value:number = 123


/////////////////////////////////////////////////////////////////////////////////////
let score = 10
let scoreValue = 10.3            //decimal ho flaot ho number number h
let isLogged = false;
let outsideTemp = null
let email 
let number = 3983857453475872675265n;              //bigint  n

const a = Number("99999")
const id = Symbol('123')          //return bhi alg datatype milte h jise symbol khte h
const anotherId = Symbol('123')
//ab ap ko lg rha hoga dono to same hi h but yhi kam h symbol ka ble app esme same value pass kro string, number 
// kuch bhi, pr jo result mile ga id, anotherId unki value same nhi hogi
// Verification
console.log(id === anotherId);      //false
console.log(typeof id);


let heroes = ["saktiman", "naagraj", "doga"]
let myObj = {
    name: "nidhi",
    age: 22
}
let myFunction = function(){
    console.log("\n hello world");
}

console.log(typeof heroes);            //object
console.log(typeof myObj);             //object
console.log(typeof myFunction);        //function    jisko bolte h object fn (or) fn object       
                                                                                /* all non-primitive type 
                                                                                    ke h unka return type
                                                                                    object hi ata h  */

console.log(typeof meCodeMHuHiNhi);      //undefined       this variable not present in code
console.log(number)                     // 983857453475872675265n
console.log(typeof number);             //bigint



//typeof
//number-->number
//string   const s="sss" --> string
//         const s=new String("nnn")  --> object
//boolean-->boolean
//null--->  object
//undefined-->undefined
//symbol-->symbol
//bigint-->bigint

//array-->object
//object-->object
//fn-->fn (object fn)
