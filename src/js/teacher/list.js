require("../common/header");
require("../common/aside");
//列表页面渲染
$.get("/v6/teacher", function(data) {
        $(".table-striped").append(template("teacher-list-tpl", data.result))
    })
    //教师列表的启用和注销功能
$(document).on("click", ".btn-teacher-list", function() {
    var _this = $(this);
    var data = {
        "tc_id": $(this).attr("data-id"),
        "tc_status": $(this).attr("data-status")
    }
    $.get("/v6/teacher/handle", data, function(data) {
        var newStatus = data.result.tc_status;
        _this.text(newStatus == 0 ? '注 销' : '启 用');
        _this.attr("data-status", newStatus);
    })
})