var loadHtml = '<div class="overlay">' + '<img src="/public/img/loading.gif"/>' + '</div>';
$("body").append(loadHtml);
$(document).on("ajaxStart", function() {
    $('.overlay').show();
})
$(document).on("ajaxStop", function() {
    $('.overlay').hide();
})