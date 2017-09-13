require("../common/header")
require("../common/aside");
var util = require('../common/util')
var cs_id = util.getSearch("cs_id");
//数据回显
$.get("/v6/course/basic", { "cs_id": cs_id }, function(data) {
    if (data.code == 200) {
        $("#course-edit1").append(template("course-edit1-tpl", data.result))
            // location.href = "/dist/html/course/course_edit_step2.html?cs_id=" + data.result.cs_id;
    }
})