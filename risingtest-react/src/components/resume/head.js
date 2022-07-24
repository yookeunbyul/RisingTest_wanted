import styled from 'styled-components';

const Head  = () => {
    return(
        <Wrap>
            <div className="box">
                <img src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_intro_title.png" />
                <div className="txt-box">
                    <div className="title">합격을 부르는 이력서</div>
                    <div className="sub">
                        원티드 이력서로 지원 시 일반 이력서보다
                        <br />
                        서류 합격률이 2배* 높아집니다.
                    </div>
                    <button>원티드 이력서 작성하기</button>
                    <p>
                        *21/01/01 ~ 22/01/01 기간 중 원티드를 통해
                        <br />
                        지원한 이용자의 평균 서류 합격률 기준
                    </p>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
    padding-top: 50px;

    .box{
        height: 440px;
        position: relative;
        z-index: 0;
        background-color: #f1f7fe;
    }

    .box > img {
        display: flex;
        justify-self: center;
        max-width: 1440px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        margin: 0 auto;
    }

    .txt-box{
        /* border: 1px solid #222; */
        width: 1060px;
        margin: 0 auto;
        padding-top: 100px;
    }

    .title{
        font-weight: 700;
        font-size: 48px;
        letter-spacing: -.027em;
        line-height: 62px;
    }

    .sub{
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        margin-top: 15px;
    }

    .txt-box > button {
        height: 50px;
        padding: 13px 32px;
        margin-top: 50px;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
        background-color: #36f;
        border-radius: 50px;
        border: none;
    }

    .txt-box > p {
        margin-top: 18px;
        text-align: right;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #939393;
        letter-spacing: .031em;
    }
`;
export default Head;