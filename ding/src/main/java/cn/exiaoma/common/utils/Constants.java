package cn.exiaoma.common.utils;


import cn.exiaoma.common.configuration.MyWebMvcResourceConfig;

import java.io.File;

public class Constants {
    // 每页条数
    public static final int REC_PER_PAGE = 20;
    // 当前页
    public static final int PAGE_NO = 1;

    /**
     * 分隔符：日期-编号
     */
    public static final String SPLIT_CODE = "-";

    /**
     * 富文本上传保存的路径
     */
    public static final String SAVE_PATH= MyWebMvcResourceConfig.localPath+"kindeditor"+ File.separator;
    /**
     * 富文本上传保存后的url
     */
    public static final String SAVE_URL ="/upload/kindeditor/";
    /**
     * 富文本上传文件最大限制
     */
    public static final long MAX_SIZE =20000000;
    /**
     * 富文本上传图片，图片空间管理的根路径
     */
    public static final String ROOT_PATH=MyWebMvcResourceConfig.localPath+"kindeditor"+ File.separator;
    /**
     * 图片空间管理访问的Url
     */
    public static final String ROOT_URL="/upload/kindeditor/";



}