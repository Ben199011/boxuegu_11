require("../common/header")
require("../common/aside")
$("#repass-form").ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert("保存成功")
        } else(alert("保存失败"))
    },
    error: function() {
        alert("保存失败")
    }
})