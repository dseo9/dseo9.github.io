
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#resume');
    var offset = startchange.offset();

    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            $('.navigation').css({"background-color": "#ffffff", "color": "#000000", "transition": "background-color 500ms linear"});
        } else {
            $('.navigation').css({"background-color": "transparent", "transition": "background-color 500ms linear"});
        }
    });

    $('a.home').click(function(e){
		  e.preventDefault();
		  $id = $(this).attr('href');
		  $('body,html').animate({
			    scrollTop: $($id).offset().top -300
      }, 750);
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
  