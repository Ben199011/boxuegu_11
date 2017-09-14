require("../common/header")
require("../common/aside");
require("../common/common");
require('../common/loading');
$.get("/v6/course", function(data) {
    if (data.code == 200) {
        $(".courses").html(template("course-list-tpl", data.result))
    }
})