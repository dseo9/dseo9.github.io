$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('.header');
    var offset = startchange.offset();

    $(document).scroll(function() { 
        console.log("scrolling");
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            console.log("change to gray");
            $('.navigation').css({"background-color": "#ffffff", "transition": "background-color 900ms linear"});
        } else {
            console.log("stay transparent");
            $('.navigation').css({"background-color": "transparent", "transition": "background-color 200ms linear"});
        }
    });
  });
  