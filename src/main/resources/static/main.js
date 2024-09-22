// 지원서 제출 버튼 클릭할 경우 발생하는 이벤트
document.getElementById("test").addEventListener("submit", (event) => {
  event.preventDefault();

  const currentForm = event.target;

  // 인적사항
  const name = currentForm.name.value; // 이름
  // 성별
  const gender = JSON.parse(
    currentForm.querySelector("input[name='gender']:checked").value
  );
  const birth = currentForm.birth.value; // 생년월일
  const email = currentForm.email.value; // 이메일
  const phoneNumber = currentForm.phoneNumber.value; // 핸드폰 번호
  const country = currentForm.country.value; // 국적
  // 긴급 전화 번호
  const emergencyPhoneNumber = currentForm.emergencyPhoneNumber.value;

  // 긴근전화 번호 관계
  const emergencyPhoneNumberRelationship =
    currentForm.emergencyPhoneNumberRelationship.value;

  // console.log(name);
  // console.log(gender);
  // console.log(country);
  // console.log(birth);
  // console.log(email);
  // console.log(phoneNumber);
  // console.log(emergencyPhoneNumber);
  // console.log(emergencyPhoneNumberRelationship);

  // 기본 정보 입력
  //  1. 교육 커리큘럼 선택
  const supportFieldValue = JSON.parse(
    currentForm.querySelector("input[name='supportField']:checked").value
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

  // console.log(supportFieldValue);
  // console.log(majorSelectedValue);
  // console.log(pathSelectedValue);
  // console.log(learningSelectedValue);

  // 인적 사항
  const location = currentForm.location.value; // 주소

  // console.log(location);

  // 고등학교 정보
  const highSchoolName = currentForm.highSchoolName.value;
  const highSchoolLocation = currentForm.querySelector(
    "select[name='highSchoolLoc']"
  ).value;
  const highSchoolType = currentForm.querySelector(
    "select[name='highSchoolType']"
  ).value;
  const highSchoolStatus = currentForm.querySelector(
    "select[name='highSchoolStatus']"
  ).value;

  // console.log(highSchoolName);
  // console.log(highSchoolLocation);
  // console.log(highSchoolType);
  // console.log(highSchoolStatus);

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
  const universityScore = Number.parseFloat(currentForm.universityScore.value);
  const universityScoreList = Number.parseFloat(
    currentForm.querySelector("select[name='universityScoreList']").value
  );

  // console.log(universityLocation);
  // console.log(universityName);
  // console.log(universityDpartement);
  // console.log(universityMajor);
  console.log(universityStatus);
  // console.log(universityScore);
  // console.log(universityScoreList);

  // 어학 / 자격 / 기타

  // 자격증 정보 가져오기
  const certificate = document.querySelectorAll(
    ".certificate .certificate-list-item"
  );
  const certificateList = [];

  if (certificate.length > 0) {
    certificate.forEach((element) => {
      certificateList.push({
        certificateName: element.certificateName.value,
        certificateGrade: element.certificateGrade.value,
        issuingOrganization: element.issuingOrganization.value,
        certificateDateAcquired: element.certificateDateAcquired.value,
      });
    });
  }

  // 수상경력 정보 가져오기
  const awards = document.querySelectorAll(".awards .awards-list-item");
  const awardsList = [];

  if (awards.length > 0) {
    awards.forEach((element) => {
      awardsList.push({
        awardIssuer: element.awardIssuer.value,
        awardName: element.awardName.value,
        awardDate: element.awardDate.value,
        awardDetails: element.awardDetails.value,
      });
    });
  }

  // 학내외 활동 정보 가져오기
  const activity = document.querySelectorAll(".activity .activity-list-item");
  const activityList = [];

  if (activity.length > 0) {
    activity.forEach((element) => {
      activityList.push({
        activityDescription: element.activityDescription.value,
        activityPeriod: element.activityPeriod.value,
        activityPeriod: element.activityPeriod.value,
      });
    });
  }

  console.log(certificateList);
  console.log(awardsList);
  console.log(activityList);

  // 경력사항
  // 경력 사항 정보 가져오기
  const career = document.querySelectorAll(".career .career-list-item");
  const careerList = [];

  // 경력 사항 정보 저장하기
  if (career.length > 0) {
    career.forEach((element) => {
      careerList.push({
        jobName: element.jobName.value,
        jobType: element.querySelector("select[name='jobType']").value,
        jobTitle: element.jobTitle.value,
        jobDuties: element.jobDuties.value,
        jobTenure: element.jobTenure.value,
      });
    });
  }

  // IT 교육 수강 이력
  const inITLearing = currentForm.inITLearing.value;

  // console.log(careerList);
  // console.log(inITLearing);

  // 자기소개
  const selfIntroduce1 = currentForm.selfIntroduce1.value;
  const selfIntroduce2 = currentForm.selfIntroduce2.value;
  const selfIntroduce3 = currentForm.selfIntroduce3.value;

  // console.log(selfIntroduce1);
  // console.log(selfIntroduce2);
  // console.log(selfIntroduce3);

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

  const questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
  ];

  // console.log(questions);

  fetch("/apply/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // 인적사항
      name,
      gender,
      birth,
      email,
      country,
      phone_number: phoneNumber,
      emergency_phone_number: emergencyPhoneNumber,
      emergency_phone_number_relationship: emergencyPhoneNumberRelationship,

      // 기본 정보
      support_field: supportFieldValue,
      major_field: majorSelectedValue,
      support_path: pathSelectedValue,
      teaching_style: learningSelectedValue,

      // 인적 사항
      address: location,

      // 고등학교 정보
      high_school: highSchoolName,
      high_school_location: highSchoolLocation,
      high_school_type: highSchoolType,
      high_school_status: highSchoolStatus,

      // 대학교 정보
      university: universityName,
      university_location: universityLocation,
      universitye_major: universityMajor,
      universitye_dpartment: universityDpartement,
      universitye_score: universityScore,
      universitye_score_list: universityScoreList,
      universitye_status: universityStatus,

      // 어학, 자격, 기타
      certificate: JSON.stringify(certificateList),
      awards: JSON.stringify(awardsList),
      activity: JSON.stringify(activityList),

      // 경력 사항
      career: JSON.stringify(careerList),
      it_learing: inITLearing,

      // 자기소개서
      selfIntroduce1,
      selfIntroduce2,
      selfIntroduce3,

      // 자격사항
      questions: JSON.stringify(questions),

      // high_school: highSchoolName,
      // high_school_location: highSchoolLocation,
      // high_school_type: highSchoolType,
      // university_location: universityLocation,
      // university: universityName,
      // universitye_dpartment: universityDpartement,
      // universitye_major: universityMajor,
      // university_status: universityStatus,
      // questions: JSON.stringify(questions),
      // it_learing: inITLearing,
      // selfIntroduce1,
      // selfIntroduce2,
      // selfIntroduce3,
      // career: JSON.stringify(careerList),
      // certificate: JSON.stringify(certificateList),
      // awards: JSON.stringify(awardsList),
      // activity: JSON.stringify(activityList),
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

// 직장 경력 추가 버튼 클릭할 경우
document.querySelector(".career button").addEventListener("click", (event) => {
  event.preventDefault();

  const $form = document.createElement("form");
  $form.classList.add("career-list-item");

  // 직장 이름 입력하는 input 타입 생성
  const $inputJobName = document.createElement("input");
  $inputJobName.type = "text";
  $inputJobName.placeholder = "직장명을 입력해주세요." + x++;
  $inputJobName.name = "jobName";

  // 직장 종류를 선택하는 select 타입 생성
  const $selectJobType = document.createElement("select");
  $selectJobType.name = "jobType";

  // 직장 종류 #1. 아르바이트
  const $optionPartTimeJob = document.createElement("option");
  $optionPartTimeJob.value = "아르바이트";
  $optionPartTimeJob.textContent = "아르바이트";

  // 직장 종류 #2. 인턴
  const $optionIntern = document.createElement("option");
  $optionIntern.value = "인턴";
  $optionIntern.textContent = "인턴";

  // 직장 종류 #3. 정규직
  const $optionFullTimeJob = document.createElement("option");
  $optionFullTimeJob.value = "정규직";
  $optionFullTimeJob.textContent = "정규직";

  $selectJobType.appendChild($optionPartTimeJob);
  $selectJobType.appendChild($optionIntern);
  $selectJobType.appendChild($optionFullTimeJob);

  // 직급을 입력하는 input 타입 생성
  const $inputJobTitle = document.createElement("input");
  $inputJobTitle.type = "text";
  $inputJobTitle.placeholder = "직급을 입력해주세요.";
  $inputJobTitle.name = "jobTitle";

  // 담당 업무를 입력하는 input 타입 생성
  const $inputJobDuties = document.createElement("input");
  $inputJobDuties.type = "text";
  $inputJobDuties.placeholder = "담당 업무를 작성해주세요.";
  $inputJobDuties.name = "jobDuties";

  // 업무 기간을 입력하는 input 타입 생성
  const $inputJobTenure = document.createElement("input");
  $inputJobTenure.type = "date";
  $inputJobTenure.name = "jobTenure";

  const $deleteBtn = document.createElement("button");
  $deleteBtn.type = "button";
  $deleteBtn.textContent = "삭제";

  $deleteBtn.addEventListener("click", () => {
    $form.remove();
  });

  $form.appendChild($inputJobName);
  $form.appendChild($selectJobType);
  $form.appendChild($inputJobTitle);
  $form.appendChild($inputJobDuties);
  $form.appendChild($inputJobTenure);
  $form.appendChild($deleteBtn);

  document.querySelector(".career").appendChild($form);
});

// 자격증 경력 추가 버튼 클릭할 경우
document
  .querySelector(".certificate button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const $form = document.createElement("form");
    $form.classList.add("certificate-list-item");

    // 자격증 이름 입력하는 input 타입 생성
    const $inputCertificateName = document.createElement("input");
    $inputCertificateName.type = "text";
    $inputCertificateName.placeholder = "자격증 이름을 명시해주세요.";
    $inputCertificateName.name = "certificateName";

    // 자격증 등급을 입력하는 input 타입 생성
    const $inputCertificateGrade = document.createElement("input");
    $inputCertificateGrade.type = "text";
    $inputCertificateGrade.placeholder = "자격증 등급을 입력해주세요.";
    $inputCertificateGrade.name = "certificateGrade";

    // 자격증 발급 기관을 입력하는 input 타입 생성
    const $inputIssuingOrganization = document.createElement("input");
    $inputIssuingOrganization.type = "text";
    $inputIssuingOrganization.placeholder = "자격증 발급 기관을 작성해주세요.";
    $inputIssuingOrganization.name = "issuingOrganization";

    // 업무 기간을 입력하는 input 타입 생성
    const $inputCertificateDateAcquired = document.createElement("input");
    $inputCertificateDateAcquired.type = "date";
    $inputCertificateDateAcquired.name = "certificateDateAcquired";

    const $deleteBtn = document.createElement("button");
    $deleteBtn.type = "button";
    $deleteBtn.textContent = "삭제";

    $deleteBtn.addEventListener("click", () => {
      $form.remove();
    });

    $form.appendChild($inputCertificateName);
    $form.appendChild($inputCertificateGrade);
    $form.appendChild($inputIssuingOrganization);
    $form.appendChild($inputCertificateDateAcquired);
    $form.appendChild($deleteBtn);

    document.querySelector(".certificate").appendChild($form);
  });

// 수상 경력 추가 버튼 클릭할 경우
document.querySelector(".awards button").addEventListener("click", (event) => {
  event.preventDefault();

  const $form = document.createElement("form");
  $form.classList.add("awards-list-item");

  // 수상기관을 입력하는 input 타입 생성
  const $inputAwardIssuer = document.createElement("input");
  $inputAwardIssuer.type = "text";
  $inputAwardIssuer.placeholder = "수상기관을 명시해주세요.";
  $inputAwardIssuer.name = "awardIssuer";

  // 대회명을 입력하는 input 타입 생성
  const $inputAwardName = document.createElement("input");
  $inputAwardName.type = "text";
  $inputAwardName.placeholder = "대회명을 입력해주세요.";
  $inputAwardName.name = "awardName";

  // 수상일자를 입력하는 input 타입 생성
  const $inputAwardDate = document.createElement("input");
  $inputAwardDate.type = "date";
  $inputAwardDate.name = "awardDate";

  // 수상 내역을 입력하는 input 타입 생성
  const $inputAwardDetails = document.createElement("input");
  $inputAwardDetails.type = "text";
  $inputAwardDetails.placeholder = "수상 내역을 입력해주세요.";
  $inputAwardDetails.name = "awardDetails";

  const $deleteBtn = document.createElement("button");
  $deleteBtn.type = "button";
  $deleteBtn.textContent = "삭제";

  $deleteBtn.addEventListener("click", () => {
    $form.remove();
  });

  $form.appendChild($inputAwardIssuer);
  $form.appendChild($inputAwardName);
  $form.appendChild($inputAwardDate);
  $form.appendChild($inputAwardDetails);
  $form.appendChild($deleteBtn);

  document.querySelector(".awards").appendChild($form);
});

// 수상 경력 추가 버튼 클릭할 경우
document
  .querySelector(".activity button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const $form = document.createElement("form");
    $form.classList.add("activity-list-item");

    // 활동 내용을 입력하는 input 타입 생성
    const $inputActivityDescription = document.createElement("input");
    $inputActivityDescription.type = "text";
    $inputActivityDescription.placeholder = "활동 내용을 명시해주세요.";
    $inputActivityDescription.name = "activityDescription";

    // 활동 기간을 입력하는 input 타입 생성
    const $inputActivityPeriod = document.createElement("input");
    $inputActivityPeriod.type = "date";
    $inputActivityPeriod.name = "activityPeriod";

    // 학내외 활동 직위 또는 역할을 입력하는 input 타입 생성
    const $inputActivityRole = document.createElement("input");
    $inputActivityRole.type = "text";
    $inputActivityRole.placeholder = "직위 또는 역할을 입력해주세요.";
    $inputActivityRole.name = "activityRole";

    const $deleteBtn = document.createElement("button");
    $deleteBtn.type = "button";
    $deleteBtn.textContent = "삭제";

    $deleteBtn.addEventListener("click", () => {
      $form.remove();
    });

    $form.appendChild($inputActivityDescription);
    $form.appendChild($inputActivityPeriod);
    $form.appendChild($inputActivityRole);
    $form.appendChild($deleteBtn);

    document.querySelector(".activity").appendChild($form);
  });
