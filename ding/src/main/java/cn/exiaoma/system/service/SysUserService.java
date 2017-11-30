package cn.exiaoma.system.service;

import cn.exiaoma.system.dao.SysRoleUserMapper;
import cn.exiaoma.system.dao.SysUserMapper;
import cn.exiaoma.system.model.SysRoleUser;
import cn.exiaoma.system.model.SysUser;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.util.TextUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by senlinmu on 17/10/9.
 */
@Service
@Transactional
public class SysUserService {
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysRoleUserMapper sysRoleUserMapper;

    public void add(SysUser sysUser) {
        sysUser.setIsDel(0);
        sysUser.setIsUsed(1);
        sysUser.setCreateDate(new Date());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        sysUser.setPassword(encoder.encode(sysUser.getPassword()));
        sysUserMapper.insert(sysUser);
        if (StringUtils.isNotBlank(sysUser.getRoleIds())) {
            for (String roleId : sysUser.getRoleIds().split(",")) {
                SysRoleUser sysRoleUser = new SysRoleUser();
                sysRoleUser.setRoleId(Long.valueOf(roleId));
                sysRoleUser.setUserId(sysUser.getSysUserId());
                sysRoleUserMapper.insert(sysRoleUser);
            }
        }

    }

    public void update(SysUser sysUser) {
        sysUser.setLastMoodifyDate(new Date());
        sysUserMapper.updateByPrimaryKeySelective(sysUser);
    }

    public void updateUserAndRole(SysUser sysUser) {
        sysUser.setLastMoodifyDate(new Date());
        sysRoleUserMapper.deleteByUserId(sysUser.getSysUserId());
        if (StringUtils.isNotBlank(sysUser.getRoleIds())) {
            for (String roleId : sysUser.getRoleIds().split(",")) {
                SysRoleUser sysRoleUser = new SysRoleUser();
                sysRoleUser.setRoleId(Long.valueOf(roleId));
                sysRoleUser.setUserId(sysUser.getSysUserId());
                sysRoleUserMapper.insert(sysRoleUser);
            }
        }
        sysUserMapper.updateByPrimaryKeySelective(sysUser);
    }

    //分页查询
    public PageInfo<SysUser> findByLike(SysUser sysUser) {
        PageHelper.startPage(sysUser.getPage(), sysUser.getRows(), sysUser.getOrderStr("cn.exiaoma.system.dao.SysUserMapper.RoleResultMap"));
        String keyWord = sysUser.getKeyWord();
        if (keyWord == null || TextUtils.isEmpty(keyWord)) {
            keyWord = "%%";
        } else {
            keyWord = "%" + keyWord + "%";
        }
        PageInfo<SysUser> pageInfo = new PageInfo<SysUser>(sysUserMapper.findByLike(keyWord));

        return pageInfo;
    }

    public SysUser findById(Long id) {
        return sysUserMapper.selectByPrimaryKey(id);
    }

    public void delete(String ids) {
        for (String strId : ids.split(",")) {
            sysUserMapper.deleteByPrimaryKey(Long.valueOf(strId));
            sysRoleUserMapper.deleteByUserId(Long.valueOf(strId));
        }
    }

    public PageInfo<SysUser> getAll(Integer page, Integer rows) {
        PageHelper.startPage(page, rows);
        PageInfo<SysUser> pageInfo = new PageInfo<SysUser>(sysUserMapper.getAll());
        return pageInfo;
    }

    public SysUser getById(Long sysUserId) {
        return sysUserMapper.selectByPrimaryKey(sysUserId);
    }

    public void resetPassword(SysUser sysUser){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        sysUser.setPassword(encoder.encode(sysUser.getPassword()));
        sysUserMapper.updateByPrimaryKeySelective(sysUser);
    }
}
