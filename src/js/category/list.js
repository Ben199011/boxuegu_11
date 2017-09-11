require("../common/header")
require("../common/aside")
$.get("/v6/category", function(data) {
    if (data.code == 200) {
        $(".table-bordered").append(template("category-list-tpl", data.result))
    }
})