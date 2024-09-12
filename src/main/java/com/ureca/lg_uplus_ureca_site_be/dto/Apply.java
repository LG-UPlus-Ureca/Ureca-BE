package com.ureca.lg_uplus_ureca_site_be.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.databind.JsonNode;

public class Apply {

  private String applicant_id;
  private String name;
  private int age;
  private boolean gender;
  private String country;
  private LocalDate birth;
  private String email;
  private String phone_number;
  private String emergency_phone_number;
  private String emergency_phone_number_relationship;
  private boolean support_field;
  private boolean major_field;
  private String support_path;
  private boolean teaching_style;
  private String address;
  private String high_school;
  private String high_school_location;
  private String high_school_type;
  private String university_location;
  private String university;
  private String universitye_dpartment;
  private String universitye_major;
  private String university_status;
  private String questions;
  private String it_learing;
  private String selfIntroduce1;
  private String selfIntroduce2;
  private String selfIntroduce3;
  private String career;
  private String certificate;
  private String awards;
  private String activity;


  public Apply() {
  }


  public Apply(String applicant_id, String name, int age, boolean gender, String country, LocalDate birth, String email, String phone_number, String emergency_phone_number, String emergency_phone_number_relationship, boolean support_field, boolean major_field, String support_path, boolean teaching_style, String address, String high_school, String high_school_location, String high_school_type, String university_location, String university, String universitye_dpartment, String universitye_major, String university_status, String questions, String it_learing, String selfIntroduce1, String selfIntroduce2, String selfIntroduce3, String career, String certificate, String awards, String activity) {
    this.applicant_id = applicant_id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.birth = birth;
    this.email = email;
    this.phone_number = phone_number;
    this.emergency_phone_number = emergency_phone_number;
    this.emergency_phone_number_relationship = emergency_phone_number_relationship;
    this.support_field = support_field;
    this.major_field = major_field;
    this.support_path = support_path;
    this.teaching_style = teaching_style;
    this.address = address;
    this.high_school = high_school;
    this.high_school_location = high_school_location;
    this.high_school_type = high_school_type;
    this.university_location = university_location;
    this.university = university;
    this.universitye_dpartment = universitye_dpartment;
    this.universitye_major = universitye_major;
    this.university_status = university_status;
    this.questions = questions;
    this.it_learing = it_learing;
    this.selfIntroduce1 = selfIntroduce1;
    this.selfIntroduce2 = selfIntroduce2;
    this.selfIntroduce3 = selfIntroduce3;
    this.career = career;
    this.certificate = certificate;
    this.awards = awards;
    this.activity = activity;
  }


  public String getApplicant_id() {
    return this.applicant_id;
  }

  public void setApplicant_id(String applicant_id) {
    this.applicant_id = applicant_id;
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

  public String getPhone_number() {
    return this.phone_number;
  }

  public void setPhone_number(String phone_number) {
    this.phone_number = phone_number;
  }

  public String getEmergency_phone_number() {
    return this.emergency_phone_number;
  }

  public void setEmergency_phone_number(String emergency_phone_number) {
    this.emergency_phone_number = emergency_phone_number;
  }

  public String getEmergency_phone_number_relationship() {
    return this.emergency_phone_number_relationship;
  }

  public void setEmergency_phone_number_relationship(String emergency_phone_number_relationship) {
    this.emergency_phone_number_relationship = emergency_phone_number_relationship;
  }

  public boolean isSupport_field() {
    return this.support_field;
  }

  public boolean getSupport_field() {
    return this.support_field;
  }

  public void setSupport_field(boolean support_field) {
    this.support_field = support_field;
  }

  public boolean isMajor_field() {
    return this.major_field;
  }

  public boolean getMajor_field() {
    return this.major_field;
  }

  public void setMajor_field(boolean major_field) {
    this.major_field = major_field;
  }

  public String getSupport_path() {
    return this.support_path;
  }

  public void setSupport_path(String support_path) {
    this.support_path = support_path;
  }

  public boolean isTeaching_style() {
    return this.teaching_style;
  }

  public boolean getTeaching_style() {
    return this.teaching_style;
  }

  public void setTeaching_style(boolean teaching_style) {
    this.teaching_style = teaching_style;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getHigh_school() {
    return this.high_school;
  }

  public void setHigh_school(String high_school) {
    this.high_school = high_school;
  }

  public String getHigh_school_location() {
    return this.high_school_location;
  }

  public void setHigh_school_location(String high_school_location) {
    this.high_school_location = high_school_location;
  }

  public String getHigh_school_type() {
    return this.high_school_type;
  }

  public void setHigh_school_type(String high_school_type) {
    this.high_school_type = high_school_type;
  }

  public String getUniversity_location() {
    return this.university_location;
  }

  public void setUniversity_location(String university_location) {
    this.university_location = university_location;
  }

  public String getUniversity() {
    return this.university;
  }

  public void setUniversity(String university) {
    this.university = university;
  }

  public String getUniversitye_dpartment() {
    return this.universitye_dpartment;
  }

  public void setUniversitye_dpartment(String universitye_dpartment) {
    this.universitye_dpartment = universitye_dpartment;
  }

  public String getUniversitye_major() {
    return this.universitye_major;
  }

  public void setUniversitye_major(String universitye_major) {
    this.universitye_major = universitye_major;
  }

  public String getUniversity_status() {
    return this.university_status;
  }

  public void setUniversity_status(String university_status) {
    this.university_status = university_status;
  }

  public String getQuestions() {
    return this.questions;
  }

  public void setQuestions(String questions) {
    this.questions = questions;
  }

  public String getIt_learing() {
    return this.it_learing;
  }

  public void setIt_learing(String it_learing) {
    this.it_learing = it_learing;
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

  public String getCareer() {
    return this.career;
  }

  public void setCareer(String career) {
    this.career = career;
  }

  public String getCertificate() {
    return this.certificate;
  }

  public void setCertificate(String certificate) {
    this.certificate = certificate;
  }

  public String getAwards() {
    return this.awards;
  }

  public void setAwards(String awards) {
    this.awards = awards;
  }

  public String getActivity() {
    return this.activity;
  }

  public void setActivity(String activity) {
    this.activity = activity;
  }


  @Override
  public String toString() {
    return "{" +
      " applicant_id='" + getApplicant_id() + "'" +
      ", name='" + getName() + "'" +
      ", age='" + getAge() + "'" +
      ", gender='" + isGender() + "'" +
      ", country='" + getCountry() + "'" +
      ", birth='" + getBirth() + "'" +
      ", email='" + getEmail() + "'" +
      ", phone_number='" + getPhone_number() + "'" +
      ", emergency_phone_number='" + getEmergency_phone_number() + "'" +
      ", emergency_phone_number_relationship='" + getEmergency_phone_number_relationship() + "'" +
      ", support_field='" + isSupport_field() + "'" +
      ", major_field='" + isMajor_field() + "'" +
      ", support_path='" + getSupport_path() + "'" +
      ", teaching_style='" + isTeaching_style() + "'" +
      ", address='" + getAddress() + "'" +
      ", high_school='" + getHigh_school() + "'" +
      ", high_school_location='" + getHigh_school_location() + "'" +
      ", high_school_type='" + getHigh_school_type() + "'" +
      ", university_location='" + getUniversity_location() + "'" +
      ", university='" + getUniversity() + "'" +
      ", universitye_dpartment='" + getUniversitye_dpartment() + "'" +
      ", universitye_major='" + getUniversitye_major() + "'" +
      ", university_status='" + getUniversity_status() + "'" +
      ", questions='" + getQuestions() + "'" +
      ", it_learing='" + getIt_learing() + "'" +
      ", selfIntroduce1='" + getSelfIntroduce1() + "'" +
      ", selfIntroduce2='" + getSelfIntroduce2() + "'" +
      ", selfIntroduce3='" + getSelfIntroduce3() + "'" +
      ", career='" + getCareer() + "'" +
      ", certificate='" + getCertificate() + "'" +
      ", awards='" + getAwards() + "'" +
      ", activity='" + getActivity() + "'" +
      "}";
  }


}
