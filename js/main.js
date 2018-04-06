function main() {
	$('.page').hide();
	$('.page').fadeIn(400);

};

$('div.menu').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover')
	});

$('#about').click(function() {
	$ (this).addClass('hover');
	$ ('#projects').removeClass('hover')
	$ ('#contact').removeClass('hover')
	$ ('.content').replaceWith('<div class="content"><p>This is text talking about me</p></div>');
});

$('#projects').click(function() {
	$ (this).addClass('hover');
	$ ('#about').removeClass('hover')
	$ ('#contact').removeClass('hover')
	$ ('.content').replaceWith('<div class="content"><p>These are some of my projects.</p><div><iframe src="https://matthew-test.skilljar.com/example-embedded-course/179197"></iframe></div></div>');
});

$('#contact').click(function() {
	$ (this).addClass('hover');
	$ ('#about').removeClass('hover')
	$ ('#projects').removeClass('hover')
	$ ('.content').replaceWith('<div class="content"><p>These are some ways to contact me!</p></div>');
});

$(document).ready(main);
