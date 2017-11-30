package cn.exiaoma.system.controller;

import cn.exiaoma.common.utils.ApiMsg;
import cn.exiaoma.common.utils.ConversionUtils;
import cn.exiaoma.common.utils.SecurityUtils;
import cn.exiaoma.system.model.SysRole;
import cn.exiaoma.system.model.SysUser;
import cn.exiaoma.system.service.SysRoleService;
import cn.exiaoma.system.service.SysUserService;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by senlinmu on 17/10/7.
 */
@RestController
@RequestMapping("/admin/sysUser")
public class SysUserController {
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private SysRoleService sysRoleService;
    private final static Logger logger = LoggerFactory.getLogger(SysUserController.class);

    //条件查询分页
    @RequestMapping(value = "getPage", method = RequestMethod.POST)
    public Map findByLike(SysUser sysUser) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            PageInfo<SysUser> pageList = sysUserService.findByLike(sysUser);
            map.put("total", pageList.getTotal());
            map.put("rows", pageList.getList());
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error(e.getMessage());
        }
        return map;
    }

    @RequestMapping(value = "deletes", method = RequestMethod.POST)
    public Map deletes(String ids) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysUserService.delete(ids);
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "resetPassword", method = RequestMethod.POST)
    public Map reset(String sysUserId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            String code = (int) (Math.random() * 900000) + 100000 + "";
            SysUser sysUser = new SysUser();
            sysUser.setSysUserId(Long.parseLong(sysUserId));
            sysUser.setPassword(code);
            sysUserService.resetPassword(sysUser);
            map.put("flag", "1");
            map.put("code", code);
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "get", method = RequestMethod.POST)
    public Map findById(Long id) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            SysUser sysUser = sysUserService.findById(id);
            map.put("sysUser", sysUser);
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "update", method = RequestMethod.POST)
    public Map update(SysUser sysUser) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysUserService.updateUserAndRole(sysUser);
            map.put("data", sysUser);
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Map<String, Object> save(SysUser sysUser) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysUserService.add(sysUser);
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "setStatus", method = RequestMethod.POST)
    public Map update(Integer isUsed, Long sysUserId) {
        Map<String, Object> map = new HashMap<String, Object>();
        SysUser sysUser = sysUserService.getById(sysUserId);
        try {
            sysUser.setIsUsed(isUsed);
            sysUserService.update(sysUser);
            map.put("data", sysUser);
            map.put("flag", "1");
            logger.info("操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            logger.error("操作失败");
        }
        return map;
    }

    @RequestMapping(value = "modifyPassword", method = RequestMethod.POST)
    public ResponseEntity<?> resetPassword(String oldPassword, String newPassword) throws AuthenticationException {
        Map map = new HashMap();
        if (StringUtils.isBlank(oldPassword) || StringUtils.isBlank(newPassword)) {
            map.put("msg", ApiMsg.PARAM_FAIL.getValue());
            map.put("flag", "0");
            return ResponseEntity.ok(map);
        }
        try {
            SysUser sysUser = SecurityUtils.getSysUser();
            sysUser = sysUserService.getById(sysUser.getSysUserId());
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (!encoder.matches(oldPassword, sysUser.getPassword())) {
                map.put("msg", "原密码错误");
                map.put("flag", "0");
            } else {
                sysUser.setPassword(encoder.encode(newPassword));
                sysUserService.update(sysUser);
                map.put("msg", "修改成功");
                map.put("flag", "1");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            map.put("msg", ApiMsg.FAIL.getValue());
            map.put("flag", "0");
        }
        return ResponseEntity.ok(map);
    }

    @RequestMapping(value = "getAllRole", method = RequestMethod.POST)
    public Object roles() throws Exception {
        String[] arr={"id","name"};
        List<SysRole> list=new ArrayList<>();
        try {
            list = sysRoleService.getAll();
            return ConversionUtils.converstionToMapList(list, arr);
        } catch (Exception e) {
            logger.error("获取角色失败", e);
        }
        return null;
    }

}
