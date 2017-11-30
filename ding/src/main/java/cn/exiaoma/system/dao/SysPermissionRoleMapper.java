package cn.exiaoma.system.dao;

import cn.exiaoma.system.model.SysPermissionRole;

import java.util.List;

public interface SysPermissionRoleMapper {
    int deleteByPrimaryKey(Long id);

    int insert(SysPermissionRole record);

    int insertSelective(SysPermissionRole record);

    SysPermissionRole selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysPermissionRole record);

    int updateByPrimaryKey(SysPermissionRole record);

    int deleteByRoleId(Long id);

    List<Long> selectPermissionIdByRoleId(Long roleId);

    int deleteByPermissionId(Long id);
}