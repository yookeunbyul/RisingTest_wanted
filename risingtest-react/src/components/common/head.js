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
    const [jobgroup, setJobGroup] = useState([]);
    const [clickProfile, setClickProfile] = useState(false);
    const [onMenu, setOnMenu] = useState(false);

    useEffect(() => {
        axios.get("https://prod.zezeserver.shop/app/jobgroups",{
            })
            .then(res => {
                console.log(res);
                setCategory(res.data.result);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(onHover === false){
            setJobGroup("");
        }
    }, [onHover])

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

    const onAllClick = () => {
        navigate(`/joblist`);
        setOnHover(false);
    }

    const onProfile = () => {
        navigate(`/profile`);
    }

    const onProfileClick = () => {
        setClickProfile(!clickProfile);
    }

    const onLogout = () => {
        localStorage.removeItem("jwt");
        navigate(`/`);
    }

    const onMenuOver  = (id) => {
        axios.get(`https://prod.zezeserver.shop/app/jobgroup/${id}/jobcategories`,{
            })
            .then(res => {
                console.log(res);
                setJobGroup(res.data.result.jobCategoryRows);
            })
            .catch(err => console.log(err))
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
                                    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="menu-category">
                                        {onHover && 
                                            <>
                                                <div className="job-group-wrap">
                                                    {jobgroup ? (
                                                        jobgroup.map((job) => {
                                                            return(
                                                                <div className="job-group" key={job.categoryId}>
                                                                    {job.name}
                                                                </div>
                                                            )
                                                        })
                                                    ) : null}
                                                </div>
                                                <div className="job-menu" onClick={onAllClick}>
                                                    <span>?????? ??????</span>
                                                </div>
                                                {category ? (
                                                    category.map((menu) => {
                                                        return(
                                                            <>
                                                            <div className="job-menu" key={menu.jobGroupCategoryId} onMouseOver={() => onMenuOver(menu.jobGroupCategoryId)}>
                                                                <span className="job-name">
                                                                    {menu.name}
                                                                </span>
                                                            </div>
                                                            </>
                                                        )
                                                    })
                                                ) : null}
                                                <div className="job-free">
                                                    <span>
                                                        ????????????
                                                    </span>
                                                </div>
                                            </>
                                        }
                                    </div>
                            <Logo onClick={onLogoClick} className="logo" width={74.38} height={17.33}/>
                        </div>
                        <div className="section second">
                            <Menu onClick={onJobClick} current={location.pathname.includes(`/jobfeed`)}><a>??????</a></Menu>
                            <Menu className="menu-list"><a>?????????</a></Menu>
                            <Menu className="menu-list"><a>????????? ??????</a></Menu>
                            <Menu onClick={onReClick} current={location.pathname.includes(`/resume`)}><a>?????????</a></Menu>
                            <Menu className="menu-list"><a>????????????</a></Menu>
                            <Menu className="menu-list"><a>????????????</a></Menu>
                            <Menu className="menu-list"><a>AI ????????????</a></Menu>
                        </div>
                        <div className="section third">
                            <button className="search-btn"><Search /></button>
                            {isLogin ? (
                                <>
                                    <button className="noti-btn"><Noti /></button>
                                    <Profile className="profile" onClick={onProfileClick} isClick={clickProfile}>
                                        <img width="28" height="28" alt="" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" />
                                        {clickProfile &&
                                            <>
                                                <div className="drop-container">
                                                    <div className="profile-drop">
                                                        <ul>
                                                            <li className="drop-menu">My ?????????</li>
                                                            <li className="drop-menu" onClick={onProfile}>?????????</li>
                                                            <hr />
                                                            <li className="drop-menu">?????? ??????</li>
                                                            <li className="drop-menu">???????????? ??????</li>
                                                            <li className="drop-menu">?????????</li>
                                                            <li className="drop-menu">?????????</li>
                                                            <hr />
                                                            <li className="drop-menu">??????</li>
                                                            <li className="drop-menu">?????????</li>
                                                            <li className="logout" onClick={onLogout}>????????????</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bubble-point"></div>
                                                </div>
                                            </>
                                        }
                                    </Profile>
                                </>
                            ) : (
                                <>
                                    <button className="sign-btn" onClick={openMoRedux}>????????????/?????????</button>
                                </>
                            )}
                            <div className="a-section">
                                <a className="a-dashboard">?????? ?????????</a>
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

    .job-group-wrap{
        position: absolute;
        right:-400px;
        background-color: #f7f9fa;
        /* border: 1px solid red; */

        display:grid;
        grid-template-columns: 200px 200px;
    }

    .job-group{
        background-color: #f7f9fa;
        /* width: 200px; */
        padding: 0 20px;
        /* border: 1px solid #222; */
        height: 40px;
        font-size: 13px;
        display:flex;
        align-items: center;
        cursor: pointer;
        letter-spacing: -1px;

        &:hover{
            color: #36f;
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
        text-decoration: none;
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
        cursor: pointer;
    }

    .noti-btn{
        border: 0;
        background: none;
        margin: 0px 8px;
    }

    .profile{
        width: 30px;
        height: 31px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        margin: 0px 5px;
        align-items: center;
        justify-content: center;

        position: relative;
        cursor: pointer;
    }

    .profile > img{
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .drop-container{
        position: absolute;
        top: 100%;
        right: -40px;
        margin-top: 13px;
        padding: 0!important;
        display: block;
        transform: translate(50%,8px);
    }

    .profile-drop{
        width: 192px;
        background-color: #fff;
        box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
        border: 1px solid #cdcdcd;
        border-radius: 10px;
    }

    .profile-drop > ul{
        padding-top: 14px;
        padding-left: 0;
        margin: 0;
        /* border: 1px solid red; */
    }

    .drop-menu{
        /* width: 192px; */
        height: 34px!important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #333;
        /* border: 1px solid #222; */

        &:hover{
            background-color: #f7f7f7;
            cursor: pointer;
            margin: 0px 5px;
            border-radius: 3px;
        }
    }

    .logout{
        border: 0;
        margin-top: 9px;
        background-color: #f7f7f7;
        overflow: hidden;
        height: 50px!important;
        border-radius: 0 0 10px 10px;
        border-top: 1px solid #ececec;

        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;
    }

    .profile-drop > ul >hr{
        border: 0;
        border-top: 1px solid #e1e2e3;
    }

    .bubble-point{
        position: absolute;
        right: 50%;
        bottom: 100%;
        height: 11px;
        overflow: hidden;
        margin-bottom: -1px;
        transform: translateX(-47px);
    }

    .bubble-point::after{
        content: "";
        margin-top: 4px;
        border: 1px solid #cdcdcd;
        background-color: #fff;
        height: 14px;
        width: 14px;
        display: block;
        border-top-right-radius: 30%;
        transform: rotate(-55deg) skewX(-20deg);
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
        padding: 15px 15px 15px 15px;
        display: inline-block;
    }
`;

const Profile = styled.div`
    border: ${(props) => props.isClick ? "1px solid #36f" : "1px solid #e1e2e3"}
`;

export default Head;