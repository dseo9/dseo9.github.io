$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#resume');
    var offset = startchange.offset();

    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            $('.navigation').css({"background-color": "#ffffff", "transition": "background-color 200ms linear"});
        } else {
            $('.navigation').css({"background-color": "transparent", "transition": "background-color 200ms linear"});
        }
    });

    $('a.projects').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -50
		}, 750);
    });
    
    $('a.contact').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -50
		}, 750);
    });

  });
  