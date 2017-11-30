package cn.exiaoma.common.cache;

import cn.exiaoma.system.dao.SysUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * Created by senlinmu on 17/10/6.
 */
@Service
public class CacheService {
    @Autowired
    private SysUserMapper sysUserMapper;
    @Cacheable(value = "codeCache",key = "#userId+'user'")
    public void getById(Long userId) {
        sysUserMapper.selectByPrimaryKey(userId);
    }
    @CacheEvict(value = "codeCache",key = "#userId+'user'")
    public void update(Long userId) {
        System.out.println("更新用户");
    }
}
