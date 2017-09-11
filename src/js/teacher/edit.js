require("../common/header");
require("../common/aside");
var util = require("../common/util");
var tc_id = util.getSearch("tc_id");
//讲师编辑页面的 渲染
$.get("/v6/teacher/edit", { "tc_id": tc_id }, function(data) {
    if (data.code == 200) {
        $(".teacher-edit").html(template("teacher-edit-form", data.result))
    }
})