import styled from 'styled-components';
import { ReactComponent as UnderArrow } from '../../svg/ic-under-arrow.svg';
import { ReactComponent as BtnArrow } from '../../svg/ic-btn-arrow.svg';
import { ReactComponent as FiilBookMark } from '../../svg/ic-fill-bookmark.svg';
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const ScrollFilter = () => {
    const [showCate, setShowCate] = useState(false);
    const [showAnnual, setShowAnnual] = useState(false);
    const [showSkill, setShowSkill] = useState(false);
    const [showRes, setShowRes] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
    };

    return(
        <Out>
            <Wrap>
                <div className="select">
                    <div className="section">
                        <button className="btn">
                            <span className="category">지역</span>
                            <span className="option">한국</span>
                        </button>
                        <button onClick={() => setShowAnnual(!showAnnual)} className={`btn ${showAnnual ? 'open' : ''}`}>
                            <span className="category">경력</span>
                            <span className="option all">전체</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                        </button>
                        <button onClick={() => setShowSkill(!showSkill)} className={`btn ${showSkill ? 'open' : ''}`}>
                            <span className="category">기술스택</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                        </button>
                    </div>
                    <div className="section right">
                        <button onClick={() => setShowRes(!showRes)} className={`res ${showRes ? 'open' : ''}`}>
                            <span className="category">응답률순</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                        </button>
                    </div>
                </div>
                <Hr>
                    <hr className="line"/>
                </Hr>
                <div className="scroll">
                    <StyledSlide {...settings}>
                        <button className="tag green">
                            연봉이 최고의 복지
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag blue">
                            재택근무
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            퇴사율 10% 이하
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag yellow">
                            급성장 중
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag pink">
                            병역특례
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag mint">
                            50인 이하
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            50인 이상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag green">
                            업력 5년 이상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag blue">
                            유연근무
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            자유로운 휴가
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag yellow">
                            일한만큼 받는 보상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F472333e8-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag pink">
                            수평적 문화
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag mint">
                            요즘 뜨는 산업
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4e1b135a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            식사 간식 제공
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F53ca893e-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <div></div>
                        <div></div>
                        <div></div>
                    </StyledSlide>
                </div>
            </Wrap>
        </Out>
    )
}

const Out = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid #36f;
    background-color: #fff;

    position: fixed;
    top:52px;
    left:0;
    right:0;
    z-index:99;
`;

const Wrap = styled.div`
    /* border: 1px solid #222; */
    overflow: hidden;
    width: 1060px;
    margin: 0 auto;

    .box{
        background: #fff;
        padding-top: 40px;

        display: flex;
        align-items: center;
    }

    .cate > button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        display:flex;
        align-items: center;
    }

    .title{
        padding-top: 3px;
        margin-right: 15.5px;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        color: #333;
    }

    .select-box > .under-btn{
        position: relative;
        border: 1px solid #e1e2e3;
        border-radius: 100px;
        background-color: #fff;
        width: 26px;
        height: 26px;
        transition: all ease 0.3s;
        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            border: 1px solid #767676;
        }
    }

    .select-box.open > .under-btn{
        transform: rotate(180deg);
        transition: all ease 0.3s;
        border: 1px solid #767676;
    }

    .job-option{
        font-size: 24px;
        line-height: 29px;
        font-weight: 400;
        color: #aaa;
    }

    .job-option::before{
        content: "|";
        font-size: 28px;
        line-height: 29px;
        padding: 3px 24px 0;
        color: #ececec;
    }

    .select{
        padding-top: 20px;
        /* border: 1px solid #222; */

        display:flex;
    }

    .section{
        /* border: 1px solid red; */
        flex-grow: 1;
    }

    .section.right{
        display: flex;
        justify-content: end;
    }

    .btn{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        margin-right: 10px;
        cursor: pointer;

        &:hover{
            background-color: #f8f8f8;
        }
    }

    .btn > svg {
        transition: all ease 0.3s;
    }

    .btn.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .res{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;

        cursor: pointer;
    }

    .res > svg {
        transition: all ease 0.3s;
    }

    .res.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .category{
        font-size: 14px;
        font-weight: 400;
        letter-spacing: normal;
        color: #333;
        margin-right: 15px;
    }

    .option{
        color: #36f!important;
        font-weight: 600;
        margin-right: 0;
        overflow: hidden;
    }

    .option.all{
        margin-right: 5px;
    }

    .scroll{
        display: flex;
    }
`;

const Hr = styled.div`
    width: 1060px;
    margin: 25px auto;

    .line{
        background-color: #ececec;
        height:1px;
        border:0;
    }
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        /* border: 1px solid #222; */
        width: 1300px;
        height: 34px;
    }

    .slick-list::after{
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);
    }

    .slick-slide{
        /* border: 1px solid red; */
        margin-right: 10px;
        width: 230px !important;
        height: 32px;
        position: relative;
    }

    .slick-slide img{
        display: inline-block !important;
    }

    .tag{
        height: 32px;
        position: absolute;
        letter-spacing: -1px;
        width: 100%;
        /* border: 1px solid #222; */
        border-radius: 20px;
        border: none;
        padding: 0px 14px;
        cursor: pointer;

        display:flex !important;
        align-items: center;
        justify-content: center;

        &:hover{
            border: 1px solid #36f;
        }
    }

    .tag.green{
        background: rgb(242, 251, 245);
    }

    .tag.blue{
        background: rgb(243, 249, 254);
    }

    .tag.violet{
        background: rgb(243, 242, 251);
    }

    .tag.yellow{
        background: rgb(246, 248, 238);
    }

    .tag.pink{
        background: rgb(247, 242, 249);
    }

    .tag.mint{
        background: rgb(238, 250, 249);
    }

    .slick-track{
        display: flex;
    }
    
    .slick-prev::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
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

    .slick-next::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
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
        top: 15px;
        left: 0;
        z-index: 55;
    }

    .slick-next{
        right:255px;
        top: 15px;
    }

    .slick-prev.slick-disabled::before{
        opacity: 0;
    }

    .slick-next.slick-disabled::before{
        opacity: 0;
    }
`;

export default ScrollFilter;