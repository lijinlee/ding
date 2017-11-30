package cn.exiaoma.system.dao;

import cn.exiaoma.system.model.SysUser;

import java.util.List;

public interface SysUserMapper {
    int deleteByPrimaryKey(Long sysUserId);

    int insert(SysUser record);

    int insertSelective(SysUser record);

    SysUser selectByPrimaryKey(Long sysUserId);

    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);

    SysUser findByUsername(String username);

    List<SysUser> getAll();

    List<SysUser>  findByLike(String keyWord);
}