$("#btn-logout").on('click', function() {
    $.ajax({
        url: "/v6/logout",
        type: "post",
        success: function(data) {
            if (data.code == 200) {
                if (confirm("是否要退出")) {
                    alert(data.msg);
                    location.href = "/dist/html/user/login.html"
                }
            } else { alert("退出失败") }
        },
        error: function() {
            alert("登录失败")
        }
    })
})