(function(){
    $(window).on('scroll',()=>{

        if($(window).scrollTop()){

            $("header").addClass("black");

        }else{

            $("header").removeClass("black");

        }

    });
}());




function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args); 
	};
};






function animationScrollLeft() {
    let $target = $('.animation-esq');
    let animationOn = 'animation-on';
    let offset = $(window).height() *3/4;

    let documentTop = $(document).scrollTop();

    $target.each(function(){
        let itemTop = $(this).offset().top;

        if(documentTop > itemTop -offset){
            $(this).addClass(animationOn);

        }else{

            $(this).removeClass(animationOn);

        }

    })
}

function animationScrollRight() {
    let $target = $('.animation-dir');
    let animationOn = 'animation-on';
    let offset = $(window).height() *3/4;

    let documentTop = $(document).scrollTop();

    $target.each(function(){
        let itemTop = $(this).offset().top;

        if(documentTop > itemTop -offset){
            $(this).addClass(animationOn);

        }else{

            $(this).removeClass(animationOn);

        }

    })
}

animationScrollLeft();
animationScrollRight();

$(document).scroll(debounce(function(){
    animationScrollRight();
    animationScrollLeft();
},250));









