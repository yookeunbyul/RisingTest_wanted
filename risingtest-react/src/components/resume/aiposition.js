import styled from 'styled-components';

const AiPosition = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="section">
                    <div className="title">
                        이력서 완성하면
                        <p>
                            <img width="198" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png" />
                            가 포지션 추천까지
                        </p>
                    </div>
                    <div className="sub">
                        <p>이력서를 분석하여 딱 맞는 포지션을 찾아드려요.</p>
                        <p>원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비 4배 높습니다.</p>
                    </div>
                    <div className="btn">
                        <button>원티드 이력서 시작하기</button>
                    </div>
                </div>
                <div className="section">
                    <img width="516" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png" />
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
    padding-top: 100px;

    .box{
        width: 1060px;
        margin: 0 auto;

        display:flex;
        flex-direction: row;
    }

    .section{
        flex-grow: 1;
        /* border: 1px solid red; */
    }

    .title{
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -.024em;
    }

    .sub{
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: -1.5px;
        margin-top: 20px;
    }

    .btn{
        margin-top: 30px;
    }

    .btn > button {
        height: 50px;
        font-size: 15px;
        color: #fff;
        background-color: #36f;
        border: none;
        border-radius: 50px;
        font-weight: 700;
        padding: 0px 27px;
    }
`;

export default AiPosition;