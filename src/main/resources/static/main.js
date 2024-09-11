document.getElementById("test").addEventListener("submit", (event) => {
  event.preventDefault();

  const uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

  console.log("uuid : " + uuid);

  const currentForm = event.target;

  // 지원자 정보 입력
  const name = currentForm.name.value;
  const age = currentForm.age.value;
  const gender = currentForm.gender.value;
  const country = currentForm.country.value;
  const birth = currentForm.birth.value;
  const email = currentForm.email.value;
  const phoneNumber = currentForm.phoneNumber.value;
  const emergencyPhoneNumber = currentForm.emergencyPhoneNumber.value;
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
  const objectiveValue = currentForm.querySelector(
    "input[name='objective']:checked"
  ).value;

  //  2. 전공, 비전공자 유무 선택
  const majorSelectedValue = currentForm.querySelector(
    "input[name='majorSelected']:checked"
  ).value;

  //  3. 지원 경로 선택
  const pathSelectedValue = currentForm.querySelector(
    "select[name='path']"
  ).value;

  //  4. 대면 방식 선택
  const learning = currentForm.querySelector(
    "input[name='face-to-faceLearning']:checked"
  ).value;

  // 5. 인적 사항 입력
  const location = currentForm.querySelector("input[name='location']").value;

  console.log(objectiveValue);
  console.log(majorSelectedValue);
  console.log(pathSelectedValue);
  console.log(learning);
  console.log(location);
});
