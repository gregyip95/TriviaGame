


var score = 0;
var total = 10;
var point = 1;
var highest = total * point;

function init() {
	sessionStorage.setItem('a1','d');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','c');
	sessionStorage.setItem('a5','a');
	sessionStorage.setItem('a6','d');
	sessionStorage.setItem('a7','a');
	sessionStorage.setItem('a8','b');
	sessionStorage.setItem('a9','a');
	sessionStorage.setItem('a10','d');
}


function process (n) {
	var submitted = $('input[name=q'+n+']:checked').val();
	if (submitted == sessionStorage.getItem('a'+n+'')) {
			score++;
	
	
	if(n == total) {
		$('#results').html('Your final score is: '+score+' out of 10');
	return false;
};

						   


$(document).ready(function(){
	
	$('.questionForm').hide();
	
	$('#q1').show();
			
	$('.questionForm #submit').click(function() {
		
		current = $(this).parents('form:first').data('question');

		next = $(this).parents('form:first').data('question')+1;
		
		$('.questionForm').hide();

		$('#q'+next+'').show;
		process(''+current+'');
		return false;
	});

});

window.addEventListener('load',init,false())


