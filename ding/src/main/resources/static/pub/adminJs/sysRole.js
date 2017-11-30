var roleQueryParams;
var permissionTree;
/**
 * Name 删除记录
 */
function remove_role() {
    var items = $( '#wu-datagrid-role' ).datagrid( 'getSelections' );
    if (items.length == 0) {
        $.messager.alert( '信息提示', '请至少选择一行！', 'info' );
    } else {
        $.messager.confirm( '信息提示', '确定要删除该记录？', function (result) {
            if (result) {
                var ids = [];
                $( items ).each( function () {
                    ids.push( this.id );
                } );
                $.ajax( {
                    url: '/admin/sysRole/deletes',
                    type:'post',
                    dataType: "json",
                    data: {"ids": ids.join( "," )},
                    beforeSend:function(){
                        $("<div class=\"datagrid-mask\"></div>").css({ display: "block", width: "100%", height: $(window).height() }).appendTo("body");
                        $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候...").appendTo("body").css({ display: "block", left: ($(document.body).outerWidth(true) - 190) / 2, top: ($(window).height() - 45) / 2 });
                    },
                    complete:function(){
                        $(".datagrid-mask").remove();
                        $(".datagrid-mask-msg").remove();
                    },
                    success: function (data) {
                        if (data.flag=="1") {
                            reload_role();
                            $.messager.alert( '信息提示', '删除成功！', 'info' );
                        }
                        else {
                            $.messager.alert( '信息提示', '删除失败！', 'info' );
                        }

                    }
                } );
            }
        } );
    }
}


/**
 * Name 打开添加窗口
 */
function openAdd_role() {
    $( '#wu-form-role' ).form( 'clear' );
    $( '#wu-dialog-role' ).dialog( {
        closed: false,
        modal: true,
        title: "添加角色",
        buttons: [{
            text: '确定',
            iconCls: 'icon-ok',
            handler: add_role
        }, {
            text: '取消',
            iconCls: 'icon-cancel',
            handler: function () {
                $( '#wu-dialog-role' ).dialog( 'close' );
            }
        }]
    } );
}

/**
 * Name 打开修改窗口
 */
function openEdit_role() {
    var items = $( '#wu-datagrid-role' ).datagrid( 'getSelections' );
    if (items.length != 1) {
        $.messager.alert( '信息提示', '只能选择一行进行修改！', 'info' );
    } else {
        $( '#wu-form-role' ).form( 'clear' );

        $.ajax( {
            url: '/admin/sysRole/get',
            type:'post',
            dataType: 'json',
            data: {id: items[0].id},
            success: function (data) {
                if (data) {
                    $( '#wu-form-role' ).form( 'load', data )
                    $( '#wu-dialog-role' ).dialog( {
                        closed: false,
                        modal: true,
                        title: "修改信息",
                        buttons: [{
                            text: '确定',
                            iconCls: 'icon-ok',
                            handler: edit_role
                        }, {
                            text: '取消',
                            iconCls: 'icon-cancel',
                            handler: function () {
                                $( '#wu-dialog-role' ).dialog( 'close' );
                            }
                        }]
                    } );
                }
            }
        } );
    }
}

/**
 * Name 添加记录
 */
function add_role() {
    $( '#wu-form-role' ).form( 'submit', {
        url: '/admin/sysRole/add',
        success: function (data) {
            data = JSON.parse( data );
            if (data.flag=="1") {
                reload_role();
                $.messager.alert( '信息提示', '提交成功！', 'info' );
                $( '#wu-dialog-role' ).dialog( 'close' );
            }
            else {
                $.messager.alert( '信息提示', '提交失败！', 'info' );
            }
        }
    } );
}

/**
 * Name 修改记录
 */
function edit_role() {
    $( '#wu-form-role' ).form( 'submit', {
        url: '/admin/sysRole/update',
        success: function (data) {
            data = JSON.parse( data );
            if (data) {
                reload_role();
                $.messager.alert( '信息提示', '提交成功！', 'info' );
                $( '#wu-dialog-role' ).dialog( 'close' );
            }
            else {
                $.messager.alert( '信息提示', '提交失败！', 'info' );
            }
        }
    } );
}

/**
 * Name 载入数据
 */
$( function () {
    $( '#wu-datagrid-role' ).datagrid( {
        title: '角色',
        url: '/admin/sysRole/getPage',
        rownumbers: true,
        singleSelect: false,
        queryParams: roleQueryParams,
        pageSize:20,
        pageList: [20, 40, 60],
        pagination: true,
        multiSort: true,
        fitColumns: true,
        fit: true,
        columns: [[
            {checkbox: true, field: 'id'},
            {field: 'name', title: '角色名称', width: 60, sortable: true},
            {field: 'description', title: '角色描述', width: 100, sortable: true}
        ]]
    } );
} );


function reload_role() {
    $( "#wu-datagrid-role" ).datagrid( 'reload' );
}

function searchByKeyWord_role() {
    $( '#wu-datagrid-role' ).datagrid( "options" ).queryParams.keyWord = $( "#keyWord-role" ).val();
    reload_role();
}

function refresh_role(){
    $("#wu-datagrid-role").datagrid('reload');
}

function chongzhi_role(){
    $("#keyWord-role").val('');
    searchByKeyWord_role();
}



//角色授权
var setting={
    view: {
        selectedMulti: false
    },
    check:{
        enable:true
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback:{
    }
};
var zNodes={id:-1,pId:null,name:'资源',isParent:true,open:true,nocheck: true};
var cNodes=[];
var roleId;
function shouquan(){
    var items = $( '#wu-datagrid-role' ).datagrid( 'getSelections' );
    if (items.length != 1) {
        $.messager.alert( '信息提示', '只能选择一行进行授权！', 'info' );
    } else {
        roleId=items[0].id;
        $.ajax({
            dataType:'json',
            type:'post',
            url:'/admin/sysRole/authList',
            data:{roleId:roleId},
            success:function(data){
                cNodes=data.data;
                var plist=data.plist;
                cNodes.push(zNodes);
                for(var i=0;i<cNodes.length;i++){
                    if(cNodes[i].pId==-1){
                        cNodes[i].isParent=true;
                        cNodes[i].open=true;
                    }
                }
                for(var j=0;j<cNodes.length;j++){
                    for(var k=0;k<plist.length;k++){
                        if(cNodes[j].id==plist[k]){
                            cNodes[j].checked=true;
                        }
                    }
                }
                permissionTree=$.fn.zTree.init($("#permission-tree"), setting,cNodes);
                $("#dialog-quanxian").dialog({
                    closed: false,
                    modal: true,
                    title: "授权选择",
                    buttons: [{
                        text: '保存',
                        iconCls: 'icon-ok',
                        handler: commit_permission
                    }, {
                        text: '取消',
                        iconCls: 'icon-cancel',
                        handler: function () {
                            $( '#dialog-quanxian' ).dialog( 'close' );
                        }
                    }]
                });

            }
        });
        }
}

function commit_permission(){
    var ckNodes=permissionTree.getCheckedNodes();
    var ids=[];
    for(var i=0;i<ckNodes.length;i++){
        if(ckNodes[i].id>=10){
            ids.push(ckNodes[i].id);
        }
    }
    var idstring=ids.join(',');
    $.ajax({
        url:'/admin/sysRole/permission',
        data:{ids:idstring,roleId:roleId},
        type:'post',
        dataType:'json',
        success:function(data){
                    if (data.flag=="1") {
                        $.messager.alert( '信息提示', '操作成功！', 'info' );
                        $( '#dialog-quanxian' ).dialog( 'close' );
                    }
                    else {
                        $.messager.alert( '信息提示', '操作失败！', 'info' );
                    }
                }
        }
    );
}


