require("../common/header")
require("../common/aside")
var util = require("../common/util");
require("../common/common");
require('../common/loading');
var cs_id = util.getSearch('cs_id');
//数据回显
$.get("/v6/course/picture", { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 2;
        $('#course-edit2').append(template('course-edit2-tpl', data.result));
        initPlugin()
    }
})

function initPlugin() {
    console.log(789)
        //上传图片
    $('#uploadify').uploadify({
        swf: '/lib/jquery-uploadify/uploadify.swf',
        uploader: '/v6/uploader/cover',
        fileTypeExts: '*.gif; *.jpg; *.png',
        fileObjName: 'cs_cover_original',
        formData: { cs_id: cs_id },
        buttonText: '上传',
        buttonClass: 'btn btn-success btn-sm',
        onUploadSuccess: function(file, dataStr) { // 图片上传成功后的回调
            var data = JSON.parse(dataStr);
            console.log(123);
            console.log(data)
            $('.preview img').attr('src', data.result.path);
        }

    });
}
$(document).on('click', '#btn-clip', function() {
    // 当裁剪插件初始化完毕后，会执行回调，回调中的this为插件实例，通过这个实例可以拿到一些的数据
    $('.preview img').Jcrop({
        aspectRatio: 2
    }, function() {
        window.J = this;
    });
})

/**
 + * 委托方式给保存按钮绑定点击事件，点击时把裁剪的数据传送给后端
 + * */
$(document).on('click', '#btn-slip-save', function() {

    var data = J.getSelection();
    data.cs_id = cs_id;
    $.post('/v6/course/update/picture', data, function(data) {
        alert('裁剪成功');
        location.href = '/dist/html/course/course_edit_step3.html?cs_id=' + cs_id;
    });

});