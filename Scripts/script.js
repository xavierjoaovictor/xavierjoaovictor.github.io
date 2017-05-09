function checkAnimation(elem) { 

    if (isScrolledIntoView($(elem)))
        elem.addClass('start-' + elem[0].className.split(' ')[1]);
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(){
	checkAnimation($('.net'));
	checkAnimation($('.cobol'));
	checkAnimation($('.qa'));
	checkAnimation($('.ui'));
	checkAnimation($('.ruby'));
});