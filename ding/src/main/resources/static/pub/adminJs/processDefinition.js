var memberQueryParams;

/**
 * Name 载入数据list
 */
$(function () {
    $('#wu-datagrid-jbpm').datagrid({
        title: '系统用户',
        url: '/admin/processDefinition/getPage',
        rownumbers: true,
        singleSelect: false,
        queryParams: memberQueryParams,
        pageSize: 20,
        pageList: [20, 40, 60],
        pagination: true,
        multiSort: true,
        fitColumns: true,
        fit: true,
        columns: [[
            {field: 'id', title: 'id', width: 60, sortable: false, checkbox: true},
            {field: 'deploymentId', title: '部署id', width: 60, sortable: true},
            {field: 'name', title: '名称', width: 100, sortable: true},
            {field: 'key', title: 'key', width: 40, sortable: true},
            {field: 'version', title: '版本号', width: 40, sortable: true},
            {field: 'resourceName', title: 'XML', width: 120,formatter:
                function(val, row){
                    return "<a target=_blank href='/admin/resource/read?processDefinitionId="+row.id+ "&resourceType=xml'>"+val+"</a>"
                }
            },
            {field: 'diagramResourceName', title: '图片', width: 120,formatter:
                function(val, row){
                    return "<a target=_blank href='/admin/resource/read?processDefinitionId="+row.id+ "&resourceType=image'>"+val+"</a>"
                }
            },
            {field: 'deploymentTime', title: '部署时间', width: 100},
            {field: 'suspended', title: '是否挂起', width: 60,formatter:
                function(val, row){
                    if(val==true){
                        return "是&nbsp;|&nbsp;<a style='color:#06c' onclick=update(true,'"+row.id+"') href=javascript:void(0)>部署</a>";
                    }else{
                        return "否&nbsp;|&nbsp;<a style='color:#06c' onclick=update(false,'"+row.id+"') href=javascript:void(0)>挂起</a>";
                    }


                }
            },
            {field: 'dffsds', title: '启动', width: 40,formatter:
                function(val, row){
                    return "<a href='/modeler.html?modelId=10001'>编辑</a>"
                }
            }
        ]]
    });
});
/**
 *  挂起、激活流程实例
 */
function update(flag,id) {
    $.ajax({
        url: '/admin/processDefinition/update',
        type:"post",
        dataType: "json",
        data: {"state": flag,"processDefinitionId":id},
        success: function (data) {
            if (data.flag=="1") {
                $("#wu-datagrid-jbpm").datagrid('reload');
                $.messager.alert('信息提示', data.msg, 'info');
            }
            else {
                $.messager.alert('信息提示', '删除失败！', 'info');
            }
        }
    });
}

/**
 * delete  单个多行删除  var ids = []
 */
function remove_member() {
    var items = $('#wu-datagrid-member').datagrid('getSelections');//获取选中行
    if (items.length == 0) {
        $.messager.alert('信息提示', '请至少选择一行！', 'info');
    } else {
        $.messager.confirm('信息提示', '确定要删除该记录？', function (result) {
            if (result) {
                var ids = [];
                $(items).each(function () {
                    ids.push(this.sysUserId);
                });
                $.ajax({
                    url: '/admin/sysUser/deletes',
                    type:"post",
                    dataType: "json",
                    data: {"ids": ids.join(",")},
                    success: function (data) {
                        if (data.flag=="1") {
                            reload_member();
                            $.messager.alert('信息提示', '删除成功！', 'info');
                        }
                        else {
                            $.messager.alert('信息提示', '删除失败！', 'info');
                        }
                    }
                });
            }
        });
    }
}

/**
 *  update
 */
function openEdit_member() {
    var items = $('#wu-datagrid-member').datagrid('getSelections');
    if (items.length != 1) {
        $.messager.alert('信息提示', '只能选择一行进行修改！', 'info');
    } else {
        $('#edit-form').form('clear');
        var data = items[0];
        if(!data.roleIds){
            delete data["roleIds"];
            delete data["roles"];
        }
        $('#edit-form').form('load', data)  //这里是回显数据 load
        $('#edit-dialog').dialog({
            closed: false,
            modal: true,
            title: "修改信息",
            buttons: [{
                text: '确定',
                iconCls: 'icon-ok',
                handler: edit_member
            }, {
                text: '取消',
                iconCls: 'icon-cancel',
                handler: function () {
                    $('#edit-dialog').dialog('close');
                }
            }]
        });
    }
}
/**
 *  修改窗口
 */
function edit_member() {
    $('#edit-form').form('submit', {
        url: '/admin/sysUser/update',
        success: function (data) {
            data = JSON.parse(data);
            if (data.flag=="1") {
                reload_member();
                $.messager.alert('信息提示', '提交成功！', 'info');
                $('#edit-dialog').dialog('close');
            }
            else {
                $.messager.alert('信息提示', '提交失败！', 'info');
            }
        }
    });
}

/**
 * save
 */
function add_member() {
    var password=$("#password").val();
    var confirmPassword=$("#confirmPassword").val();
    if(password!=confirmPassword){
        $.messager.alert('信息提示', '两次密码不一致！', 'info');
        return;
    }
    $('#wu-form-member').form('submit', {
        url: '/admin/sysUser/add',
        success: function (data) {
            data = JSON.parse(data);
            if (data.flag=="1") {
                reload_member();
                $.messager.alert('信息提示', '提交成功！', 'info');
                $('#wu-dialog-member').dialog('close');
            }
            else {
                $.messager.alert('信息提示', '提交失败！', 'info');
            }
        }
    });
}
/**
 * 添加窗口
 */
function openAdd_member() {
    $('#wu-form-member').form('clear');
    $('#wu-dialog-member').dialog({
        closed: false,
        modal: true,
        title: "添加信息",
        buttons: [{
            text: '确定',
            iconCls: 'icon-ok',
            handler: add_member
        }, {
            text: '取消',
            iconCls: 'icon-cancel',
            handler: function () {
                $('#wu-dialog-member').dialog('close');
            }
        }]
    });
}

function reload_member() {
    $("#wu-datagrid-member").datagrid('reload');
}

function searchByKeyWord_member() {
    $('#wu-datagrid-member').datagrid("options").queryParams.keyWord = $("#keyWord-member").val();
    reload_member();
}

/**
 *  app用户禁用/取消
 */
function isUsed() {
    var items = $('#wu-datagrid-member').datagrid('getSelections');

    if (items.length != 1) {
        $.messager.alert('信息提示', '只能选择一行进行修改！', 'info');
    } else {
        var data = {
            sysUserId:items[0].sysUserId,
            isUsed:items[0].isUsed==1?0:1
        }
        $.ajax({
            url:"/admin/sysUser/setStatus",
            type: "post",
            data:data,
            dataType:"json",
            success:function (data) {
                if(data.flag){
                    reload_member()
                    $.messager.alert('信息提示', '提交成功！', 'info');
                }else {
                    $.messager.alert('信息提示', '提交失败！', 'info');
                }
            }
        })
    }
}


function resetPassword() {
    var items = $('#wu-datagrid-member').datagrid('getSelections');
    if (items.length != 1) {
        $.messager.alert('信息提示', '只能选择一行进行修改！', 'info');
    } else {
        console.log(items[0].sysUserId)
        $.ajax({
            url: "/admin/sysUser/resetPassword",
            type: "post",
            data: {sysUserId: items[0].sysUserId},
            dataType: "json",
            success: function (data) {
                if (data.flag) {
                    $.messager.alert('信息提示', '重置后的密码：' + data.code, 'info');
                } else {
                    $.messager.alert('信息提示', '密码重置失败', 'info');
                }
            }
        })

    }
}