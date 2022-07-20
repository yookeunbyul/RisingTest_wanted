import styled from 'styled-components';
import { ReactComponent as Logo } from '../../svg/ic-wanted-plus.svg';

const Subscribe = () => {
    return(
        <Wrap>
            <Box>
                <div className="section">
                    <span><Logo /></span>
                    <span className="title">구독해야하는 이유</span>
                    <div className="sub">구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</div>
                    <div className="btn-box">
                        <button>
                            <span>첫 구독 0원 신청하기</span>
                        </button>
                    </div>
                </div>
                <div className="section">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" />
                </div>
            </Box>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    /* height: 278px; */
    background-color: #f7f7f7;
    padding: 60px 0px;;
`;

const Box = styled.div`
    /* border: 1px solid #222; */
    width: 1060px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 515.18px 544.82px;

    .section{
        /* border: 1px solid blue; */
    }

    .title{
        font-weight: 900;
        font-size: 30px;
    }

    .sub{
        margin: 10px 0px;
        font-size: 14px;
        color: #333333;
    }

    .btn-box{
        margin-top: 25px;
    }

    .btn-box > button {
        color: #fff;
        background-color: #36f;
        width: 260px;
        height: 50px;
        font-size: 16px;
        border: none;
        border-radius: 30px;
        font-weight: 900;
    }

    .btn-box > button > span::before{
        content: "\f00c";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #fff;
        margin-right: 5px;
    }

    .section > img{
        width: 544.82px;
    }
`;

export default Subscribe;