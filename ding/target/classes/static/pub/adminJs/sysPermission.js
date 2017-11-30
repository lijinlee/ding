var streetQueryParams;
var pid;

var _options = {
    title: '资源列表',
    url: '',
    rownumbers: true,
    singleSelect: false,
    queryParams: streetQueryParams,
    pageSize: 20,
    pageList: [20, 40, 60],
    pagination: true,
    multiSort: true,
    fitColumns: true,
    fit: true,
    columns: [[
        {checkbox: true, field: 'id'},
        {field: 'name', title: '名称', width: 100, sortable: true},
        {
            field: 'isMenu', title: '类型', width: 100, sortable: true, formatter: function (val, row) {
            return val == 1 ? "菜单" : "资源";
        }
        },
        {field: 'url', title: '地址', width: 100, sortable: true},
        {field: 'descritpion', title: '描述', width: 100, sortable: true}

    ]]
}

$(document).ready(function () {
    //加载树
    $('#wu-datagrid-street').datagrid(_options);
});


function reload_street() {
    $("#wu-datagrid-street").datagrid('reload');
}

function searchByKeyWord_street() {
    $('#wu-datagrid-street').datagrid("options").queryParams.keyWord = $("#keyWord-street").val();
    reload_street();
}
function chongzhi() {
    $("#keyWord-street").val('');
    searchByKeyWord_street();
}
function refresh_permission() {
    reload_street();
}
function filter(node) {
    return (node.open == true && node.pId == 0);
}


/**
 * Name 添加记录
 */
function add_street() {
    $('#wu-form-street').form('submit', {
        url: '/admin/sysPermission/add?pId=' + pid,
        success: function (data) {
            data = JSON.parse(data);
            if (data.flag=="1") {
                reload_street();
                add(data.sysPermission);
                $.messager.alert('信息提示', '提交成功！', 'info');
                $('#wu-dialog-street').dialog('close');

            }
            else {
                $.messager.alert('信息提示', '提交失败！', 'info');
            }
        }
    });
}

/**
 * Name 修改记录
 */
function edit_street() {
    $('#wu-form-street').form('submit', {
        url: '/admin/sysPermission/update',
        success: function (data) {
            data = JSON.parse(data);
            if (data.flag=="1") {
                reload_street();
                edit(data.sysPermission);
                $.messager.alert('信息提示', '提交成功！', 'info');
                $('#wu-dialog-street').dialog('close');
            }
            else {
                $.messager.alert('信息提示', '提交失败！', 'info');
            }
        }
    });
}

/**
 * Name 删除记录
 */
function remove_street() {
    var items = $('#wu-datagrid-street').datagrid('getSelections');
    if (items.length == 0) {
        $.messager.alert('信息提示', '请至少选择一行！', 'info');
    } else {
        $.messager.confirm('信息提示', '确定要删除该记录？', function (result) {
            if (result) {
                var ids = [];
                $(items).each(function () {
                    ids.push(this.id);
                });
                $.ajax({
                    url: '/admin/sysPermission/deletes',
                    type: 'post',
                    dataType: "json",
                    data: {"ids": ids.join(",")},
                    success: function (data) {
                        if (data.flag=="1") {
                            reload_street();
                            $.messager.alert('信息提示', '删除成功！', 'info');
                            loadTree();
                        } else {
                            $.messager.alert('信息提示', '删除失败！', 'info');
                        }
                    }
                });
            }
        });
    }
}

/**
 * Name 打开添加窗口
 */
function openAdd_street() {
    var nodes = streetTreeObj.getSelectedNodes();
    if (!pid) {
        $.messager.alert('信息提示', '请选择左侧树进行添加子类！', 'info');
    } else {
        $('#wu-form-street').form('clear');
        $('input:radio:first').attr('checked', 'checked');
        $('#wu-dialog-street').dialog({
            closed: false,
            modal: true,
            title: "添加信息",
            buttons: [{
                text: '确定',
                iconCls: 'icon-ok',
                handler: add_street

            }, {
                text: '取消',
                iconCls: 'icon-cancel',
                handler: function () {
                    $('#wu-dialog-street').dialog('close');
                }
            }]
        });

    }
}

/**
 * Name 打开修改窗口
 */
function openEdit_street() {
    var items = $('#wu-datagrid-street').datagrid('getSelections');
    if (items.length != 1) {
        $.messager.alert('信息提示', '请选择一行进行修改！', 'info');
    } else {

        var data = items[0];
        $('#wu-form-street').form('clear');
        $('#wu-form-street').form('load', data);
        $('#wu-dialog-street').dialog({
            closed: false,
            modal: true,
            title: "修改信息",
            buttons: [{
                text: '确定',
                iconCls: 'icon-ok',
                handler: edit_street
            }, {
                text: '取消',
                iconCls: 'icon-cancel',
                handler: function () {
                    $('#wu-dialog-street').dialog('close');
                }
            }]
        });
    }
}

function removeNode(ids) {
    for (var i in ids) {
        var node = streetTreeObj.getNodeByParam("id", ids[i], null);
        streetTreeObj.removeNode(node);
    }
}

function add(e) {
    var nodes = streetTreeObj.getSelectedNodes();
    var treeNode = nodes[0];
    if (treeNode) {
        streetTreeObj.addNodes(treeNode, {id: e.id, pId: e.pId, isParent: false, name: e.name});
    } else {
        streetTreeObj.addNodes(null, {id: e.id, pId: e.pId, isParent: false, name: e.name});
    }
};
function edit(obj) {
    var node = streetTreeObj.getNodeByParam("id", obj.id, null);
    node.name = obj.name;
    streetTreeObj.editName(node);
    streetTreeObj.updateNode(node);
};
