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
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { Wrap, Hr, OutHr, List, StyledSlide, CateName } from "./styled";


const Filter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dropRef = useRef();

    const [showCate, setShowCate] = useState(false);
    const [showAnnual, setShowAnnual] = useState(false);
    const [showSkill, setShowSkill] = useState(false);
    const [showRes, setShowRes] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const [jobCate, setJobCate] = useState([]);
    const [employmentList, setEmploymentList] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [jobCateId, setJobCateId] = useState("");
    const [jobCateName, setJobCateName] = useState("전체");
    const [jobGroupList, setJobGroupList] =useState([]);
    const [checkList, setCheckList] = useState([]);
    const [checkId, setCheckId] = useState("");
    const [checkName, setCheckName] = useState("");
    const [JobId, setJobId] = useState("");
    const [JobName, setJobName] = useState("");

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
        axios.get(`https://dev.zezeserver.shop/app/employments`,{
                params: {
                    jobGroupId : `${jobCateId}`,
                    jobId: `${JobId}`,
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
                setEmploymentList(res.data.result.employments);
                
            })
            .catch(err => console.log(err))
            
    }, [jobCateId, JobId])

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
        axios.get(`https://dev.zezeserver.shop/app/jobgroups`,{
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

    const onJobCateClick = (id, name) => {
        setJobCateId(id);
        setJobCateName(name);
    }

    const onGroupClick = () => {
        setShowGroup(!showGroup);
        axios.get(`https://dev.zezeserver.shop/app/jobgroup/1/jobcategories`,{
            })
            .then(res => {
                // console.log(res);
                setJobGroupList(res.data.result);
            })
            .catch(err => console.log(err))
    }

    const onJobGroupDone = () => {
        setShowGroup(false);
        setJobId(checkId);
        setJobName(checkName);
        setCheckList("");
    }

    const onClickJobId = (id, name) => {
        // console.log(id);

        setCheckList(checkList => [...checkList, id]);

        if(checkList.includes(id)){
            setCheckList(checkList => checkList.filter(check => check !== id));
        }

        setCheckId(id);
        setCheckName(name);
    }

    return(
        <>
            {/* {scrollPosition > 250 ? <ScrollFilter /> : null} */}

            <Wrap>
                <div className="box">
                    <div className="cate">
                        <button onClick={onCateClick} className={`select-box ${showCate ? 'open' : ''}`} ref={dropRef}>
                            <span className="title">{jobCateName}</span>
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
                                                    <div className="jobcate-list" key={cate.jobGroupCategoryId} onClick={() => onJobCateClick(cate.jobGroupCategoryId, cate.name)}>
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
                    {jobCateId  ? (
                        <>
                            <div className="job-option selected">
                                {JobName ? (
                                    <>
                                        {JobName}
                                    </>
                                ) : (
                                    <>
                                        {jobCateName} 전체
                                    </>
                                )}
                                
                            </div>
                            <button onClick={onGroupClick} className={`jobgroup-select ${showGroup ? 'open' : ''}`}>
                                <span className="under-group-btn"><UnderArrow /></span>
                                
                            </button>
                            {showGroup &&
                                    <>
                                        <div className="jobgroup-drop">
                                            <p>직무를 선택해 주세요. (최대 5개 선택 가능)</p>
                                            <div className="jobgroup-name-wrap">
                                            {jobGroupList ? (
                                                jobGroupList.map((item) => {
                                                    return(
                                                        <>
                                                            <CateName key={item.categoryId} className="jobgroup-name" onClick={() => onClickJobId(item.categoryId, item.name)} click={checkList.includes(item.categoryId)}>{item.name}</CateName>
                                                        </>
                                                    )
                                                })
                                            ) : null}
                                            </div>
                                            <hr />
                                            <div className="jobgroup-done-btn">
                                                <button onClick={onJobGroupDone}>선택 완료하기</button>
                                            </div>
                                        </div>
                                    </>
                                }
                        </>
                    ) : (
                        <>
                            <div className="job-option">
                                직군을 선택해주세요.
                            </div>
                        </>
                    )}
                    
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
                        {/* {showAnnual &&
                                <>
                                    <div className="annual-drop">
                                        <div>
                                        
                                        </div>
                                    </div>
                                </>
                        } */}
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
                        {employmentList ? (
                            employmentList.map((item) => {
                                return(
                                    <>
                                        <div className="head" onClick={onJonInfo} key={item.employmentId}>
                                            <button><Bookmark/></button>
                                            <div className="img-wrap">
                                                <img alt="" src={item.employmentImgUrl}/>
                                            </div>
                                            <div className="txt-box">
                                                <div className="job">{item.jobName}</div>
                                                <div className="company">{item.companyName}</div>
                                                {item.responseRate >= 95 ? (
                                                    <>
                                                        <div className="response-box">
                                                            <div className="response">응답률 매우 높음</div>
                                                        </div>
                                                    </>
                                                ) : null}
                                                
                                                <div className="country">{item.city}·{item.country}</div>
                                                <div className="money">채용 보상금 1,000,000원</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        ) : null}
                        
                    </div>
                </div>
            </List>
        </>
    )
}



export default Filter;