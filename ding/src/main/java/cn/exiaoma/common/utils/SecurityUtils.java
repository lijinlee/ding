package cn.exiaoma.common.utils;

import cn.exiaoma.common.Jwt.JwtUser;
import cn.exiaoma.system.model.SysUser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Created by senlinmu on 17/10/7.
 */
public class SecurityUtils {
    public static SysUser getSysUser(){
        SysUser user=null;
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        if(authentication!=null){
            JwtUser jwtUser=(JwtUser)authentication.getPrincipal();
            user=new SysUser();
            user.setSysUserId(jwtUser.getId());
            user.setSysUserName(jwtUser.getUsername());
        }
        return user;
    }
}
