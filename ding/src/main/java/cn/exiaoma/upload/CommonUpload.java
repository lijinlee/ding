package cn.exiaoma.upload;

import cn.exiaoma.common.configuration.MyWebMvcResourceConfig;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.*;


@RestController
@RequestMapping("/upload")
public class CommonUpload {
    //定义上传路径
    private String savePath = MyWebMvcResourceConfig.localPath;
    @RequestMapping(value = "appUpload", method = RequestMethod.POST)
    public Map appUpload(HttpServletRequest request) throws IOException {
        Map<String, Object> map = new HashMap<String, Object>();
        List<String> list=new ArrayList<String>();
        try {
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
            for (Map.Entry<String, MultipartFile> entity : fileMap.entrySet()) {
                MultipartFile file = entity.getValue();
                File dir = new File(savePath);
                if(!dir.exists()){
                    dir.mkdir();
                }
                String fileName=UUID.randomUUID().toString().replaceAll("_", "") + file.getOriginalFilename();
                String filePath = savePath +fileName;
                File localFile = new File(filePath);
                file.transferTo(localFile);
                list.add("/upload/"+fileName);
            }
            map.put("list",list);
            map.put("flag", "1");
            map.put("msg", "文件上传成功");
        } catch (Exception e){
            map.put("flag", "0");
            map.put("msg", "文件上传失败:" + e.getMessage());
        }
        return map;
    }
}
