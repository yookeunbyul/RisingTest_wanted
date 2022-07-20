import styled from 'styled-components';

const RecoBtn = () => {
    return(
        <Section>
            <button className="btn"><span>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀</span></button>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */

    .btn{
        width: 1060px;
        border-radius: 30px;
        height: 64.67px;
        border: 0;
        background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
        font-size: 17px;
        color: #fff;
        font-weight: bold;
    }

    .btn > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #fff;
        margin-left: 5px;
    }
`;

export default RecoBtn;