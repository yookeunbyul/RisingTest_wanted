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

    const onReClick = () => {
        navigate(`/resume`);
    }

    return(
        <>
            <Wrap>
                <div className="menu">
                    <div className="box">
                        <div className="section">
                            <img width="17" alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
                            <Logo className="logo" width={74.38} height={17.33}/>
                        </div>
                        <div className="section second">
                            <Menu onClick={onJobClick} current={location.pathname.includes(`/jobfeed`)}><a>채용</a></Menu>
                            <Menu className="menu-list"><a>이벤트</a></Menu>
                            <Menu className="menu-list"><a>직군별 연봉</a></Menu>
                            <Menu onClick={onReClick} current={location.pathname.includes(`/resume`)}><a>이력서</a></Menu>
                            <Menu className="menu-list"><a>커뮤니티</a></Menu>
                            <Menu className="menu-list"><a>프리랜서</a></Menu>
                            <Menu className="menu-list"><a>AI 합격예측</a></Menu>
                        </div>
                        <div className="section third">
                            <button className="search-btn"><Search /></button>
                            {isLogin ? (
                                <>
                                    <button className="noti-btn"><Noti /></button>
                                    <div className="profile">
                                        <img width="28" height="28" alt="" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <button className="sign-btn" onClick={openMoRedux}>회원가입/로그인</button>
                                </>
                            )}
                            <div className="a-section">
                                <a className="a-dashboard">기업 서비스</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>
            <Outlet />
        </>
    );
}

const Wrap = styled.div`

    .menu{
        border-bottom: 1px solid #dddddd;
        height: 51px;
        position: fixed;
        background-color: #fff;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .box{
        width: 1060px;
        height: 50px;
        margin: 0 auto;
        /* border: 1px solid blue; */

        display:flex;
        align-items: center;
    }

    .section{
        flex-grow:1;
        /* border: 1px solid violet; */
        height: 50px;

        display:flex;
        align-items: center;
    }

    .section.second{
        display: flex;
        justify-content: end;
    }

    .section.third{
        display: flex;
        justify-content: end;
    }

    .logo{
        margin-left: 10px;
    }

    .a-section{
        display: flex;
        align-items: center;
    }

    .a-section::before{
        display: block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: 0px 20px;
    }

    .a-dashboard{
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin-left: 5px;
        font-weight: 400;
    }

    .search-btn{
        border: 0;
        background: none;
        margin-right: 4px;
    }

    .sign-btn{
        line-height: 1.4;
        border: 0;
        background: none;
        font-weight: 600;
    }

    .noti-btn{
        border: 0;
        background: none;
        margin: 0px 8px;
    }

    .profile{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        display: flex;
        margin: 0px 5px;
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

const Menu = styled.div`
    text-align: center;
    display: inline-block;
    cursor: pointer;

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
        background-color: ${props=>props.current ? "#36f" : "#fff"};
    }

    a{
        position: relative;
        vertical-align: middle;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        /* border: 1px solid #222; */
        padding: 15px 10px 15px 10px;
        display: inline-block;
    }
`;

export default Head;