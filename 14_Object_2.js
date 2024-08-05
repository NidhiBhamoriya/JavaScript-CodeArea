// Object declaration with help of CONSTRUCTOR

const tinderUser = new Object()          //yh ak singleton object h
const tinderUser2 = {}                  // aur yh ak non-singleton object h
console.log(tinderUser)  //{} empty object    
console.log(tinderUser2) //{} empty object 
//[NOTE : Dono me koi internal difference nhi h except concept of singleton]

tinderUser.id = 129                 //tinderUser2 ke liye bhi hm ese bad m  kr skte h
tinderUser.name = "nidhi"
tinderUser.branch = "cs"
tinderUser.msg = function(){console.log("hello everyone nice to meet u")}
console.log(tinderUser);   //{ id: 129, name: 'nidhi', branch: 'cs', msg: [Function (anonymous)] }

//SBHI KAM SAME HI HOTA H 

const regularUser = {
    email: "bhamoriyanidhi@tcs.com",
    fullname: {
        userFullName :{                      //jitne ap depth m jaye ja skte h
            firstName: "nidhi",
            lastName: "bhamoriya"
        }
    }, 
    id: [129,128],
    codeword: function(){console.log("nidhitcsbhamoriya")}
}
console.log(regularUser["email"])    //bhamoriyanidhi@tcs.com
console.log(regularUser.fullname) //{ userFullName: { firstName: 'nidhi', lastName: 'bhamoriya' } }
console.log(regularUser.fullname.userFullName.firstName);   //nidhi
//OPTION CHAINING : console.log(regularUser.fullname?.userFullName.firstName); QUE. MARK ->protectn
//   krta h if full name exist hi nhi krta ho to (Api se response ata ho to yh syntax use krna hota h )
console.log(regularUser["fullname"]["userFullName"]["lastName"]);   //bhamoriya
console.log(regularUser.id[0]);   //129
console.log(regularUser.id[1]);   //128
regularUser.codeword()    //nidhitcsbhamoriya
// regularUser.codeword  ye fn ka reference deta h execution nhi hota h //console krke dekh lo 


// console.log(regularUser)
// o/p
// {
//     email: 'bhamoriyanidhi@tcs.com',
//     fullname: { userFullName: { firstName: 'nidhi', lastName: 'bhamoriya' } },
//     id: [ 129, 128 ],
//     codeword: [Function: codeword]
// }


// MARGING OF OBJECTS

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "x",
    4: "y"
}

//M1
const merged_obj = {obj1, obj2}   //yha bhi vhi problem aye gi object m object
console.log(merged_obj)     //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'x', '4': 'y' } }

//M2
const merged_obj2 = {...obj1, ...obj2};  //spread operator (latest method)
console.log(merged_obj2)    // { '1': 'a', '2': 'b', '3': 'x', '4': 'y' }

//M3
// Professional method
/*Object.assign() : Copy the values of all of the enumerable own properties from one or more source
                    objects to a target object. Returns the target object.*/

// const merger_obj3 = Object.assign(obj1, obj2)  //here, obj1 : target object & obj2 : source object
// console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'x', '4': 'y' }
// console.log(obj1)  //{ '1': 'a', '2': 'b', '3': 'x', '4': 'y' }  // as i say target object acc. to defination yh changes aye h

//best way is use empty object that is {} as target object and remain as source object
const merger_obj3 = Object.assign({}, obj1, obj2) // now here {} : target object & obj1,obj2 : source object 
console.log(merger_obj3); //{ '1': 'a', '2': 'b', '3': 'x', '4': 'y' }
//now no change hoga ni obj1 m.
//({},obj1,obj2,obj3,...n)(obj1,obj2,obj3,....n).


// one syntax you used most jb bhi database se value aye gi
// database se value kuch es trh ati h
// to apke pass users aye h database se to jyadatr array of object ki form m ayega
const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },                             //seperator
    {
        id: 2,
        email: "lmn@gmail.com"
    },
    {
        id: 3,
        email: "pqr@gmail.com"
    },
    {
        id: 4,
        email: "xyz@gmail.com"
    }
]
//ese value ati ajyegi ab apko esme ho skta h loop thru krna ho value print krani ho
//loop
//value access
users[0].email    //user[0] as  obj  name man skte h


//again back to object
console.log(tinderUser);
//1)GETTING ALL KEYS : (by Object ka fn key)
console.log(Object.keys(tinderUser))    // [ 'id', 'name', 'branch', 'msg' ]     //hmko dedo sb kis pr kiski obj --> tinderUser ki
//INTERESTING BAT : YH H KI ISKA DATATYPE ARRAY H 
//apne sari key leli and array m rkh diya ab AP ARAM SE INDER LOOP LGA SKTE H
//2)GETTING ALL VALUES : 
console.log(Object.values(tinderUser)) //[ 129, 'nidhi', 'cs', [Function (anonymous)] ]

console.log(Object.entries(tinderUser))
//op:[          array ke ander array
//     [ 'id', 129 ],                // key 0 index, than value 1 index
//     [ 'name', 'nidhi' ],
//     [ 'branch', 'cs' ],
//     [ 'msg', [Function (anonymous)] ]
//   ]


// GOOD CONCEPT : hasOwnProperty()---->true/false
//PROBLEM : jb ap loop lga ke value nikal rhe h , to kbhi value exist hi nhi kr rhi to crash hone 
//          ke chances h to 
//SOLUTION : m1) see manualy
//           m2)simply check
//           tinderUser.hasOwnProperty('id')         return boolean value-> that is true
//           tinderUser.hasOwnProperty('rollno')     return -> false  ""/''/``

console.log(tinderUser.hasOwnProperty('id')); //true
console.log(tinderUser.hasOwnProperty("rollno"));  //false
