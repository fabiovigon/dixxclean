//Menu Mobile
$(document).ready(function aClick(){
    $('.menu-toggle').click(function(){
		var click =	$('nav').toggleClass('active'); 	  
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

	// console.log(widthScreen);
	//Desktop
	if(scroll >= 3337){
		$('footer').css('display','flex').animate({

		},300);

	}
	else if(scroll >= 4200 && widthScreen == 1024)
	{
		$('footer').css('display','flex').animate({

		},300);

	}
	else if(scroll >= 2590 && widthScreen == 411)
	{
		$('footer').css('display','flex').animate({

		},300);

	}
	else if(scroll >= 2600 && widthScreen == 360)
	{
		$('footer').css('display','flex').animate({

		},300);

	}
	//iphone 6/7/8
	else if(scroll >= 2500 && widthScreen == 375)
	{
		$('footer').css('display','flex').animate({

		},300);

	}

	else if(scroll >= 2300 && widthScreen == 320)
	{
		$('footer').css('display','flex').animate({

		},300);

	}
	else{
		$('footer').css('display','none').animate({

		},300);
	}
	console.log(scroll);		
		
    

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
	}, 100));
})();




		var limite;
            function moverFotos(){

                $('#janela').animate({left:"-=200"},1000, function(e){

                    if($('#janela').position().left == limite){
                        $('#janela').css('left', 0);

                    }
                })
            }


			$(function(e) {
                limite = $('#janela img').length * $('#janela img').width() * -1;
                $('#janela').append('<img>');
                $('#janela').attr('src','css/imagens/man-talking-on-cellphone.jpg');

                setInterval(moverFotos,2000);
			});	



			function sendMail() {
				var link = "mailto:me@example.com"
						 + "?cc=myCCaddress@example.com"
						 + "&subject=" + escape("This is my subject")
						 + "&body=" + escape(document.getElementById('Nome').value)
						 + "<br/>" + escape(document.getElementById('SobreNome').value)
				;
			
				window.location.href = link;
			}