package cn.exiaoma.common.utils;

import java.lang.reflect.Field;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 实体Bean操作类，需结合java ,IdAndValue.java使用
 * @author lindujia
 *
 */
public class EntityUtils {
    /**
     * 检查对象是否为空，对象为空和对象属性都是空值都是空
     * @param entity
     * @return
     */
    public static <E> boolean isEmpty(E entity) throws Exception{
        if(isWrapClass(entity)){
            return null==entity||"".equals(String.valueOf(entity).trim()) ;
        }
        if(null==entity){
            return true ;
        }else if(null!=getSize(entity)){
            if(getSize(entity)==0){
                return true ;
            }else{
                return false ;
            }
        }
        Field fieldlist[] = entity.getClass().getDeclaredFields() ;
        for (Field field : fieldlist) {
            if(!isEmpty(entity, field.getName())){
                return false ;
            }
        }
        return true;
    }
    /**
     * 调用SETTER方法（支持"属性.属性.属性"方式）【循环】
     * @param <E>
     * @param entity 对象实例
     * @param property 属性名称
     * @param value 值
     */
    public static <E,V> void setTer(E entity,String property,V value) throws Exception{
        if(null==entity || isEmpty(property) || null==value){
            return ;
        }
        Object entityTemp = entity ;
        String[] arrProperty = property.trim().split("\\.");
        for (int i = 0; i < arrProperty.length-1; i++) {
            Object newTemp = invokeReturn(entityTemp, "get"+toUpperFirst(arrProperty[i])) ;
            if(null==newTemp){
                newTemp = newEntity(entityTemp, arrProperty[i]) ;
                invokeNoReturn(entityTemp, "set"+toUpperFirst(arrProperty[i]), newTemp);
            }
            entityTemp = newTemp ;
        }
        invokeNoReturn(entityTemp, "set"+toUpperFirst(arrProperty[arrProperty.length-1]), value);
    }
    /**
     * 调用SETTER方法（支持"属性.属性.属性"方式）【循环】
     * @param <E>
     * @param entity 对象实例
     * @param property 属性名称
     * @param value 值
     */
    public static <E> void setTer(E entity,String property,String value) throws Exception{
        if(null==entity || isEmpty(property) || null==value){
            return ;
        }
        Object entityTemp = entity ;
        String[] arrProperty = property.trim().split("\\.");
        for (int i = 0; i < arrProperty.length-1; i++) {
            Object newTemp = invokeReturn(entityTemp, "get"+toUpperFirst(arrProperty[i])) ;
            if(null==newTemp){
                newTemp = newEntity(entityTemp, arrProperty[i]) ;
                invokeNoReturn(entityTemp, "set"+toUpperFirst(arrProperty[i]), newTemp);
            }
            entityTemp = newTemp ;
        }
        Object newTemp = newEntity(entityTemp, arrProperty[arrProperty.length-1]) ;
        Object setTerValue = null ;
        if(null!=newTemp){
            if(newTemp.getClass().toString().equals(Integer.class.toString())){
                setTerValue = Integer.valueOf(value) ;
            }else if(newTemp.getClass().toString().equals(Long.class.toString())){
                setTerValue = Long.valueOf(value) ;
            }else if(newTemp.getClass().toString().equals(Float.class.toString())){
                setTerValue = Float.valueOf(value) ;
            }else if(newTemp.getClass().toString().equals(Double.class.toString())){
                setTerValue = Double.valueOf(value) ;
            }else if(newTemp.getClass().toString().equals(Date.class.toString())){
                setTerValue = DateUtils.strToDate(value);
            }else{
                setTerValue = value ;
            }
        }
        invokeNoReturn(entityTemp, "set"+toUpperFirst(arrProperty[arrProperty.length-1]), setTerValue);
    }
    /**
     * 调用GETTER方法（支持"属性.属性.属性"方式）【循环】
     * @param <E>
     * @param entity 对象实体
     * @param property 属性名称
     * @return 调用结果
     */
    public static <E> Object getTer(E entity,String property) throws Exception{
        if(null== entity || isEmpty(property)){
            return null;
        }
        Object entityTemp = entity ;
        for (String propertyArr : property.trim().split("\\.")) {
            entityTemp = invokeReturn(entityTemp, "get"+toUpperFirst(propertyArr)) ;
            if(null==entityTemp){
                break ;
            }
        }
        return entityTemp;
    }


    /**
     * 检测对象属性是否为空
     * @param <E>
     * @param entity
     * @param property
     * @return
     */
    public static <E> boolean isEmpty(E entity,String property) throws Exception{
        Object value = getTer(entity,property) ;
        if(!isEmpty(null==value?"":String.valueOf(value))){
            Integer size = getSize(value) ;
            return null!=size && size==0 ;
        }
        return true ;
    }

    /**
     * 检测集合类型是否为空，null,size<1都为空
     * @param <M>
     * @param muster
     * @return
     */
    public static<M> boolean isEmptyMuster(M muster) throws Exception{
        if(null!=muster){
            Integer size = getSize(muster) ;
            return size!=null && size==0 ;
        }
        return true ;
    }


    /**
     * 把一个对象不为空的值赋值给另一个对象
     * @param to 取出非空的属性值的对象
     * @param on 设置属性值的对象
     */
    public static<T> void sameObjectSetTerNotNull(T to,T on) throws Exception{
        Field toFieldlist[] = to.getClass().getDeclaredFields() ;
        for (Field field : toFieldlist) {
            String pName = field.getName() ;
            Object toValue = getTer(to, pName) ;
            if(!isEmpty(toValue)){
                invoke(on,"set"+toUpperFirst(pName),new Class[]{field.getType()},new Object[]{toValue});
            }
        }
    }
    /**
     * 获取集合类的大小
     * @param <E>
     * @param entity
     * @return
     */
    public static<E> Integer getSize(E entity) throws Exception{
        Object size = invokeReturn(entity, "size");
        return null==size?null:Integer.parseInt(size.toString()) ;
    }

    /**
     * 传入Map key是对象属性名称，value是对象属性为空的时候输出的字符串
     * @param <E>
     * @param entity
     * @param propertyMap
     * @return
     */
    public static<E> String propertyNullCheck(E entity,Map<String,String> propertyMap) throws Exception{
        for (String propertyName : propertyMap.keySet()) {
            if(isEmpty(getTer(entity, propertyName))){
                return propertyMap.get(propertyName);
            }
        }
        return null ;
    }

    /**
     * 根据Map规则映射对象的值（根据Key从to取出值设置到on的Value里）
     * @param <T>
     * @param <O>
     * @param to
     * @param on
     * @param mapPN
     */
    public static<T,O> void mapToOther(T to,O on,Map<String,String> mapPN) throws Exception{
        if(isEmpty(to) || isEmpty(on)){
            return;
        }
        for (String onPropertyName : mapPN.keySet()) {
            setTer(on, mapPN.get(onPropertyName), getTer(to, onPropertyName)) ;
        }
    }

    /**
     * 去除List集合里的空值，null，空格,0,0.0都为空值
     * @param <E>
     * @param list
     */
    public static<E> void removeNullList(List<E> list) throws Exception{
        for (int i = 0; i < list.size(); i++) {
            if(isEmpty(list.get(i))){
                list.remove(i) ;
                i-- ;
            }
        }
    }

    //------测试静态方法----------
	public static void main(String[] argv){



//		PasswdEncoderUtil temp = new PasswdEncoderUtil("98629758");
//		System.out.println(temp.encode("111111"));
//		System.out.println(isWrapClass(1));
//		System.out.println(isWrapClass(1l));
		//System.out.println(ValueUtil.strLast("123.343.124", "\\."));
	}




    //------------------------------------以下为私有静态方法，仅仅提供给自身使用------------------------------------------------

    /**
     * 反射调用对象实体的方法
     * @param <E>
     * @param entity 对象实体
     * @param methodName  调用的方法名称
     * @param valueTypes 调用的方法传入值类型数值 （可以为空）
     * @param values 调用方法传入值数值（和valueTypes一一对应）（可以为空）
     * @return 返回方法调用结果
     */
    @SuppressWarnings("unchecked")
    private static <E> Object invoke(E entity,String methodName,Class[] valueTypes,Object[] values) throws Exception{
        return entity.getClass().getMethod(methodName, null==valueTypes?new Class[]{}:valueTypes).invoke(entity, null==values?new Object[]{}:values);
    }
    /**
     * 传入值调用对象方法，不返回结果
     * @param <E>
     * @param entity
     * @param methodName
     * @param value
     */
    private static <E,V> void invokeNoReturn(E entity,String methodName,V value) throws Exception{
        invoke(entity,methodName,null==value?null:new Class[]{value.getClass()},null==value?null:new Object[]{value});
    }
    /**
     * 调用对象方法，返回结果
     * @param <E>
     * @param entity
     * @param methodName
     * @return
     */
    private static <E> Object invokeReturn(E entity,String methodName) throws Exception{
        return invoke(entity, methodName, null, null) ;
    }
    /**
     * 手写字母大写
     * @param str
     * @return
     */
    private static String toUpperFirst(String str){
        return isEmpty(str)?str:str.replaceFirst(str.substring(0,1), str.substring(0,1).toUpperCase()) ;
    }
    /**
     * 检查字符串是否为空
     * @param str
     * @return
     */
    private static boolean isEmpty(String str){
        return null==str||"".equals(str.trim()) ;
    }
    /**
     * new一个对象你指定属性的对象
     * @param <<E>>
     * @param entity
     * @param property
     * @return
     */
    @SuppressWarnings("unchecked")
    private static <E,O> O newEntity(E entity,String property){
        property=property.trim() ;
        try {
                String className = entity.getClass().getMethod("get"+toUpperFirst(property)).getGenericReturnType().toString().replaceAll("^class +","").trim();
                return (O)Class.forName(className).newInstance() ;
        }catch (Exception e){
            return null ;
        }
    }
    /**
     * 判断是否string 或者基本数据类型
     * @param obj
     * @return
     */
    private static boolean isWrapClass(Object obj) {
        return obj instanceof String || obj instanceof Number || obj instanceof Date;
    }
}
