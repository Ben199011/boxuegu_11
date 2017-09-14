require("../common/header")
require("../common/aside")
var util = require('../common/util.js');
require("../common/common");
require('../common/loading');
var cs_id = util.getSearch('cs_id');
//数据回显
$.get("/v6/course/lesson", { cs_id: cs_id }, function(data) {
        if (data.code == 200) {
            data.result.editIndex = 3;
            $("#course-edit3").append(template("course-edit3-tpl", data.result))
        }
    })
    //模态框的数据回显
$(document).on("click", ".btn-lesson-edit", function() {
        var ct_id = $(this).attr("data-id");
        $.get("/v6/course/chapter/edit", { ct_id: ct_id }, function(data) {

            if (data.code == 200) {
                $("#chapterModal").html(template("lesssons-tpl", data.result))
            }
        })
    })
    //编辑和添加课时同用一个模态框，所以一个请求就可以了
    //编辑和添加数据的提交
$("#lesson-form").ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            if (data.result) {
                alert("添加成功")
                $("#lesson-form")[0].reset();
                window.location.reload()
            } else {
                alert("编辑成功")
                window.location.reload()
            }
        }
    }
})
$(document).on("click", ".btn-add-edit3", function() {
    $("#chapterModal").html(template("lesssons-tpl", { cs_id: cs_id }))
})