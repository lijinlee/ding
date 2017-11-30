package cn.exiaoma.common.utils;

import cn.jiguang.common.resp.APIConnectionException;
import cn.jiguang.common.resp.APIRequestException;
import cn.jpush.api.JPushClient;
import cn.jpush.api.push.model.Platform;
import cn.jpush.api.push.model.PushPayload;
import cn.jpush.api.push.model.audience.Audience;
import cn.jpush.api.push.model.notification.AndroidNotification;
import cn.jpush.api.push.model.notification.Notification;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by chenlong on 2015/6/8.
 */
public class MsgSend {
    //在极光注册上传应用的 appKey 和 masterSecret
    private static final String appKey = "35820c044ac90c264917cca4";////必填，例如466f7032ac604e02fb7bda89
    private static final String masterSecret = "9238583d4df5c89afa9c3118";//必填，每个应用都对应一个masterSecret
    private static JPushClient jpush = new JPushClient(masterSecret, appKey);

    public static PushPayload buildIOSPayload(String alias, String alert) {
        return PushPayload.newBuilder()
                .setPlatform(Platform.ios_winphone())
                .setAudience(Audience.alias(alias.replace(".", "_")))
                .setNotification(Notification.newBuilder()
                        .setAlert(alert)
                        .build())
                .build();
    }

    public static PushPayload buildAndroidWinphonePayload(String alias,
                                                          String alert, String title) {
        return PushPayload.newBuilder()
                .setPlatform(Platform.android())
                .setAudience(Audience.alias(alias.replace(".", "_")))
                .setNotification(Notification.newBuilder()
                        .setAlert(alert)
                        .addPlatformNotification(AndroidNotification.newBuilder()
                                .setTitle(title).build())
                        .build())
                .build();
    }

    public static void pushAll(String content) {
        PushPayload pushPayload = PushPayload.alertAll(content);
        try {
            jpush.sendPush(pushPayload);
        } catch (APIConnectionException e) {
            e.printStackTrace();
        } catch (APIRequestException e) {
            e.printStackTrace();
        }
    }

    public static void pushAndroid(String alias, String title, String alert) {
        PushPayload pushPayload = buildAndroidWinphonePayload(alias, alert, title);
        try {
            jpush.sendPush(pushPayload);
        } catch (APIConnectionException e) {
        } catch (APIRequestException e) {
        }
    }

    public static void pushIOS(String alias, String alert) {
        PushPayload pushPayload = buildIOSPayload(alias, alert);
        try {
            jpush.sendPush(pushPayload);
        } catch (APIConnectionException e) {
        } catch (APIRequestException e) {
        }
    }
}
