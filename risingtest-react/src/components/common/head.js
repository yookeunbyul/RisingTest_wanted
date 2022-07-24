import styled from "styled-components";
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { ReactComponent as Noti } from '../../svg/ic-notification.svg';
import { useDispatch } from "react-redux";
import { openMoAction } from "../../store/actions/modal";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Head = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isLogin = localStorage.getItem("jwt");

    const [onHover, setOnHover] = useState(false);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/jobgroups",{
            })
            .then(res => {
                // console.log(res);
                setCategory(res.data.result);
            })
            .catch(err => console.log(err))
    }, [])

    console.log(category);

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

    const onLogoClick = () => {
        navigate(`/`);
    }

    const onMouseOver = () => {
        setOnHover(true);
    }

    const onMouseOut = () => {
        setOnHover(false);
    }

    return(
        <>
            <Wrap>
                <div className="menu">
                    <div className="box">
                        <div className="section">
                            <img
                                onMouseOver={onMouseOver}
                                class="menubar" 
                                width="17"
                                alt=""
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
                            {onHover &&
                                <>
                                    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="menu-category">
                                        <div className="job-menu">
                                            <span>직군 전체</span>
                                        </div>
                                        {category ? (
                                            category.map((menu) => {
                                                return(
                                                    <>
                                                    <div className="job-menu" key={menu.jobGroupCategoryId}>
                                                        <span>{menu.name}</span>
                                                    </div>
                                                    </>
                                                )
                                            })
                                        ) : null}
                                        <div className="job-free">
                                            <span>
                                                프리랜서
                                            </span>
                                        </div>
                                    </div>
                                </>
                            }
                            
                            <Logo onClick={onLogoClick} className="logo" width={74.38} height={17.33}/>
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
        position: relative;
    }

    .menu-category{
        position: absolute;
        width: 220px;
        /* border: 1px solid #222; */
        background-color: #fff;
        left: -20px;
        top: 51px;
        z-index: 100 !important;

        display:flex;
        flex-direction: column;
    }

    .job-menu{
        height: 40px;
        padding: 0.5px 20px;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
        line-height: 2.86;
        letter-spacing: normal;
        cursor: pointer;
        z-index: 100 !important;

        &:hover{
            color: #36f;
            background-color: #f7f9fa;
        }
    }

    .job-free{
        height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 3px;
        font-size: 13px;
        font-weight: 700;
        font-style: normal;
        line-height: 2.86;
        letter-spacing: normal;
        cursor: pointer;
        z-index: 100 !important;
        color: #36f;
    }

    .job-free > span{
        display: flex;
        align-items: center;
        border-radius: 4px;
        background: #f5f7ff url(https://image.wanted.co.kr/gigs/www/wanted/gigs_banner_background_img.png) no-repeat 100%;
        background-size: 160px 50px;
        padding: 0px 0px 0px 15px;
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
        margin-left: 15px;
        margin-bottom: 4px;
        cursor: pointer;
    }

    .menubar{
        cursor: pointer;
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
        width: 31.5px;
        height: 31px;
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