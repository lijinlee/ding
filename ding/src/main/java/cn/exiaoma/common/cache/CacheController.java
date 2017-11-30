package cn.exiaoma.common.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;

/**
 * Created by senlinmu on 17/10/6.
 */
@RestController
public class CacheController {
    @Autowired
    private CacheService cacheService;
    @RequestMapping(value = "getById", method = RequestMethod.POST)
    public ResponseEntity<?> getById(Long id) throws AuthenticationException {
        cacheService.getById(id);
        return null;
    }
    @RequestMapping(value = "update", method = RequestMethod.POST)
    public ResponseEntity<?> update(Long id) throws AuthenticationException{
        cacheService.update(id);
        return null;
    }
}
