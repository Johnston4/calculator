//function display_output(type, value, item){
//    if (value==undefined) {
//        $('#calc_display').val("");
//    }
//    else {
//        $('#calc_display').val(value);
//    }
//}
//var my_calculator = new calculator(display_output);
//
//$(document).ready(function(){
//    var select_button = $('button');
//    select_button.click(function(){
//        var val = $(this).text();
//        my_calculator.addItem(val);
//    })});
//enter 1st number - store num1
//enter operator - store operator
//enter 2nd number - store num2
//choose math function to use
//store the result
var i = 0;
var num_array = [''];
var values = [];
var val=null;
var num1=null;
var num2=null;
var op=null;

function input_digit(button_text){
    num_array[i]+=button_text;
    console.log(num_array);
}

function increment_array() {
    i+=1;
    num_array[i]='';
    console.log('this is the array now: ' + num_array);
}

$(document).ready(function(){
    $('.number_container').on('click', 'button', function(){
        var number = $(this).text();
        console.log(number);
        number = parseFloat(number);
        console.log('TYPEOF: ' + typeof number);
        console.log('This is the last button clicked: ' + number);
        input_digit(number);
    });
    $('.next').click(function(){
        console.log('clicked2');
        increment_array();
    });
    $('.op').click(function(){
        var op_sign = $(this).text();
        increment_array();
        input_digit(op_sign);
        increment_array();
    });
    $('.equals').click(function(){
        var equals_sign = $(this).text();
        console.log('I clicked the equals sign: ' + equals_sign);
        do_math();
    });
});

function do_math(){
    var result=null;
    for(i=0; i < num_array.length; i++){
        console.log('This is an input: ' + num_array[i]);
        if(isNaN(num_array[i])){
            console.log("This is not a number");
            op=num_array[i];
            console.log("This is inside variable op: " + op);
            num1=num_array[i-1];
            num1=parseInt(num1);
            console.log('This is in variable num1: ' + num1);
            num2=num_array[i+1];
            num2=parseInt(num2);
            console.log('This is in variable num2: ' + num2);
            result = calculate(num1, num2, op);
            console.log('this is the result: ' + result);
            console.log("1 This is the array: " + num_array);
            num_array[0]=result;
            console.log('num_array[0] is: ' + num_array[0]);
            console.log('this is the result: ' + result);
            console.log("2 This is the array: " + num_array);
            console.log('this is num array i right now: ' + num_array[i]);
            num_array.splice(num_array[i],1);
            console.log("3 This is the array: " + num_array);
            i=0;
            //['5','-','2','+','3']
            //store the result in the 0th index of num_array
            //[3,'-','2','+','3']
            //splice out of num_array from i to i+1
            //[3,'+','3']
            //set i to 0
        }
    }
}
function calculate(num1, num2, op){
    var result=null;
    switch (op) {
        case '+':
            result = num1 + num2;
            console.log('this is the result in the switch' + result)
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0){
                alert('error: cannot divide by 0.');
            }
            else {
                result = num1 / num2;
            }
            break;
        default:
            console.log("enter a valid operator: +, -, *, /");
            break;
    }
    return result;
}