
function calculateCartPrice(num){
    return num
}

console.log(calculateCartPrice(20));   //20
console.log(calculateCartPrice(200, 100, 300));   //200
/*PROBLEM: ap user kitni bhi item choose kr skta h, to hme price handle krni h */
/* ab iske liye fix para to hm kr nhi skte */
//or ew can say you don't know how much argument come, so that we can arrange parameter
// SOLUTION: USE REST OPEARTOR  ...

//[NOTE : REST AND SPREAD OPERATOR SAME H BS UNKE FN BDL JATE H WRT SITUATION]

function CalculateCartPrice(...num){     //... means jo bikhri h vo values mil rhi h unko ak bndl m pack kro (that is array) aur muje dedo
    return num
}
console.log(CalculateCartPrice(100, 300, 400, 200));   // [ 100, 300, 400, 200 ]
 // now we can easily apply loop on this array and add them

function calculateCartPrice_1(val1, val2, ...num){
    return num
}
console.log(calculateCartPrice_1(100, 300, 421, 500, 1050));    // [421, 500, 1050]


//pass object to fn

const user = {
    username: "nidhi",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    //username is nidhi and price is 199
}
handleObject(user)

//Problem arise when you write :
//1) problem : prices instead of price : o/p username is nidhi and price is undefined
// solution : need to check the specific object has that property or not that we are extracting
//2) Problem : the value you passing uska datatype object h ki nhi h YE SB CHECK KRNA PDEGA
// [note: isiliye to log type script ko psnd krte h (kyoki yha type checking ho jati h)]
//js m bhi ho jati h sirf code jada likhna pdta h

handleObject({          //direct object pass kr diya
    username: "tcs nidhi",
    price: "unmol"
})


//pass array to fn
const arr = [1, 2, 3, 4, 5]
function returnSecondValue(getArray){
    getArray[2]=10;
    return getArray[1];
}
console.log(returnSecondValue(arr));    //2
console.log(arr[2]);                 //10     not 3
console.log(returnSecondValue([10,30,50,70,90]));   //30
