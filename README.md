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
- 회원가입 회사/직장 설정 api 연동(데이터 불러서 필터링(filter()) 정리 필요)
- 채용 페이지 캐러셀 구현

#### :cold_sweat: 개발 도중에 발생한 이슈
- axios post array data
  - 해결 : https://stackoverflow.com/questions/45072255/axios-post-array-data
 
### :pushpin: 2022-07-22 진행상황
- 기본 이력서 생성 api 연동
- 관심태그 api 연동
- outlet 이용(정리 필요)
- 채용 섹션 페이지 구현
- useLocation으로 head 조건부 스타일링(정리 필요)
- 로그인 api 연동
 
### :pushpin: 2022-07-23 진행상황
- 채용 로그인 된 화면 구현
- 관심태그 설정 구현(정리 필요) 및 API 연동
- 이력서 페이지 구현(로그인 전)
- header fixed(정리 필요) 
- 이력서 페이지 구현(로그인 후)
 
### :pushpin: 2022-07-24 진행상황
- 이력서 작성 페이지 구현
- 메뉴바 클릭시 뜨는 직군 카테고리 구현(정리 필요)
 
### :pushpin: 2022-07-25 진행상황
- 이력서 전체조회 api 연동
- 채용 포지션 조회 페이지 구현 중
- 이력서 생성 api 연동
- 이력서 정보 가져오기 api 연동
- 드롭박스 띄우기 구현(정리 필요)
- 이력서 삭제 구현 및 api 연동

#### :cold_sweat: 개발 도중에 발생한 이슈
- how axios send header
  - 해결 : https://flaviocopes.com/axios-send-authorization-header/
- map으로 뽑은 드롭박스 개별적으로 띄우기
  - 해결 : https://velog.io/@conan/react-modal
- axios 비동기적으로 요청하고 응답 받기
```
useEffect(() => {
        let isCompleted = false;
        axios.get("https://zezeserver.shop/app/resumes",{
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => {
            if(!isCompleted){
                console.log(res);
                setResume(res.data.result);
            }
            
        })
        .catch(err => console.log(err))

        return() => {
            console.log("done");
            isCompleted = true;
        };
    }, [])
```
 
### :pushpin: 2022-07-26 진행상황
- 채용 포지션 조회 페이지 레이아웃 구현(화살표 회전 정리 필요)
- 스크롤 필터 구현(정리 필요)
- 채용 공고 페이지 레이아웃 구현
- 채용 공고 페이지 캐러셀 구현
- 회사 상세 페이지 레이아웃 구현
- ScrollToTop 설정 (정리 필요)
- 프로필 드롭 박스 구현
- 로그아웃 구현(토큰 삭제)
- 프로필 페이지 레이아웃 구현

#### :speech_balloon: 2차 피드백
```
1.영상은 서버 개발자들이 서버를 배포하기 전에 찍어라
2.영상에 API를 어떻게 엮었는지 잘 설명해야한다
3.중복 로그인 / 자동로그인 API도 엮어야할 듯..!
```
 
### :pushpin: 2022-07-27 진행상황
- 직무 메뉴 구현(직군에 따른 직무 조회 API 연동)
- 채용 공고 조회 직군 조회 드롭 구현(직군 전체 조회 API 연동)
- 응답률 드롭 구현
- 스킬 드롭 구현
- 직무 드롭 구현(직무 조회 API 연동)
- 채용 상세 페이지 필터링(jobGroupId, jobId) 구현
- 채용 상세 페이지, 회사 상세페이지 API 연동
- 중복 로그인 체크 구현(로그인 페이지에서 회원인지 아닌지 체크하는 API 연동)
 
### :pushpin: 2022-07-28 진행상황
- 이력서 제목 수정 구현(이력서 제목 가져오기, 수정하기 API 연동)
- 유저 기본 정보 불러오기 구현(유저 기본정보 조회 API 연동)
- 프로필 조회 API 연동
- 회사 Follow API, Follow 해제 API 연동
- 태그에 따른 인사이트 포스트 보여주기 API 연동
- 이력서 동적 라우팅 구현
- companyTag를 통해 company 목록 조회 페이지 구현
- compnayTag를 통해 company 목록 조회 API 연동
- font 적용# RisingTest_wanted
