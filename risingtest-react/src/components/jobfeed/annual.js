import styled from 'styled-components';

const Annual = () => {
    return(
        <Wrap>
            <div className="box">
                <button>
                    <div className="section-wrap">
                        <div className="section">
                            <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
                            <button>지금 확인하기</button>
                        </div>
                        <div className="section">
                            <img src="https://static.wanted.co.kr/career_connect/banner.png" alt="" width="236" height="169"/>
                        </div>
                    </div>
                </button>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
    margin: 20px 0 60px;
    background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);
    height: 150px;

    .box{
        width: 100%;
        margin: 0 auto;
        /* border: 1px solid blue; */
        height: 150px;
        overflow-y: hidden;
    }

    .box > button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .section-wrap{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid red; */

        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .section{
        /* border: 1px solid #222; */
        flex-grow: 1;
        /* flex-basis: 0; */
        text-align: left;
    }

    .section > p {
        font-size: 24px;
        line-height: 29px;
        color: #5071dc;
        font-weight: 900;
    }

    .section > img{
        float: right;
    }

    .section > button{
        margin-top: 10px;
        height: 36px;
        font-size: 14px;
        width: 119px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        background-color: #5071dc;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
    }
`;

export default Annual;