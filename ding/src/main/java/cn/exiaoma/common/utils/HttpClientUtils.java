package cn.exiaoma.common.utils;

import com.alibaba.fastjson.JSONObject;
import org.apache.http.Consts;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContexts;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;

import javax.net.ssl.SSLContext;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by senlinmu on 17/10/14.
 */
public class HttpClientUtils {
    private final static Logger logger = LoggerFactory.getLogger(HttpClientUtils.class);
    public static HttpClient createSSLHttpClient(String keystoreDir, String keystorePassword) throws IOException, NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        CloseableHttpClient httpclient = null;
        KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        FileInputStream instream = new FileInputStream(new File(keystoreDir));
        try {
            // 加载keyStore d:\\tomcat.keystore
            trustStore.load(instream, keystorePassword.toCharArray());
        } catch (CertificateException e) {
            e.printStackTrace();
        } finally {
            try {
                instream.close();
            } catch (Exception ignore) {
            }
        }
        // 相信自己的CA和所有自签名的证书
        SSLContext sslcontext = SSLContexts.custom().loadTrustMaterial(trustStore, new TrustSelfSignedStrategy()).build();
        // 只允许使用TLSv1协议
        SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslcontext, new String[]{"TLSv1"}, null,
                SSLConnectionSocketFactory.BROWSER_COMPATIBLE_HOSTNAME_VERIFIER);
        httpclient = HttpClients.custom().setSSLSocketFactory(sslsf).build();
        return httpclient;
    }

    public static String post(String url, Map<String, String> params,Map<String, String> headers) {
        // 创建默认的httpClient实例.
        CloseableHttpClient httpclient = HttpClients.createDefault();
        // 创建httppost
        HttpPost httppost = new HttpPost(url);
        if(!CollectionUtils.isEmpty(headers)){
            for (String key : headers.keySet()) {
                httppost.addHeader(key, headers.get(key));
            }
        }
        // 创建参数队列
        List<BasicNameValuePair> formparams = new ArrayList<BasicNameValuePair>();
        if(!CollectionUtils.isEmpty(params)){
            for (String key : params.keySet()) {
                formparams.add(new BasicNameValuePair(key, params.get(key)));
            }
        }
        UrlEncodedFormEntity uefEntity;
        try {
            uefEntity = new UrlEncodedFormEntity(formparams, Consts.UTF_8);
            httppost.setEntity(uefEntity);
            logger.info("执行请求 " + httppost.getURI());
            CloseableHttpResponse response = httpclient.execute(httppost);
            try {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, Consts.UTF_8);
                if (entity != null) {
                    logger.info("--------------------------------------");
                    logger.info("响应结果: " + result);
                    logger.info("--------------------------------------");
                }
                return result;
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static String postJSON(String url, Map<String, String> params,Map<String,String> headers) {
        // 创建默认的httpClient实例.
        CloseableHttpClient httpclient = HttpClients.createDefault();
        // 创建httppost
        HttpPost httppost = new HttpPost(url);
        if(!CollectionUtils.isEmpty(headers)){
            for (String key : headers.keySet()) {
                httppost.addHeader(key, headers.get(key));
            }
        }
        // 创建参数队列
        JSONObject jsonParam = new JSONObject();
        for (String key : params.keySet()) {
            jsonParam.put(key, params.get(key));
        }
        StringEntity paramEntity = new StringEntity(jsonParam.toString(), Consts.UTF_8);//解决中文乱码问题
        paramEntity.setContentEncoding(Consts.UTF_8.toString());
        paramEntity.setContentType(ContentType.APPLICATION_JSON.toString());

        try {
            httppost.setEntity(paramEntity);
            logger.info("执行请求 " + httppost.getURI());
            CloseableHttpResponse response = httpclient.execute(httppost);
            try {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, Consts.UTF_8);
                if (entity != null) {
                    logger.info("--------------------------------------");
                    logger.info("响应结果: " + result);
                    logger.info("--------------------------------------");
                }
                return result;
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static String postJSON(String url, Map<String, String> params) {
        // 创建默认的httpClient实例.
        CloseableHttpClient httpclient = HttpClients.createDefault();
        // 创建httppost
        HttpPost httppost = new HttpPost(url);
        // 创建参数队列
        JSONObject jsonParam = new JSONObject();
        for (String key : params.keySet()) {
            jsonParam.put(key, params.get(key));
        }
        StringEntity paramEntity = new StringEntity(jsonParam.toString(), Consts.UTF_8);//解决中文乱码问题
        paramEntity.setContentEncoding(Consts.UTF_8.toString());
        paramEntity.setContentType(ContentType.APPLICATION_JSON.toString());

        try {
            httppost.setEntity(paramEntity);
            logger.info("执行请求 " + httppost.getURI());
            CloseableHttpResponse response = httpclient.execute(httppost);
            try {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, Consts.UTF_8);
                if (entity != null) {
                    logger.info("--------------------------------------");
                    logger.info("响应结果: " + result);
                    logger.info("--------------------------------------");
                }
                return result;
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public String get(String url, Map<String, String> params) {
        // 创建默认的httpClient实例.
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpGet = null;
        // 创建参数队列
        List<NameValuePair> formparams = new ArrayList<NameValuePair>();
        for (String key : params.keySet()) {
            formparams.add(new BasicNameValuePair(key, params.get(key)));
        }
        try {
            httpGet = new HttpGet(url + "?" + EntityUtils.toString(new UrlEncodedFormEntity(formparams, Consts.UTF_8)));
            logger.info("执行请求 " + httpGet.getURI());
            CloseableHttpResponse response = httpclient.execute(httpGet);
            try {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, Consts.UTF_8);
                if (entity != null) {
                    logger.info("--------------------------------------");
                    logger.info("响应结果: " + result);
                    logger.info("--------------------------------------");
                }
                return result;
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;

    }


    public static String upload(String url, Map<String, String> params, List<File> files) {
        // 创建默认的httpClient实例.
        CloseableHttpClient httpclient = HttpClients.createDefault();
        // 创建httppost
        HttpPost httppost = new HttpPost(url);
        MultipartEntityBuilder multipartEntityBuilder = MultipartEntityBuilder.create();
        multipartEntityBuilder.setCharset(Consts.UTF_8);
        if (!CollectionUtils.isEmpty(params)) {
            for (String key : params.keySet()) {
                multipartEntityBuilder.addPart(key, new StringBody(params.get(key), ContentType.TEXT_PLAIN));
            }
        }
        if (!CollectionUtils.isEmpty(files)) {
            for (File file : files) {
                multipartEntityBuilder.addPart(file.getName(), new FileBody(file));
            }
        }
        HttpEntity reqEntity = multipartEntityBuilder.build();
        try {
            httppost.setEntity(reqEntity);
            logger.info("执行请求 " + httppost.getURI());
            CloseableHttpResponse response = httpclient.execute(httppost);
            try {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, Consts.UTF_8);
                if (entity != null) {
                    logger.info("--------------------------------------");
                    logger.info(": " + result);
                    logger.info("--------------------------------------");
                }
                return result;
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Map params=new HashMap();
        params.put("phoneNumber","15827572039");
        params.put("userName", "zhangshan");
        Map headers=new HashMap();
        headers.put("userId","3");
        String result = HttpClientUtils.post("http://116.211.121.99:8089/xiaoma/users/xiaoma/users/addUserJson", params, headers);


    }
}
