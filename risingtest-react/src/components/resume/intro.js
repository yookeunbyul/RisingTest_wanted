import styled from 'styled-components';

const Intro = () => {
    return(
        <Wrap>
            <div className="title">간단 소개글</div>
            <p className="guide-box">
                • 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.
                <br />
                • 3~5줄로 요약하여 작성하는 것을 추천합니다! 
            </p>
            <div className="text">
                <textarea maxlength="4000" placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"></textarea>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    padding-bottom: 60px;
    /* border: 1px solid red; */

    .title{
        padding: 20px 0 6px;
        font-size: 16px;
        font-weight: 500;
        color: #3b3d40;
        border-bottom: 1px solid #bababa;
    }

    .guide-box{
        white-space: pre-wrap;
        padding: 10px;
        background-color: #f3f9fe;
        font-size: 12px;
        line-height: 1.42;
        letter-spacing: normal;
        color: #666;
        margin-top: 10px;

        display:flex;
        align-items: center;
    }

    .text{
        position: relative;
        overflow-x: hidden;
    }

    .text > textarea{
        white-space: pre-wrap;
        word-break: break-all;
        word-wrap: break-word;
        caret-color: #000;
        overflow: hidden;
        line-height: 22px;
        background-color: transparent;
        border: none;
        padding: 0;
        width: 100%;
        height: 34px;
        color: rgb(59, 61, 64);
        margin: 30px 0px 3px;
        font-size: 15px;
        font-family: Pretendard,Pretendard JP,Pretendard Std,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,Apple SD Gothic Neo,Nanum Gothic,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;

        &:focus{
            outline: none;
        }
    }
`;

export default Intro;