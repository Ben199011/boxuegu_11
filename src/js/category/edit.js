require("../common/header")
require("../common/aside")
var util = require("../common/util");
var cg_id = util.getSearch("cg_id");
//回显
$.get("/v6/category/edit", { "cg_id": cg_id }, function(data) {
        console.log(template("category-edit-tpl", data.result))
        $(".category-edit").html(template("category-edit-tpl", data.result))
    })
    //  表单提交：
    //  1、因为数据要回显，所以form表单是异步动态插入到页面中的，必须配置插件的委托
    //  2、修改成功后给用户一个提示

$("#category-edit-form").ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert("编辑成功")
        }
    }
})