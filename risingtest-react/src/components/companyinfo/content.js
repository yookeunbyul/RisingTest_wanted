import styled from 'styled-components';
import { ReactComponent as Bookmark } from '../../svg/ic-position-bookmark.svg';

const Content = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="section left">
                    <div className="title">
                        채용 중인 포지션
                        <button>
                            <div className="box-wrap">
                                <span>응답률 평균 이상</span>
                            </div>
                        </button>
                    </div>
                    <div className="position">
                        <div className="position-card">
                            <div className="card-section left">
                                <div className="position-title">개발리드</div>
                                <div className="position-money">채용보상금 1,000,000원</div>
                                <div className="position-option">상시채용</div>
                            </div>
                            <div className="card-section right">
                                <button>
                                    <Bookmark />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="company-intro">
                        <div className="title">
                            회사 소개
                        </div>
                        <div className="company-img">
                            <div className="img-btn">
                                <img src="https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__1080_790.jpg" />
                            </div>
                            <div className="img-btn second">
                                <img src="https://static.wanted.co.kr/images/company/2232/9ihcay4o77z2cjlc__1080_790.jpg" />
                            </div>
                        </div>
                        <div className="company-text">
                            <p>[텔라는 어떤 문제를 해결하는 회사인가요?]</p>
                            <br />
                            <p>텔라는 전세계 영어 학습자들이 목표를 달성하는 과정에서 부딪히는 모든 장벽을 허물고자 합니다.</p>
                            <button>
                                <span>더 보기</span>
                            </button>
                        </div>
                    </div>
                    <div className="company-news">
                        <div className="title">
                            이 회사의 뉴스
                        </div>
                        <div className="news">
                            <div className="news-card">
                                <div className="card-text">
                                    <div className="news-title">[프리미어리그] 넘어지는 네이선 텔라</div>
                                    <p>gukjenews.com 2022.1.12</p>
                                </div>
                            </div>
                            <div className="news-card">
                                <div className="card-text">
                                    <div className="news-title">‘베이브 류스’에게 홈런 맞은 센사텔라, 콜로라도와 5년 600억원에 재계약</div>
                                    <p>gukjenews.com 2022.1.12</p>
                                </div>
                            </div>
                            <div className="news-card">
                                <div className="card-text">
                                    <div className="news-title">[아프로⑨] 반짝이는 아이디어로 우간다 취업률을 높이다 - 진유하 텔라 대표</div>
                                    <p>gukjenews.com 2022.1.12</p>
                                </div>
                            </div>
                            <div className="news-card">
                                <div className="card-text">
                                    <div className="news-title">채팅 기반 영어 교육 스타트업 ‘텔라’, 3개 기관에서 투자 유치</div>
                                    <p>gukjenews.com 2022.1.12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section right">
                    <div className="title">
                        태그
                    </div>
                    <div>
                        <div className="tag">#스타트업</div>
                        <div className="tag">#와인</div>
                        <div className="tag">#수면실</div>
                        <div className="tag">#택시비</div>
                        <div className="tag">#건강검진</div>
                        <div className="tag">#자기계발</div>
                        <div className="tag">#스터디지원</div>
                        <div className="tag">#어학교육</div>
                        <div className="tag">#노트북</div>
                        <div className="tag">#교육</div>
                        <div className="plus">+ 태그 의견보내기</div>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding: 40px 0;

    .box{
        display: flex;
    }

    .section{
        /* border: 1px solid red; */
    }

    .section.left{
        flex-grow:2;
        width: 722px;
    }

    .section.right{
        flex-grow:1;
        width: 308px;
    }

    .title{
        font-size: 22px;
        font-weight: 600;
        line-height: 1;
        color: #333;
        margin-bottom: 20px;
        display:flex;
        align-items: center;
    }

    .title > button{
        border: none;
        background-color: transparent;
    }

    .box-wrap{
        border: 1px solid #855af0;
        color: #855af0;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 4px;
        padding: 0 5px;
    }

    .position{
        /* border: 1px solid #222; */
        display: grid;
        grid-template-columns: 351px 351px;
        grid-template-rows: 108px;
        column-gap: 15px;

        margin-bottom: 80px;
    }

    .grid{
        border: 1px solid blue;
    }

    .position-card{
        min-height: 108px;
        border-radius: 3px;
        border: 1px solid #e1e2e3;

        display: flex;
    }

    .news{
        /* border: 1px solid #222; */
        display: grid;
        grid-template-columns: 351px 351px;
        grid-template-rows: 108px;
        column-gap: 15px;
        row-gap: 15px;
    }

    .news-card{
        min-height: 108px;
        border-radius: 3px;
        border: 1px solid #e1e2e3;
    }

    .news-title{
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        color: #333;
        height: 44px;
        overflow: hidden;
        margin-bottom: 16px;
    }

    .card-text{
        padding: 15px 20px;
    }

    .card-text > p{
        font-size: 14px;
        font-weight: 400;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }


    .position-title{
        font-size: 18px;
        line-height: 1.4;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
    }

    .position-money{
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: #86939e;
        margin-top: 3px;
    }

    .position-option{
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        color: #666;
        margin-top: 15px;
    }

    .card-section{
        /* border: 1px solid blue; */
        padding: 15px;
        flex-basis: 0;
    }

    .card-section.left{
        flex-grow:12;
    }
    
    .card-section.right{
        flex-grow:1;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .card-section.right > button{
        font-size: 15px;
        font-weight: 400;
        line-height: 1;
        color: #86939e;
        width: 34px;
        height: 34px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        border-radius: 17px;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .company-img{
        display:flex;
        margin-bottom: 20px;
    }

    .img-btn{
        width: 173px;
        height: 124px;
        cursor: pointer;
    }

    .img-btn.second{
        margin-left: 10px;
    }

    .img-btn >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    .company-intro{
        margin-bottom: 80px;
    }

    .company-news{
        margin-bottom: 80px;
    }

    .company-text{
        font-size: 16px;
        line-height: 27px;
        letter-spacing: -1px;
    }

    .company-text > button {
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        color: #999;
        padding: 10px 0;
        border: 0;
        background-color: transparent;
        cursor:pointer;
    }

    .company-text > button >span::after {
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #999;
        margin-left: 5px;
    }

    .tag{
        display: inline-block;
        background-color: #f3f5f8;
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        border-radius: 20px;
        margin-right: 6px;
        margin-bottom: 10px;
    }

    .plus{
        display: inline-block;
        color: #999;
        border: 1px dashed #ccc;
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        border-radius: 20px;
        margin-right: 6px;
        margin-bottom: 10px;
    }
`;

export default Content;