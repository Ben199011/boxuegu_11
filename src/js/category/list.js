require("../common/header")
require("../common/aside");
require("../common/common");
require('../common/loading');
$.get("/v6/category", function(data) {
    if (data.code == 200) {
        $(".table-bordered").append(template("category-list-tpl", data.result))
    }
})