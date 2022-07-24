import styled from 'styled-components';
import { ReactComponent as Search } from '../../svg/ic-big-search.svg';
import { useNavigate } from 'react-router-dom';

const Position = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/joblist`);
    }

    return(
        <Wrap>
            <div className="box" onClick={onClick}>
                <button className="btn"><Search /><span className="txt">채용 중인 포지션 보러가기</span></button>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid blue; */
        cursor: pointer;
    }

    .btn{
        width: 1060px;
        border-radius: 30px;
        border: none;
        height: 70px;
        margin: 50px 0px 50px 0px;
        cursor: pointer;

        background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);

        display:flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    }

    .txt{
        margin-left: 15px;
    }
`;

export default Position;