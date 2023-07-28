let runningTotals = 0; 
let beffer ="0"
let previousOperator;;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)) { 
        handleSymbol(value);
    }else { 
        handleNumber(value);
    }
    screen.innerText = beffer;
}

function handleSymbol(symbol){ 
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator == null){ 
                return
            }
            flushoperatior(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotals;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.lenght === 1){
                buffer ='0 ';
            }else{
                buffer =buffer.toString(0, buffer.lenght -1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
        case '.':
            handleMath(symbol);
            break;
        }  
}

function handleMath(symbol){ 
    if(buffer == '0'){ 
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){ 
        runningTotal = intBuffer;
    }
    else { 
        flushoperation(intBuffer);
    }
    previousOperator =symbol;
    buffer = '0';
}
function flushoperation(intBuffer){ 
    if(previousOperator === '+'){ 
        runningTotal += intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer
    }else if(previousOperator === '÷'){ 
        runningTotal /= intBuffer;
    }
}
function handleNumber(numberString){ 
    if(buffer === '0'){
        buffer = numberString;
    }else { 
        buffer += numberString;
    }
}

function init(){ 
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}
init();