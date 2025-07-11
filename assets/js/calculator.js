var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var zero = document.getElementById('zero');
var zeros = document.getElementById('zeros');
var ac = document.getElementById('AC');
var de = document.getElementById('DE');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var point = document.getElementById('point');
var equal = document.getElementById('equal');

var display = document.getElementsByName('display')[0];

seven.onclick = function() {
	display.value += "7";

};
eight.onclick = function() {
	display.value += "8";
};
nine.onclick = function() {
	display.value += "9";
};
one.onclick = function() {
	display.value += "1";
};
two.onclick = function() {
	display.value += "2";
};
three.onclick = function() {
	display.value += "3";
};
four.onclick = function() {
	display.value += "4";
};
five.onclick = function() {
	display.value += "5";
};
six.onclick = function() {
	display.value += "6";
};
zero.onclick = function() {
	display.value += "0";
};
zeros.onclick = function() {
	display.value += "00";
};
equal.onclick = function() {
	display.value = eval(display.value);
};
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // 13 is the Enter key
    	event.preventDefault();
        display.value = eval(display.value);
    }
});
multiply.onclick = function() {
	display.value += "*";
};
divide.onclick = function() {
	display.value += "/";
};
plus.onclick = function() {
	display.value += "+";
};
minus.onclick = function() {
	display.value += "-";
};
ac.onclick = function() {
	display.value = "";
};
de.onclick = function() {
	display.value =display.value.toString().slice(0, -1);
};
point.onclick = function() {
	display.value += ".";
};
