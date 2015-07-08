
var inNum = prompt("Please type a number");

var inNum = parseInt(inNum,10);

var msg = '';

/*

// check if there is digit after decimal point
if(inNum %1 !=1){
	msg += "The number you tyep is not a integer. <br><br> Converting it to integer. <br><br>"
}
*/

msg += "The number you type is: " + inNum +'<br><br>';

msg += 'Output:<br><br>';

msg += fizzbuzz(inNum);


window.onload = function(){
	//var output_text = document.createTextNode(msg);
	document.getElementById('output_area').innerHTML= msg;
}


function fizzbuzz(n){
	var msg = '';
	for(var i =1; i <= n; i++){

		msg += getMsg(i) + '<br><br>';
	}
	return msg;
}


function getMsg(n){
	var msg = '';

	if(n%3==0){
		msg += 'Fizz';
	}
	if(n%5==0){
		msg += 'Buzz';
	}
	return msg || n;
}