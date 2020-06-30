//Menu Mobile
$(document).ready(function aClick(){
    $('.menu-toggle').click(function(){

			$('nav').toggleClass('active'); 
			$('header').addClass('black'); 
			

			$( "header" ).click(function() {
				$( "active" )
				  .bind( "click", aClick )
				  .addClass( "black" );
			  });
			  $( "header" ).click(function() {
				$( "active" )
				  .unbind( "click", aClick)
				  .removeClass( "black" );
			  });
		
			  
    })
})





//Animation Scroll Menu link
$('nav a').click(function (e) {
    var id = $(this).attr('href');
        targetOffSet = $(id).offset().top;
    $('html,body').animate({
       scrollTop:targetOffSet
    },300);

})


//Animation Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('header').addClass('black');
    }

    else {
          $('header').removeClass('black');
    }
})


//scroll footer

$(window).on("scroll", function() {
	var scroll = $(window).scrollTop();

	var widthScreen  = $(window).width();

	console.log(widthScreen);

	if(scroll >= 4320){
		$('footer').css('display','flex').animate({

		},300);
	}else if(scroll >= 3165 && widthScreen >= 360)
	{
		$('footer').css('display','flex').animate({

		},300);

	}
	else{
		$('footer').css('display','none').animate({

		},300);
	}
	// console.log(scroll);		
		
    

})

//Animation text
debounce = function(func, wait, immediate) {
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


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();