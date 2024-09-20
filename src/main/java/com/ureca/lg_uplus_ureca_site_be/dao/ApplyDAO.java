package com.ureca.lg_uplus_ureca_site_be.dao;

import java.sql.SQLException;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ureca.lg_uplus_ureca_site_be.dto.Apply;

@Mapper
public interface ApplyDAO {

  // DB에 지원서 결과를 반환한다.
  public Apply checkOverlap(Map<String, Object> params) throws SQLException;
  
  // DB에 새로운 지원서 항목을 추가한다.
  public int registerApply(Apply newList) throws SQLException;

}
