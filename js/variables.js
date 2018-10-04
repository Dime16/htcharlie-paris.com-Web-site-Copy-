
var url_string = window.location.href;
var url = new URL(url_string);

var model = url.searchParams.get("model");

var imgColors  = url.searchParams.get("imgColors");
var palete = imgColors.split(",");

var color = url.searchParams.get("color");
var name  = url.searchParams.get("name");
var price = url.searchParams.get("price");

console.log(model);
console.log(color);


$(".watch__1-img").attr("src", `/img/watch/watch${model}/${color}.png`);
var path = $(".watch__1-img").attr("src");

$(".modal__content__right-link").html(name);
$(".modal__content__right-money").html(price)

for (let code of palete){
    console.log(code);
    $(".modal__content__right__box__colors").append(`<li><img src="/img/colors/${code}.png" alt="" class="modal__content__right__box__colors-img"></img></li>`)
}


$(document).on("click", ".modal__content__right__box__colors-img", function(){
    var path = $(this).attr("src");
    var code = path.split("").reverse().slice(4, 7).reverse().join("");
    console.log(code);
    var img = $(".watch__1-img").attr("src");
    var index2 = img.split("").reverse().slice(8,9).join("");
    $(".watch__1-img").attr("src", `/img/watch/watch${index2}/${code}.png`);
});




