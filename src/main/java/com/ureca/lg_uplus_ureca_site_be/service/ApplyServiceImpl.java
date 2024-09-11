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
    throw new UnsupportedOperationException("Unimplemented method 'checkOverlapApply'");
  }

  @Override
  public int registerApplication(Apply newList) throws SQLException {
    throw new UnsupportedOperationException("Unimplemented method 'registerApplication'");
  }
  
}
