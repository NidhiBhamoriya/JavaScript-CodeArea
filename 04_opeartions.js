
let value=1
let negValue=-value
console.log(negValue);     //-1
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);      // **   2 to the power 2     =>    2^2
console.log(2/2);
console.log(2%2);

let str1="hello"
let str2=" nidhi"
let str3 = str1 + str2
console.log(str3);         // hello nidhi


// note   :this below opeartion not prefer     (kyo likhna confusing code)

console.log("1" + 2);     //12
console.log(1 + "2");     //12
console.log("1" + 2 + 2);    //122     apne socha hoga ki pka 14 ayega but NO its wrong
console.log(1 + 2 + "2")     //32      
console.log(1 + 3 + "2" + 1 + 4)     //4214
console.log("1"+2+"3"+4+5+"6")     //123456   
console.log("1"+2+"3"+(4+5)+"6")     //12396   


// note : yh ak rule h    ki aye string hua to sb ka conversion string m ho jaye ga
//                       aur string last m h to jo convsersion h vo ho jayega 1+2+"4" i.e 34



// trity conversion

console.log(true)     //true
console.log(-true)    //-1           true-->boolean convert to number-->1
console.log(+true)    //1
//console.log(true+)   //error

console.log(-false)    //0          false-->boolean convert to number-->
console.log(+false)    //0

console.log(+"");     //0           ""--->0     or   ""->false->0      +0==>0
console.log(+"a");     //NaN
console.log(+undefined); //NaN
console.log(+null); //0
  
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2        //num1=4 num2=4 num3=4

// postfix/prefix
