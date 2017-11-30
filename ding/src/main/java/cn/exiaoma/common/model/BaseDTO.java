package cn.exiaoma.common.model;


import cn.exiaoma.common.utils.SpringUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.mapping.ResultMap;
import org.apache.ibatis.mapping.ResultMapping;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.util.CollectionUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Class Name : BaseDTO.
 * Description : 查询基类，包含分页、排序等公共字段，各业务查询类继承该类即可.
 * Created by Jhony Zhang on 2016-05-06.
 */
public class BaseDTO {

    /**
     * 描述: 页数
     */
    private int page=1;

    /**
     * 描述: 每页记录数
     */
    private int rows=20;
    /**
     * 描述: 排序方式
     */
    private String orderStr;


    private String sort;//sort:name,description
    private String order;//order:asc,asc
    /**
     * 查询关键字
     */
    private String keyWord;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getRows() {
        return rows;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

    public String getOrderStr(String id) {
        StringBuilder stringBuilder=new StringBuilder();
        SqlSessionTemplate sqlSessionTemplate=(SqlSessionTemplate)SpringUtils.getBean("sqlSessionTemplate");
        ResultMap resultMap=sqlSessionTemplate.getConfiguration().getResultMap(id);
        if(resultMap!=null){
            Map<String,String> map=new HashMap<>();
            List<ResultMapping> list=resultMap.getResultMappings();
            if(!CollectionUtils.isEmpty(list)){
                for(ResultMapping resultMapping:list){
                    map.put(resultMapping.getProperty(),resultMapping.getColumn());
                }
            }
            if(StringUtils.isNotBlank(this.sort)&&StringUtils.isNotBlank(this.order)){
                String[] sortArr=sort.split(",");
                String[] orderArr=order.split(",");
                for(int i=0;i<sortArr.length;i++){
                    stringBuilder.append(map.get(sortArr[i])+" "+orderArr[i]);
                    if(i!=sortArr.length-1){
                        stringBuilder.append(",");
                    }
                }
            }
        }
        return stringBuilder.toString();
    }

    public void setOrderStr(String orderStr) {
        this.orderStr = orderStr;
    }

    public String getKeyWord() {
        return keyWord;
    }

    public void setKeyWord(String keyWord) {
        this.keyWord = keyWord;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }
}
