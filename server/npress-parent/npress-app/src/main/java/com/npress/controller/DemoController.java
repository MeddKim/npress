package com.npress.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: Administrator
 * @date : 2016/12/23 0023
 * @Description:
 */
@RestController
@RequestMapping("/user")
public class DemoController {

    @RequestMapping("query/{id}/detail")
    public String view(@PathVariable("id") Long id){
        return "hello world"+id;
    }
}
