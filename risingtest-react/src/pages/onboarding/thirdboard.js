import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-wanted-symbol.svg';
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Completed } from '../../svg/ic-completed.svg';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ThridBoard = () => {
    const navigate = useNavigate();

    const [click, setClick] = useState(false);

    const onClick = () => {
        setClick(!click);
    }

    const onStart = () => {
        navigate(`/`);
    }

    return(
        <Wrap>
            <Box>
                <div className="logo-wrap">
                    <Symbol />
                    <div className="logo-style">
                        <Logo width={87.38} height={20.13}/>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="step-head">
                        <ul className="step-container">
                            <li className="completed">
                                <em>
                                    <Completed />
                                </em>
                            </li>
                            <li className="completed">
                                <em>
                                    <Completed />
                                </em>
                            </li>
                            <li className="active">
                                <em>
                                    <span>3</span>
                                </em>
                                <span>관심태그 설정</span>
                            </li>
                        </ul>
                    </div>
                    <div className="step-body">
                        <div className="body-head">
                            <p className="style-head">
                                ㅇㅇㅇ의 커리어를 위한
                                <br />
                                콘텐츠를 추천해 드릴게요!
                            </p>
                        </div>
                        <div className="interests-box">
                            <ul>
                                <li className="interests-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/0a15b242.png" alt="직장인 공감" />
                                        <span>직장인 공감</span>
                                    </div>
                                    <ul className="list-wrap">
                                        <li><Btn onClick={onClick} click={click}>커리어고민</Btn></li>
                                        <li><Btn>취업/이직</Btn></li>
                                        <li><Btn>회사생활</Btn></li>
                                        <li><Btn>인간관계</Btn></li>
                                    </ul>
                                </li>
                                <li className="interests-second-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/2011f1b4.png" alt="관심분야" />
                                        <span>관심분야</span>
                                    </div>
                                    <ul className="list-wrap">
                                        <li><Btn>개발</Btn></li>
                                        <li><Btn>데이터</Btn></li>
                                        <li><Btn>HR</Btn></li>
                                        <li><Btn>서비스기획</Btn></li>
                                        <li><Btn>마케팅</Btn></li>
                                        <li><Btn>디자인</Btn></li>
                                        <li><Btn>경영/전략</Btn></li>
                                    </ul>
                                </li>
                                <li className="interests-second-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/49bae778.png" alt="트렌드/인사이트" />
                                        <span>트렌드/인사이트</span>
                                    </div>
                                    <ul className="list-wrap">
                                        <li><Btn>IT/기술</Btn></li>
                                        <li><Btn>브랜딩</Btn></li>
                                        <li><Btn>라이프스타일</Btn></li>
                                        <li><Btn>UX/UI</Btn></li>
                                        <li><Btn>노무</Btn></li>
                                        <li><Btn>리더십</Btn></li>
                                        <li><Btn>조직문화</Btn></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <button onClick={onStart} type="button" className="start-btn">원티드 시작하기</button>
                    </div>
                </div>
            </Box>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    min-height: 77vh;
    padding-top: 105px;
    padding-bottom: 105px;
    background-color: #f8f8fa;
`;

const Box = styled.div`
    width: 400px;
    max-width: 100vw;

    .logo-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-style{
        margin-left: 8px;
    }

    .content-wrap{
        border: 1px solid #ececec;
        border-radius: 5px;
        margin-top: 39px;
        background-color: #fff;
    }

    .step-head{
        position: relative;
        border-bottom: 1px solid #e1e2e3;
        padding: 20px;
    }

    .step-container{
        display: flex;
        justify-content: flex-start;
    }

    .step-container > li {
        flex: none;
        height: 23px;
    }

    .step-container > li > em {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        line-height: 1em;
        border-radius: 50%;
        font-style: normal;
        background: #f2f4f7;
        margin-right: 6px;
        color: #ccc;
    }

    .step-container > li > span {
        display: inline-block;
        font-size: 14px;
        color: #333;
        margin-left: 4px;
        font-weight: 700;
        line-height: 23px;
    }

    .step-container > li > em > span {
        font-weight: 700;
        border: 1px solid transparent;
        height: 1em;
    }

    .step-container > li.completed > em {
        background: #36f;
        color: #fff;
    }

    .step-container > li.completed::after{
        background: #36f;
        width: 66.66%;
        position: absolute;
        content: "";
        display: block;
        bottom: -1px;
        height: 1px;
        left: 0;
    }

    .step-container > li.active {
        margin-left: 0;
        color: #333;
        margin-right: auto;
    }

    .step-container > li.active > em {
        background: #36f;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        line-height: 1em;
        border-radius: 50%;
        font-style: normal;
        margin-right: 6px;
    }

    .step-container > li.active::after{
        background: #36f;
        width: 33.33%;
        transition: width .5s;
        left: 66.66%;
        position: absolute;
        content: "";
        display: block;
        bottom: -1px;
        height: 1px;
    }

    .step-body{
        padding: 29px 19px 24px;
    }

    .body-head{
        margin-bottom: 34px;
        font-size: 15px;
        text-align: left;
        color: #333;
        font-weight: 600;
    }

    .style-head{
        line-height: 1.53;
        white-space: pre-line;
        margin-bottom: 29px;
    }

    .interests-box{
        margin-bottom: 24px;
    }

    .interests-box > ul {
        display: flex;
        flex-wrap: wrap;
    }

    .interests-list{
        min-width: 90%;
    }

    .list-head{
        margin-bottom: 14px;
    }

    .list-head > img {
        width: 15px;
        height: 16px;
        margin-right: 4px;
        margin-top: -5px;
    }

    .list-head > span{
        font-weight: 700;
        font-size: 15px;
        color: #666;
    }

    .list-wrap{
        margin-bottom: 0;
    }

    .list-wrap > li {
        float: left;
        margin: 0 10px 16px 0;
        height: 38px;
    }

    .interests-second-list{
        min-width: 90%;
        margin-top: 13px;
    }

    .start-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 54px;
        border: 0;
        border-radius: 27px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }
`;

const Btn = styled.button`
    display: inline-block;
    padding: 0 15px;
    font-size: 15px;
    height: 100%;
    font-weight: ${props=>props.click ? "700" : "500"};
    color: ${props=>props.click ? "#36f" : "#666"};
    border: ${props=>props.click ? "1px solid #36f" : "1px solid transparent"};
    border-radius: 21px;
    background-color: ${props=>props.click ? "#fff" : "#f2f4f7"};
    line-height: 1em;
    cursor: pointer;
`;

export default ThridBoard;