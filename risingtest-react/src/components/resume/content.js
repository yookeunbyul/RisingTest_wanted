import styled from 'styled-components';

const Content = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="title">이력서 작성, 시작부터 막힌다면</div>
                <div className="content">
                    <div className="card">
                        <img className="image" alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fresume_intro%2Fresume_abroad_1.png&w=520&q=100" />
                        <div className="txt">
                            <div className="head">이력서를 부탁해 by 원티드</div>
                            <div className="sub">데이터를 기반한 이력서 작성 비법 Tip</div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" alt="" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_abroad_02.png" />
                        <div className="txt">
                            <div className="head">포트폴리오를 부탁해</div>
                            <div className="sub">통과되는 포트폴리오 제작법, 구조부터 포멧까지</div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                        <button>
                            <span>더 많은 콘텐츠 보러가기</span>
                        </button>
                    </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border:1px solid #222; */
    background-color: #f8f8f8;
    padding-top: 50px!important;
    padding-bottom: 100px;

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid blue; */
    }

    .title{
        font-weight: 700;
        font-size: 26px;
        margin-top: 20px;
        text-align: center;
    }

    .content{
        margin-top: 50px;
        display: grid;
        grid-template-columns: 520px 520px;
        grid-template-rows: 330px;
        column-gap: 18px;
    }

    .card{
        /* border: 1px solid blue; */
    }

    .image{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .txt{
        background-color: #fff;
        height: 100px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        padding: 0px 20px 0px 20px;
    }

    .head{
        padding-top: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    .sub{
        margin-top: 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: .0056em;
        color: #939393;
    }

    .btn{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .btn > button{
        width: 233px;
        height: 50px;
        border-radius: 50px;
        color: #000;
        border: 1px solid #ececec;
        background-color: transparent;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }

    .btn > button > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #333;
        margin-left: 5px;
    }
`;

export default Content;