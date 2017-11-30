package cn.exiaoma.system.service;

import cn.exiaoma.system.dao.SysPermissionMapper;
import cn.exiaoma.system.dao.SysPermissionRoleMapper;
import cn.exiaoma.system.model.SysPermission;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
@Transactional
public class SysPermissionService {
    @Autowired
    private SysPermissionMapper spm;
    @Autowired
    private SysPermissionRoleMapper sprm;

    public List<SysPermission> getAll(Long pId){
        List<SysPermission> list = spm.getAll(pId);
        return list;
    }

    public PageInfo<SysPermission> getAllList(SysPermission sysPermission){
        PageHelper.startPage(sysPermission.getPage(),sysPermission.getRows(),sysPermission.getOrderStr("cn.exiaoma.system.dao.SysPermissionMapper.BaseResultMap"));
        List<SysPermission> list= spm.getAllList(sysPermission);
        PageInfo<SysPermission> info=new PageInfo<SysPermission>(list);
        return info;

    }

    public int add(SysPermission sysPermission){
        return spm.insert(sysPermission);
    }

    public int update(SysPermission sysPermission){
        return spm.updateByPrimaryKeySelective(sysPermission);
    }

    public void delete(String ids) throws Exception{
        String[] _ids=ids.split(",");
        for(String id:_ids) {
            sprm.deleteByPermissionId(Long.parseLong(id));
            delete(Long.parseLong(id));
        }
    }

    private void delete(Long id){
        List<SysPermission> sysPermissionList=spm.getAll(id);
        if(!CollectionUtils.isEmpty(sysPermissionList)){
            for(SysPermission sysPermission:sysPermissionList){
                sprm.deleteByPermissionId(sysPermission.getId());
                delete(sysPermission.getId());
            }
        }
        spm.deleteByPrimaryKey(id);
    }

    public List<Long> selectPermissionIdByRoleId(Long roleId){
        return sprm.selectPermissionIdByRoleId(roleId);
    }
}
