let transform_block = document.querySelector('.transform_block');
let transform_text = document.querySelector('.transform_text');
let input_red = document.querySelector('#red');
let input_green = document.querySelector('#green');
let input_blue = document.querySelector('#blue');
let input_color = document.querySelector('#input_color');
input_color.oninput = function() {
    Check();
};
input_red.oninput = function() {
    Check();
};
input_green.oninput = function() {
    Check();
};

input_blue.oninput = function() {
    Check();
};
function Check () {
    transform_block.style = `background : rgba(${input_red.value}, ${input_green.value}, ${input_blue.value}, 1)`
    transform_text.style = `color : ${input_color.value}`
}
Check()