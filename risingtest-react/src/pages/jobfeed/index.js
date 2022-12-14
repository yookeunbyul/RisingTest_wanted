import Footer from "../../components/common/footer";
import Position from "../../components/jobfeed/position";
import AiPosition from "../../components/jobfeed/aiposition";
import Annual from "../../components/jobfeed/annual";
import SubNav from "../../components/jobfeed/subNav";
import CompanyTag from "../../components/jobfeed/companyTag";
import ThemeSlide from "../../components/jobfeed/themeSlide";
import HotFeed from "../../components/jobfeed/hotFeed";
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../svg/ic-right-arrow.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const JobFeedPage = () => {
    const [slide, setSlide] = useState("");

    useEffect(() => {
        axios.get("https://prod.zezeserver.shop/app/employment/mainpage",{
            })
            .then(res => {
                console.log(res);
                setSlide(res.data.result.carousel);
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
        speed: 2000,
        autoplaySpeed: 3000,
        };

    return(
        <Out>
            {/* 헤더 */}
            {/* <Outlet /> */}

            {/* 캐러셀 */}
            <Container>
                    <StyledSlide {...settings}>
                    {slide ? (
                        slide.map((slide) => {
                            return(
                                <Box key={slide.carouselId}>
                                    <Section>
                                        <Img src={slide.imgUrl} alt="" />
                                        <div className="guide-box">
                                            <div className="gudie-title">{slide.title}</div>
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

            {/* 채용포지션 */}
            <Position />

            {/* AI 포지션 */}
            <AiPosition />

            {/* 경력 */}
            <Annual />

            {/* 서브메뉴 */}
            <SubNav />

            {/* 회사태그슬라이드1 */}
            <CompanyTag />

            <Hr>
                <hr className="line"/>
            </Hr>

            {/* 테마 */}
            <ThemeSlide />

            <Hr>
                <hr className="line"/>
            </Hr>

            {/* 요즘 뜨는 */}
            <HotFeed />

            <Footer />
        </Out>
    );
}

const Out = styled.div`
    overflow-x: hidden;
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1690.97px;
    padding-top: 50px;
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
        padding: 5px 0px;
        font-size: 14px;
        line-height: 1.64;
        color: #333;
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

const Hr = styled.div`
    width: 1060px;
    margin: 0 auto;

    .line{
        background-color: #ececec;
        height:1px;
        border:0;
    }
`;

export default JobFeedPage;