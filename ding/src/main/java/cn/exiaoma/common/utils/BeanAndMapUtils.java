package cn.exiaoma.common.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * list集合转map集合
 */
public class BeanAndMapUtils {

    private static Logger log=Logger.getLogger(BeanAndMapUtils.class);

    // 定义jackson对象
    private static final ObjectMapper MAPPER = new ObjectMapper();

    private BeanAndMapUtils() {
    }

    /**
     * 将List<Object>转List<Map<String,Object>
     * @param listBean
     * @param T
     * @param <T>
     * @return
     */
    public static <T> List<Map<String, Object>> listBeanToListMap(List<T> listBean,Class<T> T) {
        List<Map<String, Object>> mapList = new ArrayList<Map<String, Object>>();
        try {
            for (int i = 0, n = listBean.size(); i < n; i++) {
                Object bean = listBean.get(i);
                Map<String, Object> map = beanToMap(bean);
                mapList.add(map);
            }
            return mapList;
        }catch (Exception e){
          log.debug("数据转换异常:"+e.getMessage());
        }
        return null;
    }

    /**
     * 将普通的pojo转成map
     * @param bean
     * @return
     */
    public static Map<String, Object> beanToMap(Object bean) {
      try {
          Class<? extends Object> type = bean.getClass();
          Map<String, Object> returnMap = new HashMap<String, Object>();
          BeanInfo beanInfo = Introspector.getBeanInfo(type);

          PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
          for (int i = 0; i < propertyDescriptors.length; i++) {
              PropertyDescriptor descriptor = propertyDescriptors[i];
              String propertyName = descriptor.getName();
              if (!"class".equals(propertyName)) {
                  Method readMethod = descriptor.getReadMethod();
                  Object result = readMethod.invoke(bean, new Object[0]);
                  if (result != null) {
                      returnMap.put(propertyName, result);
                  } else {
                      returnMap.put(propertyName, null);
                  }
              }
          }
          return returnMap;

      }catch(Exception e){
          log.debug("数据转换异常:"+e.getMessage());
      }
      return null;
    }

    /**
     * 将对象转换成json字符串。
     * <p>Title: pojoToJson</p>
     * <p>Description: </p>
     * @param data
     * @return
     */
    public static String objectToJson(Object data) {
        try {
            String string = MAPPER.writeValueAsString(data);
            return string;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 将json转化为对象
     * 键和值都需要引号
     * @param jsonData json数据
     * @param beanType 对象中的object类型
     * @return
     */
    public static <T> T jsonToPojo(String jsonData, Class<T> beanType) {
        try {
            T t = MAPPER.readValue(jsonData, beanType);
            return t;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 将json数据转换成pojo对象list
     * <p>Title: jsonToList</p>
     * <p>Description: </p>
     * @param jsonData
     * @param beanType
     * @return
     */
    public static <T>List<T> jsonToList(String jsonData, Class<T> beanType) {
        JavaType javaType = MAPPER.getTypeFactory().constructParametricType(List.class, beanType);
        try {
            List<T> list = MAPPER.readValue(jsonData, javaType);
            return list;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

}
