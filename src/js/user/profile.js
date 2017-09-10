require("../common/header")
require("../common/aside")

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