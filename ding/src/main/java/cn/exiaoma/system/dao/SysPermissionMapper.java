package cn.exiaoma.system.dao;

import cn.exiaoma.system.model.SysPermission;

import java.util.List;

public interface SysPermissionMapper {
    int deleteByPrimaryKey(Long id);

    int insert(SysPermission record);

    int insertSelective(SysPermission record);

    SysPermission selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysPermission record);

    int updateByPrimaryKey(SysPermission record);

    List<SysPermission> getAll(Long pId);

    List<SysPermission> getAllList(SysPermission sysPermission);

    List<SysPermission> findBySysUserId(Long sysUserId);

    List<SysPermission> selectPermissionBySysUserId(Long id);
}