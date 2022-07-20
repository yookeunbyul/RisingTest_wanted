import styled from 'styled-components';

const Recommend = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="title">
                    즐겨보는<span>크리에이터의</span>글도 추천하고 싶다면?
                </div>
                <div className="image">
                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=121&q=75" />
                </div>
                <div className="link">
                    <button>
                        크리에이터 추천하기
                    </button>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    height: 110px;
    background-color: #36f;

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid white; */

        display: grid;
        grid-template-columns: 455px 386px 220px;
    }

    .title{
        font-size: 24px;
        color: #fff;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: -2px;

        display: flex;
        align-items: center;
    }

    .title > span {
        color: #a9ecf0;
        font-weight: 700;
        margin: 0px 5px;
    }

    .image{
        display: flex;
        align-items: center;
    }

    .link{
        display: flex;
        align-items: center;
    }

    .link > button {
        width: 220px;
        height: 40px;
        font-size: 15px;
        background-color: #fff;
        border: 1px solid #36f;
        color: #36f;
        border-radius: 30px;
        font-weight: 900;
    }
`;

export default Recommend;