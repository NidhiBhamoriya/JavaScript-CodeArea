const accountId= 123
let accountEmail="hhh@gmail.com"
var accountPassword= "12345"
accountCity="jaipur"
let ptaniValue


// accountId= 234  not allowed   -->  ab likh to dege error bhi nhi aye gi but koi h jo esko analyse krega nodeJs
accountEmail="ddd@gmail.com"
accountPassword="2313"
accountCity="omkarswar"
console.log(accountId);

//direct sbhi ko print krne ke liye hm bar bar console n likh kr kuch esa bhi likh skte h

console.table([accountId, accountEmail, accountPassword, accountCity, ptaniValue])



console.log(index);// because of hosting
if(true){
    for (var index = 0; index < 2; index++) {
   
    }
    console.log(index);    //2
}
console.log(index);  //2


for (let i = 0; i < 2; i++) {
    if(true){
        let b=2;        
    }
    //console.log(b);      // b is undefined
}
// console.log(i)       i is not define 

/* Prefer not to use var because of issue in block scope and functional scope*/
