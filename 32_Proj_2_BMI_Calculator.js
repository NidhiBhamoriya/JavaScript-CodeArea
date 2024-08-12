
const form = document.querySelector('form')

// yha pr likhe ge to jese hi code load hua , empty value height ke ander store ho jayegi
//THIS USECASE WILL GIVE YOU EMPTY VALUE
// const height = document.querySelector('height').value;
// const weight = document.querySelector('weight').value;


form.addEventListener('submit',function(e){
    e.preventDefault();   //default action ko ruko, khi submit mt krdo

    //hm click krege tbhi en value ko lena chahe ge, isliye yha likhege
    const height = parseInt(document.querySelector('#height').value);    
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = 'Please, Give a valid height.'
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = 'Please, Give a valid weight.'
    }
    else{
        const ans = (weight / ((height * height) / 10000) ).toFixed(1)

        //show result
        if(ans < 18.6){
            result.innerHTML=`<span>${ans}</span>, Underweight`
        }
        else if(ans>=18.6 && ans<=24.9){
            result.innerHTML=`<span>${ans}</span>, Normal Range`
        }
        else{
            result.innerHTML=`<span>${ans}</span>, OverWeight`
        }
        
    }
});