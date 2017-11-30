/**
 * @api {post} /rest/listAllAddress 用户地址信息查询
 * @apiName listAllAddress
 * @apiGroup UserAddress
 *
 * @apiParam {String} token   当前用户token值 
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} list   返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *    "msg": "获得地址信息成功",
 *    "flag": 1,
 *    "data":{
 *       "list":[
 *         { 
 *           "createDatetime": 1507279144000,
 *          "addressLongitude": 10,
 *           "addressVal": "TaiWan",
 *           "userAddressId": 10002,
 *           "addressKey": "Tai",
 *          "lastModifyDatetime": 1507279147000,
 *           "addressLatitude": 120,
 *           "isDel": 0,
 *           "userId": 1000
 *       },
 *       {
 *           "createDatetime": 1507279080000,
 *           "addressLongitude": 23.5,
 *           "addressVal": "ni and me",
 *           "userAddressId": 100001,
 *           "addressKey": "ni,me",
 *           "userName":"zhangsan",
 *           "userPhone":"188888888",
 *           "lastModifyDatetime": 1507279086000,
 *           "addressLatitude": 116,
 *           "isDel": 0,
 *           "userId": 1000
 *       }
 *   ]
 *  }
 * }
 */


/**
 * @api {post} /rest/saveAddress   用户地址信息保存或修改
 * @apiName saveAddress
 * @apiGroup UserAddress
 *
 * @apiParam {JSON} data    用户的地址信息,当时修改的时,必须传以前的地址 userAddressId
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *  
 *  参数示例:
 *  {
	  "userAddressId":"10000",
 *    "userId":1000,
 *    "addressKey":"武汉",
 *    "addressVal":"武汉市东西湖区",
 *    "addressLatitude":120,
 *    "addressLongitude":23,
 *    "userName":"zhangsan",
 *    "userPhone":"188888888",
 *  } 
 *
 * 返回结果:
 *
 *    HTTP/1.1 200 OK
 *  {
 *    "msg": "更新数据成功",
 *    "flag": "1"
 *   }
 */


/**
 * @api {post} /rest/listHistoryAddress 用户历史报修地址信息查询
 * @apiName listHistoryAddress
 * @apiGroup UserAddress
 *
 * @apiParam {String} token 当前用户token值
 *
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccess {String} list   返回的结果集，没有值时,返回 []
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *    "msg": "获得地址信息成功",
 *    "flag": 1,
 *    "data":{
 *      "list":[
 *         {
 *           "createDatetime": 1507279080000,
 *           "addressLongitude": 23.5,
 *           "addressVal": "ni and me",
 *           "userAddressId": 100001,
 *           "addressKey": "ni,me",
 *           "lastModifyDatetime": 1507279086000,
 *           "addressLatitude": 116,
 *           "userName":"zhangsan",
 *           "userPhone":"188888888",
 *           "isDel": 0,
 *           "userId": 1000，
 *           "repair_order_id":1
 *         }
 *        ]
 *    }
 * }
 */


/**
 * @api {post} /rest/setDefaultAddress 设置或取消设置默认地址信息系
 * @apiName setDefaultAddress
 * @apiGroup UserAddress
 *
 * @apiParam {String} token 当前用户token值
 * @apiParam {String} userAddressId 地址信息Id
 * @apiParam {String} op 操作  0:取消设置默认地址  ，1 设置为默认地址
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *  {
 *   "msg": "设置默认地址信息成功",
 *   "flag": "1"
 *   "data":
 *      "list":[
 *         { 
 *           "createDatetime": 1507279144000,
 *          "addressLongitude": 10,
 *           "addressVal": "TaiWan",
 *           "userAddressId": 10002,
 *           "addressKey": "Tai",
 *          "lastModifyDatetime": 1507279147000,
 *           "addressLatitude": 120,
 *           "isDel": 0,
 *           "userId": 1000
 *       },
 *       {
 *           "createDatetime": 1507279080000,
 *           "addressLongitude": 23.5,
 *           "addressVal": "ni and me",
 *           "userAddressId": 100001,
 *           "addressKey": "ni,me",
 *           "userName":"zhangsan",
 *           "userPhone":"188888888",
 *           "lastModifyDatetime": 1507279086000,
 *           "addressLatitude": 116,
 *           "isDel": 0,
 *           "userId": 1000
 *       }
 *   ]
 *   }
 */


/**
 * @api {post} /rest/deleteAddress 删除地址
 * @apiName deleteAddress
 * @apiGroup UserAddress
 *
 * @apiParam {String} userAddressId 地址信息Id
 * @apiSuccess {String} flag   状态1表示成功，0表示失败.
 * @apiSuccess {String} msg    返回状态描述信息
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *   "msg": "删除地址信息成功",
 *   "flag": "1",
 *   "data":{
 *       "list":[
 *         { 
 *           "createDatetime": 1507279144000,
 *          "addressLongitude": 10,
 *           "addressVal": "TaiWan",
 *           "userAddressId": 10002,
 *           "addressKey": "Tai",
 *          "lastModifyDatetime": 1507279147000,
 *           "addressLatitude": 120,
 *           "isDel": 0,
 *           "userId": 1000
 *       },
 *        {
 *           "createDatetime": 1507279080000,
 *           "addressLongitude": 23.5,
 *           "addressVal": "ni and me",
 *           "userAddressId": 100001,
 *           "addressKey": "ni,me",
 *           "userName":"zhangsan",
 *           "userPhone":"188888888",
 *           "lastModifyDatetime": 1507279086000,
 *           "addressLatitude": 116,
 *           "isDel": 0,
 *           "userId": 1000
 *       }
 *     ]
 *  }
 * }
 */

