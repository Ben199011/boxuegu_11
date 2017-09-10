var str = localStorage.getItem("userInfo");
$(".aside img").attr('src', JSON.parse(str).tc_avatar);
$(".aside h4").html(JSON.parse(str).tc_name)

$(".navs a").on('click', function() {
    $(this).next('ul').slideToggle();
})

var path = location.pathname;
$('.navs a').removeClass('active')
$('.navs a[href="' + path + '"]').addClass("active").parent("ul").show()