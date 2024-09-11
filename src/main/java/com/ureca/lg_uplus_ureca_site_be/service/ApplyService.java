package com.ureca.lg_uplus_ureca_site_be.service;

import java.sql.SQLException;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

// Apply 비즈니스 로직을 수행하는 Service Inferface
// ApplyService 제공 기능 -> 중복된 지원서 항목 확인, 지원서 제출
public interface ApplyService {

  // 중복된 지원서 항목 확인 Service
  public Apply checkOverlapApply(String name, String phoneNumber) throws SQLException;

  // 지원서 제출 Service
  public int registerApplication(Apply newList) throws SQLException;

}