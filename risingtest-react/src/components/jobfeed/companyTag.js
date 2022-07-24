import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const CompanyTag = () => {
    const [tagList, setTagList] = useState([]);
    const [secondTagList, setSecondTagList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [secondCompanyList, setSecondCompanyList] = useState([]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/employment/mainpage",{
            })
            .then(res => {
                // console.log(res);
                setTagList(res.data.result.companiesMatchingTag1);
                setSecondTagList(res.data.result.companiesMatchingTag2);
                setCompanyList(res.data.result.companiesMatchingTag1.companyList);
                setSecondCompanyList(res.data.result.companiesMatchingTag2.companyList)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Section>
            <div className="first-slide">
                <div className="title-wrap">
                    <div className="title">#{tagList.tagName}</div>
                    <img src={tagList.tagURL} alt="" width="24" height="24"/>
                    <span>회사를 소개합니다</span>
                </div>
                <div className="a-wrap">
                    <a href="">포지션으로 더보기</a>
                </div>
                <div className="slide">
                    <StyledSlide {...settings}>
                        {companyList ? (
                            companyList.map((company) => {
                                return(
                                    <div key={company.CompanyId}>
                                        <ImgWrap>
                                            <Thumbnail src={company.imgUrl} />
                                        </ImgWrap>
                                        <div className="name-wrap">
                                            <div className="section">
                                                <img src={company.Logo} alt="" width="42" height="42"/>
                                                <div className="name">
                                                    <div className="company-name">{company.companyName}</div>
                                                    <div className="category">{company.categoryName}</div>
                                                </div>
                                            </div>
                                            <div className="btn-section">
                                                <button>팔로우</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null}
                    </StyledSlide>
                </div>
            </div>
            <div className="title-wrap">
                <div className="title">#{secondTagList.tagName}</div>
                <img src={secondTagList.tagURL} alt="" width="24" height="24"/>
                <span>회사를 소개합니다</span>
            </div>
            <div className="a-wrap">
                <a href="">포지션으로 더보기</a>
            </div>
            <div className="slide">
                <StyledSlide {...settings}>
                    {secondCompanyList ? (
                        secondCompanyList.map((company) => {
                            return(
                                <div key={company.CompanyId}>
                                    <ImgWrap>
                                        <Thumbnail src={company.imgUrl} />
                                    </ImgWrap>
                                    <div className="name-wrap">
                                        <div className="section">
                                            <img src={company.Logo} alt="" width="42" height="42"/>
                                            <div className="name">
                                                <div className="company-name">{company.companyName}</div>
                                                <div className="category">{company.categoryName}</div>
                                            </div>
                                        </div>
                                        <div className="btn-section">
                                            <button>팔로우</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : null}
                </StyledSlide>
            </div>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding-bottom: 70px;

    .first-slide{
        margin-bottom: 90px;
    }

    .title-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-wrap > span{
        font-size: 22px;
    }

    .title{
        font-size: 22px;
        line-height: 1.33;
        font-weight: 700;
        color: #333;
    }

    .a-wrap{
        text-align: center;
        margin: 10px 0px;
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

    .name-wrap{
        display: flex;
        /* border: 1px solid #222; */
        margin: 20px 0px 0px 0px;
        flex-direction: row;
    }

    .section{
        /* border:1px solid red; */
        flex-grow:1;
        flex-basis:0;

        display: flex;
    }

    .btn-section{
        /* border:1px solid red; */
        flex-grow:1;
        flex-basis:0;

        display: flex;
        justify-content: end;
    }

    .section > img{
        border: 1.5px solid rgb(0 0 0 / 10%);
        margin-right: 10px;
    }

    .btn-section > button{
        color: #36f;
        background-color: #fff;
        border: 1px solid #e1e2e3;
        width: 91.9px;
        height: 40px;
        border-radius: 25px;
        font-size: 15px;
        font-weight: 900;
        cursor: pointer;
    }

    .name{
        display:flex;
        flex-direction: column;
        /* border: 1px solid #222; */
    }

    .company-name{
        font-size: 18px;
        font-weight: 700;
        color: #333;
        padding-top: 2px;
    }

    .icon-box{
        color: #ff9100;
        border-color: #ff9100;
        border: 1px solid;
        height: 20px;
        border-radius: 2px;
    }

    .icon-box > span {
        font-size: 11px;
        font-weight: 700;
        line-height: normal;
        padding: 0 6px;
    }

    .event-title{
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }

    .category{
        font-size: 14px;
        font-weight: 500;
        color: #999;

        padding-top: 7px;
    }
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 345px;
    }

    .slick-slide{
        margin-right: 10px;
        /* background-color: red; */
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
        z-index: 66;
        left: 0;
    }

    .slick-next{
        right:15px;
        top: -60px;
    }
`;

const ImgWrap = styled.div`
    width: 522px;
    height: 273px;
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



export default CompanyTag;