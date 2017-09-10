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