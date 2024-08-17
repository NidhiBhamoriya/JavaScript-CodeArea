
        //  Object Oriented in JavaScript :                  [verbose cord---> use of extra synatx]
          
/*
 👉 Question : Does JavaScript really have classes ?

   ✨Answer  : No, didn't exist and also doesn't exist (hoti nhi thi, hoti nhi h)
          
           -> Generally this all syntax 0f c++, java ------> A programming paradigm, 
                     i.e is a method or style of programming that defines a set of principles, techniques,
                     and patterns for structuring code to solve problems on a computer.
                          ex: object oriented programming
                              procedural programming

   ✨Answer :  According to chat gpt :   (Just read out whole ans)
             ▶Yes, javascript does have classes.◀ This feature was introduced with ECMAScript 2015 / (ES6).
             However, ▶ it is important to note that JavaScript is primarily a prototype-based language,◀
             (na hi object oriented h na hi functional), and its classes are primarily syntactic sugar over
             existing prototype-based inheritance mechanism. In other word, it provides a more familiar 
             syntax for developer coming from class-based language such as Java or C++, but under the hood,
             it works somewhat differently.---> (▶i.e means behind the scene/ under the hood kam to 
                                                                   -> js prototype-based hi chal rha h ◀ )


 → → syntactic sugar  → → It is syntax within a programming language that is designed to make things easier 
                          to read or to express ← ←   👈

 👉 class person{
        construtor(name, age){
            this.name = name;
            this.age = age;
        }
        
        sayHello(){
            console.log('Hello, my name is ${name} and I'm ${this.age} years old.)
        }
    }
    
    let person1 = new Person('John', 30);
    person1.sayHello();    // o/p : Hello, my name is John and I'm 30 years old.  👈

     ⭐In this ex:  'person' is class that has constructor and a method named 'sayHello'
      ▶ So, while JavaScript does have classes, remember that they work somewhat differently from the 
        classes in languages with class-based inheritance, due to JavaScript's prototype-based nature ◀
    
*/

/*
    OOP : OOP is Programming Paradigm

    Object : -collection of properties and method
             -toLowerCase
        
    Que : Why we need OOP ?
    Ans : to avoid mashUp code, spaghetti code(very unstructured code) we need oop
  

    👉 4 Pillars :
        1) Abstraction :   ex fetch (you doesn't need to know internal detail of fetch is managed behined scene )
        2) Encapsulation :  is the concept of bundling data (variables) and methods (functions) that operate on that data into a single unit, such as a class
        3) Inheritance :
        4) Polymorphism :  Polymorphism in JavaScript refers to the ability of different objects to respond to the same method call in different ways.
                            only overloading


------------------>  [The # is used to make variable and method private]

    👉 PARTS OF OOP :
      ->object literal   ----> literaly ak object {} --> (object bnana)
      ->constructor fn
      ->prototype
      ->classes
      ->instances (new, this)

*/

const user = {
    //property
    username : "nidhi",
    logincount : 10,
    signedIn : true,

    //method
    getUsername : function(){
        // console.log(`username : ${username}`);      --> error  jese apne pda exection context to yha, fn to leleiya pr pta hi nhi h usename kya h. apne bola hi nhi ki bhar se sman lena h.-->this lga kr bol do ki me current context(apne sman ki bat kr rha hu)
    }
}
console.log(user.username);
user.getUsername()


//Constructor fn :
// const newPromise = new Promise()    // error          //  <----------- ye new hi actually m constructor fn h
const date = new Date()
// new is used to make new instance, new context, initialize the object


function User(username, loginCount, isLoggedIn){         // constructor fn
    this.username = username     //this.username yh variable h,   username  yh argument h
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this .greeting = () => {
        console.log('welcome');
    }
    return this                  // ------> Note : yha this empty nhi h   (global m this empty rhta h yha) 
    // implicitly this return hota hi h
}
// const userOne = User("hitesh", 12, true)
// const userTwo = User("abababbabaaba", 0, true)
// console.log(userOne);      // problem : data overWrite ho jayega ----> jbki hmne userTwo to print hi nhi kaya
                                                                        //   👇
                        // isliye to hm new keyword ka use kr rhe the bar bar in new Promise m, sb m
// //solution : 
const userOne = new User("hitesh", 12, true)          //muje to new instance chahiye
const userTwo = new User("abababbabaaba", 0, true)   //muje bhi
// console.log(userOne);              //  <------------ ab data overwrite nhi hoga usertwo ka
// // console.log(userTwo);    

console.log(userOne.constructor);     //[function : user]    <---- actualy m constructor property, reference hoti h apne khud ke bare m

console.log(userOne instanceof User);  //true


//👉   [Note : 1) new se sbse phle empty object create hota h, i.e instance 
//             2) constructor fn call hota h new keyword k karn
//                 -> yh sb argument vgera ko pack krke ap ko dedeta h
//             3step) jo apka this keyword h, yh jo argument vgera likhe h, vo sb is this m inject ho jate h
//             4) 4th step m apko mil jate h fn ke ander 
//      ]

