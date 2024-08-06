
// NESTED SCOPE


function one(){
    const name = "nidhi"
    function two(){
        const target = "tcs"
        console.log(name);                         // child fn access parent fn value
    }
    // console.log(target);        //referenceerror : website is not define

     two()

}

one()              //nidhi

//BASIC CLOSURE : yhi h ki inner/child fn can access pata h, and outer/parent fn can't



if (true) {
    const name = "nidhi"
    if (name === "nidhi") {
        const target = " tcs"
        // console.log(name + target);
    }
    // console.log(target);   //error target is not define
}

// console.log(name);    //error : name is not define


// ++++++++++++++++++ interesting ++++++++++++++++++


addone(5)
function addone(num){     //fn bolte h
    return num + 1
}
addone(5)


// addTwo(8)              // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num){    //yh bhi fn h pr ese expression bhi bolte h  // varable bhut POWEFULL hota in js m kuch bhi hold kr leta h
    return num + 2
}
addTwo(8)

//NOTE : 45 line ki error isliye hi a rhi h ki kis trh ap fn declare kr rhe h. aur kha access kr rhe ho