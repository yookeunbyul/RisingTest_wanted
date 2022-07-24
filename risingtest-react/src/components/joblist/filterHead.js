import styled from 'styled-components';
import { ReactComponent as UnderArrow } from '../../svg/ic-under-arrow.svg';
import { ReactComponent as BtnArrow } from '../../svg/ic-btn-arrow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FilterHead = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
    };

    return(
        <Wrap>
            <div className="box">
                <div className="cate">
                    <button>
                        <span className="title">전체</span>
                        <span className="under-btn"><UnderArrow /></span>
                    </button>
                </div>
                <div className="job-option">
                    직군을 선택해주세요.
                </div>
            </div>
            <div className="select">
                <div className="section">
                    <button className="btn">
                        <span className="category">지역</span>
                        <span className="option">한국</span>
                    </button>
                    <button className="btn">
                        <span className="category">경력</span>
                        <span className="option all">전체</span>
                        <BtnArrow />
                    </button>
                    <button className="btn">
                        <span className="category">기술스택</span>
                        <BtnArrow />
                    </button>
                </div>
                <div className="section right">
                    <button  className="res">
                        <span className="category">응답률순</span>
                        <BtnArrow />
                    </button>
                </div>
            </div>
            <Hr>
                <hr className="line"/>
            </Hr>
            <div className="scroll">
                <StyledSlide {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
                </StyledSlide>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
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

    .under-btn{
        position: relative;
        border: 1px solid #e1e2e3;
        border-radius: 100px;
        background-color: #fff;
        width: 26px;
        height: 26px;
        transition: .3s;
        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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
        width: 1060px;
        border: 1px solid #222;
        height: 32px;
    }

    .slick-slide{
        margin-right: 10px;
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
        top: 16px;
        z-index: 99;
    }

    .slick-next{
        right:15px;
        top: 16px;
        
    }

    .slick-prev.slick-disabled::before{
        opacity: 0;
    }

    .slick-next.slick-disabled::before{
        opacity: 0;
    }
`;

export default FilterHead;