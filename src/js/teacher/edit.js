require("../common/header");
require("../common/aside");
var util = require("../common/util");
var tc_id = util.getSearch("tc_id");
//讲师编辑页面的 渲染
$.get("/v6/teacher/edit", { "tc_id": tc_id }, function(data) {
        if (data.code == 200) {
            $(".teacher-edit").html(template("teacher-edit-tpl", data.result))
        }
    })
    //修改讲师，因为是动态异步创建的所以要delegation委托
$("#teacher-edit-form").ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert("修改成功")
        }
    },
    error: function() {
        alert("修改失败")
    }
})