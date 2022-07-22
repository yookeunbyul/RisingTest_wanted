import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-ai-symbol.svg';
import { ReactComponent as Guide } from '../../svg/ic-guide.svg';

const AiPosition = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="head">
                    <Symbol />
                    <img className="logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" width="170"/>
                </div>
                <div className="title">
                    <img className="logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" width="114"/>
                    가 제안하는 합격률 높은 포지션
                    <button>
                        <Guide />
                    </button>
                </div>
                <div className="sub">회원가입하면 포지션을 추천해드려요.</div>
                <div className="btn">
                    <button>지금 시작하기</button>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */

    .box{
        background: #f4f8fb;
        background-image: url(https://wanted-dev.static.wanted.co.kr/banner/Jobsfeed_ai_banner.png);
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 60px;
    }

    .head{
        /* border: 1px solid blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 40px;
    }

    .logo{
        margin-left: 8px;
    }

    .title{
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 22px;
        font-weight: 700;
        line-height: 1.05;
    }

    .title > button{
        border: none;
        background-color: transparent;
        margin-top: 3px;
    }

    .sub{
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 10px;
        color: #555555;
        font-size: 16px;
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 25px;
    }

    .btn > button {
        padding: 10px 20px;
        border-radius: 25px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 700;
        color: #fefefe;
        border: none;
        line-height: 22px;
    }
`;
export default AiPosition;