package com.ureca.lg_uplus_ureca_site_be.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/apply")
@CrossOrigin("*")
public class ApplyCotroller {
  
  @Autowired
  ApplyService service;

  // 지원서 제출 API
  @PostMapping("/submit")
  public Map<String, Object> postMethodName(@RequestBody Apply apply) throws SQLException {

    Map<String, Object> response = new HashMap<>(); // 결과값 반환

    // 지원자 고유한 키 값 생성
    UUID uuid4 = UUID.randomUUID();
    apply.setApplicant_id(uuid4.toString()); // 지원자 고유한 키 값 등록

    // 중복된 이메일 체크
    if(service.checkEmailApply(apply.getEmail())) {
      response.put("status", 409);
      response.put("message", "DUPLICATE_EMAIL");
    }

    // 동일 지원서 정보 존재 여부 체크
    else if(service.checkOverlapApply(apply.getName(), apply.getPhone_number())) {
      response.put("status", 409);
      response.put("message", "DUPLICATE_APPLICATION_ERROR");
    }

    // 모든 조건 위배되지 않을 경우 지원서 DB에 등록
    else {
      // 위의 조건에 위배되지 않는 경우 -> 지원서 DB에 등록
      service.registerApplication(apply);

      response.put("status", 201);
      response.put("message", "APPLICATION_SUBMISSION_SUCCESS");
    }

    return response;
  }

  // 지원서 확인 API
  @GetMapping("/confirm")
  public String getMethodName(@RequestParam("name") String name, @RequestParam("email") String email, @RequestParam("phoneNumber") String phoneNumber) {
    
    // 입력한 이름과 전화번호에 해당하는 지원서 확인
    Map<String, Object> response = new HashMap<>();

    return name + email + phoneNumber;
  }
  
}
