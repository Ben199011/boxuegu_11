require("../common/common")
require('../common/loading')
    //添加图片
var userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
var tc_avatar = userInfo.tc_avatar || "/public/img/default.png";
$(".avatar img").attr('src', tc_avatar)
    //实现登录密码和跳转页面
$("#login-form").ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            localStorage.setItem(
                "userInfo", JSON.stringify(data.result)
            )
            alert("登录成功");
            location.href = "/dist/index.html"
        } else {
            alert("登录失败")
        }
    },
    error: function() {
        alert("登录失败")
    }
})