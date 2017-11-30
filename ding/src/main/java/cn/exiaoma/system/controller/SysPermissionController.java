package cn.exiaoma.system.controller;

import cn.exiaoma.system.model.SysPermission;
import cn.exiaoma.system.service.SysPermissionService;
import com.github.pagehelper.PageInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/sysPermission")
public class SysPermissionController {
    @Autowired
    private SysPermissionService sysPermissionService;
    private Logger logger = LoggerFactory.getLogger(SysPermissionController.class);


    //属性菜单加载
    @RequestMapping(value = "getAll", method = RequestMethod.POST)
    public Map<String, Object> getAll(Long pId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<SysPermission> list = sysPermissionService.getAll(pId);
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

    //列表数据加载
    @RequestMapping(value = "getPage", method = RequestMethod.POST)
    public Map<String, Object> list(SysPermission sysPermission) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            PageInfo<SysPermission> list = sysPermissionService.getAllList(sysPermission);
            map.put("rows", list.getList());
            map.put("total", list.getTotal());
            map.put("flag", "1");
            map.put("msg", "操作成功");

        } catch (Exception e) {
            e.printStackTrace();
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }

    //添加permission
    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Map<String, Object> add(SysPermission sysPermission) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysPermissionService.add(sysPermission);
            map.put("sysPermission", sysPermission);
            map.put("flag", "1");
            map.put("msg", "操作成功");

        } catch (Exception e) {
            e.printStackTrace();
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }

    //修改permission
    @RequestMapping(value = "update", method = RequestMethod.POST)
    public Map<String, Object> update(SysPermission sysPermission) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysPermissionService.update(sysPermission);
            map.put("sysPermission", sysPermission);
            map.put("flag", "1");
            map.put("msg", "操作成功");

        } catch (Exception e) {
            e.printStackTrace();
            map.put("flag", "0");
            map.put("msg", "操作失败");
        }
        return map;
    }

    //修改permission
    @RequestMapping(value = "deletes", method = RequestMethod.POST)
    public Map<String, Object> deletePermission(String ids) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            sysPermissionService.delete(ids);

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
