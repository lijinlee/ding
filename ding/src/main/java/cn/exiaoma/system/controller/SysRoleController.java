package cn.exiaoma.system.controller;

import cn.exiaoma.common.utils.ConversionUtils;
import cn.exiaoma.system.model.SysPermission;
import cn.exiaoma.system.model.SysRole;
import cn.exiaoma.system.service.SysPermissionService;
import cn.exiaoma.system.service.SysRoleService;
import com.github.pagehelper.PageInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by senlinmu on 17/10/7.
 */
@RestController
@RequestMapping("/admin/sysRole")
public class SysRoleController {
    @Autowired
    private SysRoleService sysRoleService;
    @Autowired
    private SysPermissionService sysPermissionService;
    private final static Logger logger = LoggerFactory.getLogger(SysRoleController.class);

    @RequestMapping(value = "getPage", method = RequestMethod.POST)
    public Map<String, Object> getAll(SysRole sysRole) {
        Map<String, Object> map = new HashMap<String, Object>();
        if (sysRole.getPage() <= 0) {
            sysRole.setPage(1);
        }
        PageInfo<SysRole> list = sysRoleService.getAll(sysRole.getPage(), sysRole.getRows(), sysRole);
        map.put("rows", list.getList());
        map.put("total", list.getTotal());
        map.put("flag", "1");
        map.put("msg", "操作成功");
        return map;
    }


    @RequestMapping(value = "get", method = RequestMethod.POST)
    public SysRole get(Long id) {
        SysRole sysRole = sysRoleService.getSingleRole(id);
        return sysRole;

    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Map<String, Object> add(SysRole sysRole) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            int a = sysRoleService.addRole(sysRole);
            if (a != 0) {
                map.put("flag", "1");
                map.put("msg", "添加成功");
            } else {
                map.put("flag", "0");
                map.put("msg", "数据库中已有该数据");
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("flag", "0");
            map.put("msg", "添加失败");

        }
        return map;
    }

    @RequestMapping(value = "update", method = RequestMethod.POST)
    public Map<String, Object> update(SysRole sysRole) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            int a = sysRoleService.updateRole(sysRole);
            if (a != 0) {
                map.put("flag", "1");
                map.put("msg", "修改成功");
            } else {
                map.put("flag", "0");
                map.put("msg", "修改失败");
            }
        } catch (Exception e) {
            map.put("flag", "0");
            map.put("msg", "修改失败");
        }
        return map;
    }
    //批量删除
    @RequestMapping(value = "deletes", method = RequestMethod.POST)
    public Map<String, Object> deletes(String ids) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysRoleService.deleteRoles(ids);
            map.put("flag", "1");
            map.put("msg", "操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }

    //授权
    @RequestMapping(value = "permission", method = RequestMethod.POST)
    public Map<String, Object> permission(String ids, String roleId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysRoleService.permission(ids, roleId);
            map.put("flag", "1");
            map.put("msg", "操作成功");
        } catch (Exception e) {
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }

    @RequestMapping(value = "getAll", method = RequestMethod.POST)
    public Object roles() throws Exception {
        String[] arr={"id","name"};
        List<SysRole> list=new ArrayList<>();
        try {
            list = sysRoleService.getAll();
            return ConversionUtils.converstionToMapList(list,arr);
        } catch (Exception e) {
            logger.error("获取角色失败", e);
        }
        return null;
    }

    //加载授权列表
    @RequestMapping(value = "authList", method = RequestMethod.POST)
    public Map<String, Object> authList(Long roleId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<SysPermission> list = sysPermissionService.getAll(null);
            List<Long> plist = sysPermissionService.selectPermissionIdByRoleId(roleId);
            map.put("plist", plist);
            map.put("data", list);
            map.put("flag", "1");
            map.put("msg", "操作成功");

        } catch (Exception e) {
            e.printStackTrace();
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }



}
