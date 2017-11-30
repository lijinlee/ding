/**
 * @api {post} /test/accessoriesType/add 配件类型添加
 * @apiName accessoriesType-add
 * @apiGroup accessoriesType
 *
 * @apiParam {String} typeName 配件名称
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "typeName":"铲子"
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *        "msg":"操作成功!",
 *        "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessoriesType 配件类型展示
 * @apiName accessoriesType-add
 * @apiGroup accessoriesType
 *
 * @apiParam {int} page 要展示的页数
 * @apiParam {int} rows 每页要展示的条数
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 * @apiSuccess {String} typeName  类型名称
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "page":1,
 *          "rows":20
 *     }
 *     HTTP/1.1 200 OK
 *     {"msg":"操作成功",
 *     "total":3,
 *     "flag":"1",
 *     "rows":[{"page":1,"rows":20,"orderStr":"","sort":null,"order":null,"keyWord":null,"typeId":1,"typeName":"类型1","createUserId":1,"createDate":"2017-10-17 11:38:59","lastModifyUserId":1,"lastModifyDate":"2017-10-18 10:33:48","isDel":0}]
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"操作失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessoriesType/update 配件类型修改
 * @apiName accessoriesType-update
 * @apiGroup accessoriesType
 *
 * @apiParam {String} typeName 配件类型名称
 * @apiParam {int} typeId 配件类型ID
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "typeId":1,
 *          "typeName":"轴承"
 *     }
 *     HTTP/1.1 200 OK
 *     {"msg":"操作成功",
 *     "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"操作失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessoriesType/delete 配件类型删除
 * @apiName accessoriesType-delete
 * @apiGroup accessoriesType
 *
 * @apiParam {int} typeId 配件类型ID
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "typeId":1
 *     }
 *     HTTP/1.1 200 OK
 *     {"msg":"操作成功",
 *     "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"操作失败"
 *     }
 *
 */


/**
 * @api {post} /test/accessories 配件展示
 * @apiName accessories-select
 * @apiGroup accessories
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 * @apiSuccess {String} data  返回的数据
 *
 *
 * @apiParam {int} page 要展示的页
 * @apiParam {int} rows 每页要展示的条数
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "page":1,
 *        "rows":10
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *        "msg":"操作成功!",
 *        "flag":"1",
 *        "data":{"pageNum":1,
 *                "pageSize":3,
 *                "size":3,
 *                "orderBy":null,
 *                "startRow":1,
 *                "endRow":3,
 *                "total":15,
 *                "pages":5,
 *                "list":[{"pageNum":1,
 *                         "pageSize":2,
 *                         "sidx":null,
 *                         "sord":null,
 *                         "editFlag":0,
 *                         "oper":null,
 *                         "start":0,
 *                         "accessoriesId":1,
 *                         "accessoriesName":"铲子",
 *                         "accessoriesType":1,
 *                         "typeId":1,
 *                         "createUserId":1,
 *                         "createDate":1507277712000,
 *                         "isDel":1}],
 *                 "firstPage":1,
 *                 "prePage":0,
 *                 "nextPage":2,
 *                 "lastPage":5,
 *                 "isFirstPage":true,
 *                 "isLastPage":false,
 *                 "hasPreviousPage":false,
 *                 "hasNextPage":true,
 *                 "navigatePages":8,
 *                 "navigatepageNums":[1,2,3,4,5]}}
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */


/**
 * @api {post} /test/accessories/add 配件添加
 * @apiName accessories-add
 * @apiGroup accessories
 *
 * @apiParam {String} accessoriesName 配件名称
 * @apiParam {String} accessoriesType 配件类型
 * @apiParam {String} typeId 类型id
 * @apiParam {String} isDel 是否生效
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "accessoriesName":"铲子",
 *          "accessoriesType":1,
 *          "typeId":1,
 *          "createUserId":1,
 *          "createDate":1507277712000,
 *          "isDel":0
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *        "msg":"操作成功!",
 *        "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories/add 配件修改
 * @apiName accessories-update
 * @apiGroup accessories
 *
 * @apiParam {String} accessoriesId 配件id
 * @apiParam {String} accessoriesName 配件名称
 * @apiParam {String} accessoriesType 配件类型
 * @apiParam {String} typeId 类型id
 * @apiParam {String} isDel 是否生效
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {    "accessoriesId":1,
 *          "accessoriesName":"铲子",
 *          "accessoriesType":1,
 *          "typeId":1,
 *          "createUserId":1,
 *          "createDate":1507277712000,
 *          "isDel":0
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *        "msg":"操作成功!",
 *        "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories/delete 配件删除
 * @apiName accessories-delete
 * @apiGroup accessories
 *
 * @apiParam {String} id 配件id
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *         "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *        "msg":"操作成功!",
 *        "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories 新闻展示
 * @apiName hotnews-select
 * @apiGroup hotnews
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} pageNum 要展示的页
 * @apiParam {String} pageSize 每页要展示的条数
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "pageNum":1,
 *        "pageSize":10
 *     }
 *     HTTP/1.1 200 OK
 *     {"msg":"操作成功!",
 *     "flag":"1",
 *     "data":{"pageNum":1,
 *             "pageSize":3,
 *             "size":2,
 *             "orderBy":null,
 *             "startRow":1,
 *             "endRow":2,
 *             "total":2,
 *             "pages":1,
 *             "list":[{"pageNum":1,"pageSize":2,"sidx":null,"sord":null,"editFlag":0,"oper":null,"start":0,"hotNewsId":1,"newsTitle":"a","newsPath":"c","newsPicturePath":"d","newsPubdate":1507360667000,"createDate":1507360676000,"createUserId":1,"lastModifyUserId":11,"lastModifyDate":1507360629000,"isDel":1,"newsContext":null}],
 *             "firstPage":1,
 *             "prePage":0,
 *             "nextPage":0,
 *             "lastPage":1,
 *             "isFirstPage":true,
 *             "isLastPage":true,
 *             "hasPreviousPage":false,
 *             "hasNextPage":false,
 *             "navigatePages":8,
 *             "navigatepageNums":[1]}}
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories/update 新闻修改
 * @apiName hotnews-update
 * @apiGroup hotnews
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} hotNewsId 新闻id
 * @apiParam {String} newsTitle 新闻标题
 * @apiParam {String} newsPath 新闻路径
 * @apiParam {String} newsPicturePath 图片路径
 * @apiParam {String} isDel 是否生效
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "hotNewsId":1,
 *        "newsTitle":"a",
 *        "newsPath":"c",
 *        "newsPicturePath":"d",
 *        "newsPubdate":1507360667000,
 *        "createDate":1507360676000,
 *        "createUserId":1,
 *        "lastModifyUserId":11,
 *        "lastModifyDate":1507360629000,
 *        "isDel":1,
 *        "newsContext":null
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "msg":"操作成功!",
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories/update 新闻新增
 * @apiName hotnews-add
 * @apiGroup hotnews
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} newsTitle 新闻标题
 * @apiParam {String} newsPath 新闻路径
 * @apiParam {String} newsPicturePath 图片路径
 * @apiParam {String} isDel 是否生效
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "newsTitle":"a",
 *        "newsPath":"c",
 *        "newsPicturePath":"d",
 *        "newsPubdate":1507360667000,
 *        "createDate":1507360676000,
 *        "createUserId":1,
 *        "lastModifyUserId":11,
 *        "lastModifyDate":1507360629000,
 *        "isDel":1,
 *        "newsContext":null
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "msg":"操作成功!",
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/accessories/delete 新闻删除
 * @apiName hotnews-delete
 * @apiGroup hotnews
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} id 新闻id
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *       "msg":"操作成功!",
 *       "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */


/**
 * @api {post} /test/maintenance 订单评价
 * @apiName maintenanceEvaluation-select
 * @apiGroup maintenanceEvaluation
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} pageNum 要展示的页
 * @apiParam {String} pageSize 每页要展示的条数
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *        "pageNum":1,
 *        "pageSize":10
 *     }
 *     HTTP/1.1 200 OK
 *     {"msg":"操作成功!",
 *     "flag":"1",
 *     "data":{"pageNum":1,
 *             "pageSize":3,
 *             "size":1,
 *             "orderBy":null,
 *             "startRow":1,
 *             "endRow":1,
 *             "total":1,
 *             "pages":1,
 *             "list":[{"pageNum":1,
 *                      "pageSize":2,
 *                      "sidx":null,
 *                      "sord":null,
 *                      "editFlag":0,
 *                      "oper":null,
 *                      "start":0,
 *                      "evaluationId":1,
 *                      "maintenanceId":1,
 *                      "evaluationContext":"AAA",
 *                      "serviceStart":1,
 *                      "customerEvaluationNumber":1,
 *                      "repairOrderId":1,
 *                      "userId":1,
 *                      "evaluationDate":1507596101000,
 *                      "lastModifyDate":1507596104000,
 *                      "lastModifyUserId":1,
 *                      "isDel":0}],
 *               "firstPage":1,
 *               "prePage":0,
 *               "nextPage":0,
 *               "lastPage":1,
 *               "isFirstPage":true,
 *               "isLastPage":true,
 *               "hasPreviousPage":false,
 *               "hasNextPage":false,
 *               "navigatePages":8,
 *               "navigatepageNums":[1]}
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/maintenance/add 订单评价新增
 * @apiName maintenanceEvaluation-add
 * @apiGroup maintenanceEvaluation
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} evaluationContext
 * @apiParam {String} serviceStart
 * @apiParam {String} customerEvaluationNumber
 * @apiParam {String} repairOrderId
 * @apiParam {String} userId
 * @apiParam {String} isDel
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *
 *
 *          "maintenanceId":1
 *          "evaluationContext":"AAA",
 *          "serviceStart":1,
 *          "customerEvaluationNumber":1,
 *          "repairOrderId":1,
 *          "userId":1,
 *          "evaluationDate":1507596101000,
 *          "lastModifyDate":1507596104000,
 *          "lastModifyUserId":1,
 *         "isDel":0}
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *     "msg":"操作成功!",
 *     "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/maintenance/add 订单评价修改
 * @apiName maintenanceEvaluation-update
 * @apiGroup maintenanceEvaluation
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} evaluationId
 * @apiParam {String} maintenanceId
 * @apiParam {String} evaluationContext
 * @apiParam {String} serviceStart
 * @apiParam {String} customerEvaluationNumber
 * @apiParam {String} repairOrderId
 * @apiParam {String} userId
 * @apiParam {String} isDel
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *
 *          "evaluationId":1,
 *          "maintenanceId":1,
 *          "evaluationContext":"AAA",
 *          "serviceStart":1,
 *          "customerEvaluationNumber":1,
 *          "repairOrderId":1,
 *          "userId":1,
 *          "evaluationDate":1507596101000,
 *          "lastModifyDate":1507596104000,
 *          "lastModifyUserId":1,
 *         "isDel":0}
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *     "msg":"操作成功!",
 *     "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */

/**
 * @api {post} /test/maintenance/delete 订单评价删除
 * @apiName maintenanceEvaluation-delete
 * @apiGroup maintenanceEvaluation
 *
 * @apiSuccess {String} flag 状态1表示发送成功，0表示发送失败.
 * @apiSuccess {String} msg  失败原因说明
 *
 * @apiParam {String} id 评价id
 *
 *
 * @apiSuccessExample Success-Response:
 *     参数范例：
 *     {
 *          "id":1
 *     }
 *     HTTP/1.1 200 OK
 *     {
 *     "msg":"操作成功!",
 *     "flag":"1",
 *     }
 *     OR
 *     {
 *       "flag": "0",
 *       "msg":"失败"
 *     }
 *
 */


/**
 * @api {post} /test/equipment/brandListJson (APP调用)品牌信息查询
 * @apiName (APP)brandListJson
 * @apiGroup Brand_Model
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} brands   返回的结果集，没有值时,返回 [],默认按品牌名称首字母顺序排序
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {"msg":"操作成功",
 *   "brands":{"A":[{"brandName":"艾迪","brandId":100000202},{"brandId":100000201,"brandName":"阿特拉斯"}],
 *             "B":[{"brandName":"北京现代","brandId":100000203}] },
 *    "flag":"1"}
 *
 *  返回结果数据list字段说明 :
 *   brandName:品牌名称
 *   brandId:品牌id
 */

/**
 * @api {post} /test/equipment/modelListJson?brandId=100000204 (APP调用)根据品牌id获得机型
 * @apiName (APP)listModelJson
 * @apiGroup Brand_Model
 *
 * @apiParam   {String} brandId 品牌id
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} models   返回的结果集，没有值时,返回 [],默认按型号名称首字母顺序排序
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {"msg":"操作成功",
 *      "models":[{"productName":"斗山挖掘机","modelId":494,"modelName":"DX88-9C","machineTypeName":"挖掘机",
 *                 "brandName":"斗山","modelNo":"DX88-9C","brandId":100000204,"productId":1},
 *               {"brandName":"斗山","machineTypeName":"挖掘机","modelId":271,"productName":"斗山挖掘机",
 *                "productId":1,"modelNo":"DH80G","brandId":100000204,"modelName":"DH80G"}],
 *       "flag":"1"}
 *
 *  返回结果数据list字段说明:
 *  modelId:机型id
 *  modelNo:机型编号(跟modelName的值好像都一样)
 *  modelName:机型名称
 *  brandName:品牌名称
 *  productName:产品名字
 *  brandId:品牌Id
 *  productId:产品id
 *  machineTypeName:类型名称serial
 */

/**
 * @api {post} /test/equipment/ListJson?brandId=100000204 (APP调用)根据机型id获得机号
 * @apiName (APP)listSerialJson
 * @apiGroup Brand_Model
 *
 * @apiParam   {String} modelId 机型id
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} models   返回的结果集，没有值时,返回 [],默认按型号名称首字母顺序排序
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {"msg":"操作成功",
 *      "serialNo":[{"serialNo":"YESC0-022817","machineId":4145,"machineTypeName":"挖掘机","brandName":"斗山","modelName":"DH80G",
 *                   "brandId":100000204,"productId":1,"modelNo":"DH80G","modelId":271,"productName":"斗山挖掘机"},
 *                  {"machineTypeName":"挖掘机","serialNo":"YESC0-022712","modelNo":"DH80G","modelName":"DH80G",
 *                  "modelId":271,"productName":"斗山挖掘机","productId":1,"brandId":100000204,"machineId":2862,"brandName":"斗山"}],
 *       "flag":"1"
 *      }
 *
 *  返回结果数据serialNo字段说明:
 *  machineId：机器id (提交报修订单需要这个参数)
 *  modelId:机型id  (提交报修订单需要这个参数)
 *  modelNo:机型编号(跟modelName的值好像一样)
 *  modelName:机型名称
 *  brandName:品牌名称
 *  productName:产品名字
 *  brandId:品牌Id
 *  productId:产品id
 *  serialNo:机号(机号取这个值，不是手输)
 *  machineTypeName:类型名称
 */

/**
 * @api {post} /test/equipmentManager 查询我的设备管理信息
 * @apiName equipment
 * @apiGroup EquipmentManager
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} models   返回的结果集，没有值时,返回 [],默认按型号名称首字母顺序排序
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {"msg":"操作成功",
 *      "flag":"1",
 *      "list":[{"equipmentId":1,"userId":1,"machineId":123,"modelId":456,"productName":"挖掘机",
 *               "productionDate":"2017-10-23 10:57:56","mainMachinePhone":"10086","remark":"玩具",
 *               "pictureId":2,"brandName":"斗山","serialNo":"DX606","modelName":"XXXX","createUserId":null,
 *               "createDatetime":"2017-10-23 11:50:45","lastModifyUserId":null,"lastModifyDatetime":"2017-10-23 10:04:49","isDel":0,
 *                "pictureDetail": [{"pathName": "http://图片1的地址"},{"pathName": "http://图片2的地址"}]
 *              }]
 *       }
 *
 *  返回结果数据list字段说明:
 *  equipmentId:设备id(数据库唯一字段,主键id)
 *  modelId:机型id
 *  machineId:机器id
 *  productName:产品名称
 *  productionDate:出厂日期
 *  mainMachinePhone：机主电话
 *  brandName：产品品牌
 *  serialNo:产品系列号
 *  modelName：机型
 *  createDatetime:创建时间
 *  lastModifyDatetime：最后修改时间
 */

/**
 * @api {post} /test/equipmentManager/add 添加我的设备信息(发json参数)
 * @apiName equipmentAdd
 * @apiGroup EquipmentManager
 *
 *
 * @apiParam   {String} brandId 品牌id
 * @apiParam   {String} modelId 机型id
 * @apiParam   {String} machineId 机器id
 * @apiParam   {String} productName 产品名称
 * @apiParam   {String} productionDate 出厂日期
 * @apiParam   {String} mainMachinePhone 机主电话
 * @apiParam   {String} brandName 产品品牌
 * @apiParam   {String} serialNo 产品系列号
 * @apiParam   {String} modelName 机型
 * @apiParam   {String} pictureDetail 图片地址
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *      参数范例:
 *      {
 *                "machineId":123,"modelId":456,"productName":"挖掘机",
 *               "productionDate":"2017-10-23 10:57:56","mainMachinePhone":"10086","remark":"玩具",
 *               "brandName":"斗山","serialNo":"DX606","modelName":"XXXX",
 *               "pictureDetail":[{"pathName":"http://图片1的地址"}，{"pathName":"http://图片2的地址"}]
 *      }
 *
 *
 *  返回结果数据list字段说明:
 *  equipmentId:设备id(数据库唯一字段,主键id)
 *  modelId:机型id
 *  machineId:机器id
 *  productName:产品名称
 *  productionDate:出厂日期
 *  mainMachinePhone：机主电话
 *  brandName：产品品牌
 *  serialNo:产品系列号
 *  modelName：机型
 *  createDatetime:创建时间
 *  lastModifyDatetime：最后修改时间
 *  remark:备注
 */




