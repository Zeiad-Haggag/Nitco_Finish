$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").slideToggle(400);
    });

     // navbar bg change on scroll
  $(window).scroll(function(){
    let pos = $(window).scrollTop();
    if(pos >= 100){
        $('.navbar').addClass('cng-navbar');
    } else {
        $('.navbar').removeClass('cng-navbar');
    }
});



    // HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(" + $(this).data("background") + ")");
        }
    });

    /*-----------------------------------------------------------------------
    Text Swiper
    -----------------------------------------------------------------------*/
    var swiperText = new Swiper(".text-mySwiper", {
        loop: true,
        speed: 1000,
        parallax: true,
        allowSlidePrev:true,
        
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
          reverseDirection:true,
        }
      
      });



    /*-----------------------------------------------------------------------
    test-2 Section
    -----------------------------------------------------------------------*/
    $(function() {
        $('.chart').easyPieChart({
            scaleColor:false,
            barColor:'#555a64',
            size:130,
        });
    });
      /*-----------------------------------------------------------------------
    search button   
    -----------------------------------------------------------------------*/
    var search_button=$(".fa-search"),
    colse_button=$(".close"),
    input=$(".input"),
    search_div=$(".search");
    
    search_button.on("click",function(){
        search_div.addClass("open");
        colse_button.fadeIn(500);
        input.fadeIn(500);

        
    });
    colse_button.on("click",function(){
        search_div.removeClass("open");
        colse_button.fadeOut(500);
        input.fadeOut(500);

        
    });
      /*-----------------------------------------------------------------------
    btn Sroll up
    -----------------------------------------------------------------------*/
    var btnScrollUp=$(".btn-scroll-up");

    btnScrollUp.click(function(){
        $("html ,body").animate({ scrollTop:0 } ,"slow");
    });


      /*-----------------------------------------------------------------------
    Aos Animation button   
    -----------------------------------------------------------------------*/
     AOS.init();

      /*-----------------------------------------------------------------------
     dark-mode  button   
    -----------------------------------------------------------------------*/
    var toggler_mode =$(".navbar-mode");

    toggler_mode.on("click",function(){
        toggler_mode.toggleClass("dark");
        var current_theme =$("html").attr("data-theme");
        if(current_theme == "light"){
            $("html").attr("data-theme","dark");
        }
       else if(current_theme == "dark"){
            $("html").attr("data-theme","light");
        }
     

        
    });
    






     


    
    
    



            






});