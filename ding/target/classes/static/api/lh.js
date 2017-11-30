/**
 @api {post} /rest/sysUser/save 系统用户保存

 * @apiName save
 * @apiGroup sysUser
 *
 * @apiParam {number} sysUserId  用户id
 * @apiParam {String} sysUserNo  用户编号
 * @apiParam {String} sysUserName  用户名字
 * @apiParam {String} password    密码
 * @apiParam {number} isUser    是否可用
 * @apiParam {number} companyId  公司id
 * @apiParam {number} isSystem   是否是系统用户
 * @apiParam {String} phoneNumber 电话
 * @apiParam {Date} birthdate  生日
 * @apiParam {Date} workdate   工作时间
 * @apiParam {String} deviceNumber 设备编号
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} channel  渠道单号
 * @apiParam {number} employeeId  职工id
 * @apiParam {String} remark  备注
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {"flag":1}
 *     OR
 *    {"flag":0}
 *
 *
 */
/**
 * @api {post} /rest/sysUser/findByLike  显示系统用户
 * @apiName findByLike
 * @apiGroup sysUser
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 * @apiParam {String} keyword 查询关键字
 * @apiParam {number} sysUserId  用户id
 * @apiParam {String} sysUserNo  用户编号
 * @apiParam {String} sysUserName  用户名字
 * @apiParam {String} password    密码
 * @apiParam {number} isUser    是否可用
 * @apiParam {number} companyId  公司id
 * @apiParam {number} isSystem   是否是系统用户
 * @apiParam {String} phoneNumber 电话
 * @apiParam {Date} birthdate  生日
 * @apiParam {Date} workdate   工作时间
 * @apiParam {String} deviceNumber 设备编号
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} channel  渠道单号
 * @apiParam {number} employeeId  职工id
 * @apiParam {String} remark  备注
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "total": 12,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "sysUserId": 43,
            "sysUserNo": "22",
            "sysUserName": "22",
            "password": "22",
            "isUsed": 0,
            "deptId": 22,
            "companyId": 2,
            "isSystem": 1,
            "orderNum": null,
            "phoneNumber": "22",
            "userPhosition": "22",
            "birthdate": null,
            "workdate": null,
            "createUserId": null,
            "createDate": 1507906727000,
            "lastModifyUserId": null,
            "lastMoodifyDate": null,
            "deviceNumber": "22",
            "jobNumber": "22",
            "channel": "22",
            "employeeId": 22,
            "menuId": 22,
            "remark": "22",
            "belongId": null,
            "isDel": 0,
            "roles": null,
            "lastPasswordResetDate": null
        }
    ]
}
 */
/**
 * @api {post} /rest/sysUser/delete 系统用户删除
 * @apiName  delete
 * @apiGroup sysUser
 *
 * @apiParam {String} ids   sysUserId
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 *
 */
/**
 *
 * @api {post} /rest/sysUser/findById  通过id查询系统角色
 * @apiName findById
 * @apiGroup sysUser
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 * @apiParam {String} id   sysUserId
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "id":1
 *    }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */
/**
 * @api {post} /rest/sysUser/update   修改用户信息
 * @apiName update
 * @apiGroup sysUser
 *
 * @apiParam {number} sysUserId  用户id
 * @apiParam {String} sysUserNo  用户编号
 * @apiParam {String} sysUserName  用户名字
 * @apiParam {String} password    密码
 * @apiParam {number} isUser    是否可用
 * @apiParam {number} companyId  公司id
 * @apiParam {number} isSystem   是否是系统用户
 * @apiParam {String} phoneNumber 电话
 * @apiParam {String} deviceNumber 设备编号
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} channel  渠道单号
 * @apiParam {number} employeeId  职工id
 * @apiParam {String} remark  备注
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */









/**
 @api {post} /rest/announcement/save   添加公告

 * @apiName save
 * @apiGroup announcement
 *
 * @apiParam {number} announcementId  id
 * @apiParam {String} announcementTitle 标题
 * @apiParam {String} announcementContext 内容
 * @apiParam {Date} pubdate   发布日期
 * @apiParam {String} pubUser  发布人
 * @apiParam {number} pubStatus  发布状态
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {"flag":"1"}
 *     OR
 *    {"flag":"0"}
 *
 *
 */
/**
 @api {post} /rest/announcement/getAll  得到全部的公告
 * @apiName  getAll
 * @apiGroup announcement
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 * @apiParam {String} keyword 查询关键字
 * @apiParam {number} announcementId  id
 * @apiParam {String} announcementTitle 标题
 * @apiParam {String} announcementContext 内容
 * @apiParam {Date} pubdate   发布日期
 * @apiParam {String} pubUser  发布人
 * @apiParam {number} pubStatus  发布状态
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "total": 15,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "announcementId": 24,
            "announcementTitle": "你好",
            "announcementContext": "",
            "pubdate": 1507941306000,
            "pubUser": null,
            "pubStatus": 1,
            "createTime": 1507941244000,
            "createUserId": null,
            "lastModifyUserId": null,
            "lastModifyDate": 1507941306000,
            "isDel": 0
        }
    ]
}
 */

/**
 @api {post} /rest/announcement/getIsUsed  得到已经启用的公告（APP使用）
 * @apiName  getIsUsed
 * @apiGroup announcement
 *
 * @apiParam {number} announcementId  id
 * @apiParam {String} announcementTitle 标题
 * @apiParam {String} announcementContext 内容
 * @apiParam {Date} pubdate   发布日期
 * @apiParam {String} pubUser  发布人
 * @apiParam {number} pubStatus  发布状态
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "page": 1,
    "rows": 20,
    "orderStr": null,
    "keyWord": null,
    "announcementId": 40,
    "announcementTitle": "woaini",
    "announcementContext": "不做&nbsp;",
    "pubdate": 1508128361000,
    "pubUser": null,
    "pubStatus": 1,
    "createTime": 1508128358000,
    "createUserId": null,
    "lastModifyUserId": null,
    "lastModifyDate": 1508130704000,
    "isDel": 0
}
}
 */


/**
 @api {post} /rest/announcement/delete  删除公告
 * @apiName  delete
 * @apiGroup announcement
 *
 * @apiParam {String} id    删除id
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 *
 */
/**
 *
 @api {post} /rest/announcement/findById   通过ID查找公告
 * @apiName  findById
 * @apiGroup announcement
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 * @apiParam {String} id
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "id":1
 *    }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */
/**
 @api {post} /rest/announcement/update   更新公告
 * @apiName update
 * @apiGroup announcement
 *
 * @apiParam {String} announcementTitle 标题
 * @apiParam {String} announcementContext 内容
 * @apiParam {Date} pubdate   发布日期
 * @apiParam {String} pubUser  发布人
 * @apiParam {number} pubStatus  发布状态
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */












/**
 @api {post} /rest/carouselFigure/save  保存轮播图

 * @apiName save
 * @apiGroup carouselFigure
 *
 * @apiParam {String} carouselFigureWord 文字
 * @apiParam {String} pictureUrl  照片url
 * @apiParam {String} skipUrl  跳转url
 * @apiParam {String} remark 备注
 * @apiParam {number} isUsed 是否启用
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {"flag":"1"}
 *     OR
 *    {"flag":"0"}
 *
 *
 */
/**
 @api {post} /rest/carouselFigure/getIsUser   得到全部启用广告轮播图(APP用)
 * @apiName  getAll
 * @apiGroup carouselFigure  广告（轮播图）
 *
 * @apiParam {number} carouselFigureId  id
 * @apiParam {String} carouselFigureWord 文字
 * @apiParam {String} pictureUrl  照片url
 * @apiParam {String} skipUrl  跳转url
 * @apiParam {String} remark 备注
 * @apiParam {number} isUsed 是否启用
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
    "total": 1,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "carouselFigureId": 1,
            "carouselFigureWord": "天天向上",
            "pictureUrl": "www.baidu.com",
            "skipUrl": "www.aliyun.com",
            "remark": "玩笑话",
            "isUsed": 1,
            "createTime": 1507945330000,
            "createUserId": null,
            "lastModifyUserId": null,
            "lastModifyDate": 1507945339000,
            "isDel": 0
        }
    ]
}
 */

/**
 @api {post} /rest/carouselFigure/getAll   得到全部启用的广告轮播图
 * @apiName  getAll
 * @apiGroup carouselFigure
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 * @apiParam {String} keyword 查询关键字
 * @apiParam {number} carouselFigureId  id
 * @apiParam {String} carouselFigureWord 文字
 * @apiParam {String} pictureUrl  照片url
 * @apiParam {String} skipUrl  跳转url
 * @apiParam {String} remark 备注
 * @apiParam {number} isUsed 是否启用
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "total": 1,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "carouselFigureId": 1,
            "carouselFigureWord": "天天向上",
            "pictureUrl": "www.baidu.com",
            "skipUrl": "www.aliyun.com",
            "remark": "玩笑话",
            "isUsed": 1,
            "createTime": 1507945330000,
            "createUserId": null,
            "lastModifyUserId": null,
            "lastModifyDate": 1507945339000,
            "isDel": 0
        }
    ]
}
 */

/**
 @api {post} /rest/carouselFigure/delete   删除广告轮播图
 * @apiName  delete
 * @apiGroup carouselFigure
 *
 * @apiParam {String} ids    删除id
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "ids":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 *
 */
/**
 *
 @api {post} /rest/carouselFigure/findById   通过id查找广告轮播图
 * @apiName  findById
 * @apiGroup carouselFigure
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 * @apiParam {String} id
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "id":1
 *    }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */
/**
 @api {post} /rest/carouselFigure/update   更新广告信息
 * @apiName update
 * @apiGroup carouselFigure
 *
 * @apiParam {String} carouselFigureWord 文字
 * @apiParam {String} pictureUrl  照片url
 * @apiParam {String} skipUrl  跳转url
 * @apiParam {String} remark 备注
 * @apiParam {number} isUsed 是否启用
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 */









/**
 @api {post} /rest/homePage/getAll   得到首页全部信息（包括新闻，广告，公告和配件展示 APP用）
 * @apiName  getAll
 * @apiGroup homePage（首页信息）
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 *  {
    "flag": "1",
    "data": {
        "dataCarouselFigure": [
            {
                "page": 1,
                "rows": 20,
                "orderStr": null,
                "keyWord": null,
                "carouselFigureId": 1,
                "carouselFigureWord": "天天向上",
                "pictureUrl": "www.baidu.com",
                "skipUrl": "www.aliyun.com",
                "remark": "玩笑话",
                "isUsed": 1,
                "createTime": 1507945330000,
                "createUserId": null,
                "lastModifyUserId": null,
                "lastModifyDate": 1507945339000,
                "isDel": 0
            }
        ],
        "dataHotNews": [
            {
                "page": 1,
                "rows": 20,
                "orderStr": null,
                "keyWord": null,
                "hotNewsId": 1,
                "newsTitle": "8889",
                "newsPath": "",
                "newsPicturePath": "",
                "newsPubdate": 1507852781000,
                "createDate": null,
                "createUserId": null,
                "lastModifyUserId": null,
                "lastModifyDate": null,
                "isDel": null,
                "newsStatus": 1,
                "newsContext": null
            }
        ],
        "dataAnnouncement": [
            {
                "page": 1,
                "rows": 20,
                "orderStr": null,
                "keyWord": null,
                "announcementId": 42,
                "announcementTitle": "你三大爷",
                "announcementContext": "萨克的健康啦就卡了圣诞节；了<img src=\"/upload/kindeditor/image/20171016/20171016143323_116.jpg\" alt=\"\" />",
                "pubdate": 1508135664000,
                "pubUser": null,
                "pubStatus": 1,
                "createTime": 1508135606000,
                "createUserId": null,
                "lastModifyUserId": null,
                "lastModifyDate": 1508135664000,
                "isDel": 0
            }
        ],
        "dataAccessories": []
    }
}
 */










/**
 @api {post} /rest/maintenance/save   订单评价（APP用）

 * @apiName save
 * @apiGroup MaintenanceEvaluation(订单评价)
 *
 * @apiParam {number} evaluationId   id
 * @apiParam {number} maintenanceId  维修人id
 * @apiParam {String} evaluationContext  评价内容
 * @apiParam {number} serviceStart   服务星级
 * @apiParam {number} customerEvaluationNumber  客户评价
 * @apiParam {number} repairOrderId   订单id
 * @apiParam {number} userId  客户id
 *
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {"flag":"1"}
 *     OR
 *    {"flag":"0"}
 *
 *
 */
/**
 @api {post} /rest/maintenance/getAll  得到用户评价（APP用）
 * @apiName  getAll
 * @apiGroup MaintenanceEvaluation(订单评价)
 *
 * @apiParam {number} page 当前页
 * @apiParam {number} rows 一页多少条
 * @apiParam {String} keyword 查询关键字
 * @apiParam {number} evaluationId   id
 * @apiParam {number} maintenanceId  维修人id
 * @apiParam {String} evaluationContext  评价内容
 * @apiParam {number} serviceStart   服务星级
 * @apiParam {number} customerEvaluationNumber  用户评价星级
 * @apiParam {number} repairOrderId   订单id
 * @apiParam {number} userId  客户id
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "msg": "操作成功!",
    "total": 3,
    "flag": "1",
    "rows": [
        {
            "page": 1,
            "rows": 20,
            "orderStr": null,
            "keyWord": null,
            "evaluationId": 6,
            "maintenanceId": 2,
            "evaluationContext": "2",
            "serviceStart": 3,
            "customerEvaluationNumber": 2,
            "repairOrderId": 2,
            "userId": 2,
            "evaluationDate": 1508238826000,
            "lastModifyDate": 1508238833000,
            "lastModifyUserId": null,
            "isDel": 0
        }
    ]
}
 */

/**
 @api {post} /rest/maintenance/delete  删除订单评价
 * @apiName  delete
 * @apiGroup MaintenanceEvaluation(订单评价)
 *
 * @apiParam {String} id    删除id
 *
 * @apiSuccess {String}  flag 状态1表示发送成功，0表示发送失败.
 *
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *     }
 *
 */

/**
 @api {post} /rest/maintenance/update   更新评价信息
 * @apiName update
 * @apiGroup MaintenanceEvaluation(订单评价)
 *
 *
 * @apiParam {number} maintenanceId  维修人id
 * @apiParam {String} evaluationContext  评价内容
 * @apiParam {number} serviceStart   服务星级
 * @apiParam {number} customerEvaluationNumber  客户评价
 * @apiParam {number} repairOrderId   订单id
 * @apiParam {number} userId  客户id
*
* @apiSuccess {String} flag   状态1表示成功，0表示失败.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      {
*       "flag":"1",
*     }
*     OR
*     {
*       "flag": "0",
*     }
*/


/**
 @api {post} /rest/serviceEvaluation/getById   得到服务人员星级（APP用）
 * @apiName  getById
 * @apiGroup  serviceEvaluation
 *
 * @apiParam {number} engineerEvaluationId  服务人员id
 * @apiParam {number} evaluationPoints  服务星级
 *{
    "msg": "操作成功",
    "flag": "1",
    "data": {
        "serviceEngineerId": null,
        "fieldErrors": {},
        "evaluation": "success",
        "en": {
            "obj": {
                "engineerEvaluationId": 1508317386295,
                "evaluationPoints": 2,
                "lastModifyDate": "2017-10-18 17:03:09",
                "createDate": "2017-10-18 17:03:08",
                "evaluationContext": "速度快，态度好",
                "remark": "真是的评价",
                "createUserId": 3,
                "saleCustId": 252036,
                "servicerUserId": 532,
                "lastModifyUserId": 3,
                "serviceOrderId": 100001,
                "engineerEvaluationNo": "SE1508317386295"
            },
            "flag": "1",
            "msg": "获得工程师评价成功"
        },
        "actionErrors": [],
        "errors": {},
        "texts": null,
        "errorMessages": [],
        "locale": "zh_CN",
        "actionMessages": []
    }
}
 *
 */