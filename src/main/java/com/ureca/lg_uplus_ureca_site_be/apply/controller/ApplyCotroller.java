package com.ureca.lg_uplus_ureca_site_be.apply.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/apply")
public class ApplyCotroller {
  
  @GetMapping("/info")
  public String getMethodName() {
      return "ㅁㄴㅇㅁㄴㅇㄴㅁㅇ";
  }
  

}
