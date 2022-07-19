import styled from "styled-components";
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { useDispatch } from "react-redux";
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
            <nav className="nav">
                <div>
                    <button className="btn-menu side-margin">
                        <img className="menu" alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
                    </button>
                    <span className="logo">
                    <Logo width={74.38} height={17.33}/>
                    </span>
                </div>
                <ul>
                    <li className="menu-list"><a>채용</a></li>
                    <li className="menu-list"><a>이벤트</a></li>
                    <li className="menu-list"><a>직군별 연봉</a></li>
                    <li className="menu-list"><a>이력서</a></li>
                    <li className="menu-list"><a>커뮤니티</a></li>
                    <li className="menu-list"><a>프리랜서</a></li>
                    <li className="menu-list"><a>AI 합격예측</a></li>
                </ul>
                <aside className="aside">
                    <ul>
                        <li className="right-menu">
                            <button className="search-btn"><Search /></button>
                        </li>
                        <li className="right-menu">
                            <button className="sign-btn" onClick={openMoRedux}>회원가입/로그인</button>
                        </li>
                        <li className="right-menu division">
                            <a className="a-dashboard">기업 서비스</a>
                        </li>
                    </ul>
                </aside>
            </nav>
        </Outline>
    );
}

const Outline = styled.nav`
    position: sticky;
    top: 0;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;

    padding: 0px 305px;

    position: relative;
    /* max-width: 1060px; */

    .nav{
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        flex-direction: row;
        flex-wrap: wrap;
    }

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
        /* padding: 15.5px 0px 0px 0px; */
        /* border-bottom: 1px solid blue; */
        /* margin: 0px 10.2px; */
        text-align: center;
        height: inherit;
        display: inline-block;
    }

    .menu-list:hover::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #dddddd;
        /* margin: auto 10px; */
    }

    .menu-list > a{
        position: relative;
        vertical-align: middle;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        padding: 15px;
        display: inline-block;
    }

    .right-menu{
        position: relative;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .right-menu.division{
        display: inline-flex;
    }

    .right-menu.division::before{
        display: block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
    }

    .a-dashboard{
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 10px 10px;
        margin-left: 15px;
        font-weight: 400;
    }

    .aside{
        margin-left: 21px;
    }

    .aside > ul > li >*{
        height: 100%;
        font-size: 14px;
        /* color: #333; */
        /* font-weight: 600; */
        line-height: 1;
        padding: 0 10px;
    }

    .sign-btn{
        margin-right: 6px;
        line-height: 1.4;
        border: 0;
        background: none;
        font-weight: 600;
    }

    .search-btn{
        border: 0;
        background: none;
    }

    .btn-menu{
        border: none;
        background-color: transparent;
    }

    .btn-menu.side-margin{
        margin-right: 10px;
    }

`;

export default Head;