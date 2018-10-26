$(document).ready(function(){

    // ----------------- HEADER SLOWDROP TRANSITION ------------------

    // function delay () {
    //     $(".header__container").css({"transform": "translateY(3rem)",
    // "visibility": "visible"});
    // }
    // window.setTimeout( delay, 3000 );
    // $("header__container")

    //   -------------- HIIDDEN NAVBAR FUNCTION -----------------

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        var cheight = $(".header__box").outerHeight();
        var concordia = $(".concordia").outerHeight();
        // var him  = $(".him").outerHeight();

        if (scroll > cheight) {
           
            $("#toggle").addClass("active");
            $(".header__menu").css("background-color", "#F6F6F6");
            $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
            .css({  "height": "60%",
                    "width": "17%",
                "align-self": "center",
                "justify-self": "center" });

                $(".header__menu__list__hidden").css({"transform": "translateY(-10rem)"})
                $(".header__menu__list__hidden-2").css({"transform": "translateY(-10rem)"})
            
        } else if (scroll < cheight) {
            $("#toggle").removeClass("active");
            $(".header__menu").css("background-color", "transparent");
            $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")
            .css({  "height": "10rem",
            "width": "10rem",
        "align-self": "center" });
        $(".header__menu__list__hidden").css({"transform": "translateY(-3rem)"})
        $(".header__menu__list__hidden-2").css({"transform": "translateY(-3rem)"})
        }
    });
    var cheight = $(".header__box").outerHeight();


//     ---------   DROPDOWN MENU ---------

    $(".header__menu__list-item-one").mouseover(function(){
        $("#hidden").addClass("active2");
        $(".header__menu__list__hidden").addClass("active");
        $("#toggle").addClass("active3");
        $(".header__menu").css("background-color", "#F6F6F6");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
        .css({  "height": "60%",
                "width": "17%",
            "align-self": "center",
            "justify-self": "center" });
    });

    $(".header__menu__list-item-one").mouseleave(function(){
        $("#hidden").removeClass("active2");
        $("#toggle").removeClass("active3");
        $(".header__menu__list__hidden").removeClass("active");
        $(".header__menu").css("background-color", "transparent");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")   
        .css({  "height": "10rem",
        "width": "10rem",
    "align-self": "center" });;
    });

    $(".header__menu__list-item-two").mouseover(function(){
        $("#hidden2").addClass("active2");
        $(".header__menu__list__hidden-2").addClass("active");
        $(".header__menu").css("background-color", "#F6F6F6");
        $("#toggle").addClass("active3");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
        .css({  "height": "60%",
                "width": "17%",
            "align-self": "center",
            "justify-self": "center" });
    });

    $(".header__menu__list-item-two").mouseleave(function(){
        $("#hidden2").removeClass("active2");
        $("#toggle").removeClass("active3");
        $(".header__menu").css("background-color", "transparent");
        $(".header__menu__list__hidden-2").removeClass("active");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")
        .css({  "height": "10rem",
        "width": "10rem",
    "align-self": "center" });
    });

    $(".header__menu__list__hidden").mouseover(function(){
        $(".header__menu__list__hidden").addClass("active");
        $(".header__menu").css("background-color", "#F6F6F6");

        $("#hidden").addClass("active2");
        $(".header__menu__list__hidden").addClass("active");
        $("#toggle").addClass("active3");
        $(".header__menu").css("background-color", "#F6F6F6");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
        .css({  "height": "60%",
                "width": "17%",
            "align-self": "center",
            "justify-self": "center" });
    })

    $(".header__menu__list__hidden-2").mouseover(function(){
        $(".header__menu__list__hidden-2").addClass("active");
        $(".header__menu").css("background-color", "#F6F6F6");

        $("#hidden2").addClass("active2");
        $(".header__menu__list__hidden-2").addClass("active");
        $(".header__menu").css("background-color", "#F6F6F6");
        $("#toggle").addClass("active3");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
        .css({  "height": "60%",
                "width": "17%",
            "align-self": "center",
            "justify-self": "center" });
    })

    $(".header__menu__list__hidden").mouseleave(function(){
        $(".header__menu__list__hidden").removeClass("active");
        $(".header__menu").css("background-color", "transparent");

        $("#hidden").removeClass("active2");
        $("#toggle").removeClass("active3");
        $(".header__menu__list__hidden").removeClass("active");
        $(".header__menu").css("background-color", "transparent");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")   
        .css({  "height": "10rem",
        "width": "10rem",
    "align-self": "center" });;
    })

    $(".header__menu__list__hidden-2").mouseleave(function(){
        $(".header__menu__list__hidden-2").removeClass("active");
        $(".header__menu").css("background-color", "transparent");
        

        $("#hidden2").removeClass("active2");
        $("#toggle").removeClass("active3");
        $(".header__menu").css("background-color", "transparent");
        $(".header__menu__list__hidden-2").removeClass("active");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")
        .css({  "height": "10rem",
        "width": "10rem",
    "align-self": "center" });
    })

//      --------   BUTON AND PICTURE CHANGE IN SECOND CAROUSEL ---------------

    $(".watch-hover").mouseover(function() {
        var watch = $(this).children("div").children("a").children("img").attr("src");
        var index = watch.split("/")[3].split("");
        $(this).children("div").children("a").children("img").attr("src", `/img/watch/watch${index[index.length-1]}/9-9.png`)
        .css({"filter": "opacity(30%)",
              "background-color": "#F6F6F6"
        })  

        $(this).children("div").children("button").css({
            "visibility": "visible",
            "top": "50%",
            "transition": "all .3s"
        });

    })

    $(".watch-hover").mouseleave(function() {
        var watch = $(this).children("div").children("a").children("img").attr("src");
        var index = watch.split("/")[3].split("");
        $(this).children("div").children("a").children("img").attr("src", `/img/watch/watch${index[index.length-1]}/9-8.png`)
        .css({"filter": "none",
        "background-color": "#transparent"
        })
        $(this).children("div").children("button").css({
                "visibility": "hidden",
                "top": "60%",
                "transition": "all .4s"
        })
    })

    //      ----------------- COLOR IMAGE CHANGE ----------------

    $(".product__box__img__color-item").mouseover(function() {
        var color = $(this).children("a").children("img").attr("src");
        var index = color.split("").reverse().slice(4, 7).reverse().join("");
        var path = $(this).parents("ul").parents("div").children("div").children("div").children("a").children("img").attr("src");
        var index2 = path.split("").reverse().slice(8,9).join("");
        $(this).parents("ul").parent("div").children("div").children("div").children("a").children("img").attr("src", `/img/watch/watch${index2}/${index}.png`);
    });

    $(".product__box__img__color-item").mouseleave(function() {
        var color = $(this).children("a").children("img").attr("src");
        var index = color.split("").reverse().slice(4, 7).reverse().join("");
        var path = $(this).parents("ul").parents("div").children("div").children("div").children("a").children("img").attr("src");
        var index2 = path.split("").reverse().slice(8,9).join("");
        $(this).parents("ul").parent("div").children("div").children("div").children("a").children("img").attr("src", `/img/watch/watch${index2}/9-8.png`);
    });

    //     --------------- GALLERY PICTURE CHANGE -----------------
    
    $(".gallery__bottom__box__product").mouseover(function() {
        var pic = $(this).children("div").children("img").attr("src");
        var pass = pic.split("").reverse().slice(4, 5).join("");
        var num = pic.split("").reverse().slice(8, 9).join("");
        $(this).children("div").children("img").attr("src", `/img/watch/bottom/watch${num}/1-2.jpg`)
        .css({"filter": "opacity(30%)",
        "background-color": "#F6F6F6"
        }); 

        $(this).children("div").children("button").css({
            "visibility": "visible",
            "top": "50%",
            "transition": "all .3s"
        });
        
    });

    $(".gallery__bottom__box__product").mouseleave(function() {
        var pic = $(this).children("div").children("img").attr("src");
        var folder = pic.split("").reverse().slice(8, 9).join("");
        $(this).children("div").children("img").attr("src", `/img/watch/bottom/watch${folder}/1-1.jpg`)
        .css({"filter": "none",
        "background-color": "#transparent"
        });
        $(this).children("div").children("button").css({
                "visibility": "hidden",
                "top": "60%",
                "transition": "all .4s"
        });
    });


    //       -------------- COLOR CHANGE OF PICTURE -----------------

    $(".gallery__bottom__box__color-link").mouseover(function() {
        var color = $(this).children("img").attr("src");
        var code = color.split("").reverse().slice(4, 7).reverse().join("");
        var path =$(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src");
        var folder = path.split("").reverse().slice(8, 9).join("");
        
        $(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src", `/img/watch/bottom/watch${folder}/${code}.jpg`);
        // console.log(folder);
        // console.log(code);
    });

    $(".gallery__bottom__box__color-link").mouseleave(function() {
        var path =$(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src");
        var folder = path.split("").reverse().slice(8, 9).join("");
        
        $(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src", `/img/watch/bottom/watch${folder}/1-1.jpg`);
        // console.log(folder);
        // console.log(code);
    });


    // ---------- MODAL BOX -----------------

    var modal = $(".modal")
    var trigger = $(".trigger");
    var close = $(".modal__close-button");

        function toggleModal() {
        modal.toggleClass("show-modal");
    }

        function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.on("click", function(){
         modal.addClass("show-modal");
         var img = $(this).parent("div").find("img").attr("src");
         var name = $(this).parent("div").parent("div").children("div").find(".product__box__img__text-link").html();
         var money = $(this).parent("div").parent("div").children("div").find(".product__box__img__text-price").html();
         var list = $(this).parent("div").parent("div").parent("div").find(".product__box__img__color").html();

         var lis = $(this).parent("div").parent("div").parent("div").children("ul").children("li");
         lis.children("a").children("img").toggleClass("modal__content__right__box__colors-img");
         var index = lis.children("a").children("img").attr("src");
         var code = index.split("").reverse().slice(4, 7).reverse().join("");

        $(".modal__content__right__box__colors").add(lis);
        $(".modal__content__left-img").attr("src", `${img}`);
        $(".modal__content__right-link").html(`${name}`);
        $(".modal__content__right-money").html(`${money}`);
        $(".modal__content__right__box__colors").html(`${list}`);
         
        });

        $(document).on("click", ".product__box__img__color-pic", function(){
            var path = $(this).attr("src");
            var code = path.split("").reverse().slice(4, 7).reverse().join("");
            var img = $(".modal__content__left-img").attr("src");
            var index2 = img.split("").reverse().slice(8,9).join("");
            $(".modal__content__left-img").attr("src", `/img/watch/watch${index2}/${code}.png`);
        })


    close.on("click", function(){ modal.removeClass("show-modal"); });

    //      -------------- PLAY VIDEO -------------------

    // $('.video').on('click', '.youtubeImage', function() {
    //     callYoutubeApi();
    //   });
    //   https://developers.google.com/youtube/iframe_api_reference


    //     --------------- TRANSFER VARIABLES ------------------
    $(".product__box__img__visible-pic").on("click", function() {

        var imgColors = [];
        $(this).parent("div").parent("div").parent("div").children("ul").children("li").children("a").children("img").each(function(){
            var code = $(this).attr("src").split("").reverse().slice(4, 7).reverse().join("");
            imgColors.push(code);
        });
        console.log(imgColors);

        var name = $(this).parent("div").parent("div").children("div").find(".product__box__img__text-link").html();
        var price = $(this).parent("div").parent("div").children("div").find(".product__box__img__text-price").html();
        
        var watchColor = $(this).parent("div").parent("div").parent("div").children("ul").children("li").children("a").children("img");
        var color = watchColor.attr("src").split("").reverse().slice(4, 7).reverse().join("");

        var watch = $(this).children("img").attr("src");
        var model = watch.split("").reverse().slice(8,9).join("");
        console.log(model);
      
        $(this).attr("href", `watch?model=${model}&name=${name}&price=${price}&color=${color}&imgColors=${imgColors}`);
        });


        //  --------------  WATCH PAGE LIST TOGGLE --------------

        $(".watch__right__list-item-header").unbind("click").on("click", function(){
            if($(this).parent("li").children("ul").hasClass("active4")){
                var $ova =$(this).parent("li").children("ul");
                $ova.removeClass("active4")
               
            } else {
                $(".watch__right__list-item-header").not(this).parent("li").children("ul").removeClass("active4");
                $(this).parent("li").children("ul").addClass("active4")
            } 
        });



        // ---------------BURGER MENU -------------------------------

     var isActive = false;

    $('.js-menu').on('click', function() {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
        } else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
        }

        isActive = !isActive;
    });




    // ---------------------- FOOTER OF THE PAGE ---------------

        $(".footer__2-header").unbind("click").on("click", function(){

            if($(this).parent("div").children("ul").hasClass("active6") || $(this).siblings("ul").children("li").hasClass("active5")){
                var list = $(this).parent("div").children("ul");
                var items  = $(this).parent("div").children("ul").children("li");
                list.removeClass("active6");
                items.removeClass("active5");
            } else {
                $(this).parent("div").children("ul").children("li").addClass("active5");
                $(this).parent("div").children("ul").addClass("active6");
            }
        })

    //      -------------- SLICK CAROUSEL ----------------------

      $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200, // tablet breakpoint
                settings: {
                    arrows: false   
                }
            },
            {
                breakpoint: 800, // tablet breakpoint
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 3
                    arrows: false 
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 2
                    arrows: false 
                }
            }
        ]
      });

      $('.multiplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 800, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      });
            
      $('.autoplay2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true
      });
  });
