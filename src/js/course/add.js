require("../common/header");
require("../common/aside");
//用插件做要把a标签改为button标签，type改为submit
// $("#course-add-form").ajaxForm(function(data) {
//     if (data.code == 200) {
//         alert("创建成功")
//     }
// })
$(".btn-course-add").on("click", function() {
    $.ajax({
        url: "/v6/course/create",
        data: $("#course-add-form").serialize(),
        success: function(data) {
            if (data.code == 200) {
                alert("创建成功")
            }
        }
    })
})