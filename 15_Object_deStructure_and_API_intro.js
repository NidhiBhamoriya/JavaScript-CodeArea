
// DE-STRUCTURING :
// 1) Object ki
// 2) Array ki  (dono ki hoti h)

//Array ki destructure we going to understand later

//so,

// # DE-STRUCTURING OF OBJECT:
//uses : used in react, jb ap react pdoge vha ak object milega, us object ko apko destructure krke
//       uski values leni pdegi (vese ap direct bhi le skte ho, but destructuring krna easy hota h)


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//you generally use in 2ways:
course.courseInstructor  //or
course["courseInstructor"]

//but when 1)you need to make clean project, 2)and bar bar ak hi chij ko use kr rhe h 
// bar bar yh likhna course.courseInstructor course.courseInstructor kuch ajib ho jata h 
//  TO YOU CAN RESOLVE THIS PROBLEM BY BELOW SYNTAX :
// YH AK SYNTACTICAL SUGAR H
//Syntactic sugar: syntax within a programming language that is designed to make things easier 
//                 to read or to express

//likho const kha se value exctract krni h, course object se se. kya extract krna h courseInstructor 
// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor)        //hitesh

//ap courseInstructor bhi bda lg rha h to ap ese bhi kr skte ho
const {courseInstructor : instructor} = course                 // <----- destructure of any value
console.log(instructor);      //hitesh           
 

//react
// const navbar = ({company}) => {   // props.name, props.ye, props.vo, ese bar bar nhi likhte h -> 
// //                                     concept ata h yha fir destructuring ka :
// //                                       (props.company) n likh kr  ----> ({company}) likh dete h
// //                               
// }
// navbar(company = "hitesh")

//CURLY BRACES {} -> YANI DESTRUCTURING HO RHI H



//API : apna kam dusre ke sr pr dal dena
//ex: manu card api ka documentation
//ex: apne login kiya, ab ye ap ka headache nhi h ki google us bnde ko verify kese krega, uska email
//    dla h ki nhi h, register h ki nhi h --- yh sare kam API ke through hote h

// API kuch nhi h : apke pass kuch value ati h backend se un value ko kese ap likhte h
// phle vo values ati thi XML structure m to vo bhut complex hota tha
//ab apke pass value ati h JSON m

//json kese dikhta h --> bhut assan h
// {

// }
//1) yh json h, object hi h but yha is object ka name nhi h
// {
//     // name : "Hitesh",    //lekin ye ese nhi likha ja skta h kyoki yh object nhi h object ka name hota h
//     "coursename" : "js in hindi",    // proper json formate m key bhi stirng hoti h, value bhi,expect no. boolean etc
//     "price" : "free",
//     "experienceyear" : 10
// }
// later hm variable m hold krte h vese 

//fetch method, fetch m url call kruga aur respond m muje ye vala deta mil jaye ga
//then convert kr lege obj. m, aur fir ak ak value nikal luga


//   JSON HME, HMESHA HI OBJECT KE FORM M NHI MILTA KBHI ARRAY KE FORM ME BHI MIL JATA H
// 2) array ke form m
[
    {},
    {},
    {}
]
//we know how to apply loop and access the value of object

//API:random user me api
//json formatter tool



//API mtlb ye nhi apko object hi mile apko array bhi mil skta h

//conclusion: jitna api bat ki vo json formate hi h
//json : javascript notation h
