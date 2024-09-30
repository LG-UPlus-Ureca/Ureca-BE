package com.ureca.lg_uplus_ureca_site_be.service;

import java.sql.SQLException;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

// Apply 비즈니스 로직을 수행하는 Service Inferface
// ApplyService 제공 기능 -> 지원서 정보 반환, 지원서 제출
public interface ApplyService {

  // 지원서 제출 Service
  public int registerApplication(Apply newList) throws SQLException;

  // 중복 이메일 정보 반환
  public boolean checkEmailApply(String email) throws SQLException;

  // 지원서 정보 반환 Service
  public boolean checkOverlapApply(String name, String phoneNumber) throws SQLException;

}