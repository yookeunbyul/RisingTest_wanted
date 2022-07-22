import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-ai-symbol.svg';
import { ReactComponent as Guide } from '../../svg/ic-guide.svg';
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";

const AiPosition = () => {
    const isLogin = localStorage.getItem("jwt");
    const [aiList, setAiList] = useState([]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/employment/mainpage",{
            })
            .then(res => {
                console.log(res);
                setAiList(res.data.result.recommendHighPassRateEmployment);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Wrap>
            {isLogin ? (
                <>
                    <Section>
                        <div className="title-wrap">
                            <img className="logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" width="114"/>
                            <span className="login-title">가 제안하는 합격률 높은 포지션</span>
                            <button>
                                <Guide />
                            </button>
                        </div>
                        <div className="a-wrap">
                            <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all">포지션 전체보기</a>
                        </div>
                        <div className="slide">
                        <StyledSlide {...settings}>
                            {aiList ? (
                                aiList.map((ai) => {
                                    return(
                                        <>
                                            <div key={ai.employmentId}>
                                                <button className="bookmark-btn"><Bookmark /></button>
                                                <ImgWrap>
                                                    <Thumbnail src={ai.employmentImgUrl} />
                                                </ImgWrap>
                                                <div className="txt-box">
                                                    <div className="job">{ai.jobName}</div>
                                                    <div className="company">{ai.companyName}</div>
                                                    {ai.responseRate ? (
                                                        <>
                                                            <div className="response-box">
                                                                <div className="response">{ai.responseRate}</div>
                                                            </div>
                                                        </>
                                                    ) : null}
                                                    <div className="country">{ai.city}·{ai.country}</div>
                                                    <div className="money">채용 보상금 1,000,000원</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </StyledSlide>
                        </div>
                    </Section>
                </>
            ) : (
                <>
                    <div className="box">
                        <div className="head">
                            <Symbol />
                            <img className="logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" width="170"/>
                        </div>
                        <div className="title">
                            <img className="logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" width="114"/>
                            가 제안하는 합격률 높은 포지션
                            <button>
                                <Guide />
                            </button>
                        </div>
                        <div className="sub">회원가입하면 포지션을 추천해드려요.</div>
                        <div className="btn">
                            <button>지금 시작하기</button>
                        </div>
                    </div>
                </>
            )}
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */

    .box{
        background: #f4f8fb;
        background-image: url(https://wanted-dev.static.wanted.co.kr/banner/Jobsfeed_ai_banner.png);
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 60px;
    }

    .head{
        /* border: 1px solid blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 40px;
    }

    .logo{
        margin-left: 8px;
    }

    .title{
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 22px;
        font-weight: 700;
        line-height: 1.05;
    }

    .login-title{
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 22px;
        font-weight: 700;
        line-height: 1.05;
    }

    .title-wrap > button{
        border: none;
        background-color: transparent;
        margin-top: 3px;
    }

    .title > button{
        border: none;
        background-color: transparent;
        margin-top: 3px;
    }

    .sub{
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 10px;
        color: #555555;
        font-size: 16px;
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 25px;
    }

    .btn > button {
        padding: 10px 20px;
        border-radius: 25px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 700;
        color: #fefefe;
        border: none;
        line-height: 22px;
    }
`;

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding-bottom: 60px;

    .title-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title{
        font-size: 22px;
        line-height: 1.33;
        font-weight: 700;
        color: #333;
    }

    .a-wrap{
        text-align: center;
        margin: 5px 0px;
    }

    .a-wrap > a {
        font-weight: 500;
        line-height: normal;
        vertical-align: middle;
        color: #767676!important;
        font-size: 15px;
    }

    .a-wrap > a::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #767676;
        margin-left: 5px;
    }

    .slide{
        margin: 30px 0px 0px 0px;
        /* border: 1px solid violet; */
        width: 1060px;
        display: flex;
    }

    .head{
        position: relative;
    }

    .bookmark-btn {
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

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 350px;
    }

    .slick-slide{
        margin-right: 17px;
        /* border: 1px solid #222; */
        position: relative;
    }

    .slick-track{
        display: flex;
    }
    
    .slick-prev:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f104";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-prev{
        top: -60px;
        z-index: 99;
        left: 0;
    }

    .slick-next{
        right:15px;
        top: -60px;
    }
`;

const ImgWrap = styled.div`
    width: 250px;
    height: 175px;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    outline: 1px solid rgba(0,0,0,.05);
`;

const Title = styled.div`
    margin-top: 17px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
`;

const Tag = styled.div`
    font-size: 12px;
    font-weight: 900;
    color: #333;
    margin-top: 13px;
`;


export default AiPosition;