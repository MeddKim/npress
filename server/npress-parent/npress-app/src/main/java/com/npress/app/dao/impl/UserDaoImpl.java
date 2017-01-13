package com.npress.app.dao.impl;

import com.npress.app.dao.UserMapper;
import com.npress.app.domain.User;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author: Administrator
 * @date : 2016/12/22 0022
 * @Description:
 */

@Component
public class UserDaoImpl implements UserMapper {


    @Autowired
    SqlSessionTemplate sqlSessionTemplate;

    @Override
    public int deleteByPrimaryKey(Integer userId) {
        return 0;
    }

    @Override
    public int insert(User record) {
        return 0;
    }

    @Override
    public int insertSelective(User record) {
        return 0;
    }

    @Override
    public User selectByPrimaryKey(Integer userId) {
        return (User)sqlSessionTemplate.selectOne("com.npress.app.dao.UserMapper.selectByPrimaryKey",userId);
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return 0;
    }
}
