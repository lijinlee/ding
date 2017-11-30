package cn.exiaoma.common.auth;

import cn.exiaoma.common.Jwt.JwtSysUserService;
import cn.exiaoma.common.Jwt.JwtTokenUtil;
import cn.exiaoma.common.Jwt.JwtUser;
import cn.exiaoma.common.utils.EhcacheUtils;
import cn.exiaoma.system.dao.SysPermissionMapper;
import cn.exiaoma.system.dao.SysUserMapper;
import cn.exiaoma.system.model.SysPermission;
import cn.exiaoma.system.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class AuthService {
    @Autowired
    @Qualifier("sysAuhthenticationProvider")
    private AuthenticationProvider sysAuhthenticationProvider;
    private JwtSysUserService jwtSysUserService;
    private JwtTokenUtil jwtTokenUtil;
    private SysUserMapper sysUserMapper;
    private SysPermissionMapper sysPermissionMapper;
    @Value("${jwt.tokenHead}")
    private String tokenHead;
    @Value("${jwt.expiration}")
    private Long expiration;
    @Autowired
    public AuthService(
            JwtSysUserService jwtSysUserService,
            JwtTokenUtil jwtTokenUtil,
            SysUserMapper sysUserMapper,SysPermissionMapper sysPermissionMapper) {
        this.jwtSysUserService=jwtSysUserService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.sysUserMapper = sysUserMapper;
        this.sysPermissionMapper = sysPermissionMapper;
    }

    public String sysLogin(String sysUserName, String password) {
        UsernamePasswordAuthenticationToken upToken = new UsernamePasswordAuthenticationToken(sysUserName, password);
        final Authentication authentication = sysAuhthenticationProvider.authenticate(upToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = jwtSysUserService.loadUserByUsername(sysUserName);
        JwtUser jwtUser=(JwtUser)userDetails;
        addToCache(jwtUser.getUsername(),jwtUser.getId());
        SysUser sysUser=new SysUser();
        sysUser.setSysUserId(jwtUser.getId());
        sysUser.setLastLoginDate(new Date());
        sysUserMapper.updateByPrimaryKeySelective(sysUser);
        final String token = jwtTokenUtil.generateToken(userDetails,"1");
        return token;
    }

    public Integer sysRegister(SysUser userToAdd) {
        final String username = userToAdd.getSysUserName();
        if (sysUserMapper.findByUsername(username) != null) {
            return 0;
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final String rawPassword = userToAdd.getPassword();
        userToAdd.setPassword(encoder.encode(rawPassword));
        userToAdd.setLastPasswordResetDate(new Date());
        userToAdd.setRoles("ROLE_USER");
        sysUserMapper.insert(userToAdd);
        return 1;
    }

    public List<SysPermission> addToCache(String sysUserName,Long sysUserId){
        List<SysPermission> sysPermissionList=sysPermissionMapper.selectPermissionBySysUserId(sysUserId);
        EhcacheUtils.put("authCache",sysUserName,sysPermissionList);
        return sysPermissionList;
    }
}
