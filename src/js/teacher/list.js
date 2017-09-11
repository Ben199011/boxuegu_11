require("../common/header");
require("../common/aside");
//列表页面渲染
$.get("/v6/teacher", function(data) {
    $(".table-striped").append(template("teacher-list-tpl", data.result))
})