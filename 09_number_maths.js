
const score = 123;                      // is trh se score m koi si bhi value store ho jaye gi
const balance = new Number(100);       // is trh se only number hi store hoga
console.log(balance)    //[Number: 100]     // it also include prototype prototype and we can use many methos as well
                          // check at console
console.log(typeof balance)    //object
console.log(typeof (balance.toString()));       //string
console.log(balance.toString());      //123
console.log(balance.toString().substring(0,2))   //10
console.log(balance.toFixed(1))     //100.0 

const n=23.8932
console.log(n.toPrecision(2));    //24
console.log(n.toPrecision(3));    //23.9
const n1=1223.897
console.log(n1.toPrecision(3));    //1.22e+3       tin values to dedi baki sb pr exponential m dediya
console.log(n1.toPrecision(5));    // so ap ko dyan rkhna h ki ha value 4 hi ayegi decimal ke phle bad ka 
//                                    precision m yha dekh rha hu


const rupees = 100000000000;
console.log(rupees.toLocaleString());  // yh usa ke based pr , lga ke deta h
console.log(rupees.toLocaleString('en-IN'));   // for indian representation.


Number.MAX_VALUE
const s=Number.parseInt("1234")
console.log(s);



/*   toPrscision() --> Number of significant digits. Must be in the range 1 - 21, inclusive.
Returns a string containing a number represented either in exponential or fixed-point notation 
with a specified number of digits.*/



//************************************MATHS***************************************************** */
// math library

console.log(Math);          //Object [Math] {}
console.log(typeof Math);   //object
const pi = Math.PI
console.log(pi);         //3.141592653589793
console.log(Math.MAX_VALUE);
console.log(Math.MIN_VALUE);                                     //  [Note:M should capital]
console.log(Math.max(1,2));       //2
console.log(Math.min(-5,3));      //-5
console.log(Math.abs(-5))         //5
console.log(Math.round(4.678))     //5           <----ye jyada use kro ge ap
console.log(Math.round(53.134));   //53
console.log(Math.ceil(4.1))       //5    thoda bhi point aya to vh bdi value hi dega
console.log(Math.ceil(4.0))       //4   
console.log(Math.floor(4.92));     //4    kitna bhi value dedo decimal ke bad vh floor value hi dega
console.log(Math.floor(4.0));     //4    
console.log(Math.sqrt(9));       //3
console.log(Math.sqrt(7));       //2.6457513110645907
console.log(Math.pow(2,5));      //32


console.log(Math.random()) //0.6214564     /*math.random() ki value hamesha aygi 0 aur 1 ke bich m
//                                            aur hr bar alg alg value aye gi execution pr*/

//task : ab hm game bna rhe h aur muje 1 se 10 ke bich m hi number chahiye
console.log(Math.random()*10);  //7.43456534   /*ese ak decimal right side khisk jaye ga
//                                               pr value 0.04324445 ye bhi ho skti h,  
//                    0.0432234*10=00.43234   TO USS CASE KO AVOID KRNE KE LIYE HM +1 bhi kr dete h    
console.log(Math.random() * 10 + 1)
console.log((Math.random() * 10) + 1)    // braces kha board mass rule apply krega
console.log(Math.floor(Math.random()*10) + 1)     //4//3//8    vese to +1 under kro bhar koi frk nhi h
// ab apko kha se kha tk value chahiye vo depend krega kisko ese multiply kr rhe *10 *100

// ab case kbhi esa bhi ayega ki apko min bhi define krna hoga aur max bhi 
const min = 10
const max = 20
//so we use formula with random
// console.log(Math.random()*(max-min+1)+min)   +min bhi krna hota h pr hm esa nhi krege dekho kese
console.log(Math.floor(Math.random() * (max - min + 1)) + min);        
//   (+1 zero case avoid krne ke liye and baki to sbse uper jesa hi h sirf, +min kiya kyo ki hme etni minimum value to chahiye )


