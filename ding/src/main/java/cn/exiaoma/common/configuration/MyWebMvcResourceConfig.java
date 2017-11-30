package cn.exiaoma.common.configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.embedded.ServletContextInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import java.io.File;

/**
 * Created by senlinmu on 17/10/10.
 */
@Configuration
public class MyWebMvcResourceConfig extends WebMvcConfigurerAdapter implements ServletContextInitializer {
    private final Logger log = LoggerFactory.getLogger(MyWebMvcResourceConfig.class);


    public final static String localPath=System.getProperty("user.home")+File.separator+"upload"+File.separator;
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/upload/**").addResourceLocations("file:"+localPath);
        super.addResourceHandlers(registry);
    }

    /**
     * Initializes ActivitiModeler.
     */
    private void initActivitiModeler(ServletContext servletContext) {
        log.info("Initialize acitiviti modeler");
        ServletRegistration.Dynamic modelerServlet = servletContext.addServlet("modelerServlet", new DispatcherServlet());
        modelerServlet.setInitParameter("contextConfigLocation", "classpath:activiti-modeler.xml");
        modelerServlet.addMapping("/service/*");
        modelerServlet.setLoadOnStartup(1);
    }

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        initActivitiModeler(servletContext);
    }
}
