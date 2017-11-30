/**
 * @api {post} /rest/hotNews/page  新闻分页
 * @apiName page
 * @apiGroup hotNews
 *
 * @apiParam {number} userId 当前登录系统的用户id
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 * @apiParam {String} keyword 查询关键字
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "msg": "成功",
    "total": 2,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "hotNewsId": 1,
            "newsTitle": "a",
            "newsPath": "c",
            "newsPicturePath": "d",
            "newsPubdate": 1507360667000,
            "createDate": 1507360676000,
            "createUserId": 1,
            "lastModifyUserId": 11,
            "lastModifyDate": 1507360629000,
            "isDel": 1,
            "newsStatus": null,
            "newsContext": "b"
        }
    ]
}
 */


/**
 * @api {post} /rest/hotNews/update  修改新闻
 * @apiName update
 * @apiGroup hotNews
 *
 * @apiParam {number} hotNewsId 新闻id
 * @apiParam {String} newsTitle 新闻标题
 * @apiParam {String} newsContext 新闻内容
 * @apiParam {number} newsPicturePath 图片地址
 * @apiParam {number} newsPath 连接地址
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

/**
 * @api {post} /rest/hotNews/updateStatus  修改状态
 * @apiName updateStatus
 * @apiGroup hotNews
 *
 * @apiParam {number} hotNewsId 新闻id
 * @apiParam {number} newsStatus 发布状态(1 发布 0 未发布)
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

/**
 * @api {post} /rest/hotNews/add  添加
 * @apiName add
 * @apiGroup hotNews
 *
 * @apiParam {number} newsTitle 新闻标题
 * @apiParam {number} newsContext 新闻内容
 * @apiParam {number} newsPicturePath 图片地址
 * @apiParam {number} newsPath 连接地址
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

/**
 * @api {post} /rest/hotNews/get  获取新闻
 * @apiName get
 * @apiGroup hotNews
 *
 * @apiParam {number} hotNewsId 新闻id
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
        "msg": "成功",
        "flag": "1",
        "data":{
            "hotNewsId":1,
            "newsTitle":"title",
            "newsContext":"context",
            "newsStatus":1
        }
    }
 */