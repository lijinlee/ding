package cn.exiaoma.common.Jwt;

import cn.exiaoma.system.dao.SysUserMapper;
import cn.exiaoma.system.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Created by senlinmu on 17/9/30.
 */
@Service
public class JwtSysUserService implements UserDetailsService{
    @Autowired
    private SysUserMapper sysUserMapper;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUser sysUser = sysUserMapper.findByUsername(username);
        if (sysUser == null) {
            throw new UsernameNotFoundException(String.format("用户名不存在:", username));
        } else {
            return JwtUserFactory.createSys(sysUser);
        }
    }
}
