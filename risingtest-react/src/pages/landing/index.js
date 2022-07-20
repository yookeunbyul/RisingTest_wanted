import Head from "../../components/common/head";
import Insites from "../../components/landing/insites";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { ReactComponent as Arrow } from '../../svg/ic-right-arrow.svg';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const LandingPage = () => {
    const [slide, setSlide] = useState("");
    const [insiteTag, setInsiteTag] = useState("");

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/posts",{
            })
            .then(res => {
                console.log(res);
                setSlide(res.data.carousels);
                setInsiteTag(res.data.insitePostTags);
            })
            .catch(err => console.log(err))
    }, [])

    //옵션
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        };

    return(
        <>
            {/* 헤더 */}
            <Head />

            {/* 캐러셀 */}
            <Container>
                <StyledSlide {...settings}>
                {slide ? (
                    slide.map((slide) => {
                        return(
                            <Box key={slide.carouseTitle}>
                                <Section>
                                    <Img src={slide.imgUrl} alt="" />
                                    <div className="guide-box">
                                        <div className="gudie-title">{slide.carouseTitle}</div>
                                        <div className="gudie-sub">{slide.content}</div>
                                        <hr className="box-hr"/>
                                        <a className="gudie-link" href={slide.link}>
                                            <span>바로가기</span>
                                            <Arrow />
                                        </a>
                                    </div>
                                </Section>
                            </Box>
                        )
                    })
                ) : null}
                </StyledSlide>
            </Container>

            {/* 인사이트 */}
            <Insites>
                {insiteTag ? (
                    insiteTag.map((menu) => {
                        return(
                            <Wrap key={menu.tagId}>
                                <Menu>{menu.name}</Menu>
                            </Wrap>
                        )
                    })
                ) : null}
                
            </Insites>
        </>
    );
}

const Box = styled.div`
    width: 1095px;
`;

const Section = styled.p`
    margin: 0px 10px;
    position: relative;

    .guide-box{
        position: absolute;
        bottom: 28px;
        width: 330px;
        height: 146px;
        border-radius: 4px;
        background-color: #fff;
        text-align: left;
        left: 34px;
        z-index: 89;
    }

    .box-hr {
        background-color: #ececec;
        height:1px;
        border:0;
        margin-bottom: 18px;
    }

    .gudie-title{
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
        font-size: 18px;
        line-height: 1;
        font-weight: 700;
        color: #333;
    }

    .gudie-sub{
        margin-left: 20px;
        margin-right: 20px;
        padding: 10px 0px;
        font-size: 13px;
        font-weight: 500;
        color: #666;
        letter-spacing: -1.5px
    }

    .gudie-link{
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        color: #36f;

    }

    .gudie-link > span{
        /* border: 1px solid blue; */
        padding: 0px 0px 0px 20px;
    }
`;

const Img = styled.img`
    margin: 0 auto;
    border-radius: 5px;
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1705px;
    /* border: 1px solid blue; */
    
    .box{
        width: 1095px;
    }

    .section{
        margin: 0px 10px;
    }

    .img{
        margin: 0 auto;
        border-radius: 5px;
    }
`;

const StyledSlide = styled(Slider)`
    .slick-center{
        filter: brightness(100%) !important;

        .guide-box{
            opacity: 1 !important;
        }
    }

    .slick-list{ 
        /* 얘로 크기조정 했음 */
        height: 299.98px;
        margin: 0 auto;
        margin: 20px 0px;
    }

    .slick-slide{
        filter: brightness(50%);

        .guide-box{
            opacity: 0;
        }
    }

    .slick-prev::before{ 
        /* 얘는 양옆 버튼. 커스텀 해줘야 보임 */
        content: "\f104";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        opacity: .5;
        color: #222;
        border: 1px solid #222;
        padding: 20px 10px;
        border-radius: 15px;
        border: none;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    .slick-next::before{
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        opacity: .5;
        color: #222;
        border: 1px solid #222;
        padding: 20px 10px;
        border-radius: 15px;
        border: none;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    .slick-prev{
        left: 235px;
        z-index: 99;
    }

    .slick-next{
        right:248px;
    }
`;

const Menu = styled.button`
    height: 50px;
    border: 1px none;
    background-color: #f2f4f7;
    border-radius: 5px;
    font-size: 13px;
    padding: 0px 20px;
    width: 100%;
    letter-spacing: -1px;

    &:hover{
        font-weight: 700;
        background-color: #fff;
        border: 1px solid #36f;
        color: #36f;
        outline: none;
    }
`;

const Wrap =styled.div`
    /* border:1px solid red; */
`;


export default LandingPage;