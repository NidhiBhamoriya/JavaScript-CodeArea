const s = 'nidhi'                     // ye vali string bnane se bhi ap sbhi property 
const str = "sanu"                    //  use kr skte ho esa nhi ki new keyword use krke hi kr skte h
const sss = `nidhiiii`
console.log(s)
console.log(sss);
console.log(str[0])
console.log(str.length)          // u can use many more
console.log(str.__proto_)       // undefined

const repoCount = 50

// ***************************************************************************************

//  this syntax is outdated 
console.log("hello my name is " + s + " and my repo count is " + repoCount +`.`)         //nidhi50 value        

// String Templates / Template Strings / Template Literals :
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
//  ex: let text = `Hello World!`;
//      let text = ` tha value is ${n1} and %{n2}`
//Template String provide an easy way to interpolate/substitute variables and expressions into strings.
// prefer bakticks : 
//                string interpolation   :  syntax- ${...}
//                                          : yha ap bnate h placeholder unke ander jo bhi variable h ap 
//                                            vha inject kr skte h
console.log(`Hello my name is ${s} and my repo count is ${repoCount}.`)
console.log(` repo count increase by : ${ 2*(repoCount+repoCount) }. `);             //expression

// ****************************************************************************************

// one way also create the string 
const gameName = new String('chess')   //" "
console.log(gameName);    // [String: 'chess']
console.log(typeof gameName);     //object
console.log(gameName[0]);       //c
console.log(gameName.__proto__);    //to access prototype  // {}  empty object as o/p   --> empty nhi h bhut sari values h jo dekh 
//                                                                    skte ho ap console pr 

//jitni bhi methods h vo prototype m h     
console.log(gameName.__proto__)     //{}    // is trh ap object dekh skte h
console.log(gameName.charAt(0));    //c    // yhi shi tarika h method access krne ka   
console.log(gameName.toUpperCase())   //CHESS              //NOTE: ISSE ORIGINAL VALUE CHANGE NHI HUI H
gameName.toUpperCase()
console.log(gameName);     // [String: 'chess']
console.log(gameName.indexOf('h'));    //1
console.log(gameName.substring(1,3));   //he
console.log(gameName.substring(-3,3));   //che         end not included
console.log(gameName.slice(0,2));         // slice reverse 
console.log(gameName.slice(-4,2));
console.log(gameName.slice(-3,4));

const newStr= "     hitesh    "
console.log(newStr);
console.log(newStr.trim());

const gmail="sdhdha%gmail.com"
console.log(gmail.replace('%','@'));
console.log(gmail)
console.log(gmail.includes('nidhi'));
const a = 'ddfdf-fdfdfd-dfdfd-dfdf'
console.log(a.split('-'));     //"-" `-`
