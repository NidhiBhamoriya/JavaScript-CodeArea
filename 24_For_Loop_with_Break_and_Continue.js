
//LOOP

//for
array = [9,4,5,10,2,3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

let min = Number.MAX_VALUE;
for (let index = 0; index < array.length; index++) {
    if(array[index]<min)
    min = array[index];
}
console.log(min);

//out of bound to kuch nhi h, undefined a jata h bs


console.log("***************");
for (let i = 1; i <= 10; i++) {
    if(i==5){
        break;
    }
    console.log(i);
}
console.log("***************");

for (let i = 1; i <=10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
}