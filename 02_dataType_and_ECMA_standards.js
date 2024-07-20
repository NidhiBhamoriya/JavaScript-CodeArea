"use stirct"  //treat all js code as newer version

//alert(3+3)    // error: alert is not defined    as we are using nodejs, not browser


//kha ap spacing use kr skte h kha nhi  i.e  ;
//generally ap jb js, node, react m code likhte h semicolon avoid hi kijiye
// matter what readebility



let a = "nidhi"
let age = 22         
let isLoggin = false
let state
//or
// let state=undefined
let outsideTemp = null
console.log(state);
// DATATYPES:
// number => 2 to power 53                 ex:2,3,44,78,NaN
// bigint                           //scientific value h bhut bdi value h to hm big int use kr lete h               
// string           "" or ''
// boolean
// null ------> ak standalone value h          
// undefined             let state     -----> declare kr diya but value nhi di abhi i.e means undefined
// symbol      =>kisi bhi value ko unique bnane ke liye symbol used (used in react most)
// object
      
                 // NaN  ak special type h    let a="222a"; let num=Number(a); console.log(num)   =>o/p NaN
                 //   yh ak value h or numeric datatype h --> jo btati h ki invalid number
console.log(typeof "nidhi")
console.log(typeof age)
console.log(typeof(age))       
console.log(typeof (age))

console.log(typeof null)             //------------>  object    (js language ki khami,dekhe ge agee )
console.log(typeof undefined)        //------------>  undefined
console.log(typeof state)
console.log(typeof isLoggin);
console.log(typeof outsideTemp);
// null: null representation h ak empty value ka 
        //  ska mtlb ye nhi ki ap ne let a="" likh diya (yh kuch kyo ki eska type defined ho gya string)
        // let state = null;

//                          null   --------->   null ak standalone value h
//                          undefined   ------>  abhi value assign nhi hui h



let a3=NaN
console.log(a3)                   //Nan
console.log(typeof a3);          //number