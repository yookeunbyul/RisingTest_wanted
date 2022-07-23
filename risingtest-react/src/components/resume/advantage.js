import styled from 'styled-components';

const Advantage = () => {
    return(
        <Section>
            <div className="title">
                원티드 이력서는 이런 점이 좋아요!
            </div>
            <div className="content">
                <div className="card first">
                    <div className="head">
                        이력서 하나로 모든 준비 끝
                    </div>
                    <div className="sub">
                        이력서 작성부터 지원까지 한 곳에서!
                        <br />
                        회사별 양식에 맞출 필요 없이 하나의 이력서만 작성하세요.
                    </div>
                    <img alt="" className="first-img" width="512" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_01.png" />
                </div>
                <div className="card second">
                    <div className="head">
                        완성도를 높여주는 이력서 코칭
                    </div>
                    <div className="sub">
                        이력서 코칭*으로 서류 합격률 30% UP
                        <br />
                        300만 합격 데이터를 분석해 합·불합격 단어를 알려드려요.
                    </div>
                    <div className="ex">*일부 직군에서는 사용 제한, 추후 확대 예정</div>
                    <img alt="" className="second-img" width="520" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_02.png" />
                </div>
                <div className="card third">
                    <div className="head">
                        이력서만 등록해도 찾아오는 면접 제안
                    </div>
                    <div className="sub">
                        매치업은 서류 전형 없이 바로 면접 진행!
                        <br />
                        채용담당자가 직접 면접을 제안합니다.
                    </div>
                    <img alt="" className="third-img" width="520" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_03.png" />
                </div>
                <div className="card four">
                    <div className="head">
                        언제 어디서나 자유롭게 작성
                    </div>
                    <div className="sub">
                        주말엔 노트북, 출퇴근길엔 스마트폰으로.
                        <br />
                        자유롭게 작성하고 필요할 땐 PDF로 저장하세요.
                    </div>
                    <img alt="" className="four-img" width="520" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_04.png" />
                </div>
            </div>
        </Section>
    );
}

const Section  = styled.section`
    /* border: 1px solid #222; */
    padding: 100px;
    width: 1060px;
    margin: 0 auto;

    .title{
        text-align: center;
        font-weight: 700;
        font-size: 36px;
    }

    .content{
        /* border: 1px solid blue; */
        margin-top: 50px;

        display: grid;
        grid-template-columns: 520px 520px;
        grid-template-rows: 480px 480px;
        column-gap: 18px;
        row-gap: 18px;
    }

    .card{
        /* border: 1px solid red; */
        padding-top: 50px;
        border-radius: 10px;
        text-align: left;
    }

    .card.first{
        background-color: #f1f7fe;
    }

    .card.second{
        background-color: #f1f1fe;
    }

    .card.third{
        background-color: #f3f8ee;
    }

    .card.four{
        background-color: #ecf8fb;;
    }

    .head{
        padding-left: 50px;
        font-weight: 600;
        font-size: 26px;
        line-height: 135.7%;
        letter-spacing: -2.5px;
    }

    .sub{
        padding-left: 50px;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        margin-top: 15px;
        letter-spacing: -1px;
    }

    .first-img{
        margin-top: 22px;
    }
    
    .second-img{
        margin-top: 47px;
    }

    .third-img{
        margin-top: 50px;
    }

    .four-img{
        margin-top: 50px;
    }

    .ex{
        padding-left: 50px;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        margin-top: 5px;
        color: #939393;
    }
`;

export default Advantage;