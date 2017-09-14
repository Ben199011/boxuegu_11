require("../common/header")
require("../common/aside");
require("../common/common");
require('../common/loading');
// 动态创建模板
$.get("/v6/category/top", function(data) {
        $("#select-add-tpl").html(template("category-top-tpl", data.result))
    })
    //添加学科
$("#category-add-form").ajaxForm(function(data) {
    if (data.code == 200) {
        alert("保存成功")
    }
})