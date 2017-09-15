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
                    template("teacher-profile-tmp", data.result));
                initPlugin()
            }
        }
    })
    //页面的动态异步生成的，
$("#user-profile-form").ajaxForm({
        delegation: true,
        success: function(data) {
            if (data.code == 200) {
                alert("保存成功")
            }
        },
        error: function() {
            alert("保存失败")
        }
    })
    //使用日期插件
function initPlugin() {
    $('input[name="tc_birthday"]').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2010-01-01'),
        autoclose: true
    });
    $('input[name="tc_join_date"]').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2017-01-01'),
        autoclose: true
    });
    //省市县三级联动
    $('#region-container').region({
        url: '/lib/jquery-region/region.json'
    });
    //富文本编辑器
    window.edit = CKEDITOR.replace("introduce", {
            width: 600,
            skin: 'moono-lisa'
        })
        //上传图片
        // $('#uploadify').uploadify({
        //     swf: '/lib/jquery-uploadify/uploadify.swf',
        //     uploader: '/v6/uploader/avatar',
        //     fileTypeExts: '*.gif; *.jpg; *.png',
        //     fileObjName: 'tc_avatar'
        // });
}