package com.ureca.lg_uplus_ureca_site_be.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;
import com.ureca.lg_uplus_ureca_site_be.service.ApplyService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/apply")
public class ApplyCotroller {
  
  @Autowired
  ApplyService service;

  // 지원서 제출 할 경우
  @PostMapping("/submit")
  public Map<String, Object> postMethodName(@RequestBody Apply apply) throws SQLException {

    Map<String, Object> response = new HashMap<>(); // 결과값 반환

    // 지원자 고유한 키 값 생성
    UUID uuid4 = UUID.randomUUID();
    apply.setApplicantId(uuid4.toString()); // 지원자 고유한 키 값 등록

    // 동일한 이름, 전화번호로 지원서를 제출한 경우 -> 중복된 지원 항목 존재 결과 반환
    
    // 위의 조건에 위배되지 않는 경우 -> 지원서 DB에 등록
    int result = service.registerApplication(apply);
    System.out.println(result);

    return response;
  }


  // 지원서 확인
  @GetMapping("/confirm")
  public String getMethodName() {
      return "My List Confirm";
  }
  
}
