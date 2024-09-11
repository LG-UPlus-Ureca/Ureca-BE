package com.ureca.lg_uplus_ureca_site_be.apply.dto;

import java.time.LocalDate;

public class Apply {

  private String applicantId;
  private String name;
  private int age;
  private boolean gender;
  private String country;
  private LocalDate birth;
  private String email;
  private String phoneNumber;
  private String emergencyPhoneNumber;
  private String emergencyPhoneNumberRelationship;
  private boolean supportField;
  private boolean majorField;
  private String supportPath;
  private boolean teachingStyle;
  private String address;
  private String highSchool;
  private String highSchoolLocation;
  private String highSchoolType;
  private String universityLocation;
  private String university;
  private String universityeDpartment;
  private String universityeMajor;
  private String universityStatus;
  private boolean additionalQuestions1;
  private boolean additionalQuestions2;
  private boolean additionalQuestions3;
  private boolean additionalQuestions4;
  private boolean additionalQuestions5;
  private boolean additionalQuestions6;
  private boolean additionalQuestions7;
  private String inITLearing;
  private String selfIntroduce1;
  private String selfIntroduce2;
  private String selfIntroduce3;
  

  public Apply() {
  }

  public Apply(String applicantId, String name, int age, boolean gender, String country, LocalDate birth, String email, String phoneNumber, String emergencyPhoneNumber, String emergencyPhoneNumberRelationship, boolean supportField, boolean majorField, String supportPath, boolean teachingStyle, String address, String highSchool, String highSchoolLocation, String highSchoolType, String universityLocation, String university, String universityeDpartment, String universityeMajor, String universityStatus, boolean additionalQuestions1, boolean additionalQuestions2, boolean additionalQuestions3, boolean additionalQuestions4, boolean additionalQuestions5, boolean additionalQuestions6, boolean additionalQuestions7, String inITLearing, String selfIntroduce1, String selfIntroduce2, String selfIntroduce3) {
    this.applicantId = applicantId;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.birth = birth;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.emergencyPhoneNumber = emergencyPhoneNumber;
    this.emergencyPhoneNumberRelationship = emergencyPhoneNumberRelationship;
    this.supportField = supportField;
    this.majorField = majorField;
    this.supportPath = supportPath;
    this.teachingStyle = teachingStyle;
    this.address = address;
    this.highSchool = highSchool;
    this.highSchoolLocation = highSchoolLocation;
    this.highSchoolType = highSchoolType;
    this.universityLocation = universityLocation;
    this.university = university;
    this.universityeDpartment = universityeDpartment;
    this.universityeMajor = universityeMajor;
    this.universityStatus = universityStatus;
    this.additionalQuestions1 = additionalQuestions1;
    this.additionalQuestions2 = additionalQuestions2;
    this.additionalQuestions3 = additionalQuestions3;
    this.additionalQuestions4 = additionalQuestions4;
    this.additionalQuestions5 = additionalQuestions5;
    this.additionalQuestions6 = additionalQuestions6;
    this.additionalQuestions7 = additionalQuestions7;
    this.inITLearing = inITLearing;
    this.selfIntroduce1 = selfIntroduce1;
    this.selfIntroduce2 = selfIntroduce2;
    this.selfIntroduce3 = selfIntroduce3;
  }


  public String getApplicantId() {
    return this.applicantId;
  }

  public void setApplicantId(String applicantId) {
    this.applicantId = applicantId;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public boolean isGender() {
    return this.gender;
  }

  public boolean getGender() {
    return this.gender;
  }

  public void setGender(boolean gender) {
    this.gender = gender;
  }

  public String getCountry() {
    return this.country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public LocalDate getBirth() {
    return this.birth;
  }

  public void setBirth(LocalDate birth) {
    this.birth = birth;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhoneNumber() {
    return this.phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getEmergencyPhoneNumber() {
    return this.emergencyPhoneNumber;
  }

  public void setEmergencyPhoneNumber(String emergencyPhoneNumber) {
    this.emergencyPhoneNumber = emergencyPhoneNumber;
  }

  public String getEmergencyPhoneNumberRelationship() {
    return this.emergencyPhoneNumberRelationship;
  }

  public void setEmergencyPhoneNumberRelationship(String emergencyPhoneNumberRelationship) {
    this.emergencyPhoneNumberRelationship = emergencyPhoneNumberRelationship;
  }

  public boolean isSupportField() {
    return this.supportField;
  }

  public boolean getSupportField() {
    return this.supportField;
  }

  public void setSupportField(boolean supportField) {
    this.supportField = supportField;
  }

  public boolean isMajorField() {
    return this.majorField;
  }

  public boolean getMajorField() {
    return this.majorField;
  }

  public void setMajorField(boolean majorField) {
    this.majorField = majorField;
  }

  public String getSupportPath() {
    return this.supportPath;
  }

  public void setSupportPath(String supportPath) {
    this.supportPath = supportPath;
  }

  public boolean isTeachingStyle() {
    return this.teachingStyle;
  }

  public boolean getTeachingStyle() {
    return this.teachingStyle;
  }

  public void setTeachingStyle(boolean teachingStyle) {
    this.teachingStyle = teachingStyle;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getHighSchool() {
    return this.highSchool;
  }

  public void setHighSchool(String highSchool) {
    this.highSchool = highSchool;
  }

  public String getHighSchoolLocation() {
    return this.highSchoolLocation;
  }

  public void setHighSchoolLocation(String highSchoolLocation) {
    this.highSchoolLocation = highSchoolLocation;
  }

  public String getHighSchoolType() {
    return this.highSchoolType;
  }

  public void setHighSchoolType(String highSchoolType) {
    this.highSchoolType = highSchoolType;
  }

  public String getUniversityLocation() {
    return this.universityLocation;
  }

  public void setUniversityLocation(String universityLocation) {
    this.universityLocation = universityLocation;
  }

  public String getUniversity() {
    return this.university;
  }

  public void setUniversity(String university) {
    this.university = university;
  }

  public String getUniversityeDpartment() {
    return this.universityeDpartment;
  }

  public void setUniversityeDpartment(String universityeDpartment) {
    this.universityeDpartment = universityeDpartment;
  }

  public String getUniversityeMajor() {
    return this.universityeMajor;
  }

  public void setUniversityeMajor(String universityeMajor) {
    this.universityeMajor = universityeMajor;
  }

  public String getUniversityStatus() {
    return this.universityStatus;
  }

  public void setUniversityStatus(String universityStatus) {
    this.universityStatus = universityStatus;
  }

  public boolean isAdditionalQuestions1() {
    return this.additionalQuestions1;
  }

  public boolean getAdditionalQuestions1() {
    return this.additionalQuestions1;
  }

  public void setAdditionalQuestions1(boolean additionalQuestions1) {
    this.additionalQuestions1 = additionalQuestions1;
  }

  public boolean isAdditionalQuestions2() {
    return this.additionalQuestions2;
  }

  public boolean getAdditionalQuestions2() {
    return this.additionalQuestions2;
  }

  public void setAdditionalQuestions2(boolean additionalQuestions2) {
    this.additionalQuestions2 = additionalQuestions2;
  }

  public boolean isAdditionalQuestions3() {
    return this.additionalQuestions3;
  }

  public boolean getAdditionalQuestions3() {
    return this.additionalQuestions3;
  }

  public void setAdditionalQuestions3(boolean additionalQuestions3) {
    this.additionalQuestions3 = additionalQuestions3;
  }

  public boolean isAdditionalQuestions4() {
    return this.additionalQuestions4;
  }

  public boolean getAdditionalQuestions4() {
    return this.additionalQuestions4;
  }

  public void setAdditionalQuestions4(boolean additionalQuestions4) {
    this.additionalQuestions4 = additionalQuestions4;
  }

  public boolean isAdditionalQuestions5() {
    return this.additionalQuestions5;
  }

  public boolean getAdditionalQuestions5() {
    return this.additionalQuestions5;
  }

  public void setAdditionalQuestions5(boolean additionalQuestions5) {
    this.additionalQuestions5 = additionalQuestions5;
  }

  public boolean isAdditionalQuestions6() {
    return this.additionalQuestions6;
  }

  public boolean getAdditionalQuestions6() {
    return this.additionalQuestions6;
  }

  public void setAdditionalQuestions6(boolean additionalQuestions6) {
    this.additionalQuestions6 = additionalQuestions6;
  }

  public boolean isAdditionalQuestions7() {
    return this.additionalQuestions7;
  }

  public boolean getAdditionalQuestions7() {
    return this.additionalQuestions7;
  }

  public void setAdditionalQuestions7(boolean additionalQuestions7) {
    this.additionalQuestions7 = additionalQuestions7;
  }

  public String getInITLearing() {
    return this.inITLearing;
  }

  public void setInITLearing(String inITLearing) {
    this.inITLearing = inITLearing;
  }

  public String getSelfIntroduce1() {
    return this.selfIntroduce1;
  }

  public void setSelfIntroduce1(String selfIntroduce1) {
    this.selfIntroduce1 = selfIntroduce1;
  }

  public String getSelfIntroduce2() {
    return this.selfIntroduce2;
  }

  public void setSelfIntroduce2(String selfIntroduce2) {
    this.selfIntroduce2 = selfIntroduce2;
  }

  public String getSelfIntroduce3() {
    return this.selfIntroduce3;
  }

  public void setSelfIntroduce3(String selfIntroduce3) {
    this.selfIntroduce3 = selfIntroduce3;
  }

}
