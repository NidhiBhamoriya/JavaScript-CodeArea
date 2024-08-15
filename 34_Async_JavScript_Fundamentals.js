
/*
  JavaScript : 

    >  synchronous                    -----                            <---- isliye js slow hoti h
                                            default
    > single threaded                 -----
  

    [Note : javaScript ka engine akela hota hi nhi h, uske sath run time environment hota(ya to
            browser ka, node ka etc) (kyo ki js ka engine bhut slow hota as it is singlethreaded)]

    2 type of code:

    1)BLOCKING CODE :
    >block the flow of program
    >read file sync

    2)NON-BLOCKING CODE :
    >does not block the code
    >Read file Async


    ->diagram:
                                                                   
        [js engine]                           [web API/node]               <---- (web API, browser m milti h)
        *memory heap                           *DOM API                (available only if web api)(for node environment DOM API is not available kyo ki dom hi nhi h yha pr)
        *call stack     -------call-------->   *Set timeout     ----------
        ^   ^                                    *set interval           !    browser events
        !   !                                    * fetch()-----          !
  add  !    !                                                 !          !   register call back 
   to  !    !                                                 !promise   !
  call !    !-------- --------priority queue/promise queue-----          !
stack  !                                                                 !
      !-------------------------------------------task queue-------------                                              
            event loop

                   Note : task queue is js ko eta fast aur asynchronous bnati h

    working : 
     program start to execute ->  call stack bnta h, usme global execution context bnta h, aur ak ak 
                                  kr ke fn load kiye jate h, aur jese jese fn ka execution khtm hota 
                                  h, un fn ko unload kr diya jata h,
                                  yhi pr setTimeout(api) call hua, yh setTimeout api box m jayega, 
                                  aur ye registration (2min bad ans dena 5 min bad..) hota h <register
                                  call back> ke ander,
                                  
                                  ab ak queue hota(q isliye hota h sare set fn to main stack se bhar a
                                  gye na, ab after time expired call stack m vaps call back krna hoga 
                                  na, isliye yh q fta ft add kr deta h call to call stack )
                                  
 */