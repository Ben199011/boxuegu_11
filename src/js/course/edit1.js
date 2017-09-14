require("../common/header")
require("../common/aside");
var util = require('../common/util');
require("../common/common");
require('../common/loading')
var cs_id = util.getSearch("cs_id");
//数据回显
$.get("/v6/course/basic", { "cs_id": cs_id }, function(data) {
        if (data.code == 200) {
            data.result.editIndex = 1; //给模板用
            $("#course-edit1").append(template("course-edit1-tpl", data.result))
        }
    })
    //二级联动
    // 因为整个数据回显是动态构建的，所以通过委托的方式监听父级学科select的change事件
$(document).on("change", "#sel-cgTop", function() {
        var topCgid = $(this).val();
        $.get("/v6/category/child", { cg_id: topCgid }, function(data) {
            var html = '';
            if (data.code == 200) {
                for (var i = 0; i < data.result.length; i++) {
                    html += '<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>'
                }

            }
            $("#sel-cgChild").html(html);
        })
    })
    //数据提交
$("#course-edit1-form").ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert("保存成功");
            location.href = '/dist/html/course/course_edit_step2.html?cs_id=' + cs_id;
        }
    }

})