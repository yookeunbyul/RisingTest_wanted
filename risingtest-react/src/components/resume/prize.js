import styled from 'styled-components';

const Prize = () => {
    return(
        <Wrap>
            <div className="title">수상 및 기타</div>
            <p className="guide-box">
                • 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.
                <br />
                • 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!
            </p>
            <div className="add">
                <button>+ 추가</button>
            </div>
            <Hr>
                <hr className="line"/>
            </Hr>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    padding-bottom: 40px;
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

    .more{
        display: flex;
        align-items: center;
        width: 100%;
        height: 70px;
        padding: 0 20px;
        border-radius: 3px;
        margin: 10px 0 20px;
        background: #f7f7f7;
        cursor: pointer;
        border: none;
    }

    .section{
        flex-grow:1;
        /* border: 1px solid blue; */
        text-align: left;
    }

    .section.right{
        text-align: right;
    }

    .section.right > span{
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        color: #36f;
    }

    .section.right > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }

    .add{
        /* border: 1px solid #222; */
    }

    .add > button {
        color: #36f;
        background-color: transparent;
        border-bottom: 1px solid #f1f1f1;
        width: 100%;
        padding: 30px 0;
        font-size: 18px;
        border: 0;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
    }
`;

const Hr = styled.div`
    width: 1060px;
    margin: 0 auto;

    .line{
        background-color: #ececec;
        height:1px;
        border:0;
    }
`;

export default Prize;