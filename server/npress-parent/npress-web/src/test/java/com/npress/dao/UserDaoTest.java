package com.npress.dao;

import com.npress.web.dao.impl.UserDaoImpl;
import com.npress.web.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author: Administrator
 * @date : 2016/12/22 0022
 * @Description:
 */

@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = {"classpath*:applicationContext.xml"})
@ContextConfiguration(locations = {"classpath:applicationContext.xml"})
public class UserDaoTest {

    @Autowired
    UserDaoImpl userDao;

    @Test
    public void showUser(){
        User user = userDao.selectByPrimaryKey(1);
        System.out.println(user.getUserName());
    }


}
