require("../common/header")
require("../common/aside")
var util = require('../common/util.js');
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