package com.ureca.lg_uplus_ureca_site_be.service;

import java.sql.SQLException;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ureca.lg_uplus_ureca_site_be.dao.ApplyDAO;
import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

@Service
public class ApplyServiceImpl implements ApplyService {

  @Autowired
  ApplyDAO dao;

  @Override // 새로운 지원서 항목 생성 여부 반환
  public int registerApplication(Apply newList) throws SQLException {
    return dao.registerApply(newList);
  }

  @Override // 중복된 지원서 항목 존재 여부 반환
  public Apply checkOverlapApply(String name, String phoneNumber) throws SQLException {
    
    // MyBatis에는 기본적으로 하나의 자료형만 가질 수 있기 때문에 Map 객체를 이용해서 두 개의 파라미터를 넘긴다.
    Map<String, Object> params = new HashMap<>();

    params.put("name", name); 
    params.put("phoneNumber", phoneNumber);
    
    return dao.checkOverlap(params);
  }
  
}
