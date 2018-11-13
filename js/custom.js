(function ($) {
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a ,.overlay-detail-new a").on('click', function(event) {
        
        var hash = this.hash;
        if( hash ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
       
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top1").addClass("top-nav-collapse");
            // alert("lll");
        } else {
            $(".navbar-fixed-top1").removeClass("top-nav-collapse");
        }
    });
    


        var hamburger = document.getElementById('hamburger');
        
        $(hamburger).click(function() {
          $(this).toggleClass('is-active');
        })
        
        $(".sidebar-toggle-button").click(function() {
            $("#sidebar").toggleClass('active1');
            $(".rightwindow").toggleClass('active2');
          })
          
         
          
       
          
        //   $(".home1").hover(function() {
        //     $(".home").css('display','inline-block')
        //   }, function () {
        //         $(".home").css('display','none')
        //         });
        
          
                $(".menu__list-ul").hover(function() {
                    $(".list-text").animate({
                        "left": '170px',
                        "opacity": '0.5',
                        "color": 'green'
                        
                    });

                    // $(".list-text").show( "slide", {direction: "left" }, 2000 );
            $(".list-fa-home").css('color','red');
            $(".list-fa-about").css('color','yellow');
            $(".list-fa-contact").css('color','green');
            $(".home").css('color','red');
            $(".about").css('color','yellow');
            $(".contact").css('color','green');

                  }, function () {

                    $(".list-text").animate({
                        "left": '-150px',
                        "opacity": '0.5',
                        "color": 'green'
                        
                    });
                      $(".list-fa").css('color','white');
                        $(".list-text").css('color','white');

                        });
                  
          
          

})(jQuery);