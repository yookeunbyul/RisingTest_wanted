# 실비아 개발일지
### :pushpin: 2022-07-16 진행상황
- 기획서 보드 작성
- head layout 구현
 
### :pushpin: 2022-07-17 진행상황
- 이메일 모달 구현
- react-hook-form 설정(validation)
- Sing UP 모달 구현
 
#### :cold_sweat: 개발 도중에 발생한 이슈
- useNavigate() may be used only in the context of a <Router> component 오류
  - 해결 : https://velog.io/@sseunn/useNavigate-Block
 
### :pushpin: 2022-07-18 진행상황
- 회원가입 온보딩 첫번째 페이지 제작
- sign validation 수정
- 회원가입 API 연동 성공
- 회원가입 온보딩 두번째 페이지 제작
- 회원가입 온보딩 세번째 페이지 제작
 
### :pushpin: 2022-07-19 진행상황
- jobGroup, userId, jobcategories, skill API 연동
- skill API 연동
- nav 수정
- 1차 피드백

#### :cold_sweat: 개발 도중에 발생한 이슈
- Objects are not valid as a React child 오류
  - 해결 : https://velog.io/@bigbrothershin/React-Objects-are-not-valid-as-a-React-child-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC

#### :speech_balloon: 1차 피드백
```
1. 소셜로그인은 추후로
2. 회사 상세페이지도 기획서에 추가
3. 로그인 아닐때랑 일때랑 화면이 다르니깐 잘 고려해라..

* 나중에 README.md는 리액트 안에있는 README.md로 개발일지 적어라

2주차 피드백까지 가이드
0. 우선 API는 로그인 & 회원가입 // 자동로그인(새로고침해도 유지되게)까지 하고..
1. 기획서에 적힌 90%.. 퍼블리싱만..

onChange , useEffect 에서 불러오면 계속 호출하니깐 서버 과부하
디바운스를 쓰거나,,,
아니면 한번에 부르고 필터를 하는 게 더 나을듯 ?? => 이거는 이제 나중에 ... 더 디벨롭해보자
```
 
### :pushpin: 2022-07-20 진행상황
- 랜딩페이지 캐러셀 구현
- 인사이트 헤더 스크롤 구현(React-slick)
- 인사이트 구현
 
### :pushpin: 2022-07-21 진행상황
- 아티클, vod, 이벤트 구현
- footer 구현
- 랜딩페이지 완성
- 회원가입 전문분야 api 연동
- 회원가입 회사/직장 설정 api 연동
- 채용 페이지 캐러셀 구현

#### :cold_sweat: 개발 도중에 발생한 이슈
- axios post array data
  - 해결 : https://stackoverflow.com/questions/45072255/axios-post-array-data
 
### :pushpin: 2022-07-22 진행상황
- 기본 이력서 생성 api 연동
- 관심태그 api 연동
- outlet 이용
