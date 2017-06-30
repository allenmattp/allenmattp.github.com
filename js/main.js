function main() {
	$('.page').hide();
	$('.page').fadeIn(400);

};

$('div.menu').hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover")
	});

$(document).ready(main);