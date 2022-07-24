import styled from 'styled-components';

const Skill = () => {
    return(
        <Wrap>
            <div className="title">스킬</div>
            <p className="guide-box">
                • 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.
                <br />
                • 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.
                <br />
                • 스킬을 등록한 원티드 이력서는 일반 이력서에 비해 서류통과율이 더 높습니다!
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

export default Skill;