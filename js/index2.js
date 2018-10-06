$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop()===0){
            $(".header-box1").removeClass("active");
        }
    })
})