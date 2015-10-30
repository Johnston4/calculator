function display_output(type, value, item){
    if (value==undefined) {
        $('#calc_display').val("");
    }
    else {
        $('#calc_display').val(value);
    }
}
var my_calculator = new calculator(display_output);

$(document).ready(function(){
    var select_button = $('button');
    select_button.click(function(){
        var val = $(this).text();
        my_calculator.addItem(val);
    })});