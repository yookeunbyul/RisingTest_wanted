import styled from "styled-components";
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { ReactComponent as Noti } from '../../svg/ic-notification.svg';
import { useDispatch } from "react-redux";
import { openMoAction } from "../../store/actions/modal";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isLogin = localStorage.getItem("jwt");

    const openMoRedux = () => {
        dispatch(
            openMoAction()
        );
    };

    const onJobClick = () => {
        navigate(`/jobfeed`);
    }
    return(
        <div>
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
                        <Menu className="menu-list" onClick={onJobClick} current={location.pathname !== "/jobfeed"}><a>채용</a></Menu>
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
                            {isLogin ? (
                                <>
                                <li className="right-menu">
                                    <button className="noti-btn"><Noti /></button>
                                </li>
                                <li className="right-menu">
                                    <div className="profile">
                                        <img width="28" height="28" alt="" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" />
                                    </div>
                                </li>
                                </>
                            ) : (
                                <>
                                    <li className="right-menu">
                                        <button className="sign-btn" onClick={openMoRedux}>회원가입/로그인</button>
                                    </li>
                                </>
                            )}
                            <li className="right-menu division">
                                <a className="a-dashboard">기업 서비스</a>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </Outline>
            <Outlet />
        </div>
    );
}

const Outline = styled.div`    
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
        cursor: pointer;
    }

    .menu-list:hover::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #dddddd;
        /* margin: auto 10px; */
    }

    .menu-list.open::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #36f;
    }

    .menu-list.open:hover::after{
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
        height: 32px;
        vertical-align: middle;
        /* border: 1px solid blue; */
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
        margin: auto 5px;
    }

    .a-dashboard{
        font-size: 13px;
        color: #666;
        line-height: 30px;
        /* height: 30px; */
        border: 1px solid #e1e2e3;
        border-radius: 30px;
        padding: 0px 10px;
        margin-left: 12px;
        font-weight: 400;

        display:flex;
        align-items:center;
    }

    .aside{
        margin-left: 34px;
    }

    .aside > ul > li >*{
        height: 100%;
        font-size: 14px;
        /* color: #333; */
        /* font-weight: 600; */
        line-height: 1;
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
        margin-right: 5px;
    }

    .noti-btn{
        border: 0;
        background: none;
        margin: 0px 8px;
    }

    .btn-menu{
        border: none;
        background-color: transparent;
    }

    .btn-menu.side-margin{
        margin-right: 10px;
    }

    .profile{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        margin: 0px 15px 0px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .profile > img{
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

const Menu = styled.li`
    text-align: center;
    height: inherit;
    display: inline-block;
    cursor: pointer;
    /* color: ${props=>props.current ? "36f" : "#dddddd"}; */

    &:hover::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #dddddd;
    }

    &::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props=>props.current ? "#fff" : "#36f"};
    }
`;

export default Head;