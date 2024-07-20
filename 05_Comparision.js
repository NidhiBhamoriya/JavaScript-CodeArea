console.log(2<1);
console.log(2>1);              //return boolean true/false
console.log(2<=1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);

// difficulty kb ati h jb ap same datatype ko compare nhi krte h
console.log("******************************************")
console.log("2" > 1);     //true
console.log("02" < 1);    //false  console.log("a" < 1);     //false       ( NaN ana chahiye pr nhi esa nhi hua kyoki return value in boolean)
// console.log("a" > 1);     //false          krna hi kyo  compre df datatype ko 
console.log(null > 0);   //false
console.log(null == 0);  //false             //yha bhi true ana chahiye tha
console.log(null <= 0);  //true //>=      // esa nhi h ki greater than equal to h --> but predictable result nhi ate

// Note: [  comparision <,>,<=,>=  and equality check ==   work differently   ]
//                        comparision convert null to a number   treat as 0
//                         thats why null <= 0 is true  and null>0 is false

console.log(undefined > 0)   //false
console.log(undefined == 0)   //false
console.log(undefined >= 0)    //false        // undefined sb m false dega  (except condition undefined ==null)


console.log(null == undefined);      //true    

// Note:   why:    null == 0   --->return false  ???   jbki return true krna chiye  null-->number-->0
//         ans:   because only null==undefined   return true

//******************************************************************************* */


//Strict check   ===
// not only check value but but also datatype 
console.log("2"==2)     //true     kyo ki conversion ho jayega   "2" --se--> 2
console.log("2"===2)    //false    strict check datatype same nhi h   (conversion kru ya nhi kru, nhi kyo ki === bol dega ki yh equal h hi nhi, as datatype hi same nhi h)
console.log(true==1);   //true
console.log(true===1);   //false
