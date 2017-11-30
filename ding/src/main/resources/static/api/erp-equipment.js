
/**
 * @api {post} /xiaoma/equipment/brandListJson 品牌信息查询
 * @apiName (后台调用)brandListJson
 * @apiGroup ERP 
 *
 * @apiParam {String} userId   请求头信息，固定值2
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} list   返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *   "actionErrors":[],
 *   "actionMessages":[],
 *   "brandId":null,
 *   "errorMessages":[],
 *   "errors":{},
 *   "fieldErrors":{},
 *   "locale":"zh_CN",
 *   "resultJson":{
 *       "list":[{"brandName":"晋工","brandId":100009925},{"brandName":"山工","brandId":100009926}],
 *       "flag":"1","msg":"获取品牌信息成功"
 *         },"texts":null
 *     }
 * 
 *  返回结果数据list字段说明 :
 *   brandName:品牌名称
 *   brandId:品牌id
 */


/**
 * @api {post} /xiaoma/equipment/listModelJson?brandId=100000204 根据品牌id获得机型
 * @apiName (后台调用)listModelJson
 * @apiGroup ERP
 *
 * @apiParam {String} userId   请求头信息，固定值2
 * @apiParam   {String} brandId 品牌id  
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} list   返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "actionErrors":[],
 *        "actionMessages":[],
 *        "brandId":"100000204",
 *        "errorMessages":[],
 *        "errors":{},
 *        "fieldErrors":{},
 *        "locale":"zh_CN",
 *        "resultJson":{
 *           "flag":"1","list":[{"modelId":1765,"modelNo":"DXB90T","modelName":"DXB90T","brandName":"斗山","productName":"斗山破碎器",
 *                               "brandId":100000204,"productId":35,"machineTypeName":"挖掘机","machineId":"2","serialNo":"CD6773"}],
 *            "msg":"获取品牌信息成功"},"texts":null
 *         }
 * 
 *  返回结果数据list字段说明:
 *  modelId:机型id
 *  modelNo:机型编号
 *  modelName:机型名称
 *  brandName:品牌名称
 *  productName:产品名字
 *  brandId:品牌Id
 *  productId:产品id
 *  machineTypeName:类型名称
 *  machineId:机号id
 *  serialNo:机号
 */

 