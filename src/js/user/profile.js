require("../common/header")
require("../common/aside")
require("../common/common")
require('../common/loading')
    //个人中心资料回显
$.ajax({
        url: "/v6/teacher/profile",
        type: "get",
        success: function(data) {
            if (data.code == 200) {
                $(".teacher-profile").html(
                    template("teacher-profile-tmp", data.result))
            }
        }
    })
    //页面的动态异步生成的，
$("#user-profile-form").ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert("保存成功")
            window.location.Reload()
        }
    },
    error: function() {
        alert("保存失败")
    }
})