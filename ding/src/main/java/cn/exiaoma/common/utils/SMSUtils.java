package cn.exiaoma.common.utils;

/**
 * Created by senlinmu on 17/10/7.
 */

import com.cloopen.rest.sdk.CCPRestSmsSDK;

import java.util.HashMap;

public class SMSUtils {
    private static String sms_url = "app.cloopen.com";
    private static String sms_port = "8883";
    private static String sms_acc_sid = "aaf98f8950189e9b015059b9427928e8";
    private static String sms_acc_token = "d8e611df5cd7487bae6d03b5c6370ea9";
    private static String sms_appId = "8a216da85ed1f7bf015ef4d3786a01c0";
    private static String sms_temp_id = "209163";
    static CCPRestSmsSDK restAPI;

    static {
        restAPI = new CCPRestSmsSDK();
        restAPI.init(sms_url, sms_port);
        restAPI.setAccount(sms_acc_sid, sms_acc_token);
        // 初始化主账号名称和主账号令牌，登陆云通讯网站后，可在控制首页中看到开发者主账号ACCOUNT SID和主账号令牌AUTH TOKEN。
        restAPI.setAppId(sms_appId);
    }

    public static boolean sendSMS(String phoneNum, String code) {
        HashMap<String, Object> result = null;
        result = restAPI.sendTemplateSMS(phoneNum, sms_temp_id, new String[]{code});
        return "000000".equals(result.get("statusCode"));
    }
}
