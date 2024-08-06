/*
()-->parenthises
[]->bracket
{}->braceses

Array:

->creation
const arr = [0,1,true,"hello",null];    object bhi ho skta h
const arr = [0, 1, 2, 3, 4, 5];
const arr = ["abc", "pqr", "xyz"]
const arr = new Array(1,2,3,4,5);    //yha bracket lgane hi avsykta nhi h direct value likh do bracket automatic lga dege
->accessing
console.log(arr[0]);

1)array is object
2)simple we can say that by using array we can store multiple items under a single variable name.
3)javaScript array are resizable and can contain a mix of different datatype.
4)0-based indexing
5)***JavaScript array-copy-operation create shallow copies rather than deep copies.
  =>shallow copies : A shallow copy of object is copy whose property share the same reference(point 
                     to same underlying values) as those of the source object from which the copy 
                     was made. 
  =>deep copies : A deep copy of object is a copy whose properties do not share the same references
                  (point to same underlying values) as those of source object from which the copy 
                  was made.

-> typeof array : is object
                :hme property milti h length ki
                :array m bhi prototype ka access milta h (prototype usme bhi ak prototype)
                  (check at console)

-> slice splice method :
        slice method : Returns a copy of a section of an array
        splice method : returning the deleted element //Removes elements from an array and, if 
                        necessary, inserts new elements in their place, returning the deleted element
*/      

const arr = [0,1,true,"hello",null,undefined, ""];  
console.log(arr);    //[ 0, 1, true, 'hello', null, undefined, '' ]


const arr1 = [0, 1, 2, 3, 4, 5]

const arr2 = ["abc", "pqr", "xyz"]
console.log(arr2[0]);    //abc

const arr3 = new Array(1,2,3,4,5)

//Array Method : 

arr1.push(6);
arr1.push("helo");
console.log(arr1);              // [0, 1, 2, 3, 4, 5, 6, 'helo']
arr1.pop();
console.log(arr1)             // [0, 1, 2, 3, 4, 5, 6]

arr1.unshift(9)             // [9, 0, 1, 2, 3, 4, 5, 6]  unshift se front m value a jati h pr iske bdle puri values ko shift krna pda
// arr1.unshift(9, 8)           //i1,i2,..,in   // [9, 8, 0, 1, 2, 3, 4, 5, 6]    
console.log(arr1);         // [9, 0, 1, 2, 3, 4, 5, 6]

arr1.shift()
console.log(arr1);          // [0, 1, 2, 3, 4, 5, 6]

arr1.shift()
console.log(arr1);         // [1, 2, 3, 4, 5, 6]   shift fn se remove the element at beginning of array.

console.log(arr1.includes(9))     //false   return boolean value
console.log(arr1.indexOf(2));     //1
console.log(arr1.indexOf(9));     //-1     // when element not present it return -1 (yh bol ke ki nhi muje nhi pta)

// const newArr = arr1;   //copy, value by reference
const newArr = arr1.join();   //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr1);    //[ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);    //1,2,3,4,5,6
console.log(typeof newArr);   //string


//**slice splice method
console.log(arr1);    //[ 1, 2, 3, 4, 5, 6 ]
const myn1 = arr1.slice(1,3);  //Returns a copy of a section of an array (1,2 index, 3 index excluded)
console.log(myn1);  // [ 2, 3 ]  //last index element not include
console.log("original array : ",arr1);  //original array :  [ 1, 2, 3, 4, 5, 6 ]  //slice doeesn't change the original array ko

const myn2 = arr1.splice(1,3)  // returning the deleted element //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted element
console.log(myn2);   // [ 2, 3, 4 ]  // last index element not include
console.log("original array : ", arr1);   //[ 1, 5, 6 ]  //splice  change the original array



