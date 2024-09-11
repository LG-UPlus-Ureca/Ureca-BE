package com.ureca.lg_uplus_ureca_site_be.dao;

import java.sql.SQLException;
import org.apache.ibatis.annotations.Mapper;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

@Mapper
public interface ApplyDAO {

  // DB에 중복된 결과를 확인한다.
  public Apply checkOverlap(String name, String phoneNumber) throws SQLException;
  
  // DB에 새로운 지원서 항목을 추가한다.
  public int registerApply(Apply newList) throws SQLException;

}
