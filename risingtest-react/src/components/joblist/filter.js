import styled from 'styled-components';
import { ReactComponent as UnderArrow } from '../../svg/ic-under-arrow.svg';
import { ReactComponent as BtnArrow } from '../../svg/ic-btn-arrow.svg';
import { ReactComponent as FiilBookMark } from '../../svg/ic-fill-bookmark.svg';
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import ScrollFilter from "./scrollFilter";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Filter = () => {
    const navigate = useNavigate();
    const dropRef = useRef();

    const [showCate, setShowCate] = useState(false);
    const [showAnnual, setShowAnnual] = useState(false);
    const [showSkill, setShowSkill] = useState(false);
    const [showRes, setShowRes] = useState(false);
    const [jobCate, setJobCate] = useState([]);
    const [employmentList, setEmploymentList] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);

        return()=>{
            document.removeEventListener('scroll', updateScroll);
        }
    });

    //Life Cycle 선언
    useEffect(() => {
        document.addEventListener('mousedown', clickDropOutside);

        return() => {
            document.removeEventListener('mousedown', clickDropOutside);
        };
    });


    useEffect(() => {
        axios.get(`https://zezeserver.shop/app/employments`,{
                params: {
                    jobGroupId : null,
                    jobId: null,
                    country: null,
                    location: null,
                    career: null,
                    orderBy: null,
                    companyTagId: null,
                    skillTagId: null,
                }
            })
            .then(res => {
                console.log(res);
                // setEmploymentList()
                
            })
            .catch(err => console.log(err))
    }, [])

    //함수 선언
    const clickDropOutside = event => {
        if (!dropRef.current.contains(event.target)) {
            setShowCate(false);
        }
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
    };

    const onJonInfo = () => {
        navigate(`/jobinfo`);
    }

    const onCateClick = () => {
        setShowCate(!showCate);
        axios.get(`https://zezeserver.shop/app/jobgroups`,{
            })
            .then(res => {
                console.log(res);
                setJobCate(res.data.result);
            })
            .catch(err => console.log(err))
    }

    const onResClick  = () => {
        setShowRes(!showRes);
    }

    const onAnnualClick  = () =>{
        setShowAnnual(!showAnnual);
    }

    const onSkillClick = () => {
        setShowSkill(!showSkill);
    }

    return(
        <>
            {/* {scrollPosition > 250 ? <ScrollFilter /> : null} */}

            <Wrap>
                <div className="box">
                    <div className="cate">
                        <button onClick={onCateClick} className={`select-box ${showCate ? 'open' : ''}`} ref={dropRef}>
                            <span className="title">전체</span>
                            <span className="under-btn"><UnderArrow /></span>
                            {showCate &&
                                <div className="jobcate-drop">
                                    <div className="jobcate-list">
                                        전체
                                    </div>
                                    {jobCate ? (
                                        jobCate.map((cate) => {
                                            return(
                                                <>
                                                    <div className="jobcate-list" key={cate.jobGroupCategoryId}>
                                                        {cate.name}
                                                    </div>
                                                </>
                                            )
                                        })
                                    ) : null}
                                </div>
                            }
                            
                        </button>
                    </div>
                    <div className="job-option">
                        직군을 선택해주세요.
                    </div>
                </div>
                <div className="select">
                    <div className="section">
                        <button className="btn">
                            <span className="category">지역</span>
                            <span className="option">한국</span>
                        </button>
                        <button onClick={onAnnualClick} className={`btn ${showAnnual ? 'open' : ''}`}>
                            <span className="category">경력</span>
                            <span className="option all">전체</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                        </button>
                        {showAnnual &&
                                <>
                                    <div className="annual-drop">
                                        <div>
                                        
                                        </div>
                                    </div>
                                </>
                        }
                        <button onClick={onSkillClick} className={`btn ${showSkill ? 'open' : ''}`}>
                            <span className="category">기술스택</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                        </button>
                        {showSkill &&
                            <>
                                <div className="skill-drop">
                                    <div className="skill-drop-top">
                                        <div className="skill-drop-input">
                                            <input placeholder="보유 기술스택을 검색해주세요."/>
                                            <div className="skill-drop-icon">
                                                <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M16.4747 17.3587C16.7188 17.6028 17.1145 17.6028 17.3586 17.3587C17.6026 17.1146 17.6026 16.7189 17.3586 16.4748L11.9419 11.0581L11.7305 10.8742C11.483 10.6618 11.1138 10.6754 10.8825 10.9054C9.83555 11.9471 8.42382 12.5417 6.91663 12.5417C3.81023 12.5417 1.29163 10.0229 1.29163 6.91675C1.29163 3.81 3.80988 1.29175 6.91663 1.29175C10.0234 1.29175 12.5416 3.81 12.5416 6.91675C12.5416 7.49637 12.4536 8.06522 12.2829 8.60813C12.1794 8.93741 12.3624 9.28828 12.6917 9.39182C13.0209 9.49535 13.3718 9.31235 13.4753 8.98306C13.684 8.31931 13.7916 7.62405 13.7916 6.91675C13.7916 3.11965 10.7137 0.041748 6.91663 0.041748C3.11952 0.041748 0.041626 3.11965 0.041626 6.91675C0.041626 10.7132 3.11984 13.7917 6.91663 13.7917C8.55107 13.7917 10.0962 13.2181 11.3173 12.1989L16.4747 17.3587Z" fill="black"></path></svg>
                                            </div>
                                        </div>
                                        <div className="popular-skill">
                                            많이 쓰는 인기 기술스택을 추천해 드려요!
                                        </div>
                                        <div>
                                            <div className="skill-name">
                                                Python
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Spring Framework
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                AWS
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Git
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                iOS
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                HTML
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                JavaScript
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                MySQL
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                SQL
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Linux
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Android
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Kotiln
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Swift
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                C / C++
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                PHP
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Docker
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                React
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                Github
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                JPA
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                            <div className="skill-name">
                                                C++
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.59459 4.59459V0.405405C4.59459 0.181506 4.7761 0 5 0C5.2239 0 5.40541 0.181506 5.40541 0.405405V4.59459H9.59459C9.81849 4.59459 10 4.7761 10 5C10 5.2239 9.81849 5.40541 9.59459 5.40541H5.40541V9.59459C5.40541 9.81849 5.2239 10 5 10C4.7761 10 4.59459 9.81849 4.59459 9.59459V5.40541H0.405405C0.181506 5.40541 0 5.2239 0 5C0 4.7761 0.181506 4.59459 0.405405 4.59459H4.59459Z" fill="#bbbbbb"></path></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="selected-skill">

                                        </div>
                                        <div className="skill-guide">기술 스택은 최대 5개까지 선택 가능합니다.</div>
                                        
                                    </div>
                                    <footer>
                                        <button onClick={() => setShowSkill(false)}>취소</button>
                                        <button className="done-btn">적용하기</button>
                                    </footer>
                                </div>
                            </>
                        }
                    </div>
                    <div className="section right">
                        <button onClick={onResClick} className={`res ${showRes ? 'open' : ''}`}>
                            <span className="category">응답률순</span>
                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                            {showRes &&
                                <div className="res-drop">
                                    <div className="res-drop-option first">최신순</div>
                                    <div className="res-drop-option second">보상금순</div>
                                    <div className="res-drop-option">인기순</div>
                                </div>
                            }
                            
                        </button>
                    </div>
                </div>
                <Hr>
                    <hr className="line"/>
                </Hr>
                <div className="scroll">
                    <StyledSlide {...settings}>
                        <button className="tag green">
                            연봉이 최고의 복지
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag blue">
                            재택근무
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            퇴사율 10% 이하
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag yellow">
                            급성장 중
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag pink">
                            병역특례
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag mint">
                            50인 이하
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            50인 이상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag green">
                            업력 5년 이상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag blue">
                            유연근무
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            자유로운 휴가
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag yellow">
                            일한만큼 받는 보상
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F472333e8-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag pink">
                            수평적 문화
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag mint">
                            요즘 뜨는 산업
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4e1b135a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <button className="tag violet">
                            식사 간식 제공
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F53ca893e-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" width="16"/>
                        </button>
                        <div></div>
                        <div></div>
                        <div></div>
                    </StyledSlide>
                </div>
            </Wrap>
            <OutHr>
                <hr className="line"/>
            </OutHr>
            <List>
                <div className="bookmark">
                    <FiilBookMark /><span>북마크 모아보기</span>
                </div>

                <div className="info">
                    <div className="position-wrap">
                        <div className="head" onClick={onJonInfo}>
                            <button><Bookmark/></button>
                            <div className="img-wrap">
                                <img alt="" src="https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/2232/iveehwxoeek9dkoj__400_400.jpg&w=400&q=75"/>
                            </div>
                            <div className="txt-box">
                                <div className="job">개발리드</div>
                                <div className="company">텔라</div>
                                <div className="response-box">
                                    <div className="response">응답률 매우 높음</div>
                                </div>
                                <div className="country">서울·한국</div>
                                <div className="money">채용 보상금 1,000,000원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </>
    )
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
    /* overflow: hidden; */
    width: 1060px;
    margin: 0 auto;

    .box{
        background: #fff;
        padding-top: 40px;

        display: flex;
        align-items: center;
    }

    .jobcate-drop{
        position: absolute;
        top: 40px;
        left: -1px;
        width: 190px;
        height: 641.2px;
        background-color: #fff;
        border: 1px solid #e1e2e3;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        border-radius: 5px;
        z-index: 88;
        padding: 15px 0;

        overflow-y: auto;
    }

    .jobcate-list{
        padding: 11px 25px 9px;
        font-size: 16px;
        text-align: left;
        letter-spacing: -1.5px;

        &:hover{
            background-color: #f8f8f8;
        }
    }

    .cate > button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        display:flex;
        align-items: center;
    }

    .title{
        padding-top: 3px;
        margin-right: 15.5px;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        color: #333;
    }

    .select-box{
        position: relative;
    }

    .select-box > .under-btn{
        position: relative;
        border: 1px solid #e1e2e3;
        border-radius: 100px;
        background-color: #fff;
        width: 26px;
        height: 26px;
        transition: all ease 0.3s;
        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            border: 1px solid #767676;
        }
    }

    .select-box.open > .under-btn{
        transform: rotate(180deg);
        transition: all ease 0.3s;
        border: 1px solid #767676;
    }

    .job-option{
        font-size: 24px;
        line-height: 29px;
        font-weight: 400;
        color: #aaa;
    }

    .job-option::before{
        content: "|";
        font-size: 28px;
        line-height: 29px;
        padding: 3px 24px 0;
        color: #ececec;
    }

    .select{
        padding-top: 20px;
        /* border: 1px solid #222; */

        display:flex;
    }

    .section{
        /* border: 1px solid red; */
        flex-grow: 1;
    }

    .section.right{
        display: flex;
        justify-content: end;
    }

    .btn{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        margin-right: 10px;
        cursor: pointer;
        position: relative;

        &:hover{
            background-color: #f8f8f8;
        }
    }

    .annual-drop{
        position: absolute;
        width: 468px;
        height: 174px;
        background-color: #fff;
        z-index: 55;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        border-radius: 5px;
        border: 1px solid #e1e2e3;

        left: 434px;
        top: 190px;
    }

    .skill-drop{
        width: 584px;
        height: 446px;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);

        position: absolute;
        z-index: 55;
        
        /* overflow-y: auto; */
        top: 190px;
        left: 558px;
    }

    .skill-drop-top{
        height: 396px;
        padding: 26px 20px 20px;
        overflow-y: auto;

    }

    .skill-drop > footer{
        position: absolute;
        right: -2px;
        width: 565px;
        height: 30px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        padding: 10px;

        display:flex;
        align-items: center;
        justify-content: end;
    }

    .skill-drop > footer > button{
        height: 30px;
        font-size: 14px;
        background-color: transparent;
        border: 0;
        font-weight: 600;
        color: #767676;
        cursor: pointer;
    }

    .done-btn{
        color: #36f !important;
    }

    .skill-drop-input > input{
        width: 480px;
        padding: 14px 20px;
        border: 1px solid #ccc;
        border-radius: 25px;
        background: #fff;
        color: #ccc;
        font-size: 13px;
        font-weight: 600;
        line-height: 16px;

        &:focus{
            outline: 1px solid #36f;
        }
    }
    
    .skill-drop-input{
        position: relative;
    }

    .skill-drop-icon{
        position: absolute;
        top: 12px;
        right: 30px;
        display: inline-grid;
        background-color: #fff;
        z-index: 20;
        align-items: center;
        height: 24px;
        padding-left: 15px;
        border-left: 1px solid #ececec;
    }

    .popular-skill{
        margin: 30px 0 14px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .skill-name{
        height: 32px;
        padding: 0 14px;
        border: 1px solid #f2f4f7;
        border-radius: 16px;
        margin: 0;
        background: #f2f4f7;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin: 0px 10px 10px 0px;
    }

    .skill-name > span{
        margin-left: 4px;
    }

    .selected-skill{
        width: 495px;
        min-height: 102px;
        padding: 14px;
        border-radius: 5px;
        background-color: #f8f8f8;
    }

    .skill-guide{
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #939393;
    }

    .btn > svg {
        transition: all ease 0.3s;
    }

    .btn.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .res{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;
        position: relative;

        cursor: pointer;
    }

    .res.open{
        border-radius: 5px 5px 0 0;
    }

    .res > svg {
        transition: all ease 0.3s;
    }

    .res.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .res-drop{
        position: absolute;
        top: 38px;
        left: -1px;
        z-index: 55;
        width: 109px;
        background-color: #fff;
        border: 1px solid #ececec;
        border-radius: 0 0 4px 4px;
    }

    .res-drop-option{
        padding: 0 0 0 16px;
        height: 41px;
        display: flex;
        align-items: center;
    }

    .res-drop-option.first{
        border-bottom: 1px solid #ececec;
    }

    .res-drop-option.second{
        border-bottom: 1px solid #ececec;
    }

    .category{
        font-size: 14px;
        font-weight: 400;
        letter-spacing: normal;
        color: #333;
        margin-right: 15px;
    }

    .option{
        color: #36f!important;
        font-weight: 600;
        margin-right: 0;
        overflow: hidden;
    }

    .option.all{
        margin-right: 5px;
    }

    .scroll{
        display: flex;
        overflow-x: hidden;
    }
`;

const Hr = styled.div`
    width: 1060px;
    margin: 25px auto;

    .line{
        background-color: #ececec;
        height:1px;
        border:0;
    }
`;

const OutHr = styled.div`
    width: 100vw;
    margin-top: 25px;
    margin-bottom: 30px;

    .line{
        background-color: #ececec;
        height:2px;
        border:0;
    }
`;

const List = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */

    .bookmark{
        display: flex;
        align-items:center;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 24px;
        letter-spacing: normal;
        color: #36f;

        cursor: pointer;
    }

    .bookmark > span{
        margin-left: 5px;
    }

    .bookmark > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }

    .info{
        /* border: 1px solid #36f; */
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .position-wrap{
        /* border: 1px solid #222; */

        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        grid-template-rows: 343.43px;
        column-gap: 19px;
        row-gap: 40px;
    }

    .head{
        position: relative;
        cursor: pointer;
    }

    .head > button {
        position: absolute;
        right: 0;
        top: 8px;

        border: none;
        background-color: transparent;
    }

    .img-wrap{
        width: 250px;
        height: 187.5px;
        object-fit: cover;
    }

    .img-wrap > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
        border: 1px solid rgb(0 0 0 / 10%);
    }

    .txt-box{
        padding: 14px 0px;
    }

    .job{
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        max-height: 2.4em;
    }

    .company{
        font-size: 14px;
        margin-top: 10px;
        color: #333;
        font-weight: 600;
    }

    .country{
        font-weight: 400;
        color: #999;
        font-size: 14px;
        margin-top: 10px;
    }

    .money{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
    }

    .response-box{
        border: 1px solid #00aead;
        color: #00aead;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 8px;
        padding: 0 5px;
    }

    .response{
        /* margin-top: 10px; */
    }
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        /* border: 1px solid #222; */
        width: 1300px;
        height: 34px;
    }

    .slick-list::after{
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);
    }

    .slick-slide{
        /* border: 1px solid red; */
        margin-right: 10px;
        width: 230px !important;
        height: 32px;
        position: relative;
    }

    .slick-slide img{
        display: inline-block !important;
    }

    .tag{
        height: 32px;
        position: absolute;
        letter-spacing: -1px;
        width: 100%;
        /* border: 1px solid #222; */
        border-radius: 20px;
        border: none;
        padding: 0px 14px;
        cursor: pointer;

        display:flex !important;
        align-items: center;
        justify-content: center;

        &:hover{
            border: 1px solid #36f;
        }
    }

    .tag.green{
        background: rgb(242, 251, 245);
    }

    .tag.blue{
        background: rgb(243, 249, 254);
    }

    .tag.violet{
        background: rgb(243, 242, 251);
    }

    .tag.yellow{
        background: rgb(246, 248, 238);
    }

    .tag.pink{
        background: rgb(247, 242, 249);
    }

    .tag.mint{
        background: rgb(238, 250, 249);
    }

    .slick-track{
        display: flex;
    }
    
    .slick-prev::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f104";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-next::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-prev{
        top: 15px;
        left: 0;
        z-index: 55;
    }

    .slick-next{
        right:255px;
        top: 15px;
    }

    .slick-prev.slick-disabled::before{
        opacity: 0;
    }

    .slick-next.slick-disabled::before{
        opacity: 0;
    }
`;

export default Filter;