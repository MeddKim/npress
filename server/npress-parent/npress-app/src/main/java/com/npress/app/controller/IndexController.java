package com.npress.app.controller;

import com.npress.app.dao.impl.UserDaoImpl;
import com.npress.app.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: Administrator
 * @date : 2017/1/11 0011
 * @Description:
 */
@RestController
public class IndexController {

    @Autowired
    private UserDaoImpl userDao;

    @RequestMapping("/")
    public String view(){
        User user = userDao.selectByPrimaryKey(1);
        System.out.println(user.getUserName());
        return "Hello";
    }
}



