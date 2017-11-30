package cn.exiaoma.system.service;

import cn.exiaoma.system.dao.SysPermissionRoleMapper;
import cn.exiaoma.system.dao.SysRoleMapper;
import cn.exiaoma.system.dao.SysRoleUserMapper;
import cn.exiaoma.system.model.SysPermissionRole;
import cn.exiaoma.system.model.SysRole;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by senlinmu on 17/10/9.
 */
@Service
@Transactional
public class SysRoleService {
    @Autowired
    private SysRoleMapper sysRoleMapper;
    @Autowired
    private SysRoleUserMapper sysRoleUserMapper;
    @Autowired
    private SysPermissionRoleMapper sysPermissionRoleMapper;

    public PageInfo<SysRole> getAll(Integer page,Integer rows,SysRole sysRole){
        PageHelper.startPage(page,rows,sysRole.getOrderStr("cn.exiaoma.system.dao.SysRoleMapper.BaseResultMap"));
        List<SysRole> list = sysRoleMapper.getAll(sysRole);
        PageInfo<SysRole> pageInfo=new PageInfo<SysRole>(list);
        return pageInfo;
    }

    public int addRole( SysRole sysRole){
      return sysRoleMapper.insert(sysRole);
    }

    public int updateRole(SysRole sysRole){
        return sysRoleMapper.updateByPrimaryKey(sysRole);
    }
    public int deleteRole(Long id){
        sysPermissionRoleMapper.deleteByRoleId(id);
        sysRoleUserMapper.deleteByRoleId(id);
        return sysRoleMapper.deleteByPrimaryKey(id);
    }

    public SysRole getSingleRole(Long id){
        SysRole sysRole = sysRoleMapper.selectByPrimaryKey(id);
        return sysRole;
    }

    public void deleteRoles(String ids){
        String[] ids1 = ids.split(",");
        for (String id:ids1) {
            Long _id=Long.parseLong(id);
            sysRoleMapper.deleteByPrimaryKey(_id);
            sysPermissionRoleMapper.deleteByRoleId(_id);
            sysRoleUserMapper.deleteByRoleId(_id);
        }
    }

    public void permission(String ids,String roleId){
        String[] ids1 = ids.split(",");
        Long _roleId=Long.parseLong(roleId);
        SysPermissionRole sysPermissionRole=new SysPermissionRole();
        sysPermissionRole.setRoleId(_roleId);
        sysPermissionRoleMapper.deleteByRoleId(_roleId);
        if(StringUtils.isNotBlank(ids)){
            for (String id:ids1) {
                Long _id=Long.parseLong(id);
                sysPermissionRole.setPermissionId(_id);
                sysPermissionRoleMapper.insert(sysPermissionRole);
            }
        }
    }

    public List<SysRole> getAll() {
        return sysRoleMapper.getAll(new SysRole());
    }
}
