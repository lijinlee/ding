package cn.exiaoma.common.configuration;

import org.activiti.spring.SpringProcessEngineConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

/**
 * Created by senlinmu on 17/10/10.
 */
@Configuration
public class ProjectConfig {
    @Bean(name = "processEngineConfiguration")
    public SpringProcessEngineConfiguration springProcessEngineConfiguration(DataSource dataSource, PlatformTransactionManager transactionManager){

        SpringProcessEngineConfiguration processEngineConfiguration = new SpringProcessEngineConfiguration();
        try{
            ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            /*自动部署方式 */
/*
            Resource[] resources=resolver.getResources("classpath*:/deployments/*");
            processEngineConfiguration.setDeploymentResources(resources);*/


            processEngineConfiguration.setDataSource(dataSource);

            processEngineConfiguration.setTransactionManager(transactionManager);

            processEngineConfiguration.setActivityFontName("宋体");

            processEngineConfiguration.setLabelFontName("宋体");

            processEngineConfiguration.setAnnotationFontName("宋体");

            processEngineConfiguration.setDbIdentityUsed(false);

            processEngineConfiguration.setDatabaseSchema("ACT");

            processEngineConfiguration.setDatabaseSchemaUpdate("none");
            //定时任务
            processEngineConfiguration.setJobExecutorActivate(false);

            return  processEngineConfiguration;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }
}
