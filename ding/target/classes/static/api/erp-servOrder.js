
/**
 * @api {post} /xiaoma/serveroder/saveOrderJson 服务订单保存
 * @apiName  saveOrderJson
 * @apiGroup ERP 
 *
 * @apiParam {String} userId   请求头信息，固定值3
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
 * 参数示例:
 * {
 *     "requirePerson":"张三",  //
 *     "requirePhone":"18888888888",
 *     "modelId":"1" ,
 *     "machineId":"2",
 *     "custId":"252038",
 *     "machineAddress":"东西湖区，新沟镇，油沙路7号",
 *     "areaDesc":"湖北/武汉市/东西湖区",
 *     "faultDesc":"发动机发热，机油没了",
 *     "remark":"aaaaaaaa"
 * }
 * 
 * 
 * {
 *      "actionErrors":[],"actionMessages":[],
 *         "data":{"flag":"1","msg":"订单已经生成","servOrderNo":"FWDD201710190003","servOrderId":19042
 *   },"errorMessages":[],"errors":{},"fieldErrors":{},"locale":"zh_CN","texts":null}
 * 
 *  字段说明:
 *   servOrderNo:订单编号
 *   servOrderId:订单id 
 * 
 */


 
 