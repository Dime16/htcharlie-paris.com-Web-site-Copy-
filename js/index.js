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

        if (scroll > cheight) {
           
            $("#toggle").addClass("active");
            $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
            .css({  "height": "60%",
                    "width": "17%",
                "align-self": "center",
                "justify-self": "center" });
            
        } else if (scroll < cheight) {
            $("#toggle").removeClass("active");
            $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")
            .css({  "height": "10rem",
            "width": "10rem",
        "align-self": "center" });;
        }
    });
    var cheight = $(".header__box").outerHeight();
    console.log(cheight);


//     ---------   DROPDOWN MENU ---------

    $(".header__menu__list-item-one").mouseover(function(){
        $(this).css({"border-bottom": "1px solid #18395F",
                    "padding-bottom": "1rem"});
        $("#hidden").addClass("active2");
        $(".header__menu__list__hidden").css("display", "block");
        $("#toggle").addClass("active3");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_only.png")
        .css({  "height": "60%",
                "width": "17%",
            "align-self": "center",
            "justify-self": "center" });
    });

    $(".header__menu__list-item-one").mouseleave(function(){
        $(this).css({"border-bottom": "none",
                    "padding-bottom": "1rem"});
        $("#hidden").removeClass("active2");
        $("#toggle").removeClass("active3");
        $(".header__menu__list__hidden").css("display", "none");
        $(".header__menu__img-logo").attr("src", "/img/logo_web_410x.png")
        .css({  "height": "10rem",
        "width": "10rem",
    "align-self": "center" });;
    });

//      --------   BUTON AND PICTURE CHANGE IN SECOND CAROUSEL ---------------

    $(".watch-hover").mouseover(function() {
        var watch = $(this).children("div").children("img").attr("src");
        var index = watch.split("/")[3].split("");
        $(this).children("div").children("img").attr("src", `/img/watch/watch${index[index.length-1]}/9-9.png`)
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
        var watch = $(this).children("div").children("img").attr("src");
        var index = watch.split("/")[3].split("");
        $(this).children("div").children("img").attr("src", `/img/watch/watch${index[index.length-1]}/9-8.png`)
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
        var path = $(this).parents("ul").parents("div").children("div").children("div").children("img").attr("src");
        var index2 = path.split("").reverse().slice(8,9).join("");
        $(this).parents("ul").parent("div").children("div").children("div").children("img").attr("src", `/img/watch/watch${index2}/${index}.png`);
    });

    $(".product__box__img__color-item").mouseleave(function() {
        var color = $(this).children("a").children("img").attr("src");
        var index = color.split("").reverse().slice(4, 7).reverse().join("");
        var path = $(this).parents("ul").parents("div").children("div").children("div").children("img").attr("src");
        var index2 = path.split("").reverse().slice(8,9).join("");
        $(this).parents("ul").parent("div").children("div").children("div").children("img").attr("src", `/img/watch/watch${index2}/9-8.png`);
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
        console.log(folder);
        console.log(code);
    });

    $(".gallery__bottom__box__color-link").mouseleave(function() {
        // var color = $(this).children("img").attr("src");
        // var code = color.split("").reverse().slice(4, 7).reverse().join("");
        var path =$(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src");
        var folder = path.split("").reverse().slice(8, 9).join("");
        
        $(this).parents("div").parents("div").children("a").children("div").children("div").children("img").attr("src", `/img/watch/bottom/watch${folder}/1-1.jpg`);
        console.log(folder);
        console.log(code);
    });

    //      -------------- PLAY VIDEO -------------------

    // $('.video').on('click', '.youtubeImage', function() {
    //     callYoutubeApi();
    //   });
    //   https://developers.google.com/youtube/iframe_api_reference

    //      -------------- SLICK CAROUSEL ----------------------

      $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true
      });

      $('.multiplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        adaptiveHeight: true
      });


  });
