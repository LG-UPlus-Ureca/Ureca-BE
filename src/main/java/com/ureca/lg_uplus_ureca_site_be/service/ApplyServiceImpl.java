package com.ureca.lg_uplus_ureca_site_be.service;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ureca.lg_uplus_ureca_site_be.dao.ApplyDAO;
import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

@Service
public class ApplyServiceImpl implements ApplyService {

  @Autowired
  ApplyDAO dao;

  @Override // 중복된 지원서 항목 존재 여부 반환
  public Apply checkOverlapApply(String name, String phoneNumber) throws SQLException {
    return dao.checkOverlap(name, phoneNumber);
  }

  @Override // 새로운 지원서 항목 생성 여부 반환
  public int registerApplication(Apply newList) throws SQLException {
    return dao.registerApply(newList);
  }
  
}
