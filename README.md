# Ureca-BE

타 국비지원인 SSAFY, Softeer와 같은 사이트는 지원서 페이지가 있지만 LG U+ URECA <br /> 국비지원 교육은 지원 사이트가 없기 떄문이 시작한 프로젝트입니다.

## Version 1.0.0

- 지원서 페이지에 필요한 테이블 구조 생성
- Spring Boot 초기 설정

  - MySQL, MyBatis 의존성 추가
  - DB <-> Spring Boot 연결

- 지원서 페이지에서 작성한 입력 데이터들을 DB에 연결하기 위한 Apply Rest Controller 생성 및 DTO, DAO, Service 로직 작성

## Version 1.0.1

- Main 브랜치에서 오류 및 기능 수정

## Version 1.1.0

- 지원서 확인 API 기능 구현 완료
- 테스트 용도로 만들어둔 정적 파일 index.html, main.js 파일 삭제
