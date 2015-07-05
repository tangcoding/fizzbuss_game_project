$(document).ready( function(){

	$(".submit").click(function(){

		var end_num = $("#user_input").val();

		//check if input is a number
		if(isNaN(end_num)){
			alert('Must input number');
			$("#user_input").val('');
		}

		for(var i=1; i <= end_num; i++){
			if(i%3!=0){
				if(i%5==0){
					$('.output_area').append('<p>Buzz</p>');
				}
				else{
					$('.output_area').append('<p>' + i + '</p>');
				}
			}
			else{
				if(i%5==0){
					$('.output_area').append('<p>Fizz Buzz</p>');
				}
				else{
					$('.output_area').append('<p>Fizz</p>');
				}				
			}
		}

		$("#user_input").val('');

	});
});
