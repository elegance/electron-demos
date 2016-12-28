export class EasyUIExt {

    /**
     * 创建一个模式化的dialog:可在iframe页方便的关闭dialog和刷新父页面元素
     * @requires jQuery,EasyUI
     */
    static modalDialog({title=' ', width = '80%', height = '60%', modal = true, url = '', content = ''}) {
        let cTime = new Date().getTime(), dialogId = 'dialog_' + cTime, frameId = 'dialog_frame_'
            + cTime, dialogDiv = '<div id="' + dialogId + '"></div>';

        if (url) {
            content = `<iframe name="${cTime}" id="${frameId}" src="${url}" 
                allowTransparency="true" style="overflow: auto" width="100%" height="98%" frameBorder="0">
                </iframe>`;
        }
        return $(dialogDiv).dialog({
            title: title,
            width: width,
            height: height,
            modal: modal,
            content: content,
            onClose: function () {
                $(this).dialog('destroy');
            }
        });
    }
}

export interface TabOption {
    title?: string;
    tools?: Array<any>;
    iconCls?: string;
    closable?: boolean;
    refreshable?: boolean;
    src?: string;
    content?: string;
}

export class MainTabs {

    mainTabs;

    /**
     * tab构造
     * @param tabsSelector: tab的选择器
     */
    constructor(tabsSelector) {
        this.mainTabs = $(tabsSelector).tabs({
            fit: true,
            border: false,
            // tools : '#mainTabs_tools',
            // tabPosition: SYS.cookieGet('mainTabs_position') || 'top',
            // onContextMenu : function (e, title,index) {
            // 	e.preventDefault();
            // 	$('#main_tab_ctx').menu('show', {
            //         left: e.pageX,
            //         top: e.pageY
            //     }).data('tab', {'title': title, 'index': index});
            // }
        });
    }

    /**
     * 主Tabs增加Tab
     */
    addTab({title, tools = [], iconCls = '', closable = true, refreshable = false, src, content}: TabOption) {
        // 默认参数设置
        content = src ? `<iframe src="${src}" allowTransparency="true" style="border:0;width:100%;height:99%;" frameBorder="0"></iframe>` : content;

        // 如果tab已经存在，则选中当前tab
        if (this.mainTabs.tabs('exists', title)) {
            return this.mainTabs.tabs('select', title)
        }

        //iframe才可以刷新
        if (refreshable) {
            let refreshTool = {
                iconCls: 'icon-mini-refresh',
                handler: function () {
                    this.refreshTab(title);
                }
            };
            tools.push(refreshTool);
        }

        //主Tab面添加Tab
        this.mainTabs.tabs('add', {
            title: title,
            closable: closable || true,
            iconCls: iconCls,
            content: content,
            tools: tools,
            border: false,
            fit: true
        });
    }

    /**
     * 主Tabs刷新Tab
     * @param which 'which'参数可以是选项卡面板的标题或者索引。不填写which将刷新当前选中的 tab。
     */
    refreshTab(which) {
        var tab;
        if (which) {
            tab = this.mainTabs.tabs('getTab', which);
        } else {
            tab = this.mainTabs.tabs('getSelected');
        }
        this.mainTabs.tabs('update', {
            tab: tab,
            options: { content: tab.content }
        });
    }

    /**
     * 主Tabs关闭Tab
     * @param which 'which'参数可以是选项卡面板的标题或者索引。不填写which将关闭当前选中的 tab。
     */
    closeTab(which) {
        let tab;
        if (which) {
            tab = this.mainTabs.tabs('getTab', which);
        } else {
            tab = this.mainTabs.tabs('getSelected');
        }
        tab.tabs('close', tab.title);
    };
}