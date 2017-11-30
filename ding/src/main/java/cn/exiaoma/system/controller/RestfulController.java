package cn.exiaoma.system.controller;

import cn.exiaoma.common.utils.ApiMsg;
import cn.exiaoma.common.utils.EhcacheUtils;
import cn.exiaoma.common.utils.SMSUtils;
import org.activiti.engine.ProcessEngine;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by senlinmu on 17/10/25.
 */
@RestController
@RequestMapping("rest")
public class RestfulController {
    private final static Logger logger = LoggerFactory.getLogger(RestfulController.class);
    @Autowired
    private ProcessEngine processEngine;
    @RequestMapping(value = "smsCode", method = RequestMethod.POST)
    public ResponseEntity<?> smsCode(String phoneNumber) {
        Map map = new HashMap();
        try {
            String code = (int) (Math.random() * 900000) + 100000 + "";
            if (SMSUtils.sendSMS(phoneNumber, code)) {
                EhcacheUtils.put("smsCodeCache", phoneNumber, code);
                map.put("msg", ApiMsg.SUCCESS.getValue());
                map.put("flag", "1");
            } else {
                map.put("msg", ApiMsg.SEND_CODE_FAIL.getValue());
                map.put("flag", "0");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            map.put("msg", ApiMsg.FAIL.getValue());
            map.put("flag", "0");
        }
        return ResponseEntity.ok(map);
    }
    @RequestMapping(value = "/pstart", method = RequestMethod.POST)
    public ResponseEntity<?> start() {
        RepositoryService repositoryService = processEngine.getRepositoryService();
        RuntimeService runtimeService = processEngine.getRuntimeService();

        String processId = runtimeService.startProcessInstanceByKey("test").getId();
        TaskService taskService = processEngine.getTaskService();
        //得到笔试的流程
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("msg","流程启动: id="+processId);
        return ResponseEntity.ok(map);
    }
}
