package cn.exiaoma.common.auth;

import cn.exiaoma.common.Jwt.JwtAuthenticationRequest;
import cn.exiaoma.common.utils.*;
import cn.exiaoma.system.model.SysPermission;
import cn.exiaoma.system.model.SysUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by senlinmu on 17/9/30.
 */
@RestController
@RequestMapping("auth")
public class AuthController {
    private final static Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Value("${jwt.header}")
    private String tokenHeader;
    @Autowired
    private AuthService authService;

    @RequestMapping(value = "sysLogin", method = RequestMethod.POST)
    public ResponseEntity<?> sysLogin(JwtAuthenticationRequest authenticationRequest) throws AuthenticationException {
        Map map = new HashMap();
        try {
            String[] arr={"url"};
            final String token = authService.sysLogin(authenticationRequest.getSysUserName(), authenticationRequest.getPassword());
            List<SysPermission> sysPermissionList=(List<SysPermission>)(EhcacheUtils.get("authCache", authenticationRequest.getSysUserName()));
            map.put("auth", ConversionUtils.converstionToMapList(sysPermissionList,arr));
            map.put("token", token);
            map.put("msg", ApiMsg.SUCCESS.getValue());
            map.put("flag", ApiMsg.SUCCESS.getKey());
        }catch (LockedException e) {
            logger.error(e.getMessage());
            map.put("msg", "用户被锁定请联系管理员!");
            map.put("flag", ApiMsg.FAIL.getKey());
        }catch (BadCredentialsException e) {
            logger.error(e.getMessage());
            map.put("msg", "用户名或密码错误!");
            map.put("flag", ApiMsg.FAIL.getKey());
        }catch (UsernameNotFoundException e) {
            logger.error(e.getMessage());
            map.put("msg", "用户名或密码错误!");
            map.put("flag", ApiMsg.FAIL.getKey());
        }catch (Exception e) {
            logger.error(e.getMessage());
            map.put("msg", ApiMsg.FAIL.getValue());
            map.put("flag", ApiMsg.FAIL.getKey());
        }
        return ResponseEntity.ok(map);
    }


    @RequestMapping(value = "sysRegister", method = RequestMethod.POST)
    public ResponseEntity<?> SysRegister(SysUser addedUser) throws AuthenticationException {
        Map map = new HashMap();
        try {
            Integer flag = authService.sysRegister(addedUser);
            if (flag == 0) {
                map.put("msg", ApiMsg.USER_EXIST.getValue());
                map.put("flag", "0");
            } else {
                authService.sysRegister(addedUser);
                map.put("msg", ApiMsg.SUCCESS.getValue());
                map.put("flag", "1");
            }
        } catch (Exception e) {
            map.put("msg", ApiMsg.FAIL.getValue());
            map.put("flag", "0");
            logger.error(e.getMessage());
        }
        return ResponseEntity.ok(map);
    }

    @RequestMapping(value = "initMenu", method = RequestMethod.POST)
    public ResponseEntity<?> initMenu(
            HttpServletRequest request) throws AuthenticationException {
        Map map = new HashMap();
        try {
            List<SysPermission> result = new ArrayList<>();
            SysUser sysUser = SecurityUtils.getSysUser();
            Object object = EhcacheUtils.get("authCache", sysUser.getSysUserName());
            List<SysPermission> sysPermissionList = null;
            if (object != null) {
                sysPermissionList = (List<SysPermission>) object;
            } else {
                sysPermissionList = authService.addToCache(sysUser.getSysUserName(), sysUser.getSysUserId());
            }
            if (!CollectionUtils.isEmpty(sysPermissionList)) {
                for (SysPermission sysPermission : sysPermissionList) {
                    if (sysPermission.getIsMenu() == 1 && sysPermission.getpId() == -1) {
                        result.add(sysPermission);
                    }
                }
                if (!CollectionUtils.isEmpty(result)) {
                    for (SysPermission p : result) {
                        List<SysPermission> temp=new ArrayList<>();
                        for (SysPermission permission : sysPermissionList) {
                            if (p.getId().equals(permission.getpId())&&permission.getIsMenu()==1) {
                                temp.add(permission);
                            }
                        }
                        p.setSysPermissionList(temp);
                    }
                }
            }
            map.put("data",result);
            map.put("msg", ApiMsg.SUCCESS.getValue());
            map.put("flag", ApiMsg.SUCCESS.getKey());
        } catch (Exception e) {
            map.put("msg", ApiMsg.FAIL.getValue());
            map.put("flag", ApiMsg.FAIL.getKey());
            logger.error(e.getMessage());
        }
        return ResponseEntity.ok(map);
    }

}
