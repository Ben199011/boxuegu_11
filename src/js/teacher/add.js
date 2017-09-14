require("../common/header");
require("../common/aside");
require("../common/common");
require('../common/loading');
$("#teacher-add-form").ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert("添加成功");
            // location.href = "/dist/index.html"
        } else {
            alert("添加失败")
        }
    },
    error: function() {
        alert("添加失败")
    }
})