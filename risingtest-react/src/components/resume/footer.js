import styled from 'styled-components';

const Footer = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="section">
                    <div className="progress">
                        <div className="number">43</div>
                        <div className="bar">
                            <div className="percen"></div>
                            <div className="pin"></div>
                        </div>
                        <div className="under">
                            <div className="zero">0</div>
                            <div className="pinnum">400</div>
                        </div>
                    </div>
                    <div className="emoji">
                        💪
                    </div>
                    <div className="guide">
                        400자 이상 작성하시면 이력서를 완료할 수 있어요!
                    </div>
                </div>
                <div className="section right">
                    <button className="ing">임시 저장</button>
                    <button className="done">저장 완료</button>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    background-color: #fff;
    height: 81px;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    .box{
        width: 1060px;
        /* border: 1px solid red; */
        margin: 0 auto;

        display: flex;
    }

    .section{
        flex-grow: 1;
        /* border: 1px solid #222; */

        display: flex;
        align-items: center;
    }

    .progress{
        display:flex;
        flex-direction: column;
    }

    .number{
        transform-origin: left;
        font-size: 10px;
        font-weight: 600;
    }

    .bar{
        position: relative;
        overflow: hidden;
        width: 150px;
        height: 9px;
        border-radius: 4.5px;
        background-color: #e1e2e3;
        transform: translateZ(0);
    }

    .percen{
        transform: translateX(-97.3125%);
        background-color: rgb(51, 51, 51);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        transform-origin: left;
        border-radius: 4.5px 0 0 4.5px;
    }

    .pin{
        left: 25%;
        position: absolute;
        top: 0;
        bottom: 0;
        border-left: 1px dotted #36f;
    }
    
    .under{
        position: relative;
        overflow: hidden;
        height: 14px;
    }

    .zero{
        position: absolute;
        top: 2px;
        left: 0;
        bottom: 0;
        color: #999;
        font-size: 10px;
        font-weight: 600;
    }

    .pinnum{
        color: rgb(51, 51, 51);
        transform: translateX(19.5%);
        position: absolute;
        top: 2px;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 10px;
        font-weight: 600;
    }

    .emoji{
        flex: 0 1 auto;
        width: 32px;
        margin-left: 6px;
        font-size: 16px;
    }

    .guide{
        display:flex;
        align-items: center;

        font-size: 13px;
        margin-top: 3px;
        color: #333;
        font-weight: 600;
    }

    .section.right{
        display: flex;
        justify-content:end;
    }

    .section > button{
        height: 50px;
        width: 173px;
        font-size: 16px;
        padding: 0 27px;
        border-radius: 25px;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
    }

    .ing{
        color: #36f;
        background-color: #fff;
        border: 1px solid #36f;
        margin-right: 7px;
    }

    .done{
        color: #fff;
        background-color: #36f;
        border: none;
    }
`;

export default Footer;