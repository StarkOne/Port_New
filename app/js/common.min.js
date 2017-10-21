$(function() {

	$('.menu-list a').on('click', function(event) {
    	event.preventDefault();
    	var currentBlock = $(this).attr('href'),
    			currentBlockOffset = $(currentBlock).offset(); // от верах браузера до этого элемента
    	console.log(currentBlockOffset);
    	$('html,body').animate({
    		scrollTop : currentBlockOffset.top - 20
    	}, 500);
    });
		
});
