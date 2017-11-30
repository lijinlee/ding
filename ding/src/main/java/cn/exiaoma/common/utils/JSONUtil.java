package cn.exiaoma.common.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.List;
import java.util.Map;

/**
 * json 工具类
 */
public class JSONUtil {

    private JSONUtil(){}

    /**
     * 将字符串转成JSONObject对象
     *
     * @param str
     * @return
     */
    public static JSONObject strToJson(String str) {
        JSONObject json = JSON.parseObject(str);
        return json;
    }


    /**
     * 将字符串转成JSONArray
     *
     * @param str
     * @return
     */
    public static JSONArray strToJsonArray(String str) {
        JSONArray jsonArray = JSON.parseArray(str);
        return jsonArray;
    }

    /**
     * json转成 javabean
     *
     * @param str
     * @param clazzz
     * @param <T>
     * @return
     */
    public static <T> T jsonToBean(String str, Class<T> clazzz) {
        T obj = JSON.parseObject(str, clazzz);
        return obj;
    }

    /**
     * 将json转成list javaben集合
     *
     * @param str
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> List<T> jsonToListBean(String str, Class<T> clazz) {
        List<T> list = JSON.parseArray(str, clazz);
        return list;
    }

    /**
     * 将JavaBean转换为JSONObject
     *
     * @param obj
     * @return
     */
    public static Object objToJson(Object obj) {
        Object json = JSON.toJSON(obj);
        return json;
    }


    /**
     * 将JavaBean序列化为JSON文本
     *
     * @param object
     * @return
     */
    public static String beanToJson(Object object) {
        String str = JSON.toJSONString(object);
        return str;
    }


    /**
     * json字符转map
     *
     * @param jsonStr
     * @return
     */
    public static Map<String, Object> jsonstrToMap(String jsonStr) {
        Map<String, Object> m = jsonToBean(jsonStr, Map.class);
        return m;
    }


    /**
     * 将json 字符转成 list<map>
     *
     * @param str
     * @return
     */
    public static List<Map> jsonstrToListMap(String str) {
        List<Map> m = jsonToListBean(str, Map.class);
        return m;
    }

}
