!function(n){n(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on("click",function(a){var o=this.hash;o&&(a.preventDefault(),n("html, body").animate({scrollTop:n(o).offset().top},900,function(){window.location.hash=o}))}),n(window).scroll(function(){50<n(".navbar-default").offset().top?n(".navbar-fixed-top").addClass("top-nav-collapse"):n(".navbar-fixed-top").removeClass("top-nav-collapse")})}(jQuery);