import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const ThemeSlide = () => {
    const [themeList, setThemeList] = useState([]);

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
                setThemeList(res.data.result.themeData);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Section>
            <div className="title-wrap">
                <div className="title">테마로 모아보는 요즘 채용</div>
            </div>
            <div className="slide">
                <StyledSlide {...settings}>
                    {themeList ? (
                        themeList.map((theme) => {
                            return(
                                <div key={theme.companyThemeId}>
                                    <ImgWrap>
                                        <Thumbnail src={theme.themeImgUrl} />
                                    </ImgWrap>
                                    <div className="title">{theme.themeName}</div>
                                    <div className="intro">{theme.introduction}</div>
                                    {theme.companyLogoList.map(v=>v).map(u=>{
                                        return(
                                            <img className="company-img" alt="" src={u} width="30" height="30"/>
                                        )
                                    })}
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
    padding: 70px 0px 80px 0px;

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

        padding-bottom: 5px;
    }

    .a-wrap{
        text-align: center;
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

    .icon-wrap{
        display: flex;
        /* border: 1px solid #222; */
        margin: 10px 0px;
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

    .title{
        margin-top: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        color: #333
    }

    .intro{
        margin: 8px 0px;
        font-size: 14px;
        line-height: 16.8px;
        font-weight: 500;
        color: #939393;
    }

    .company-img{
        display: inline;
        margin-right: 8px;
        margin-top: 8px;
        border: 1px solid rgba(0,0,0,.05);
    }
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 390px;
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
        top: -50px;
        z-index: 99;
        left: 0;
    }

    .slick-next{
        right:15px;
        top: -50px;
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



export default ThemeSlide;