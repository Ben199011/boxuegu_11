require("../common/header")
require("../common/aside")
$.get("/v6/course", function(data) {
    if (data.code == 200) {
        $(".courses").html(template("course-list-tpl", data.result))
    }
})