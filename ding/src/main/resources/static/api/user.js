/**
 * @api {post} /auth/login app登录
 * @apiName login
 * @apiGroup User
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
            "phoneNumber": "css00001",    //登录名称
            "password": "111111",     //明文密码
        }
 *     HTTP/1.1 200 OK
 *     {
    "msg": "成功",
    "flag": "1",
    "list": [],//当数组不为空时 需跳转选择界面
    "data": {
        "user": {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "userId": 2,//用户id
            "userNo": null,
            "userName": "www",//姓名
            "phoneNumber": "18871167513",//手机号
            "password": null,
            "registerDate": null,
            "lastLoginDate": null,
            "isUsed": null,
            "isDel": null,
            "registerEquipmentCode": "",
            "visitCode": null,
            "roles": null,
            "lastPasswordResetDate": null,
            "userIcon": null
        }
    },
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODg3MTE2NzUxMyIsImNyZWF0ZWQiOjE1MDc3MjI0MTEzODgsImx0IjoiMiIsImV4cCI6MTUwODMyNzIxMX0.qOHmwcit5EbrHS-irPn6SyjN9vW8-8K6oDy2ssim-ebeRglluxAmvtZYmpg0vTpR4-1-xJOvFVe7SXXF8vj9jA"
}
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"登录失败"
 *     }
 *
 */


/**
 * @api {post} /auth/sysLogin 后台登录
 * @apiName sysLogin
 * @apiGroup sysUser
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
            "sysUserName": "css00001",    //登录名称
            "password": "111111",     //明文密码
        }
 *     HTTP/1.1 200 OK
 *     {
 *       "token":"asdsadasdeefjsdajfasjdf",
 *       "flag": "1",
 *       "msg":"登录成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"登录失败"
 *     }
 *
 */


/**
 * @api {post} /auth/register app注册
 * @apiName register
 * @apiGroup User
 *
 * @apiParam {String} userName 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} code 验证码
 * @apiParam {String} phoneNumber 手机号
 * @apiParam {String} [registerEquipmentCode] 推荐码
 * @apiParam {String} [jrUserId] 通过选中用户关联的id
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /auth/validRegister app注册验证
 * @apiName validRegister
 * @apiGroup User
 *
 * @apiParam {String} password 密码
 * @apiParam {String} code 验证码
 * @apiParam {String} phoneNumber 手机号
 * @apiParam {String} [registerEquipmentCode] 推荐码
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /auth/getConnect 获取关联信息
 * @apiName getConnect
 * @apiGroup User
 *
 * @apiParam {String} phoneNumber 手机号
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "list":[{"linkmanName":"我就是我","saleCustId":251999,
      "phoneNumber":"15827572039","custLinkmanId":194846}],
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /auth/setConnect 设置关联信息
 * @apiName setConnect
 * @apiGroup User
 *
 * @apiParam {String} jrUserId 获取关联信息的saleCustId字段
 * @apiParam {String} token 登录时获取的token 放入headers 格式为Authorization＝“bearer ” ＋token
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "list":[{"linkmanName":"我就是我","saleCustId":251999,
      "phoneNumber":"15827572039","custLinkmanId":194846}],
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /auth/sysRegister 后台注册
 * @apiName sysRegister
 * @apiGroup sysUser
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
            "sysUserName": "css00001",    //用户名称
            "password": "111111",     //明文密码
        }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /rest/smsCode 获取验证码
 * @apiName smsCode
 * @apiGroup User
 *
 * @apiParam {String} phoneNumber 手机号
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /rest/resetPassword 找回密码
 * @apiName resetPassword
 * @apiGroup User
 *
 * @apiParam {String} phoneNumber 手机号
 * @apiParam {String} code 验证码(通过获取验证码接口)
 * @apiParam {String} password 密码
 * @apiParam {String} confirmPassword 确认密码
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /user/modifyPassword 修改密码
 * @apiName modifyPassword
 * @apiGroup User
 *
 * @apiParam {String} token 登录时获取的token 放入headers 格式为Authorization＝“bearer ” ＋token
 * @apiParam {String} oldPassword 原密码
 * @apiParam {String} newPassword 新密码
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /user/userInfo 用户详情
 * @apiName view
 * @apiGroup User
 *
 * @apiParam {String} token 登录时获取的token 放入headers 格式为Authorization＝“bearer ” ＋token
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "msg": "成功",
    "flag": 1,
    "data": {
        "user": {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "userId": 2,//用户id
            "userNo": null,
            "userName": "www",//姓名
            "phoneNumber": "18871167513",//手机号
            "password": null,
            "registerDate": null,
            "lastLoginDate": null,
            "isUsed": null,
            "isDel": null,
            "registerEquipmentCode": "",
            "visitCode": null,
            "roles": null,
            "lastPasswordResetDate": null,
            "userIcon": null//用户头像
        }
    }
    }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

/**
 * @api {post} /user/edit 修改用户头像
 * @apiName edit
 * @apiGroup User
 *
 * @apiParam {String} token 登录时获取的token 放入headers 格式为Authorization＝“bearer ” ＋token
 * @apiParam {String} userIcon 上传图片获取的地址
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "msg": "成功",
    "flag": 1,
    "data": {
        "user": {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "userId": 2,//用户id
            "userNo": null,
            "userName": "www",//姓名
            "phoneNumber": "18871167513",//手机号
            "password": null,
            "registerDate": null,
            "lastLoginDate": null,
            "isUsed": null,
            "isDel": null,
            "registerEquipmentCode": "",
            "visitCode": null,
            "roles": null,
            "lastPasswordResetDate": null,
            "userIcon": null
        }
    },
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODg3MTE2NzUxMyIsImNyZWF0ZWQiOjE1MDc3MjI0MTEzODgsImx0IjoiMiIsImV4cCI6MTUwODMyNzIxMX0.qOHmwcit5EbrHS-irPn6SyjN9vW8-8K6oDy2ssim-ebeRglluxAmvtZYmpg0vTpR4-1-xJOvFVe7SXXF8vj9jA"
}
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */


/**
 * @api {post} /rest/appUpload 上传图片
 * @apiName appUpload
 * @apiGroup upload
 *
 * @apiParam {String} token 登录时获取的token 放入headers 格式为Authorization＝“bearer ” ＋token
 * @apiParam {String} file 文件
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明(发送成功无此节点).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "list":["www","aaa","ddd"],
 *       "flag": "1",
 *       "msg":"成功"
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 */

