package com.ureca.lg_uplus_ureca_site_be.apply.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/apply")
public class ApplyCotroller {
  
  @PostMapping("/submit")
  public String postMethodName(@RequestBody String entity) {
      return entity;
  }
}
