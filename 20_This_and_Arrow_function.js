const user = {
    username: "nidhi",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${username}, welcome to website`)  // o/p: in line 9 username not define
        console.log(`${this.username}, welcome to website`)// o/p: in line 9 nidhi, welcome to website
        
        //this ->  means current context i.e { }, aur jb ap current context ko refer kr rhe h username,price inko to ap this keyword ka use krege
        console.log(this)  // o/p: 2 time object print huye h 1st with name nidhi & 2nd with pooja
    }
}
user.welcomeMessage()      //nidhi, welcome to website
user.username="pooja"              // context change kr diya , context means value, variable
user.welcomeMessage()      //pooja, welcome to website


//thik h upper this se smz a gya ab me yha bhar likhuga this to yha bhi kuch current context hoga ??
//yes

// this
console.log(this)       //{}    empty object

// ++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++
//[ NOTE : jb bhi ap NODE ENVIRONMENT m h to apka this refer kr rhe h EMPTY OBJECT ko , kyoki 
//         global ke ander context hi nhi h isliye empty]
//   ++++++lekin++++++
// [ NOTE : BROWSER KE CONSOLE m jb ap check kre ge this to WINDOW object a jayega as o/p]

/*Ab SUNO esa kyo ho rha h, phle kya hota tha js ko execute krne ka ak hi tarika tha i.e browser ke 
ander, aur jo engine the jo js ko execute krta tha, vh simply ak hi jgh paya jata tha browser ke ander
ab hmne us engine ko nikala aur alg alg naam diye jese node, deno, bun, ab hamre pass engine stand - 
alone h
=> browser ke ander jb engine run krta h to sbse jayada global object hota h vh h window object
*browser ke ander jo global object h vh h window object ]
*(tbhi to ap window ke sare event capture kr pate h ex: click, alert,form submit.
***/


// function chai(){
//     let shopname = "nidhi"
//     console.log(this);    //bhut sari chije a jaye gi
//     console.log(shopname)     //nidhi
//     console.log(this.shopname); //undefined  //dekha yh context hmara object ke ander hi kam kr rha h
// //                                               ese fn ke ander a kr this use nhi kr pa rha hu  
// }
// chai()

const chai = function(){
    let shopname = "nidhi"
    console.log(this.shopname)   //undefined              //browser m bhi undefined ayega
    console.log(this);    // //bhut sari chije a jaye gi
    
}
// chai()


const fn = () => {                         // function --change to---> =>
    const name="ram"
    console.log("this is function")
    console.log(this.name);    //undefined     khi aye ga bhai,, kisi bhi trh ka fn ho
    console.log(this);        //{}    <====== yha ye kha se aa gya
}
// fn()


const addtwonumber = (n1, n2) => {
    return n1 + n2;           //explicitly return         //curly bracket m return likhna hi pdega 
}
//or
const addtwo = (n1, n2) =>  n1 + n2;     //{ } return ht gya [ implicit return ] ak hi line he na
//or
const addtwonum = (n1, n2) => ( n1 + n2 )

console.log(addtwonumber(3, 4))    //7
console.log(addtwo(4, 4))    //6
console.log(addtwonum(4, 5))    //9

// [ NOTE : curly braces {}  -> m likha to return likhna pdega     line 67
//        : bracket  ()  -> m likha to return nhi likhna pdega     line 72      <---- mostUsedInReact


//return the object

// const fun = () => {name: "nidhi"}    ese direct return nhi kr skte h ---> isko wrap krna hi pdega
// console.log(fun())     //undefined
const fun = () => ({name: "nidhi"})    //ese krna h okk
console.log(fun())    // { name: 'nidhi' }



// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function(){})    //yha ap khi bar arrow fn likhte ho classic fn likhte ho
// arr.forEach(() => {})    //ese likho ge
// arr.forEach(() => ())        // ese bhi likh skte ho 



// geek for geek m yh ak statement bhi likha tha ki --> this within fn point to global object
// kya arrow fn ki to bat nhi kr rhe h  ?????