package cn.exiaoma.system.dao;

import cn.exiaoma.system.model.SysRoleUser;

public interface SysRoleUserMapper {
    int deleteByPrimaryKey(Long id);

    int insert(SysRoleUser record);

    int insertSelective(SysRoleUser record);

    SysRoleUser selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysRoleUser record);

    int updateByPrimaryKey(SysRoleUser record);

    int deleteByUserId(Long id);

    int deleteByRoleId(Long id);
}