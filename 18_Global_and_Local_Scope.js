
// { }   ----> yhi h scope 

if (true) {
    let a = 10
    const b = 20
    var c = 30    // c = 30   ab var likho mt likho problem same aye gi
    // console.log("INNER: ", a);
}

// console.log(a);  //error : a is not define
// console.log(b);  //error : b is not define
console.log(c);  //30
// yhi disadvantage h var ka bhar access ho gya (local scope h variable) / var ko kinti bar bhi declare kr skte h aur khi bhi

// ab jo bhi global scope m likhte  h vh block scope m available rhti h, vhi block scope ki data global
// scope m avaialable nhi rhta h


// REMEMBER THIS CONCEPT :
// jo ap browser m jake console m scope check krte ho vo alg h
// aur jo ap code envirnment m node through example krte h vo alg h
