import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Event = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };


    return(
        <Section>
            <div className="title-wrap">
                <div className="title">커리어 성장을 위한 맞춤 이벤트</div>
            </div>
            <div className="a-wrap">
                <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all">이벤트 전체보기</a>
            </div>
            <div className="slide">
                <StyledSlide {...settings}>
                    <div>
                        <ImgWrap>
                            <Thumbnail src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2125%2Fe0212780.jpg&w=1200&q=100" />
                        </ImgWrap>
                        <div className="icon-wrap">
                            <span className="icon-box">
                                <span>아티클</span>
                            </span>
                        </div>
                        <div className="event-title">일 잘-하는 마케터의 팔로잉 리스트</div>
                    </div>
                    <div>
                        <ImgWrap>
                            <Thumbnail src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2212%2F8eba0e97.jpg&w=1200&q=100" />
                        </ImgWrap>
                        <div className="icon-wrap">
                            <span className="icon-box">
                                <span>아티클</span>
                            </span>
                        </div>
                        <div className="event-title">[무료] 청와대 의전주로 사용된 전통주, 복순도가</div>
                    </div>
                    <div>
                        <ImgWrap>
                            <Thumbnail src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2207%2Fca78caa5.jpg&w=1200&q=100" />
                        </ImgWrap>
                        <div className="icon-wrap">
                            <span className="icon-box">
                                <span>아티클</span>
                            </span>
                        </div>
                        <div className="event-title">원티드매거진, 신청만 하면 누구나 다운로드 가능!</div>
                    </div>
                    <div>
                        <ImgWrap>
                            <Thumbnail src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2113%2F8082560a.jpg&w=1200&q=100" />
                        </ImgWrap>
                        <div className="icon-wrap">
                            <span className="icon-box">
                                <span>아티클</span>
                            </span>
                        </div>
                        <div className="event-title">스타트업의 체계 없음이 가장 두려웠죠!</div>
                    </div>
                </StyledSlide>
            </div>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding: 50px 0px 80px 0px;

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
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 335px;
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



export default Event;