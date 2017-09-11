require("../common/header")
require("../common/aside")
var util = require("../common/util");
var cg_id = util.getSearch("cg_id");
//回显
$.get("/v6/category/edit", { "cg_id": cg_id }, function(data) {
    console.log(template("category-edit-tpl", data.result))
    $(".category-edit").html(template("category-edit-tpl", data.result))
})