package cn.exiaoma.common.Jwt;

import cn.exiaoma.system.model.SysUser;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by senlinmu on 17/9/30.
 */
public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser createSys(SysUser user) {
        return new JwtUser(
                user.getSysUserId(),
                user.getSysUserName(),
                user.getPassword(),
                mapToGrantedAuthorities(user.getRoles()),
                user.getLastPasswordResetDate(),
                new Long(user.getIsUsed()==null?0:user.getIsUsed())
        );
    }
    private static List<GrantedAuthority> mapToGrantedAuthorities(String roles) {
        List<GrantedAuthority> grantedAuthorityList = new ArrayList<GrantedAuthority>();
        if (StringUtils.isNotBlank(roles)) {
            String[] authorities = roles.split(",");
            for (String authoritie : authorities) {
                grantedAuthorityList.add(new SimpleGrantedAuthority(authoritie));
            }
        }
        return grantedAuthorityList;
    }
}
