package cn.exiaoma.common.utils;

/**
 * Created by senlinmu on 17/10/6.
 */
public enum ApiMsg {
    SUCCESS("1", "成功"),
    FAIL("0","失败"),
    TOKEN_FAIL("10","TOKEN失效"),
    UP_FAIL("11","用户名或密码错误"),
    USER_EXIST("12","用户已存在"),
    PARAM_FAIL("13","参数错误"),
    VERIFICATION_CODE_FAIL("14","验证码错误或已失效"),
    SEND_CODE_FAIL("15","发送验证码失败"),
    PASSWORD_NOT_SAME("16","两次输入密码不一致"),
    USER_NOT_EXIST("12","用户不存在");
    private final String key;
    private final String value;
    ApiMsg(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }
}
