import styled from 'styled-components';

const ResumeHead = () => {
    return(
        <Wrap>
            <input className="title" value="실비아 2"/>
            <div className="info-wrap">
                <input className="info" value="실비아"/>
            </div>
            <div>
                <input className="info" value="si89336@naver.com"/>
            </div>
            <div>
                <input className="info" value="+8201011111111"/>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding-top: 130px;
    margin-bottom: 60px;

    .title{
        color: #3b3d40;
        font-size: 36px;
        line-height: 36px;
        font-weight: 600;
        margin: 0 0 50px;
        background-color: transparent;
        border: none;

        &:focus{
            outline: none;
        }
    }

    .info-wrap{
        margin-top: 10px;
    }

    .info{
        margin-top: 10px;
        font-size: 16px;
        margin-bottom: 0;
        background-color: transparent;
        border: none;

        &:focus{
            outline: none;
        }
    }
`;

export default ResumeHead;