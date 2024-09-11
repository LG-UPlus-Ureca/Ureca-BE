package com.ureca.lg_uplus_ureca_site_be.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/apply")
public class ApplyCotroller {
  
  @PostMapping("/submit")
  public String postMethodName(@RequestBody Apply apply) {
      System.out.println(apply.toString());
      return "Hello";
  }
}
