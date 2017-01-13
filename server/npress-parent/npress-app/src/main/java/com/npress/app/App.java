package com.npress.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

/**
 * @author: Administrator
 * @date : 2017/1/11 0011
 * @Description:
 */
@SpringBootApplication
public class App
{

    public static void main(String[] args) throws Exception {

        ApplicationContext ctx = SpringApplication.run(App.class, args);
        String[] beanNames =  ctx.getBeanDefinitionNames();
        System.out.println("所以beanNames个数："+beanNames.length);
        for(String bn:beanNames){
            System.out.println(bn);
        }
    }


}
