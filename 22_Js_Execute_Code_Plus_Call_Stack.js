
/*JavaScript is a synchronous (Moves to the next line only when the execution of the current line 
is completed) and single-threaded (Executes one command at a time in a specific order one after
another serially) language. To know behind the scene of how JavaScript code gets executed
internally, we have to know something called Execution Context and its role in the execution of 
JavaScript code.*/


// Js Execute Code Plus Call Stack

//code kese execute hota h?                             [for diagram check out geek for geek]
//call stack kis trh se execute hote h


//(I) EXECUTION CONTEXT : **********************************************************
/*
-> DEFINATION: the environment in which JavaScript code is executed.
-> js execution context means file that u made usko js run kese kregi exexute kese kre gi

-> REMEMBER:
   -> jb bhi js ko code dete h --> GLOBAL EXECUTION CONTEXT always/hmesha bnega hi bnega
        ->aur jha pr bhi global ec bnta h, usko refer kr deya jata h ak variable i.e this 
          ->es this ke ander global exection contxt ko rkh diya jata h
(Interview que: ydi apne browser m run kiya hota to??
     ans: browser ka Global ec kuch alg hota h aur node js environment, deeno, bun ka thoda alg.
          browser ke ander this ki value WINDOW Object ati h)
->back to topic : 
  -> ye jo h pura thread ke ander execute hota h
  -> bad m smze ge kese single thread pr kam ho rha h
  -> js single threaded h
a)Global Execution Context
b)Function/Functional Execution Context
c)Eval Execution Context                            <-----property h global object ki

->  js run code in 2 phases (or) 2 main part of Execution context or: 
   1)Memory Phase / Memory Creation Phase / Creation Phase :
   2)Execution Phase

1) Memory Creation Phase : 
                         -> isme sirf variable, fn, jo bhi declare kiya unki memory allocate hoti h
                         ->n this phase, all the functions and variables of the JavaScript code get
                           stored as a key-value pair inside the memory component of the execution 
                           context. In the case of a function, JavaScript copied the whole function
                           into the memory block but in the case of variables, it assigns undefined 
                           as a placeholder.
2) code Execution Phase:
                -> isme execution hota h
                ->In the Code Execution Phase, JavaScript being a single thread language again runs
                  through the code line by line and updates the values of function and variables 
                  which are stored in the Memory Allocation Phase in the Memory Component.

So in the code execution phase, whenever a new function is called, a new Execution Context is 
created. So, every time a function is invoked in the Code Component, a new Execution Context is 
created inside the previous global execution context. 
*/

/*
EX:
 let val1 = 10
 let val2 = 5
 function addNum(num1, num2){
    let total = num1 + num2;
    return total;
 }
 let result1 = addNum(val1, val2)
 let result2 = addNum(10, 2)

  1) Global environment/ Global execution context : Global Execution Context is created.
                                        -> jo bhi code run krana ho vh, phle global execution se 
                                           create hota h, aur ese allocate kiya jata h this ke ander
    [note : ye to hona hi hona h]
  
  2) memory allocation phase :
     val1: undefined
     val2: undefined
     addnum: defination kha a jayegi puri ud kr
     result1: undefined
     result2: undefined

  3)code execution phase
     val1: 10
     val2: 5
     addnum------>                  new fn called so now new execution context is created
     result1: 15 (updated)                               |new variable environmet| 
     result2:  vaps fn call                              |     +                 |
     result2:12                                          |__execution thread ____|
                                                                  delete
   ) ab vaps se memory phase hoga execution phase hoga
    
     3.1) memory phase:
              val1: undefined
              val2: undefined
              total: undefined

     3.2) Execution phase:
             num1: 10
             num2: 5
             total: 15      //ab total return hoga, return hoga apne parent execution context h,
                              jo ki h global execution context m  hi to 2 phase bn rhe h (according to geek for geek diagram) 

   )  ab ye execution context ka jese hi kam khtm hua (for addnum) vese hi delete ho jayega

   ) ab vaps se memory phase hoga execution phase hoga (0r) new variable environment + execution tread

    3.1) memory phase:
            val1: undefined
            val2: undefined
            total: undefine
    
    3.2) Execution phase:
             num1: 10
             num2: 2
             total: 12         --> total return hoga parent context ke pass or we can say global 
                                   context ke pass and result2 value update ho jaye  gi 
    
   4)Global Execution Context also delete just like chile Execution Context
*/



/*
Call stack :    ____________________________
                |                          |
                |  execution context 2     | 
                |  execution context 1     |
                |_global execution context_|
                
   one(){
    two()
   } 
   one()            
                    two()
                    one()
                global execution context

 
//LIFO rule
    one()
    two()
    three()
                        one()
                global execution context  (call stack)
 
                                                   one() <--pop
                global execution context  (call stack)

                        two()
                global execution context  (call stack)

                                                   two() <--pop
                global execution context  (call stack)

                        two()
                global execution context  (call stack)

                                                   two() <--pop
                global execution context  (call stack)


                      empty   (call stack)

*/