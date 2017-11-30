/**
 * @api {post} /xiaoma/users/xiaoma/users/findUserJson 根据手机号查询用户 
 * @apiName  findUserJson
 * @apiGroup ERP
 * 
 * @apiParam   {String} phoneNumber 手机号
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en   返回的结果集，没有值时,返回 [],默认按品牌名称首字母顺序排序
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 有数据 : 
 *  {
 *     "actionErrors":[],"actionMessages":[],
 *     "en":{
 *       "flag":"1","list":[{"linkmanName":"我就是我","saleCustId":251999,
 *       "phoneNumber":"15827572039","custLinkmanId":194846},
 *       {"linkmanName":"zhangsan","saleCustId":252017,"phoneNumber":"15827572039",
 *       "custLinkmanId":194864},
 *       {"linkmanName":"zhangsan","saleCustId":252017,"phoneNumber":"15827572039","custLinkmanId":194865}],
 *       "msg":"查询用户成功"},
 *       "errorMessages":[],"errors":{},"fieldErrors":{},"locale":"zh_CN",
 *       "phoneNumber":"15827572039","texts":null,"userName":null
 *  }
 * 返回的数据字段说明:
 *  linkmanName:联系人姓名 
 *  saleCustId:客户在erp里面的id
 *  phoneNumber:客户手机号
 *  custLinkmanId:联系人的id
 * 
 * 
 * 没有数据 :
 * {
 *     "actionErrors":[],"actionMessages":[],
 *     "en":{"flag":"1","list":[],"msg":"查询用户成功"},
 *     "errorMessages":[],"errors":{},"fieldErrors":{},"locale":"zh_CN",
 *     "phoneNumber":"158275720398","texts":null,"userName":null
 * }
 * 
 *
 */

/**
 * @api {post} /xiaoma/users/xiaoma/users/addUserJson  新建用户
 * @apiName addUserJson
 * @apiGroup ERP
 *
 * @apiParam   {String} phoneNumber 手机号
 * @apiParam   {String} userName 用户真实姓名
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} en     返回的结果集信息，没有值时,返回 [], 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *
 * 新增用户成功:
 * {
 *     "actionErrors":[],"actionMessages":[],
 *      "en":{"saleCustId":252018,"flag":"1","saleCustNo":"QD00000054","msg":"新增用户成功"},"errorMessages":[],
 *      "errors":{},"fieldErrors":{},"locale":"zh_CN","phoneNumber":"15888888888","texts":null,"userName":"lisi"
 * }
 *  返回数据说明:
 *   saleCustId: 用户在 erp里面的id ,
 *   saleCustNo: 用户在erp里面的编号
 * 
 * 
 * 
 * 注册失败:
 * {
 *     "actionErrors":[],"actionMessages":[],
 *         "en":{"flag":"0","msg":"该手机号已经注册，请用密码直接登录"},"errorMessages":[],
 *         "errors":{},"fieldErrors":{},"locale":"zh_CN","phoneNumber":"158275720398",
 *          "texts":null,"userName":"zhangsan"
 * }
 * 
 * 
 */





 
 
 