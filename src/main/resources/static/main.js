document.getElementById("test").addEventListener("submit", (event) => {
  event.preventDefault();

  const currentForm = event.target;

  // 지원자 정보 입력
  const name = currentForm.name.value; // 이름
  const age = Number(currentForm.age.value); // 나이

  // 성별
  const gender = JSON.parse(
    currentForm.querySelector("input[name='gender']:checked").value
  );

  const country = currentForm.country.value; // 국가
  const birth = currentForm.birth.value; // 생년월일
  const email = currentForm.email.value; // 이메일
  const phoneNumber = currentForm.phoneNumber.value; // 핸드폰 번호

  // 긴급 전화 번호
  const emergencyPhoneNumber = currentForm.emergencyPhoneNumber.value;

  // 긴근전화 번호 관계
  const emergencyPhoneNumberRelationship =
    currentForm.emergencyPhoneNumberRelationship.value;

  console.log(name);
  console.log(age);
  console.log(gender);
  console.log(country);
  console.log(birth);
  console.log(email);
  console.log(phoneNumber);
  console.log(emergencyPhoneNumber);
  console.log(emergencyPhoneNumberRelationship);

  // 기본 정보 입력
  //  1. 교육 커리큘럼 선택
  const objectiveValue = JSON.parse(
    currentForm.querySelector("input[name='objective']:checked").value
  );

  //  2. 전공, 비전공자 유무 선택
  const majorSelectedValue = JSON.parse(
    currentForm.querySelector("input[name='majorSelected']:checked").value
  );

  //  3. 지원 경로 선택
  const pathSelectedValue = currentForm.querySelector(
    "select[name='path']"
  ).value;

  //  4. 대면 방식 선택
  const learningSelectedValue = JSON.parse(
    currentForm.querySelector("input[name='face-to-faceLearning']:checked")
      .value
  );

  // 5. 인적 사항 입력
  const location = currentForm.location.value;

  console.log(objectiveValue);
  console.log(majorSelectedValue);
  console.log(pathSelectedValue);
  console.log(learningSelectedValue);
  console.log(location);

  // 고등학교 정보
  const highSchoolName = currentForm.highSchoolName.value;
  const highSchoolLocation = currentForm.querySelector(
    "select[name='highSchoolLoc']"
  ).value;
  const highSchoolType = currentForm.querySelector(
    "select[name='highSchoolType']"
  ).value;

  console.log(highSchoolName);
  console.log(highSchoolLocation);
  console.log(highSchoolType);

  // 대학교 정보
  const universityLocation = currentForm.querySelector(
    "select[name='universityLoc']"
  ).value;
  const universityName = currentForm.university.value;
  const universityDpartement = currentForm.universityDpartement.value;
  const universityMajor = currentForm.universityMajor.value;
  const universityStatus = currentForm.querySelector(
    "select[name='universityStatus']"
  ).value;

  console.log(universityLocation);
  console.log(universityName);
  console.log(universityDpartement);
  console.log(universityMajor);

  // 자격사항
  const question1 = JSON.parse(
    currentForm.querySelector("input[name='question1']:checked").value
  );
  const question2 = JSON.parse(
    currentForm.querySelector("input[name='question2']:checked").value
  );
  const question3 = JSON.parse(
    currentForm.querySelector("input[name='question3']:checked").value
  );
  const question4 = JSON.parse(
    currentForm.querySelector("input[name='question4']:checked").value
  );
  const question5 = JSON.parse(
    currentForm.querySelector("input[name='question5']:checked").value
  );
  const question6 = JSON.parse(
    currentForm.querySelector("input[name='question6']:checked").value
  );
  const question7 = JSON.parse(
    currentForm.querySelector("input[name='question7']:checked").value
  );

  console.log(question1);
  console.log(question2);
  console.log(question3);
  console.log(question4);
  console.log(question5);
  console.log(question6);
  console.log(question7, typeof question7);

  // IT 교육 수강 이력
  const inITLearing = currentForm.inITLearing.value;
  console.log(inITLearing);

  // 자기소개
  const selfIntroduce1 = currentForm.selfIntroduce1.value;
  const selfIntroduce2 = currentForm.selfIntroduce2.value;
  const selfIntroduce3 = currentForm.selfIntroduce3.value;

  console.log(selfIntroduce1);
  console.log(selfIntroduce2);
  console.log(selfIntroduce3);

  fetch("/apply/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      age,
      gender,
      country,
      birth,
      email,
      phoneNumber,
      emergencyPhoneNumber,
      emergencyPhoneNumberRelationship,
      supportField: objectiveValue,
      majorField: majorSelectedValue,
      supportPath: pathSelectedValue,
      teachingStyle: learningSelectedValue,
      address: location,
      highSchool: highSchoolName,
      highSchoolLocation: highSchoolLocation,
      highSchoolType: highSchoolType,
      universityLocation: universityLocation,
      university: universityName,
      universityeDpartment: universityDpartement,
      universityeMajor: universityMajor,
      universityStatus,
      additionalQuestions1: question1,
      additionalQuestions2: question2,
      additionalQuestions3: question3,
      additionalQuestions4: question4,
      additionalQuestions5: question5,
      additionalQuestions6: question6,
      additionalQuestions7: question7,
      inITLearing,
      selfIntroduce1,
      selfIntroduce2,
      selfIntroduce3,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
