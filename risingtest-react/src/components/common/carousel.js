import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {

    //옵션
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
        };

    return(
        <>
            <Container>
                <StyledSlide {...settings}>
                <div className="box">
                    <p className="section">
                        <img className="img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1745%2F87076d50.jpg&w=1060&q=100" alt="구글 최초 한국인 개발자!?"/>
                    </p>
                </div>
                <div className="box">
                    <p className="section">
                        <img className="img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1738%2F26401a6a.jpg&w=1060&q=100" alt="구글 최초 한국인 개발자!?"/>
                    </p>
                </div>
                <div className="box">
                    <p className="section">
                        <img className="img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1739%2F479066c4.jpg&w=1060&q=100" alt="구글 최초 한국인 개발자!?"/>
                    </p>
                </div>
                </StyledSlide>
            </Container>

        </>
    );
}

export default Carousel;

const Container = styled.div`
    margin: 0 auto;
    width: 1705px;
    border: 1px solid blue;
    
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
    .slick-list{ 
        /* 얘로 크기조정 했음 */
        height: 299.98px;
        margin: 0 auto;
        margin: 20px 0px;
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
        right:255px;
    }
`;