package cn.exiaoma.common.utils;

import java.util.*;

/**
 * Created by senlinmu on 16/10/10.
 */
public class ConversionUtils {
    public static Map<String,Object> converstionToMap(Object obj,String[] propertyArr) throws Exception {
        Map<String, Object> oneAdd = new HashMap<String, Object>();
        for (String property : propertyArr) {
            if(EntityUtils.getTer(obj, property) instanceof Date){
                oneAdd.put(property, DateUtils.dateToStr((Date) EntityUtils.getTer(obj, property), "yyyy-MM-dd HH:mm:ss"));
            }else{
                oneAdd.put(property, EntityUtils.getTer(obj, property));
            }
        }
        return oneAdd;
    }

    public static List<Map<String,Object>> converstionToMapList(List lists,String[] propertyArr) throws Exception {
        List<Map<String, Object>> mapList = new ArrayList<Map<String, Object>>();
        for(Object obj:lists){
            mapList.add(converstionToMap(obj, propertyArr));
        }
        return mapList;
    }
    public static void converstionImgPathList(List<Map<String,Object>> lists,String col,String domainUrl) throws Exception {
        for(Map<String,Object> map:lists){
            converstionImgPath(map,col,domainUrl);
        }
    }
    public static void converstionImgPath(Map<String,Object> map,String col,String domainUrl) throws Exception {
        if(map.get(col)!=null){
            map.put(col,domainUrl+map.get(col).toString());
        }
    }
}
