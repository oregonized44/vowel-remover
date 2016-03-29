



$(document).ready(function(){
	$('#button').click(function(event){
		console.log('click');

		var string = $('#sentence').val();
		for (var ii=0; ii < string.length; ii++){
			string = string.replace('a','-').replace('e','-').replace('i','-').replace('o','-').replace('u','-');


		}
		$('#list').append('<li>' + string + '</li>');
		event.preventDefault();
	});
});
