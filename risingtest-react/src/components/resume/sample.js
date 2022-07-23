import styled from 'styled-components';

const Sample = () => {
    return (
    <Section>
        <div className="box">
            <div className="title">쓰는 사람도 보는 사람도 편하게</div>
            <div className="btn-wrap">
                <button>이력서 샘플 다운로드</button>
            </div>
            <div className="content">
                <div className="back">
                    <div className="name">김티드</div>
                    <div className="info">
                        <div className="section email">
                            이메일: wanted@wantedlab.com
                            <br/>
                            연락처: 000-0000-0000
                        </div>
                        <div className="section bubble">
                            <span>성별, 사진 등 불필요한 개인정보 최소화</span>
                        </div>
                    </div>
                    <div className="intro">
                        Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다.
                        <br/>
                        새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.
                    </div>
                    <div className="info">
                        <div className="section experience">
                            <ul>
                                <li>· 웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                                <li>· 다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                                <li>· 제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                                <li>· 프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                            </ul>
                        </div>
                        <div className="section bubble">
                            <span>깔끔한 UI와 가독성 높은 디자인</span>
                        </div>
                    </div>
                    <Hr>
                        <hr className="line"/>
                    </Hr>
                    <div className="resume">
                        <div className="list">
                            경력
                        </div>
                        <div className="list jobinfo">
                            <div className="head">
                                <div className="left">
                                    <div className="company">원티드랩</div>
                                    <p className="position">프론트엔드팀 / 팀원</p>
                                </div>
                                <div className="right">
                                    <p>2020.07 - 현재 재직중</p>
                                </div>
                            </div>
                            <div>
                                <div className="first">
                                    <div className="section txt">
                                        <div className="one-section">
                                            <p className="section-title">· 웹사이트 SEO2022.05 - 2022.06</p>
                                            <div className="section-content">
                                                <p>도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별 메타태그/키워드 검증</p>
                                                <p>- 성과: 오가닉 트래픽 30% 증가</p>
                                                <p>- 사용 기술: Next.js, Google Search Console</p>
                                                <p>- 링크: https://www.wanted.co.kr</p>
                                            </div>
                                        </div>
                                        <div className="two-section">
                                            <p className="section-title">· 글로벌 채용 서비스 신규 개발2021.08 - 2022.04</p>
                                            <div className="section-content">
                                                <p>메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 70%)</p>
                                                <p>- 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시</p>
                                                <p>사용 기술: React.js, Next.js, redux, styled-component</p>
                                                <p>- 링크: https://www.wantedglobal.com</p>
                                            </div>
                                        </div>
                                        <div className="third-section">
                                            <p className="section-title">· 사내 자동화 도구 개발2021.01 - 2021.07</p>
                                            <div className="section-content">
                                                <p>번역키 관리 자동화, 릴리즈 노트 자동 생성 등 각종 기능 개발하여 사내 자동화 시스템 구축</p>
                                                <p>- 성과: 개발자 주당 업무 시간 15% 단축</p>
                                                <p>- 사용기술: Next.js, Node.js, express, antd, fxjs</p>
                                                <p>- 링크: https://medium.com/wanted1</p>
                                            </div>
                                        </div>
                                        <div className="four-section">
                                            <p className="section-title">· 콘텐츠 구독 서비스 개발 및 유지 보수2020.07 - 2020.12</p>
                                            <div className="section-content">
                                                <p>서브 프론트엔드 개발자로 구독자 증대를 위한 기능 다수 개발 (기여도 30%)</p>
                                                <p>코드 리팩토링 및 SSR 적용 및 팀 내 React-query 도입</p>
                                                <p>- 성과: 콘텐츠 공유 기능, 직무 맞춤 콘텐츠 추천 기능 개발 → 구독 전환율 개선에 기여</p>
                                                <p>- 사용 기술: Next.js, React-query</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section last-bubble">
                                        <span>업무 강점과 경력을 강조하는 템플릿</span>
                                    </div>
                                </div>
                                <SecondHr>
                                    <hr className="line"/>
                                </SecondHr>
                                <div className="last-section">
                                    <div className="last-box">
                                        <div className="company">한국빅컴퍼니</div>
                                        <div className="position">디지털기술개발팀 / 사원</div>
                                    </div>
                                    <div className="last-box">
                                        <p className="last-day">2018.03 - 2020.06</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    );
}

const Section = styled.section`
    background-color: #f2f4f7;
    padding-top: 100px;
    position:relative;

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 150px;
        background: linear-gradient(180deg,hsla(0,0%,97%,0),#f8f8f8);
    }

    .box{
        /* border: 1px solid #222; */
        width: 1060px;
        margin: 0 auto;
    }

    .title{
        font-weight: 600;
        font-size: 40px;
        text-align: center;
    }

    .btn-wrap{
        margin-top: 43px;
        text-align: center;
    }

    .btn-wrap > button{
        width: 197px;
        height: 50px;
        background-color: #36f;
        letter-spacing: .0056em;
        border-radius: 50px;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        border: none;
    }

    .content{
        margin-top: 50px;
    }

    .back{
        max-width: 1060px;
        margin: 0 auto;
        padding: 90px 90px 20px;
        background-color: #fff;
    }

    .name{
        font-weight: 700;
        font-size: 28px;
        margin-top: 20px;
    }

    .info{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        line-height: 150%;
    }

    .first{
        display: flex;
        flex-direction: row;
    }

    .section{
        flex-grow:1;
        /* flex-basis:0; */
        /* border:1px solid #222; */
    }

    .section.email{
        color: #08ba9c;
    }

    .section.experience{
        color: #08ba9c;
    }

    .one-section{
        color: #08ba9c;
    }

    .section.experience > ul > li{
        margin-bottom: 20px;
        padding-left: 5px;
    }

    .section.bubble{
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .section.bubble > span{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 242px;
        height: 36.55px;
        background-color: #08ba9c;
        border-radius: 30px;
        font-weight: 600;
        font-size: 13px;
        color: #fff;
        line-height: 18px;
        letter-spacing: -1px;
    }

    .section.bubble > span::after{
        content: "";
        display: block;
        position: absolute;
        border-color: #08ba9c transparent;
        border-style: solid;
        border-width: 10px 6px 0;
        width: 0;
        z-index: 1;
        bottom: -2px;
        left: -4px;
        transform: rotate(45deg);
    }

    .section.last-bubble{
        display: flex;
        margin-top: 45px;
        justify-content: end;
    }

    .section.last-bubble > span{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 242px;
        height: 36.55px;
        background-color: #08ba9c;
        border-radius: 30px;
        font-weight: 600;
        font-size: 13px;
        color: #fff;
        line-height: 18px;
        letter-spacing: -1px;
    }

    .section.last-bubble > span::after{
        content: "";
        display: block;
        position: absolute;
        border-color: #08ba9c transparent;
        border-style: solid;
        border-width: 10px 6px 0;
        width: 0;
        z-index: 1;
        bottom: -2px;
        left: -4px;
        transform: rotate(45deg);
    }

    .section.txt{
        font-size: 14px;
    }

    .section-title{
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .section-content{
        padding-left: 10px;
        line-height: 130%;
        letter-spacing: -1px;
    }

    .intro{
        margin-top: 20px;
        line-height: 150%;
    }

    .resume{
        /* border: 1px solid #222; */
        display: flex;
        flex-direction: row;
    }

    .list{
        flex-grow:1;
        flex-basis:0;
        /* border: 1px solid red; */
    }

    .list.jobinfo{
        flex-grow:10;
        flex-basis:0;
        /* border: 1px solid #222; */
        display: flex;
        flex-direction: column;
    }

    .head{
        display: flex;
        flex-direction: row;
    }

    .left{
        flex-grow:1;
        /* border: 1px solid violet; */
    }

    .right{
        flex-grow:1;
        /* border: 1px solid violet; */
        text-align: right;
    }

    .right > p {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }

    .company{
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }

    .position{
        margin-top: 5px;
        font-weight: 400;
        font-size: 14px;
        line-height: 142.9%;
    }

    .last-section{
        /* border: 1px solid blue; */
        display: flex;
        flex-direction: row;
    }

    .last-box{
        flex-grow:1;
        flex-basis:0;
        /* border: 1px solid #222; */
    }

    .last-day{
        text-align: right;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }
`;

const Hr = styled.div`
    width: 880px;
    margin: 0 auto;

    .line{
        background-color: #333333;
        height:0.5px;
        border:0;
        margin: 50px 0px;
    }
`;

const SecondHr = styled.div`
    width: 808px;
    margin: 0 auto;

    .line{
        background-color: #ccc;
        height:0.5px;
        border:0;
        margin: 50px 0px;
    }
`;
export default Sample;