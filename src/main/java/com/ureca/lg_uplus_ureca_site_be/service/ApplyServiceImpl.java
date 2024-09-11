package com.ureca.lg_uplus_ureca_site_be.service;

import java.sql.SQLException;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

@Service
public class ApplyServiceImpl implements ApplyService {

  // @Autowired
  // ApplyDAO dao

  @Override
  public Apply checkOverlapApply(String name, String phoneNumber) throws SQLException {
    return dao.checkOverlap(name, phoneNumber);
  }

  @Override
  public int registerApplication(Apply newList) throws SQLException {
    return dao.registerApply(newList);
  }
  
}
