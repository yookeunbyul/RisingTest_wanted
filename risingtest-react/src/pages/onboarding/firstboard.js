import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-wanted-symbol.svg';
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';

const FirstBoard = () => {
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
                            <li className="active">
                                <em>
                                    <span>1</span>
                                </em>
                                <span>전문분야 설정</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Box>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
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

    .step-container > li.active{
        margin-left: 0;
        color: #333;
        margin-right: auto;
    }

    .step-container > li{
        flex: none;
        height: 23px;
    }

    .step-container > li.active > em {
        background: #36f;
        color: #fff;
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
        margin-right: 6px;
    }

    .step-container > li > span {
        display: inline-block;
        font-size: 14px;
        color: #333;
        margin-left: 4px;
        font-weight: 700;
        line-height: 23px;
    }

    .step-container > li.active::after{
        background: #36f;
        width: 33.33%;
        left: 0;
    }

    .step-container > li::after{
        position: absolute;
        content: "";
        display: block;
        bottom: -1px;
        height: 1px;
    }
`;

export default FirstBoard;