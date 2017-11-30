package cn.exiaoma.common.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.*;

/**
 * 结果集分组排序
 */
public class GroupSort {
    /**
     * 测试数据
     */
    private static String result = "{\n" +
            " \"actionErrors\":[],\n" +
            " \"actionMessages\":[],\n" +
            " \"brandId\":null,\n" +
            " \"errorMessages\":[],\n" +
            " \"errors\":{},\n" +
            " \"fieldErrors\":{},\n" +
            " \"locale\":\"zh_CN\",\n" +
            " \"resultJson\":{\n" +
            "     \"list\":[{\"brandName\":\"晋工\",\"brandId\":100009925},{\"brandName\":\"山工\",\"brandId\":100009926}],\n" +
            "     \"flag\":\"1\",\"msg\":\"获取品牌信息成功\"\n" +
            "       },\"texts\":null\n" +
            "   }\n";

       private  GroupSort(){}


/**
     * 将返回的json数据按照字母顺序分组排序
     * @param  jsonArray   返回的list集合转成 jsonArray对象
     * @return
     */
    public static  Map<String,Set<Map<String,Object>>> groupAndSort(JSONArray jsonArray){
        //将json数据转成List<Map>
        List<Map> listmap = JSONUtil.jsonstrToListMap(jsonArray.toString());
        //装载数据的容器(保证元素不重复),使用treeMap  按升序排列
        Map<String,Set<Map<String,Object>>> containner = new TreeMap<>();
        //遍历所有的数据
        for (Map<String,Object> m : listmap) {
            String brandName = (String) m.get("brandName");
            Integer brandId =(Integer) m.get("brandId");
            String letter = ChineseToWord.getFirstLetter(brandName);
            if(containner.containsKey(letter)){
                containner.get(letter).add(m);
            }else{
                Set<Map<String,Object>> mm = new HashSet<Map<String, Object>>();
                mm.add(m);
                containner.put(letter,mm);
            }
        }
        return containner;
    }

    public static  List<Map> groupAnd (JSONArray jsonArray){
        //将json数据转成List<Map>
        List<Map> listmap = JSONUtil.jsonstrToListMap(jsonArray.toString());
        //遍历所有的数据
        for (Map<String,Object> m : listmap) {
            String brandName = (String) m.get("brandName");
            //Integer brandId =(Integer) m.get("brandId");
            String letter = ChineseToWord.getPinyinString(brandName);
            m.put("firCom",letter);
        }
        return listmap;
    }

    public static  void main(String[] args){
        //将字符串转成json 对象
        JSONObject jsonObject = JSONUtil.strToJson(result);
        //获得 json 对象
        JSONObject resultjson = jsonObject.getJSONObject("resultJson");
        //获得 jsonArray数据
        JSONArray list = resultjson.getJSONArray("list");
        List<Map>  res = groupAnd(list);
        System.out.println(res);

    }


}
