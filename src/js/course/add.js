require("../common/header");
require("../common/aside");
require("../common/common");
require('../common/loading');
//用插件做要把a标签改为button标签，type改为submit
$("#course-add-form").ajaxForm(function(data) {
        if (data.code == 200) {
            alert("创建成功");
            location.href = '/dist/html/course/course_edit_step1.html?cs_id=' + data.result.cs_id;
        }
    })
    // $(".btn-course-add").on("click", function() {
    //     $.ajax({
    //         url: "/v6/course/create",
    //         data: $("#course-add-form").serialize(),
    //         success: function(data) {
    //             if (data.code == 200) {
    //                 alert("创建成功")
    //             }
    //         }
    //     })
    // })