import styled from 'styled-components';

const AiPosition = () => {
    return(
        <Wrap>
            <div className="box">
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    border: 1px solid #222;

    .box{
        background: #f4f8fb;
        background-image: url(https://wanted-dev.static.wanted.co.kr/banner/Jobsfeed_ai_banner.png);
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 60px;
    }
`;
export default AiPosition;