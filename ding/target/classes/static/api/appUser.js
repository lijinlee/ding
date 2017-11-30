/**
 * @api {post} rest/appUser/findByLike  app用户分页(后台使用)
 * @apiName findByLike
 * @apiGroup appUser
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "total": 6,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "sort": null,
            "order": null,
            "keyWord": null,
            "userId": 7,
            "userNo": null,
            "userName": "teeter",
            "phoneNumber": "15827572039",
            "password": "$2a$10$iNtWgDo1c.3Cf2iQXF/UROn1eR4dlp/IUhqB88A8/QJmeIH/VnXPu",
            "registerDate": null,
            "lastLoginDate": null,
            "isUsed": null,
            "isDel": null,
            "registerEquipmentCode": "",
            "visitCode": null,
            "roles": null,
            "lastPasswordResetDate": null,
            "userIcon": "http://116.211.121.99:8080/upload/fcaa81a8-cf5f-437c-b72f-6f6ab841259fimage.png",
            "jrUserId": null
        }
    ]
}
 */


/**
 * @api {post} /rest/appUser/setStatus  修改更新(后台使用)
 * @apiName setStatus
 * @apiGroup appUser
 *
 * @apiParam {number} isUsed 0禁用 1启用
 * @apiParam {number} userId 用户id
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
        "msg": "成功",
        "flag": "1"
    }
 */