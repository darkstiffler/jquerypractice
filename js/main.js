$(document).ready(function() {
	console.log('Document Ready!')    // log successful doc. ready 
	$('#submit').click(function() {
		console.log('Submit successful')
	});

	$('.promptB').click(function(){        		//functions for click events
		prompt('Prompt!')
	});
	$('.alertB').click(function(){
		alert('Alert!')
	});
	$('.confirmB').click(function(){
		confirm('Confirm!')
	});
	$('.logB').click(function() {
		console.log('Logged!')
	});

	$('#changeBlue').click(function(){                //function for color changes
		$('body').css("background-color", "blue");
	})
	$('#changeOrange').click(function(){
		$('body').css("background-color", "orange");
	})
	$('#changeRed').click(function(){
		$('body').css("background-color", "red");
	})
	$('#changeYellow').click(function() {
		$('body').css("background-color", "yellow");
	})
	$('#changeGreen').click(function() {
		$('body').css("background-color", "green");
	})
	$('#changeWhite').click(function(){
		$('body').css("background-color", "white");
	})

	$('#shoutForm').submit(function(event){
		console.log(event);
		var input = $('#inputArea').val();
		$('#displayArea').append(event.timeStamp + ' ');
		$('#displayArea').append(input);
		$('#displayArea').append('<br>');
		$('#inputArea').val('');
		return false;
	})
});