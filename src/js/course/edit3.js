require("../common/header")
require("../common/aside")
var util = require('../common/util.js');
require("../common/common");
require('../common/loading');
var cs_id = util.getSearch('cs_id');
var lessons;
//数据回显
$.get("/v6/course/lesson", { cs_id: cs_id }, function(data) {
        if (data.code == 200) {
            data.result.editIndex = 3;
            lessons = data.result.lessons;
            $("#course-edit3").append(template("course-edit3-tpl", data.result))
        }
    })
    //模态框的数据回显
$(document).on("click", ".btn-lesson-edit", function() {
        var ct_id = $(this).attr("data-id");
        $.get("/v6/course/chapter/edit", { ct_id: ct_id }, function(data) {

            if (data.code == 200) {
                $("#chapterModal").html(template("lesssons-tpl", data.result))
            }
        })
    })
    //编辑和添加课时同用一个模态框，所以一个请求就可以了
    //编辑和添加数据的提交
$("#lesson-form").ajaxForm({
    delegation: true,
    beforeSubmit: function(arrData, $form, options) {
        arrData.push({
            name: 'ct_is_free',
            value: $('#ct_is_free').prop('checked') ? 1 : 0
        })
    },
    success: function(data) {
        if (data.code == 200) {
            if (data.result) {
                alert("添加成功")
                uplessons(data.result)
                $("#lesson-form")[0].reset();
            } else {
                alert("编辑成功")
                uplessons()
            }
        }
    }
})
$(document).on("click", ".btn-add-edit3", function() {
    $("#chapterModal").html(template("lesssons-tpl", { cs_id: cs_id }))
})

// 更新数据{ct_id: "2", ct_name: "定位和", ct_video_duration: "08:14d"}
function uplessons(ct_id) {
    var formData = getFormData()
    var lessonsData = {
        ct_id: formData.ct_id || ct_id,
        ct_name: formData.ct_name,
        ct_video_duration: formData.ct_minutes + ':' + formData.ct_seconds
    }
    if (ct_id) {
        lessons.push(lessonsData)
    } else {
        var index = getLessonsIndex(formData.ct_id)
        lessons.splice(index, 1, lessonsData)
    }
    $("#lesson-list").html(template("lesson-list-tpl", lessons))
}

function getFormData() {
    var formArrData = $('#lesson-form').serializeArray();
    var formData = {};
    for (var i = 0; i < formArrData.length; i++) {
        formData[formArrData[i].name] = formArrData[i].value
    }
    return formData;
}
//获取索引
function getLessonsIndex(ct_id) {
    for (var i = 0; i < lessons.length; i++) {
        if (lessons[i].ct_id == ct_id) {
            return i;
        }
    }
}