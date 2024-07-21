//dates javascript ka pain point h, date compare krna , declare krna

//date: date object reperesent: single moment in time in a platform-independent formate.
//      the moment define hua h january 1, 1970 (->ak arbitary date li aur yha se sari date 
//                                                 jo apne declare ki vo calculate hoti h) 

// apki date usally milisecond m calculate hoti h
// to ap date declare kr ge to bhut bdi string ati h,vo kuch nhi milisecond time h jan1,1970 se leke

/* obiously es ko store krna , compare krna easy h milisecond m PR PR PR etna bhi asan nhi h,
       kyoki
         TC39 working on temporal, a new date/time api (it is not yet ready for production use!)
        global object bnane ka mksd h so it act as a top-level namsespace (like Math).
        ex:Temporal.now.instant()*/

/**** pr abhi hme hmare existance tarike se hi sikhni hogi  ****/

/*1*/let myDate=new Date();             //this newDate declaration always give current date
console.log(myDate);       // o/p 2024-07-21T19:09:33.502Z
console.log(myDate.toString());    //*Mon Jul 22 2024 00:39:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Mon Jul 22 2024
console.log(myDate.toTimeString()); //00:44:54 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //*2024-07-21T19:14:54.255Z
console.log(myDate.toJSON());      //*2024-07-21T19:14:54.255Z
console.log(myDate.toLocaleString());  //7/22/2024, 12:44:54 AM
console.log(myDate.toLocaleDateString());  //7/22/2024
console.log(myDate.toLocaleTimeString());  //12:44:54 AM

/*Int.*/console.log(typeof myDate);   //object     offcos object aye ga upper obect hi to bnaya

/*2*/const createdDate1=new Date(2023,0,10)    //Sun Jan 10 2023 ese hi dena nhi to ans kuch bhi bkvas ayega
console.log(createdDate1.toDateString());

/*3*/const createDate2=new Date(2024,11,5,6,10)
console.log(createDate2.toLocaleString()); // 12/5/2023, 6:10:00 AM

/*4*/const createDate3=new Date("2024-01-20")  //yyyy-mm-dd 
console.log(createDate3.toLocaleString());   // 1/20/2024, 5:30:00 AM

/*5*/const createDate4=new Date("22-09-2023")        
console.log(createDate4.toLocaleString());         //1/14/2023   why invalid date?? pta ni

/*5*/const createDate5=new Date("01-14-2023")        
console.log(createDate4.toLocaleString());    //1/14/2023, 12:00:00 AM     //invalid date


/************** TIME STAMP ***************************/
let myTimeStamp = Date.now()
console.log(myTimeStamp);      //1721592857332   1jan1970 se abhi ka milisecond value h (jo hmne uper pda tha)

console.log(createDate3.getTime());    //1705708800000   //date to h pr muje 1jan1970 se is date tk ka time chahiyye
//                         is trh hm date compare kr skte h   (phle ki aur abhi ki)  
//                      [note: comparision hmesha mili second m kriye ga]                                 

/*Int.*/
// time ko second m bhi kr skte h
console.log(Date.now()/1000)    //1721593683.624         //1sec=1000milisecond  ex 3000milisecond==3 sec
//to avoid point
console.log(Math.floor(Date.now()))


/*********************************************************************** */
/* some more method of date */
let newdate = new Date()
console.log(newdate);     //2024-07-21T20:37:29.477Z
console.log(newdate.getDate());    //22
console.log(newdate.getMonth());   //6
console.log(newdate.getMonth()+1);  //7     +1  (for user need as month usually 0 se start hota h)
console.log(newdate.getDay());    //1
