require("../common/header")
require("../common/aside")
require("../common/common");
require('../common/loading')
$("#repass-form").on("submit", function() {
    //表单验证
    if ($("#input-pass").val() !== $("#input-pass-reset").val()) {
        alert("密码不一致")
        return false;
    }
    $("#repass-form").ajaxSubmit({
        success: function(data) {
            if (data.code == 200) {
                alert("保存成功");
                //重置表单
                $('#repass-form')[0].reset()
            }
        },
        error: function() {
            alert("原密码错误")
        }
    })
    return false;
})