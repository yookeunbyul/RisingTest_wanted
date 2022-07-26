import styled from 'styled-components';
import { ReactComponent as Share } from '../../svg/ic-share.svg';
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';
import Footer from "../../components/common/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const JobInfo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <>
            <Wrap>
                <div className="box">
                    <div className="section left">
                        <div style={{width: "700px", height: "490px"}}>
                        <StyledSlide {...settings}>
                            <div className="img-wrap">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2232%2Fiveehwxoeek9dkoj__1080_790.jpg&w=1000&q=75" />
                            </div>
                            <div className="img-wrap">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2232%2F9ihcay4o77z2cjlc__1080_790.jpg&w=1000&q=75" />
                            </div>
                        </StyledSlide>
                        </div>
                        <div className="header">
                            <div className="head">개발 리드</div>
                            <div>
                                <span className="company">텔라</span>
                                <span className="res">응답률 평균 이상</span>
                                <span className="country-info">서울 · 한국</span>
                            </div>
                            <div>
                                <ul className="tag-list">
                                    <li>#스타트업</li>
                                    <li>#와인</li>
                                    <li>#수면실</li>
                                    <li>#택시비</li>
                                    <li>#건강검진</li>
                                    <li>#자기계발</li>
                                    <li>#스터디지원</li>
                                    <li>#어학교육</li>
                                    <li>#교육</li>
                                </ul>
                            </div>
                        </div>
                        <div className="body">
                            <p>
                                <span className="intro">
                                    “Chat is New Normal!”
                                    <br/><br/>
                                    텔라는 영어 학습자들이 목표를 달성하는 과정에서 만나는 모든 허들을 넘고, 가장 효율적으로 목표를 달성하도록 Enlgish Personal Training을 제공하는 에듀테크 스타트업입니다.
                                    <br/><br/>
                                    현재까지 텔라는 스파크랩, 스트롱벤처스, 더벤처스, 디캠프로부터 시드 투자를 유치하였고, 40만건이 넘는 수업과 400만건이 넘는 첨삭을 진행하는 동안 코스 완주율 70%, 출석율 94% 등 타서비스 대비 높은 수강율을 달성하였습니다. 지표가 말해주듯 텔라는 많은 학습자들의 목표 달성을 함께 해왔으며 계속해서 텍스트, 즉 데이터에 기반한 영어 회화 서비스로 영어회화의 새로운 기준을 제시하고자 합니다.
                                    <br/><br/>
                                    저희와 함께 영어 회화의 새로운 상식을 만들어가실 분들을 환영합니다:)
                                    <br/><br/>
                                    [저희는 이렇게 일해요!]
                                    <br/><br/>
                                    - "Learner experience over everything": 학습자의 경험 최적화를 가장 중요시합니다. 학습의 허들을 낮추기 위한 모든 방향을 모색합니다.
                                    <br/>
                                    - "Growth through leverage": 가장 큰 효과를 낼 수 있는 지렛점을 찾아 더 큰 성장을 할 수 있도록 함께 고민합니다.
                                    <br/>
                                    - "Data and insight, hand in hand": 데이터 기반의 의사 결정과 겸험에 기반한 인사이트의 밸런스를 중시합니다.
                                    <br/>
                                    - "To tech what is tech’s and to human what is human’s": 기술에게 맡겨 퀄리티와 효율을 높일 수 있는 것은 기술에게 맡기고, 사람 고유의 영역을 더 극대화하는 방향으로 일합니다.
                                    <br />- "The globe is our oyster": 전세계가 우리의 무대입니다. 전세계 학습자들의 문제를 볼 수 있는 넓은 시야로 접근합니다.
                                    <br/><br/><br/>
                                    [제출서류]
                                    <br/><br/>
                                    - 자유양식의 이력서 또는 경력기술서
                                    <br/>
                                    - 자유양식의 자기소개서
                                    <br/><br/><br/>
                                    [채용 프로세스]
                                    <br/><br/>
                                    - 서류전형 ＞ 캐주얼 커피챗 ＞ 실무 면접 ＞ 임원 면접(컬쳐핏) ＞ 근무조건 협의
                                    <br/>
                                    - 자유 양식의 이력서(필수)를 받고 있습니다. 포지션에 따라 포트폴리오 제출 및 실무 과제 요청드릴 수 있습니다.
                                    <br/>
                                    - 채용 프로세스는 회사와 인재 간의 니즈와 핏을 서로 확인해가는 과정이라고 생각합니다. 이를 충분하게 확인하기 위해 포지션과 인재에 따라 상기 채용 프로세스는 변동될 수 있습니다.
                                    <br/>- 제출하신 서류는 2년간 보유하며, 삭제를 원하시는 경우 별도로 연락주시면 도와드리겠습니다.
                                </span>
                            </p>
                            <div>
                                <div className="sub-head">주요업무</div>
                                <p>
                                    <span className="option-list">
                                        • 텔라의 서비스를 위한 모든 SW 개발
                                        <br/>
                                        • 개발팀 구성 및 개발 문화/환경 세팅
                                        <br/>
                                        • 프로젝트에 대한 판단 및 피드백, 그리고 실행
                                        <br/>
                                        • 향후 확장성을 고려한 인프라, 시스템, 로직 개선
                                        <br/>
                                        • 글로벌 APP 기획 및 개발 프로젝트 진행
                                    </span>
                                </p>
                            </div>
                            <div>
                                <div className="sub-head">자격요건</div>
                                <p>
                                    <span className="option-list">
                                        • 5인 이상의 개발팀 리딩 경험이 있는 분
                                        <br/>
                                        • Full Stack(서버 + 웹) 개발 경험이 있으신 분
                                        <br/>
                                        • 테스트 주도 개발 및 테스트 자동화 경험이 있는 분
                                        <br/>
                                        • 기획단의 요구 사항을 개발 가능한 기능 명세로 전환하고 피드백 및 새로운 제안을 하실 수 있는 분
                                        <br/>
                                        • 클라이언트 혹은 서버 중 하나에 대한 개발 경력은 최소 5년 이상 혹은 이에 준하는 능력이 있으신 분
                                    </span>
                                </p>
                            </div>
                            <div>
                                <div className="sub-head">우대사항</div>
                                <p>
                                    <span className="option-list">
                                    • AWS 의 다양한 서비스 (ec2, s3, cloudfront, RDS 등) 사용 경험이 있으신 분
                                    <br/>
                                    • 주니어들의 멘토가 되어 주실 수 있는 분
                                    <br/>
                                    • 컴퓨터공학 관련 학위를 소지한 분
                                    <br/>
                                    • 스타트업 및 애자일 업무 방식에 대한 경험을 보유하신 분
                                    <br/>
                                    • Vuejs, node.js 등을 실무에서 사용해보신 분
                                    </span>
                                </p>
                            </div>
                            <div className="advan">
                                <div className="sub-head">혜택 및 복지</div>
                                <p>
                                    <span className="option-list">
                                        # 몰입할 수 있는 환경을 제공합니다.
                                    </span>
                                </p>
                            </div>
                            <p>
                                <span className="intro">
                                    • 생산성 장비 제공
                                    <br/>
                                    노트북, 모니터 및 생산성을 위한 장비를 필요에 따라, 금액에 제한 없이 제공합니다.
                                    <br/><br/>
                                    • 접근성 좋은 오피스 위치
                                    <br/>
                                    선릉역(2,4,분당선)과 삼성역(2호선), 삼성중앙역(9호선) 각 7분 거리에 있는 공유오피스에서 근무합니다. (수면실, 안마실, 샤워실 등의 편의시설은 덤!)
                                    <br/><br/>
                                    • 자율적인 근무 시간
                                    <br/>
                                    8-10시 사이에 출근할 수 있으며, 야근이 필요한 경우 야근 식대와 택시비를 지원합니다.
                                    <br/><br/>
                                    • 2시간 단위 연차
                                    <br/>
                                    갑작스레 일이 생겼거나, 몇시간만 있으면 되는데 반일, 전일을 쉬긴 아까우셨죠? 편하게 2시간 단위로 연차를 사용하세요.
                                    <br/><br/>
                                    • 경조사 유급휴가 및 경조사비 제공
                                    <br/>
                                    나와 가족에게 기쁜일, 슬픈일에 눈치보거나 계산하면서 쉬지 마세요. 편한 마음으로 다녀오실 수 있도록 경조사 관련 제도를 마련했어요.
                                    <br/><br/><br/>
                                    # 동료들의 성장을 지원합니다.
                                    <br/><br/>
                                    • 자기계발비 최대 연200만원
                                    <br/>
                                    성장을 돕기 위한 도서, 컨퍼런스, 세미나 참여를 적극 장려합니다. 배운 내용을 텔라의 지식 라이브러리에 공유하여 동료들과 인사이트를 나누게 됩니다.
                                    <br/><br/>
                                    • 사내 스터디 지원
                                    <br/>
                                    성장을 위한 사내 스터디를 환영합니다. 자기계발비와 별도로 제공합니다.
                                    <br/><br/>
                                    • 어학 교육 지원 (*텔라 서비스 무제한!)
                                    <br/>
                                    텔라에 조인해서 영어는 끝장낼 수 있습니다! 텔라 서비스는 항상 무제한으로 이용할 수 있습니다. 그 외 여러 어학 교육 서비스도 이용해볼 수 있어요.
                                    <br/><br/>
                                    • 건강 지원금 연50만원
                                    <br/>
                                    동료들의 건강을 중시합니다. 건강검진, 헬스 트레이닝 등에 자유롭게 사용할 수 있는 건강 지원금을 연 50만원 지원합니다.
                                </span>
                            </p>
                            <div>
                                <div className="sub-head">기술스택 · 툴</div>
                                <div className="skill-tag">
                                    <div className="tag-option">MySQL</div>
                                    <div className="tag-option">VueJS</div>
                                    <div className="tag-option">JavaScript</div>
                                    <div className="tag-option">AWS</div>
                                    <div className="tag-option">NodeJS</div>
                                </div>
                            </div>
                        </div>
                        <hr className="hr"/>
                        <div className="workplace">
                            <div className="workplace-wrap">
                                <span className="workplace-head">마감일</span>
                                <span className="workplace-body">상시</span>
                            </div>
                            <div className="workplace-wrap">
                                <span className="workplace-head">근무지역</span>
                                <span className="workplace-body">강남구 테헤란로79길 6</span>
                            </div>
                            <div className="map-wrap">
                                
                            </div>
                            <div className="company-info">
                                <div className="company-box">
                                    <img src="https://static.wanted.co.kr/images/wdes/0_5.5aa3e40a.jpg" width="50"/>
                                    <div>
                                        <div className="company-name">텔라</div>
                                        <div className="company-option">교육</div>
                                    </div>
                                </div>
                                <div className="company-box right">
                                    <button>팔로우</button>
                                </div>
                            </div>
                            <div className="warning">
                                <div className="warning-box">
                                    <svg class="" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"></path><path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path><path fill-rule="nonzero" d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path></g></svg>
                                </div>
                                <div className="warning-box">
                                    <p>
                                        본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의
                                        <br />
                                        용도로 사용할 수 없습니다.
                                    </p>
                                </div>
                                <div className="warning-box">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section right">
                        <div className="sticky">
                            <div className="follow-box">
                                <div className="title">채용보상금</div>
                                <div className="money-wrap">
                                    <div className="money">
                                        <div className="people">
                                            추천인
                                        </div>
                                        <div className="number">
                                            500,000원
                                        </div>
                                    </div>
                                    <div className="money">
                                        <div className="people">
                                            지원자
                                        </div>
                                        <div className="number">
                                            500,000원
                                        </div>
                                    </div>
                                </div>
                                <button className="share">
                                    <Share />
                                </button>
                                <button className="bookmark">북마크하기</button>
                                <button className="apply">지원하기</button>
                                <div className="reaction">
                                    <button className="like">
                                        <span>1</span>
                                    </button>
                                    <button className="profile">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" width="26"/>
                                    </button>
                                </div>
                            </div>
                            <div className="under">
                                <div className="flex">
                                    <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="70"/>
                                    <span>합격예측</span>
                                </div>
                                <div className="flex right">
                                    <span>서류합격률이 궁금하면?</span>
                                    <svg width="17" height="17" class="" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position">
                    <div className="position-head">ㅇㅇㅇ님, 이 포지션을 찾고 계셨나요?</div>
                    <List>
                    <div className="info">
                        <div className="position-wrap">
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                            <div className="head">
                                <button><Bookmark/></button>
                                <div className="img-wrap">
                                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                                </div>
                                <div className="txt-box">
                                    <div className="job">개발리드</div>
                                    <div className="company">텔라</div>
                                    <div className="response-box">
                                        <div className="response">응답률 매우 높음</div>
                                    </div>
                                    <div className="country">서울·한국</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </List>
                </div>
            </Wrap>

            <Footer />
        </>
    )
}

const StyledSlide = styled(Slider)`
    .slick-list{
        width: 700px;
        height: 490px;
        margin: 0 auto;
        background-color: #f0f9ff;
        border-radius: 3px;
    }
    
    .slick-prev::before{
        content: "\f053";
        font-family: "Font Awesome 5 Free";
        font-size: 20px;
        font-weight: 900;
        line-height: 1;
        color: #dddddd;
    }

    .slick-prev{
        left:15px;
        z-index: 55;
    }

    .slick-next{
        right:15px;
    }

    .slick-next::before{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-size: 20px;
        font-weight: 900;
        line-height: 1;
        color: #dddddd;
    }

    .img-wrap{
        width: 700px;
        height: 490px;
        object-fit: cover;
    }

    .img-wrap > img{
        width: 100%;
        height: 100%;
    }
`;

const Wrap = styled.div`
    width: 1060px;
    /* border: 1px solid #222; */
    margin: 0 auto;

    padding-top: 20px;

    .box{
        display:flex;
    }

    .section{
        /* border:1px solid red; */
        flex-basis: 0;
    }

    .section.left{
        flex-grow:2;
        height: 4218px;
    }

    .section.right{
        flex-grow:1;
        height: 4218px;
        width: 340px;

        margin-left: 30px;
    }

    .header{
        margin: 40px 0 30px;
        /* border:1px solid red; */
    }

    .head{
        color: #333;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .tag-list{
        display: flex;
        margin-top: 20px;
        /* border: 1px solid #222; */
        padding-left: 0px !important;
    }

    .tag-list > li {
        margin-right: 6px;
        margin-bottom: 10px;
        padding: 9px 14px;
        font-size: 12px;
        letter-spacing: -1.2px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        background-color: #f3f5f8;
        border-radius: 25px;
    }

    .company{
        color: #333;
        font-size: 14px;
        font-weight: 600;
        margin-right: 8px;
    }

    .res{
        border: 1px solid #855af0;
        color: #855af0;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        padding: 0 5px;
    }

    .country-info{
        padding: 0 10px;
        position: relative;
        white-space: nowrap;
        margin-left: 10px;
        color: #999;
        font-size: 14px;
    }

    .country-info::before{
        content: "";
        display: block;
        width: 1px;
        height: 12px;
        background: #e1e2e3;
        position: absolute;
        top: 5px;
        left: 0;
    }

    .body{
        /* border: 1px solid red; */
        letter-spacing: -1px;
        margin-bottom: 60px;
    }

    .intro{
        color: #333;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.75;
    }

    .sub-head{
        margin: 20px 0 0;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 1.75;
    }

    .option-list{
        font-size: 16px;
        line-height: 1.75;
    }

    .advan{
        margin-bottom: 20px;
    }

    .skill-tag{
        display: flex;
        flex-wrap: wrap;
        grid-gap: 10px 8px;
        gap: 10px 8px;
        margin-top: 5px;
        /* border: 1px solid green; */
    }

    .tag-option{
        background-color: #e4f4ec;
        border-radius: 20px;
        padding: 9px 14px;
        font-size: 12px;
        line-height: 14.4px;
        font-weight: 600;
    }

    .hr{
        border: 0;
        border-top: 1px solid #eee;
    }

    .workplace{
        /* border: 1px solid orange; */
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .workplace-wrap{
        margin-bottom: 20px;
    }

    .workplace-head{
        display: inline-block;
        color: #999;
        width: 80px;
        font-size: 16px;
        font-weight: 600;
        vertical-align: text-top;
    }

    .workplace-body{
        color: #333;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        vertical-align: text-top;
    }

    .map-wrap{
        width: 700px;
        height: 254px;
        border: 1px solid red;
    }

    .company-info{
        border-radius: 3px;
        border: 1px solid #e1e2e3;
        padding: 20px;
        margin-top: 80px;

        display:flex;
        align-items: center;
    }

    .company-box{
        flex-grow: 1;
        /* border: 1px solid blue; */

        display:flex;
        align-items: center;
    }
    
    .company-box > img{
        margin-right: 15px;
    }

    .company-box.right{
        display:flex;
        justify-content: end;
    }

    .company-box.right > button {
        border: 1px solid #e1e2e3;
        height: 40px;
        font-size: 15px;
        color: #36f;
        background-color: #fff;
        border-radius: 25px;
        padding: 0 27px;
        font-weight: 600;
    }

    .company-name{
        color: #333;
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px;
    }

    .company-option{
        color: #999;
        font-size: 15px;
        font-weight: 600;
    }

    .warning{
        margin-top: 10px;
        border-radius: 5px;
        background-color: #f3f5f8;
        padding: 25px 30px;

        display:flex;
    }

    .warning-box{
        flex-grow:1;
        /* border: 1px solid blue; */

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .warning-box > p {
        margin-right: 40px;
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        color: #333;
    }

    .warning-box > span::before{
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #333;
    }

    .position{
        margin: 80px 0 0;
    }

    .position-head{
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
        line-height: normal;
    }

    .sticky{
        position: sticky;
        top: 72px;
    }

    .follow-box{
        border: 1px solid #e1e2e3;
        background-color: #fff;
        border-radius: 3px;
        padding: 24px 20px;
        width: 300px;
    }

    .title{
        font-size: 15px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: left;
        color: #333;
    }

    .money-wrap{
        display: flex;
        margin: 24px 0px;
    }

    .money{
        flex-grow:1;
        /* border: 1px solid blue; */
    }

    .people{
        font-size: 14px;
        font-weight: 600;
        color: #999;
        margin-bottom: 8px;
        line-height: 1.2;
    }

    .number{
        font-size: 15px;
        color: #333;
        font-weight: 600;
    }

    .bookmark{
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #36f;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        color: #36f;
        text-align: center;
        margin-bottom: 10px;
    }

    .apply{
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        border: none;
        color: #fff;
        text-align: center;
    }

    .reaction{
        margin-top: 24px;
        /* border: 1px solid blue; */

        display:flex;
        align-items: center;
    }

    .like{
        height: 30px;
        border-radius: 15px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        margin-right: 12px;
        padding: 0 15px;
    }

    .like > span::before{
        content: "\f004";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        font-size: 14px;
        color: #dddddd;
        margin-right: 5px;
    }

    .profile{
        border: none;
        background-color: transparent;
    }

    .profile > img{
        margin-top: 2px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
    }

    .share{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 20px;
        border: 1px solid #e1e2e3;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .under{
        margin-top: 4px;
        background-color: #f3f5f8;
        height: 40px;

        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 0px 10px;
    }

    .flex{
        flex-grow: 1;
        /* border: 1px solid red; */
        font-size: 12px;
    }

    .flex > span {
        margin-left: 3px;
        font-weight: 600;
    }

    .flex.right > span{
        margin-right: 3px;
    }

    .flex.right{
        color: #999999;

        display: flex;
        justify-content: right;
        align-items: center;
    }
`;

const List = styled.div`
    width: 1060px;
    margin: 0 auto;
    padding-bottom: 80px;
    /* border: 1px solid #222; */

    .bookmark{
        display: flex;
        align-items:center;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 24px;
        letter-spacing: normal;
        color: #36f;

        cursor: pointer;
    }

    .bookmark > span{
        margin-left: 5px;
    }

    .bookmark > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }

    .info{
        /* border: 1px solid #36f; */
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .position-wrap{
        /* border: 1px solid #222; */

        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        grid-template-rows: 343.43px;
        column-gap: 19px;
        row-gap: 40px;
    }

    .head{
        position: relative;
        cursor: pointer;
    }

    .head > button {
        position: absolute;
        right: 0;
        top: 8px;

        border: none;
        background-color: transparent;
    }

    .img-wrap{
        width: 250px;
        height: 187.5px;
        object-fit: cover;
    }

    .img-wrap > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
        border: 1px solid rgb(0 0 0 / 10%);
    }

    .txt-box{
        padding: 14px 0px;
    }

    .job{
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        max-height: 2.4em;
    }

    .company{
        font-size: 14px;
        margin-top: 10px;
        color: #333;
        font-weight: 600;
    }

    .country{
        font-weight: 400;
        color: #999;
        font-size: 14px;
        margin-top: 10px;
    }

    .money{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
    }

    .response-box{
        border: 1px solid #00aead;
        color: #00aead;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 8px;
        padding: 0 5px;
    }

    .response{
        /* margin-top: 10px; */
    }
`;

export default JobInfo;