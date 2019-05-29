
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#resume');
    var offset = startchange.offset();

    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            console.log("change to white navbar ");
            $('.navigation').css({"background-color": "#ffffff", "transition": "background-color 300ms linear"});
            $('.home').css({"color": "black"});
            $('.projects').css({"color": "black"});
            $('.contact').css({"color": "black"});
        } else {
          console.log("change to transparent");
            $('.navigation').css({"background-color": "transparent", "transition": "background-color 300ms linear"});
            $('.home').css({"color": "#ffffff"});
            $('.projects').css({"color": "#ffffff"});
            $('.contact').css({"color": "#ffffff"});

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
  