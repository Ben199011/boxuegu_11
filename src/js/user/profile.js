require("../common/header")
require("../common/aside")
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
    //