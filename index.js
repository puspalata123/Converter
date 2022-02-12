// digit_one, digit_two, firstDigit, secondDigit, btn
var digitOne=document.getElementById('digit_one');
var digitTwo=document.getElementById('digit_two');
var first_Digit=document.getElementById('firstDigit');
var second_Digit=document.getElementById('secondDigit');
var swapButton=document.getElementById('btn');
var resetButton=document.getElementById('btnBtn');

digitOne.addEventListener('change',calculate);
digitTwo.addEventListener('change',calculate);
first_Digit.addEventListener('input',calculate);
second_Digit.addEventListener('input',calculate);
swapButton.addEventListener('click',()=>{
    const temp=digitOne.value;
    digitOne.value=digitTwo.value;
    digitTwo.value=temp;
    calculate();
})
// function to reset
var data= {"firstDigit":"","secondDigit":""};

resetButton .addEventListener('click',()=>{
    for(var prop in data) {
        document.querySelector('input[name = "' + prop + '"]').value = data[prop]; 
        // document.querySelector('input[name = "' + prop + '"]').setAttribute('placeholder', data[prop])
    }
    // inputs.forEach(input=> input.value='');
});
calculate();

// Function for conversion between number system;

function calculate(){
    var first_digit=document.getElementById('firstDigit').value;
    var digitOne=document.getElementById('digit_one').value;
    var digitTwo=document.getElementById('digit_two').value;
    var second_digit;

    // conversion  from binary to oct,dec, hex
    if(digitOne=="binary" && digitTwo=="decimal") second_digit=bin2dec(first_digit);
    if(digitOne=="binary" && digitTwo=="octal") second_digit=bin2oct(first_digit);
    if(digitOne=="binary" && digitTwo=="hexaDecimal") second_digit=bin2hex(first_digit);
    if(digitOne=="binary" && digitTwo=="binary") second_digit="INVALID";

    // conversion  from decimal to bin,oct, hex
    if(digitOne=="decimal" && digitTwo=="binary") second_digit=dec2bin(first_digit);
    if(digitOne=="decimal" && digitTwo=="octal") second_digit=dec2oct(first_digit);
    if(digitOne=="decimal" && digitTwo=="hexaDecimal") second_digit=dec2hex(first_digit);
    if(digitOne=="decimal" && digitTwo=="decimal") second_digit="INVALID";

    // conversion  from octal to bin,dec, hex
    if(digitOne=="octal" && digitTwo=="binary") second_digit=oct2bin(first_digit);
    if(digitOne=="octal" && digitTwo=="decimal") second_digit=oct2dec(first_digit);
    if(digitOne=="octal" && digitTwo=="hexaDecimal") second_digit=oct2hex(first_digit);
    if(digitOne=="octal" && digitTwo=="octal") second_digit="INVALID";

    // conversion  from hexadecimal to bin,dec,oct
    if(digitOne=="hexaDecimal" && digitTwo=="binary") second_digit=hex2bin(first_digit);
    if(digitOne=="hexaDecimal" && digitTwo=="decimal") second_digit=hex2dec(first_digit);
    if(digitOne=="hexaDecimal" && digitTwo=="octal") second_digit=hex2oct(first_digit);
    if(digitOne=="hexaDecimal" && digitTwo=="hexaDecimal") second_digit="INVALID";

    document.getElementById('secondDigit').value=second_digit;
}

// function binary to decimal conversion
function bin2dec(first_digit){
    return parseInt(first_digit, 2);
}
// function binary to octal conversion
function bin2oct(first_digit){
    return parseInt(first_digit, 2).toString(8);
}
// function binary to hexdecimal conversion
function bin2hex(first_digit){
    return parseInt(first_digit, 2).toString(16);
}

// function decimal to binary conversion
function dec2bin(first_digit){
    return parseInt(first_digit).toString(2);
}
// function decimal to octal conversion
function dec2oct(first_digit){
    return parseInt(first_digit).toString(8);
}
// function decimal to hexadecimal conversion
function dec2hex(first_digit){
    return parseInt(first_digit).toString(16);
}
// function octal to binary conversion
function oct2bin(first_digit){
    return parseInt(first_digit, 8).toString(2);
}
// function octal to decimal conversion
function oct2dec(first_digit){
    return parseInt(first_digit, 8).toString(10);
}
// function octal to hexadecimal conversion
function oct2hex(first_digit){
    return parseInt(first_digit, 8).toString(16);
}
// function hexadecimal to binary conversion
function hex2bin(first_digit){
    return parseInt(first_digit, 16).toString(2);
}
// function hexadecimal to octal conversion
function hex2oct(first_digit){
    return parseInt(first_digit, 16).toString(8);
}
// function hexadecimal to decimal conversion
function hex2dec(first_digit){
    return parseInt(first_digit, 16).toString(10);
}

