/**
 * @api {post} /rest/appUpdate/page  app更新分页
 * @apiName page
 * @apiGroup appUpdate
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "msg": "成功",
    "total": 1,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "id": 1,
            "appCode": null,//版本号
            "appSourceUrl": "www.baidu.com",//文件地址
            "appDesc": null,//描述
            "isEnforce": 1//是否强制更新
        }
    ]
}
 */


/**
 * @api {post} /rest/appUpdate/update  修改更新
 * @apiName update
 * @apiGroup appUpdate
 *
 * @apiParam {number} id 更新id
 * @apiParam {String} appCode 版本号
 * @apiParam {String} appSourceUrl 文件地址
 * @apiParam {String} appDesc 描述
 * @apiParam {number} isEnforce 是否强制更新(0否 1是)
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
 * @api {post} /rest/appUpdate/getNew  获取更新信息(app使用)
 * @apiName getNew
 * @apiGroup appUpdate
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "msg": "成功",
    "flag": "1",
    "data": {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "id": 1,
            "appCode": null,//版本号
            "appSourceUrl": "www.baidu.com",//文件地址
            "appDesc": null,//描述
            "isEnforce": 1//是否强制更新
    }
}
 */

/**
 * @api {post} /rest/appUpdate/add  添加
 * @apiName add
 * @apiGroup appUpdate
 *
 * @apiParam {String} appCode 版本号
 * @apiParam {String} appSourceUrl 文件地址
 * @apiParam {String} appDesc 描述
 * @apiParam {number} isEnforce 是否强制更新(0否 1是)
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
 * @api {post} /rest/appUpdate/get  获取更新
 * @apiName get
 * @apiGroup appUpdate
 *
 * @apiParam {number} id 更新id
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "msg": "成功",
    "flag": "1",
    "data": {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "id": 1,
            "appCode": null,//版本号
            "appSourceUrl": "www.baidu.com",//文件地址
            "appDesc": null,//描述
            "isEnforce": 1//是否强制更新
    }
 */