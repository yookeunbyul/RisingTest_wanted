import styled from "styled-components";
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { useDispatch, useSelector } from "react-redux";
import { openMoAction } from "../../store/actions/modal";

const Head = () => {
    const dispatch = useDispatch();

    const openMoRedux = () => {
        dispatch(
            openMoAction()
        );
    };
    return(
        <Outline>
                <div className="left">
                    <button className="btn-menu side-margin">
                        <img className="menu" alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
                    </button>
                    <span className="logo">
                    <Logo width={74.38} height={17.33}/>
                    </span>
                </div>
                <ul className="center">
                    <li className="menu-list">채용</li>
                    <li className="menu-list">이벤트</li>
                    <li className="menu-list">직군별 연봉</li>
                    <li className="menu-list">이력서</li>
                    <li className="menu-list">커뮤니티</li>
                    <li className="menu-list">프리랜서</li>
                    <li className="menu-list">AI 합격예측</li>
                </ul>
                <ul className="right">
                        <li>
                            <button className="btn-menu"><Search /></button>
                        </li>
                        <li>
                            <button className="btn-menu" onClick={openMoRedux}>회원가입/로그인</button>
                        </li>
                        <li>
                            <Line></Line>
                        </li>
                        <li>
                            <button className="btn-company">기업 서비스</button>
                        </li>
                    </ul>
        </Outline>
    );
}

const Outline = styled.nav`
    position: sticky;
    top: 0;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;

    display: flex;
    flex-direction: row;

    padding: 0px 305px;

    .menu{
        width: 17px;
        height: 14px;
    }

    .left{
        /* border: 1px solid #222; */
        padding-top: 13px;
    }

    .logo{
        margin-right: 80px;
    }

    .menu-list{
        padding: 15.5px 8px;
        border: 1px solid blue;
        margin: 0px 10.2px;
    }

    .center{
        /* border: 1px solid #222; */
        display: flex;
        flex-direction: row;
        font-size: 14px;
    }

    .right{
        /* border: 1px solid #222; */
        padding-top: 13px;
        display: flex;
        flex-direction: row;
        font-size: 14px;

        margin-left: 12px;
    }

    .align{
        display: flex;
        flex-direction: row;
    }

    .btn-menu{
        border: none;
        background-color: transparent;
    }

    .btn-menu.side-margin{
        margin-right: 10px;
    }

    .btn-company{
        border: 1px solid #dddddd;
        border-radius: 30px;
        background-color: #fff;
        padding: 1px 8px;
        color: #717171;
    }
`;

const Line = styled.div`
    border-left : 1.5px solid #f1f1f1;
    height : 12px;
    margin: 5px 10px 0px 10px;
`;

export default Head;