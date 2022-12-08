const calculatorDisplay=document.querySelector('span')
const equalBtn=document.querySelector('#equalBtn')

let text1=''


//send value when press number btn or operator btn

function sendValue(value){

    
    //update text1 value
    text1=text1.concat(value)

    //update calculator display value 
    calculatorDisplay.textContent=text1
}


//calculate final resault when press equal btn

function calculateResault(){

    //use evaluate method to parse expression
    let resault=math.evaluate(text1)

    calculatorDisplay.textContent=resault

    text1=`${resault}`
}



//functionality of demical btn

function demical(){
 
    const len=text1.length

    const array=[...text1+'.']


    //if demical point is the first passed character or it passed directly after operator send 0. as value to text1

    if(array.length===1|array[len-1]==="+"|array[len-1]==="-"|array[len-1]==="*"|array[len-1]==="/"){
        sendValue('0.')
    }

    //if demical numer has passed more than once consecutively alert user
    else if(array[len-1]==="."){
        alert('You can enter just one decimal point')
    }

    //if decimal point passed after a number just pass it to text1
    else{
        sendValue('.')
    }

}

//reset everything when press clear btn

function resetAll(){

    text1=''
    calculatorDisplay.textContent=0
}
