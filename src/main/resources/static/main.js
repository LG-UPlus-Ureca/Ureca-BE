let x = 1;

// 지원서 제출 버튼 클릭할 경우 발생하는 이벤트
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

  // console.log(name);
  // console.log(age);
  // console.log(gender);
  // console.log(country);
  // console.log(birth);
  // console.log(email);
  // console.log(phoneNumber);
  // console.log(emergencyPhoneNumber);
  // console.log(emergencyPhoneNumberRelationship);

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

  // console.log(objectiveValue);
  // console.log(majorSelectedValue);
  // console.log(pathSelectedValue);
  // console.log(learningSelectedValue);
  // console.log(location);

  // 고등학교 정보
  const highSchoolName = currentForm.highSchoolName.value;
  const highSchoolLocation = currentForm.querySelector(
    "select[name='highSchoolLoc']"
  ).value;
  const highSchoolType = currentForm.querySelector(
    "select[name='highSchoolType']"
  ).value;

  // console.log(highSchoolName);
  // console.log(highSchoolLocation);
  // console.log(highSchoolType);

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

  // console.log(universityLocation);
  // console.log(universityName);
  // console.log(universityDpartement);
  // console.log(universityMajor);

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

  // console.log(question1);
  // console.log(question2);
  // console.log(question3);
  // console.log(question4);
  // console.log(question5);
  // console.log(question6);
  // console.log(question7, typeof question7);

  // IT 교육 수강 이력
  const inITLearing = currentForm.inITLearing.value;
  // console.log(inITLearing);

  // 자기소개
  const selfIntroduce1 = currentForm.selfIntroduce1.value;
  const selfIntroduce2 = currentForm.selfIntroduce2.value;
  const selfIntroduce3 = currentForm.selfIntroduce3.value;

  // console.log(selfIntroduce1);
  // console.log(selfIntroduce2);
  // console.log(selfIntroduce3);

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

  // console.log(careerList);

  // fetch("/apply/submit", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name,
  //     age,
  //     gender,
  //     country,
  //     birth,
  //     email,
  //     phoneNumber,
  //     emergencyPhoneNumber,
  //     emergencyPhoneNumberRelationship,
  //     supportField: objectiveValue,
  //     majorField: majorSelectedValue,
  //     supportPath: pathSelectedValue,
  //     teachingStyle: learningSelectedValue,
  //     address: location,
  //     highSchool: highSchoolName,
  //     highSchoolLocation: highSchoolLocation,
  //     highSchoolType: highSchoolType,
  //     universityLocation: universityLocation,
  //     university: universityName,
  //     universityeDpartment: universityDpartement,
  //     universityeMajor: universityMajor,
  //     universityStatus,
  //     additionalQuestions1: question1,
  //     additionalQuestions2: question2,
  //     additionalQuestions3: question3,
  //     additionalQuestions4: question4,
  //     additionalQuestions5: question5,
  //     additionalQuestions6: question6,
  //     additionalQuestions7: question7,
  //     inITLearing,
  //     selfIntroduce1,
  //     selfIntroduce2,
  //     selfIntroduce3,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
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
