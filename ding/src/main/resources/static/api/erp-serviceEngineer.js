/**
 * @api {post}  /xiaoma/serviceEngineer/listServiceEngineerJson?serviceEngineerId=532 服务工程师信息展示 
 * @apiName  listServiceEngineerJson
 * @apiGroup ERP
 * 
 * @apiParam   {String} serviceEngineerId 服务工程师id 
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en   返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 有数据 : 
 *   {
 *     "actionErrors":[],"actionMessages":[],
 *     "en":{"flag":"1","obj":{"servicerLevel":532,"userNo":"1000519","tel":"18207125508",
 *            "servicerUserId":532,"servicerTelNo":"18207125508","servicerUserName":"李清林"},
 *      "msg":"查询服务工程师成功"},"errorMessages":[],"errors":{},"fieldErrors":{},"locale":"zh_CN",
 *      "serviceEngineerId":532,"texts":null
 *  }
 * 返回的数据字段说明:
 *  servicerUserName:服务人员名字 
 *  servicerLevel:服务星级
 *  userNo:服务人员编号
 *  tel:服务人员手机号
 *  servicerTelNo:服务人员手机号
 *   
 * 
 * 
 * 没有数据 :
 *  { 
 *     "actionErrors":[],"actionMessages":[],
 *     "en":{"flag":"1","obj":[],
 *      "msg":"查询服务工程师成功"},"errorMessages":[],"errors":{},"fieldErrors":{},"locale":"zh_CN",
 *      "serviceEngineerId":532,"texts":null
 *  }
 * 
 *
 */



/**
 * @api {post}  /xiaoma/serviceEngineer/saveEngineerEvaluationJson 服务工程师评论保存
 * @apiName  saveEngineerEvaluationJson
 * @apiGroup ERP
 * 
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en     返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *  参数示例:
 *   {
 *      "serviceUserId":"532",
 *      "serviceOrderId":"100001",
 *      "saleCustId":"252036",
 *      "context":"速度快，态度好",
 *      "points":"2",
 *      "remark":"真是的评价"
 *  }
 *
 * 返回数据  :
 *  {
 *       "actionErrors":[],"actionMessages":[],
 *       "en":{"flag":"1","msg":"保存评论成功","engineerEvaluationId","1508317386295"},
 *       "errorMessages":[],"errors":{},"fieldErrors":{},
 *       "locale":"zh_CN","serviceEngineerId":null,"texts":null
 *  }
 *
 */


/**
 * @api {post}  /xiaoma/serviceEngineer/saveEngineerEvaluationJson 服务工程师评论保存
 * @apiName  saveEngineerEvaluationJson
 * @apiGroup ERP
 * 
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en     返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *  请求数据:
 *   {
 *      "serviceUserId":"532",
 *      "serviceOrderId":"100001",
 *      "saleCustId":"252036",
 *      "context":"速度快，态度好",
 *      "points":"2",
 *      "remark":"真是的评价"
 *  }
 *
 * 返回数据  :
 *  {
 *       "actionErrors":[],"actionMessages":[],
 *       "en":{"flag":"1","msg":"保存评论成功","engineerEvaluationId","1508317386295"},
 *       "errorMessages":[],"errors":{},"fieldErrors":{},
 *       "locale":"zh_CN","serviceEngineerId":null,"texts":null
 *  }
 *
 */


/**
 * @api {post}  /xiaoma/serviceEngineer/listEvalJson?engineerEvaluationId=1508317386295 服务工程师评论查询
 * @apiName  listEvalJson
 * @apiGroup ERP
 * 
 * @apiParam   {String} engineerEvaluationId  评论ID
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en     返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *   {
 *     "actionErrors":[],"actionMessages":[],
 *     "en":{"flag":"1","obj":{"evaluationPoints":2,"saleCustId":252036,"remark":"真是的评价",
 *            "lastModifyUserId":3,"servicerUserId":532,"engineerEvaluationNo":"SE1508317386295",
 *            "lastModifyDate":"2017-10-18 17:03:09","serviceOrderId":100001,"createDate":"2017-10-18 17:03:08",
 *            "evaluationContext":"速度快，态度好","createUserId":3,"engineerEvaluationId":1508317386295},"msg":"获得工程师评价成功"
 *      },"errorMessages":[],"errors":{},"evaluation":"success","fieldErrors":{},
 *     "locale":"zh_CN","serviceEngineerId":null,"texts":null
 * }
 * 
 */

 




 
 
 