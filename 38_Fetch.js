
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(requestedData){
    return requestedData.json()
})
.then(function(usable_data){
    console.log(usable_data);
})
.catch(function(error){
    console.log("error: 2_Fetch is failed");
})

//HISTORY : 

// 👉 The Fetch API is finally coming in Node.js:  (2022feb)

/* In early time days of web, it is difficult to perform asynchronous request across website; developer
   had to use clusmsy approaches to interact across multiple networks.

   1st)✨ Internet Explorer 5 change this by introducing of XMLHttpRequest API   (1990s) :
                         
            limitation of XMLHttpRequest api :  callback hell apne ap m issue tha
                                             :  success/error handing is difficult there
                                             : asynchronous bnana apne ap m issue tha

   2nd)✨ Fetch API :    (2015)
          
             -> as library as modern successor to XMLHttpRequest (XHR)
             
             -> ⭐Note : but still it not included in Node.js core due to some limitation ->
                    in que. answered by one of node's core contributor 
                  a) browser Fetch API is implemenation is dependent on browser-based Web Stream API and 
                     AbortController interface (foraborting(rokna) fetch request, jo ki browser k pass to
                      full control h), which wasn't available in node.js until recetly.

                    (conclusion: fetch api ka kam tbhi hoga jb browser avilable hoga and we know ki node.js
                                 m browser availble nhi h, hmne jo engine jo h, vo nikal,browser ki api jo
                                 h vo vo h nhi.  (fetch ke liye Node.js n bola hm khud ki web stream api bnaye g)

            ->  3rd)✨Before addition of fetch API, Request Module, famous for making http request in Node
                       ex: async/await
         
      (2018)✨
       -> undici was introduced as newer and faster http client for Node.js.
       -> undici made the [fetch() implementation in Node.js possible after a lot of hard work form core team]

        fetch -> fetch is provided as high-level fn, it take url and produce a promise that resolve to respond
        

               Syntax:
                  fetch('http://example.com/api/endpoint')
                    .then((response) => {
                        //Do something with response
                    })
                    .catch(function(err){
                        console.log("Unable to fetch - ", err);
                    });

    ✨[ Benefit : Fetch API now comes prepackaged as an inbuilt Node module, i.e beneficial for developer]


👉Interview Ques :  ydi error ai 404,etc to apko yh resolve m milega ya reject m 
             Ans :  to 404 error apko as reponse mile gi, vo error hi nhi error tb hoti h browser request kr
                    hi nhi paya h

    => parameter-> (Method:"Get","Post",bydefault-Get)    ( comma lga kr object bhi pass kr skta hu)
                 -> const header = {'':'', '':''};
                    fetch('url', {headers});               -> header m dale g other data jo hme bejna h, request ke sath(username id,password), post data
                 -> fetch('url',{
                     method : 'Get'
                     body : new ForData()
                    });


👉Previous o/p information : fetch vala code phle execute ho rha h, baki sb bad m ho rha h even apka 
                             settimeout bad m ho rha h execute due to priority queue only for fetch ke liye.


 👉✨⭐               
                       Response = fetch('something')
                      ______________!___________________________                   !   [Global Memory]
                     !                                         !                   !
                                                           web browser/Node        !   response :
       -------    data:_____    <----   <---                     !                 !
       !                            !      !                network request        !      ^
       !         onfulfilled[] -----       !                 ____!_____            !      !
       !         on Rejection[] -----------                 !         !            !      ! 
       !                                                  ❌       ✅             !      !
       !                                                                                  !
       !__________________________________________________________________________________!


       ✨fetch ka kam do parts me hota h :
            
        ⭐ 1st part, kuch variable aur memory m data space reserve krne jate h  (memory m ak space reserve krta h data)(data bola chahe hitesh bolo..kuch bhi bolo)
                   2 array h onFulfilled(yh h promise ka resolve),onRejection(yh h rejection)    ((private field) en sb ko hm access nhi kr skte h)
                    
       ⭐ 2nd part, jata h network ki api request handle krne/ access krne , ya to browser-base api 
                     access/handle kr ga ya gir node-based    <------ yha se jati h ak network request
                                                                         !                    !
                     ydi ja kr kuch bhi response aya to vh hmesha onfufilled      ydi request gyi hi nhi to 
                    m jayega bhle fir vo 404 ki error kyo na ho                   us case m rejection ayega
    (request gyi tbhi to pta lga ki 404 error file not found error aya h )     
    
    ✨Note : a) data jo h vo memory m reserve rhta h, initialy data ki value empty/undefined rhti h,
             b) network request se ya to ye(❌--->onfulfilled) fire hoga, ya to ye(✅-->onRejection)fired hoga 
             c) in array m hote h fn -----> or yhi responsible hote h data ko fulfill krne m 
             d) aur jese hi data m value fulful krdi, hme kya bnaya tha? 👉 response 👇
                                                                         jo ki global memory m available h
             e) ab ye data ki responsibility h ki vh response ko fulfill kre
*/
