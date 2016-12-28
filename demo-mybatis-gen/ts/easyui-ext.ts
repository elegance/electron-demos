/**
 * 创建一个模式化的dialog:可在iframe页方便的关闭dialog和刷新父页面元素
 * 
 * @requires jQuery,EasyUI
 * 
 */
export function modalDialog({title=' ', width = 640, height = 480, modal = true, url = ''}) {
    let cTime = new Date().getTime(), dialogId = 'dialog_' + cTime, frameId = 'dialog_frame_'
        + cTime, dialogDiv = '<div id="' + dialogId + '"></div>';
    // var opts = $.extend({
    //     title: ' ',
    //     width: 640,
    //     height: 480,
    //     modal: true,
    //     onClose: function () {
    //         $(this).dialog('destroy');
    //     }
    // }, options);
    // opts.modal = true; // 强制此dialog为模式化，无视传递过来的modal参数
    if (url) {
        opts.content = '<iframe name="'
            + cTime
            + '" id="'
            + frameId
            + '" src="'
            + url
            + '" allowTransparency="true" style="overflow:auto" scrolling="auto" width="100%" height="98%" frameBorder="0" ></iframe>';
    }
    return $(dialogDiv).dialog(opts);
};