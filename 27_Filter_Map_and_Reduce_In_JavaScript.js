
// 27 Filter Map and Reduce In JavaScript


const web = ["html", "css", "js"]

// const values = web.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values);      // o/p: //undefined
//o/p:
//html
//css
//js
//undefined

// const values = web.forEach( (item) => {
//     // console.log(item);
// } )
// console.log(values);   //o/p : undefined

const values = web.forEach( (item) => {
    // console.log(item);
    return item
} )
console.log(values);   //o/p : undefined

// [ NOTE : FOREACH NEVER RETURN ANY VALUE ]
//QUE: WHAT WILL GOING TO DO NOW, In CASE 1)WHEN I WANT TO DO SOMETHING ELSE WITH VALUES INSTEAD OF 
//     PRINTING AND USING THEM. 
//     2)WHEN I WANT KI JESE HI CSS AYE TO RETURN KRIYE NHI TO MT KRIYE.
// BUT: IN ALL CASE WE ARE GETTING UNDEFINED WHEN WE WANT RETURNED VALUE.

//SOLUTION : IN THIS CASE ONE CONCEPT IS PROVIDED THAT IS FILTER

//NOTE: filter bhi forEach ki trh call back leta h

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//below three line sirf arrow fn diff terike se use kr skte h eska revision ho rha h , OK
// web.filter( () => {return num1})   //explicit return    //mutli line last line return if needed
// web.filter( () => (num1))                 //implicit return   ak hi line  sirf> ya consol ya return
// web.filter( () => num1)        //implicit return     ak hi line sirf-> ya consol ya return
// web.filter( function(){})

// (()=>(console.log("d")
// ))();                             //d
// (()=>console.log("d")
// )();                             //d
// const x = () => console.log("d")
// x()                              //d
// const a = () => (console.log("d"))
// a()                              //d
// const b = ()=>(1+2)
// console.log(b());     //3
// const c = ()=>1+2
// console.log(b());     //3
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Back to the topic 
// Filter :

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//so i said early ki filter bhi call back fn leta h just like forEach, but FILTER CAN RETURN VALUE

const newNums = myNums.filter( (num) => num>4 )   // vh values return hogi that satisfing condition in from of array
console.log(newNums);    //[5, 6, 7, 8, 9]

const newNums1 = myNums.filter( (num) => {num==5})
console.log(newNums1);    //[]    why empty  // forgot???  return likhna must h if u r usng braces

const newNums2 = myNums.filter( (num) => {         
    return num==5                                       // problem solved of 69th line
})
console.log(newNums2);     //[5]

const newNums3 = myNums.filter(function(num,index,arr){      //index, array
    return num>9
})
console.log(newNums3);    //[]


//For each m yhi kam ese krege
const newnums = []
myNums.forEach((num)=> {
    if(num>4){
        newnums.push(num)
    }
})
console.log(newNums);        //[ 5, 6, 7, 8, 9 ]
//here we only need of extra array and some more code



//let Practice 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')      // bk is thing but object
// console.log(userBooks);
//o/p jese phle array item a jate the vese hi yha pr pure object ouput m aa jayege
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
// ]

//give books that publish afer 2000
const userBooks_published_after_2000 = books.filter( (bk) => {return bk.publish>=2000} )   
// console.log(userBooks_published_after_2000);

userBooks = books.filter( (bk) => {return bk.publish>=1995 && bk.genre==="History"} )   
// console.log(userBooks);
// o/p: 
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
// ]


//++++++++++++++++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++++

// same map bhi call back fn leta h :


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//add 10 in each val
const newNumss = myNumers.map( (num) => num+10 )         
console.log(newNumss)     // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(myNumers)    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] esme kuch change nhi hoga, obious h ho na bhi nhi chahiye

//filter shayd (only used for condition/filter purpose ki, jo condition satisfied kre ga vhi item return hoge in form of array))
const newNumss1 = myNumers.filter( (num) => num+10 )
console.log(newNumss1)    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   //koi vlaue change nhi hui as it is array ke form m a gyi


//[ NOTE : USE ANY METHOD FOREACH, FILTER, MAP ETC, orignal array ko kuch nhi hoga, sirf vh value dega ab chahye tum alg uske sath kuch kro]

const newNumss2 = myNumers.filter( (num) => num>5 )         
console.log(newNumss2)     // [6, 7, 8, 9, 10]
const newNumss3 = myNumers.map( (num) => num>5 )
console.log(newNumss3);   //[false, false, false, false, false, true, true,  true,  true, true]
//apko kya lga ki 5 se bdi value aye gi, nhi
//eske liye apko filter use krna pdega
//map to apko value after given operation perform kr value deta h in form of array 

const newNumss4 = myNumers.map( (num) => {
    // console.log("d");
    if(num>5)
    {                        //ap map me bhi condition check krega iska mtlb yh nhi, ki yhi value 
        return num           //dega, sari values dega in form of array
    }
} )
console.log(newNumss4);   //[undefined, undefined, undefined, undefined, undefined, 6, 7, 8, 9, 10]
/*Tell me what you think? apne soch ki condion satisfied value mile gi but esa filter m hota h,
  map m nhi, always map return all indexs value even you apply condition.
  NOTE: ALWAYS RETURN ARRAY AFTER ALL ITTERATION DONED/just after fn finished
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//CHAINING

//map().map()
//map().filter()

// let newnums = myNumers.map( (num) => num*10 ).map( (updatednum) => updatednum+1)
//  OR
let newNumers = myNumers
              .map( (num) => num*10 )
              .map( (updatednum) => updatednum+1)
console.log(newNumers);    // [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]

//suno phla map num*10 kr array bnaye ga, fn khtm/iteartion done to ab array return to nhi krega
// kyoki ak map us pr lga h( means us array pr jo phle map n bnai thi),
//2 nd map take updatednum form array of 1 map and, make new array with and fill the indexes with 
//increment of 1
//and finally after processing newNumers get array

newNumers = myNumers
            .map( (num) => { return num*10 } )
            .map( (num) => { return num+1 } )
            .filter( (num) => { return num>50 } )
console.log(newNumers);    // [ 51, 61, 71, 81, 91, 101 ]


/*CONCLUSION: Shayd RETURN MTLB YH NHI KI AK VALUE DEDI, RETURN MEAN AK EMPTY ARRAY M RETURN KR RHE 
              H VALUES AK KE BAD AK AFTER CONDITION(FILTER)/OPEARTION(MAP) ON EACH VALUE THAT WE TAKE 
              DURING ITERATION.
              IF ITERATIONS DONE/FUNCTION FINISHED A FINAL ARRAY RETURNED TO VARIABLE*/


//+++++++++++++++++++++++++++++++++++++++++ REDUCE ++++++++++++++++++++++++++++++++++++++++

// const array = [1, 2, 3, 4]

//0 + 1 + 2 + 3 + 4
// const initialValue = 0
// const sumWithInitial = array.reduce( 
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// ); 
// console.log(sumWithInitial);      //10
//accumulator->previous value

//accumulato m +plus hote jata h in each iteration and last m yhi sum return ho jata h,
//but problem ak he accumulator ko pta hi nhi uski initial value kya h, isliye hme explicitly dena 
//pdata h

const arr = [1, 2, 3, 4]
const sum_of_element = arr.reduce( function (accumulator, item){
    console.log("acc : ",accumulator);
    return accumulator + item
}, 0)
//arr.reduce( ()=>{} , 0)      //two parameter
console.log(sum_of_element);          //10

//REDUCE m bhi concept same h, bhut yha ak array ki jgh variable liya jata h, usme value hi value
//updated sum return hota h in each iteration and after all iteration done the variable (with sum of 
//all element) return tha accumulator variable

//this work you can aso do with help of other loops no problem

const shoppingCart = [
    {
        course: "js",
        price: 499
    },
    {
        course: "java",
        price: 999
    },
    {
        course: "cpp",
        price: 299
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
