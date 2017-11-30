package cn.exiaoma.common.Jwt;

/**
 * Created by senlinmu on 17/9/30.
 */

import cn.exiaoma.common.utils.EhcacheUtils;
import cn.exiaoma.system.model.SysPermission;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    private JwtSysUserService jwtSysUserService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Value("${jwt.header}")
    private String tokenHeader;

    @Value("${jwt.tokenHead}")
    private String tokenHead;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain) throws ServletException, IOException {
        String url=request.getRequestURI();
        //后台菜单
        if((url.startsWith("/admin/")||url.startsWith("/modeler"))&&!url.equals("/index.html")&&!url.equals("/login.html")){
            String token=getCookie(request,"token");
            String username = jwtTokenUtil.getUsernameFromToken(token);
            Object object = EhcacheUtils.get("authCache", username);
            if(object!=null){
                List<SysPermission> sysPermissionList = (List<SysPermission>)object;
                if(valid(url,sysPermissionList)){
                    setAuth(token,username,request);
                }
            }
        //app api
        }else{
            String authHeader = request.getHeader(this.tokenHeader);
            if (authHeader != null && authHeader.startsWith(tokenHead)) {
                final String authToken = authHeader.substring(tokenHead.length()); // The part after "Bearer "\
                String username = jwtTokenUtil.getUsernameFromToken(authToken);
                setAuth(authToken,username,request);
            }
        }

        chain.doFilter(request, response);
    }
    private boolean valid(String url,List<SysPermission> sysPermissionList){
        for(SysPermission sysPermission:sysPermissionList){
            if(url.startsWith("/service/model/")){
                return true;
            }
            if(url.equals(sysPermission.getUrl())){
                return true;
            }
        }
        return false;
    }

    private void setAuth(String authToken,String username,HttpServletRequest request){
        UserDetails userDetails = null;
        if(StringUtils.isNotBlank(username)){
            //后台api token验证
            userDetails = jwtSysUserService.loadUserByUsername(username);
            if (jwtTokenUtil.validateToken(authToken, userDetails)) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(
                        request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
    }

    private String getCookie(HttpServletRequest request,String key){
        Cookie[] cookies=request.getCookies();
        for(Cookie cookie:cookies){
            if(key.equals(cookie.getName())){
                return cookie.getValue();
            }
        }
        return null;
    }
}
