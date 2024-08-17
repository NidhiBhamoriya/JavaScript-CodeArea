
/*   PROMISE :      object

  👉=> Promise object represents the eventual completion (or failure) of asynchronous opeartion and its 
     resulting value
 
     => means : apne jo bhi usko task diya h,vo queue m to lg gya h, pr vo abhi ke abhi nhi hoga 
                (abhi use load nhi kiya gya h/ abhi cmplt nhi ho skta)

     =>  ex   :  jb hme pta nhi kita time lge ga/ o/p ayega ya nhi -----> to asynchrous code likhte h :
                                                                         i)  ya to async await() lga le ----> ki jb tk output n aye tb tk wait kro
                                                                         ii) ya promise  --> promise future m ja kr complt hote h
              :  * cyrptoGraphy opeartion
                 * file system h
                 * database access
                 * network operation etc 👈
    

  -> detail : This lets asynchronous methods return values like synchronous methods :
             instead of immediately returning the final value, 
             the asynchronous method returns a promise to supply the value at some point in the future.

  -> A Promise is in one of these states:
      a) pending    :    initial state, neither fulfilled nor rejected.
      b) fulfilled  :  meaning that the operation was completed successfully.
      c) rejected   :   meaning that the operation failed.     
      
*/

/*
    HISTORY :  Are there still reasons to use promise libraries like Q or BlueBird now that we have 
               ES6 Promises   ??
            Ans:
               After Node.js added native support for promises
*/



//promise bna rhe ho
// const promise1 = new Promise();     bn gya promise



// 👉  do part hote h    1) promise bnana   2) promise consume krna ---------> (menas koi n to bnaya hoga na)

// promise jo he vo, apne ander ak callback leta h   ----> aur promise jo h kbhi call back heil jo ho jata 
//                                                         h use bhi reduce krta h

const promise1 = new Promise(function(resolve, reject){       //👉 IMP --> this call back used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
    // Do an Async task
    // DB calls, crptography, network
    setTimeout(function(){      
        console.log("Async task1 is completed");    // ✨(promise ko var m hold nhi krao ge to syntax shi h)
        resolve()            // ✨ w/o this line, then kbhi chalega hi nhi(means promise apne cmplt kiya hi nhi). to connect then and resolve we need to this method  <==== resolve m valu bhi pass kr skte h
    }, 1000)
})                          // ab ap socho ge ki jo argument pass kre unhone kiya kya, kr kya rhe h ye dono
// 👉 AB APNE JO PROMISE KIYA USE CONSUME BHI KRNA HOGA   
promise1.then(function(){
    console.log("promise1 consumed");
})                             //   <------✨ .then ka sida relation h resolve se   --> .then , callback receive hota h-> yh fn  automatically ak argument receive krta h, eska kam h jo bhi promise se value/kam return hota h yha pr


// or

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2 ");
        resolve()
    }, 1000)
    // resolve()
}).then(function(){                   // ab hme variable m store to nhi kraya isliye directly bol dege .then()
    console.log("promised2 consumed"); 
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout( function(){
        const error = true;       // ✨apne kbhi web req kri, db access kra etc --> access ho gya to kuch boluga , na ho paya tb bhi kuvh bolna hi pdega. to is hisab se krege
        // const error = false;
        if(!error){
            resolve({username: "hitesh", password: "1234"})  //esi trh data ayega object m
        }else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})
//  ⭐ promise3.then().catch()      <----- ese hi to krte h
promise3.then(function(user){
   console.log(user);             // if -> error=false ->  than o/p: {username: 'hitesh', password: '1234'}
}).catch(function(error){
    console.log(error);           // if -> error=true -> then o/p: ERROR : Something went wrong
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout( function(){
        //const error = true;       // ✨apne kbhi web req kri, db access kra etc --> access ho gya to kuch boluga , na ho paya tb bhi kuvh bolna hi pdega. to is hisab se krege
        const error = false;
        if(!error){
            resolve({username: "hitesh", password: "1234"})  //esi trh data ayega object m
        }else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

//👇 ye to pta chal gya ki es trh se to data further access nhi kr skte h
// const username = promise4.then(function(user){           // (know u undersatnd, how u can reduce callback heil by using mn chahe utne then lga kr)
//     console.log(user);                        //muje user property chahiye yha bhi kr skti hu, pr concept smzna h
//     return user.username                       // ⭐ye return kha ho rha h, kya yh username return ho rha h
// })
// console.log(username);                       // ⭐eska to koi ouput nhi ayega [ERROR to reject ke liye catch nhi likha uski ayegi]

//👇 es trh se data ko further access krege
promise4.then(function(user){
    console.log(user);             //{ username: 'hitesh', password: '1234' }
    return user.username;
}).then(function(username){            //👈chaining    //    <----- ⭐ eske pass username returnn hoga
    console.log(username);     //hitesh
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log(" Heloo, me finally");  // Heloo, me finally            //finally bolta h muje ye bta do sirf ki tumhara kam ho gya, resolve to resolve , ya reject to reject hi shi
})

const promise5 = new Promise( function(res, rej){
    setTimeout(function(){
        const error = true;
        // const error = false;
        if(!error){
            res({username: "js", password: "mdm.com"})  
        }
        else{
            rej("ERROR : js went wrong")
        }
    }, 1000)
})
//✨ promise ko ap asyn await se bhi handle kr skte ho   ------> (kyoki akhir kar promise future m hi execute hota h)
async function consumePromise5(params) {             //⭐ async await bhi .then .catch type se hi h, thodi der wait krta h kam ke hone ka, jb kam ho jata h tbhi age bdta h, nhi to vhi p ap ko error dedeta h
    // const response = await promise5                                    // isme jo hena vh khud se error handle nhi krte h, hme gracefully handle krna pdti h)(yhi issue h,👉 pr khi jgh hme jrurt rhti h ki ydi db connection hua hi nhi to hme age bdna hi nhi h )
    // console.log(response)    // error false ke liye to ye d0 line execue ho jaye gi 
                                // pr if error=true than reject case ko bhi handle krna pdega catch se nhi to error aye gi  -----> This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR : js went wrong".

    try {
        const response = await promise5      //promises5() ese mt likh dena kyo ki promise ak object hi h
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()


console.log("********************************************************************************");

// for json data / api 
async function getAllUsers(){
               //fetch: ✨ use of fatch, it is library , library to vese phle thi ab to object h (it give promise hi in return m)
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
     // console.log(response)                        //(response data to a gya pr print kyo nhi hua data kyo ki response.json() bhi pta nhi kitna time leta h)
                 // console.log(typeof response);     // object h
                                                     // response ko vese check krna pde ga pr thik h , hme sida ka sida bol dete h json m convert ho jao
    // const data = response.json()
    const data = await response.json()
                  // const data = JSON.parse(response)        // <----------- ese nhi kr skte h
    console.log("*****************Fetch1***************",data); 
                 // console.log(typeof data);          //object
    }
    catch(error){
        console.log("error: 1_Fetch is failed");
    }
}
getAllUsers()


// fetch('https://api.github.com/users/hiteshchoudhary').then().catch()
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(requestedData){
    return requestedData.json()
})
.then(function(usable_data){
    console.log("****************Fetch2***************",usable_data);
})
.catch(function(error){
    console.log("error: 2_Fetch is failed");
})


//               👉 [NOTE : observe order of whole output o/p of this code ]👈
