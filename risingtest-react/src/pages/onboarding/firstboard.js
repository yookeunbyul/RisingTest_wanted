import styled from 'styled-components';
import axios from "axios";
import { ReactComponent as Symbol } from '../../svg/ic-wanted-symbol.svg';
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Arow } from '../../svg/ic-select-arrow.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const FirstBoard = () => {
    const navigate = useNavigate();
    const { jobList, userId } = useSelector((state) => state.JobGroupReducer);

    // console.log(jobList);

    const [index,setIndex] = useState("");
    const [job, setJob] = useState(false);
    const [cateSelect, setCateSelect] = useState(false);
    const [jobSelect, setJobSelect] = useState(false);
    const [annuSelect, setAnnuSelect] = useState(false);
    const [allSelect, setAllselect] = useState(false);
    const [skill, setSkill] = useState("");

    const [jobCate, setJobCate] = useState("");

    useEffect(() => {
        if(cateSelect === true && jobSelect === true && annuSelect === true){
            setAllselect(true);
        }
    }, [cateSelect, jobSelect, annuSelect])

    const onClick = () => {
        navigate(`/second`);
    }

    const onCateChange = (e) => {
        setCateSelect(true);
        setIndex(e.target.value);
        setJob(true);
        console.log(e.target.value);

        if(e.target.value === "1"){
            axios.get("https://zezeserver.shop/app/jobgroup/1/jobcategories",{
            })
            .then(res => {
                console.log(res);
                setJobCate(res.data.result);
            })
            .catch(err => console.log(err))
        }

        if(e.target.value === "5813"){
            setJob(false);
        }
    }

    const onJobChange = (e) => {
        setJobSelect(true);
    }

    const onAnnuChange = (e) => {
        setAnnuSelect(true);
    }

    const onSkillChange = (e) => {
        setSkill(e.target.value);
        console.log(skill);

        axios.get(`https://zezeserver.shop/app/skills/${skill}`,{
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return(
        <Wrap>
            <Box>
                <div className="logo-wrap">
                    <Symbol />
                    <div className="logo-style">
                        <Logo width={87.38} height={20.13}/>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="step-head">
                        <ul className="step-container">
                            <li className="active">
                                <em>
                                    <span>1</span>
                                </em>
                                <span>전문분야 설정</span>
                            </li>
                            <li>
                                <em>
                                    <span>2</span>
                                </em>
                            </li>
                            <li>
                                <em>
                                    <span>3</span>
                                </em>
                            </li>
                        </ul>
                    </div>
                    <div className="step-body">
                        <div className="body-head">
                            <p className="style-head">
                                어떤 일을 하고 계신가요?
                                <br />
                                딱 맞는 회사와 콘텐츠를 추천해 드려요!
                            </p>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="category_id" className="style-label">직군</label>
                            <div className="input-body">
                                <div className="select-wrap">
                                    <select name="category_id" onChange={onCateChange}>
                                        <option value="5813">선택 해주세요.</option>
                                        {jobList ? (
                                            jobList.map((job) => {
                                            return(
                                                <option key={job.jobGroupCategoryId} value={job.jobGroupCategoryId}>{job.name}</option>
                                            )
                                        })) : <option>로딩</option>}
                                    </select>
                                    <span className="arrow-style">
                                        <Arow />
                                    </span>
                                </div>
                                <div className="guide-style">신입의 경우, 희망 직군을 선택해 주세요.</div>
                            </div>
                        </div>
                        {job && 
                            <div className="input-wrap">
                                <label htmlFor="job" className="style-label">직무</label>
                                <div className="input-body">
                                    <div className="select-wrap">
                                        <select name="job" onChange={onJobChange}>
                                            <option value="1013">선택해 주세요.</option>
                                            {jobCate ? (
                                                jobCate.map((cate) => {
                                                return(
                                                    <option key={cate.categoryId} value={cate.categoryId}>{cate.name}</option>
                                                )
                                            })) : <option>로딩</option>}
                                        </select>
                                        <span className="arrow-style">
                                            <Arow />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="input-wrap">
                            <label htmlFor="annual" className="style-label">경력</label>
                            <div className="input-body">
                                <div className="select-wrap">
                                    <select name="annual" onChange={onAnnuChange}>
                                        <option value>선택해 주세요.</option>
                                        <option value="0">신입</option>
                                        <option value="1">1 년</option>
                                        <option value="2">2 년</option>
                                        <option value="3">3 년</option>
                                        <option value="4">4 년</option>
                                        <option value="5">5 년</option>
                                        <option value="6">6 년</option>
                                        <option value="7">7 년</option>
                                        <option value="8">8 년</option>
                                        <option value="9">9 년</option>
                                        <option value="10">10 년 이상</option>
                                    </select>
                                    <span className="arrow-style">
                                        <Arow />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {index === "1" && 
                            <div className="input-wrap">
                                <label htmlFor="skills" className="style-label">스킬</label>
                                <div className="input-body">
                                    <div className="input-box">
                                        <input 
                                            className="input-skill" 
                                            type="text" 
                                            name="skills" 
                                            placeholder="보유 스킬을 검색해주세요."
                                            value={skill}
                                            onChange={onSkillChange}
                                        />
                                        <span>
                                            <Search />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="footer">
                            <Next type="button" valid={allSelect} onClick={onClick}>다음</Next>
                            <div className="or-style">or</div>
                            <button type="button" className="upload-btn">내 이력서 업로드하기</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    min-height: 77vh;
    padding-top: 105px;
    padding-bottom: 105px;
    background-color: #f8f8fa;
`;

const Box = styled.div`
    width: 400px;
    max-width: 100vw;

    .logo-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-style{
        margin-left: 8px;
    }

    .content-wrap{
        border: 1px solid #ececec;
        border-radius: 5px;
        margin-top: 39px;
        background-color: #fff;
    }

    .step-head{
        position: relative;
        border-bottom: 1px solid #e1e2e3;
        padding: 20px;
    }

    .step-container{
        display: flex;
        justify-content: flex-start;
    }

    .step-container > li.active{
        margin-left: 0;
        color: #333;
        margin-right: auto;
    }

    .step-container > li{
        flex: none;
        height: 23px;
    }

    .step-container > li.active > em {
        background: #36f;
        color: #fff;
    }

    .step-container > li > em {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        line-height: 1em;
        border-radius: 50%;
        font-style: normal;
        margin-right: 6px;
        background: #f2f4f7;
        color: #cccccc;
        font-weight: 700;
    }

    .step-container > li > span {
        display: inline-block;
        font-size: 14px;
        color: #333;
        margin-left: 4px;
        font-weight: 700;
        line-height: 23px;
    }

    .step-container > li.active::after{
        background: #36f;
        width: 33.33%;
        left: 0;
    }

    .step-container > li::after{
        position: absolute;
        content: "";
        display: block;
        bottom: -1px;
        height: 1px;
    }

    .step-body{
        padding: 29px 19px 24px;
    }

    .body-head{
        margin-bottom: 34px;
        font-size: 15px;
        text-align: left;
        color: #333;
        font-weight: 600;
    }

    .style-head{
        line-height: 1.53;
        white-space: pre-line;
    }

    .input-wrap{
        position: relative;
        padding-bottom: 22px;
        color: #767676;
    }

    .style-label{
        font-size: 14px;
        font-weight: 400;
    }

    .input-body{
        margin-top: 11px;
    }

    .select-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 325px;
        height: 50px;
        padding-right: 15px;
        padding-left: 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        font-size: 15px;
    }

    .select-wrap > select {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        padding-left: 15px;
        border: 0;
        appearance: none;
        background: transparent;
        color: #aaa;
    }

    .arrow-style{
        position: absolute;
        top: 50%;
        right: 10px;    
        transform: translateY(-50%);
    }

    .guide-style{
        font-weight: 500;
        font-size: 12px;
        color: #aaa;
        margin-top: 10px;
    }

    .footer{
        margin-top: 18px;
    }

    .or-style{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        font-weight: 600;
        color: #36f;
    }

    .upload-btn{
        border: 1px solid #36f;
        background-color: #fff;
        color: #36f;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 54px;
        border-radius: 27px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 5px;
    }

    .input-box{
        position: relative;
    }

    .input-skill{
        padding-right: 60px;
        text-overflow: ellipsis;
        width: 280px;
        height: 50px;
        padding-left: 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        font-size: 15px;
        color: #333;
        appearance: none;
        resize: none;
        font-size: 14px;
        color: #aaa;

        &:focus{
            border: 1px solid #36f;
            outline: none;
        }
    }

    .search-style{
        position: absolute;
    }

    .input-box > span {
        position: absolute;
        top: 50%;
        right: 21px;
        transform: translateY(-50%);
        color: #333;
    }

    .input-box::after{
        content: "";
        position: absolute;
        top: 50%;
        right: 60px;
        width: 1px;
        height: 28px;
        background-color: #ececec;
        transform: translateY(-50%);
    }
`;

const Next = styled.button`
    background-color: ${props=>props.valid ? "#36f" : "#f2f4f7"};
    border-color: transparent;
    color: ${props=>props.valid? "#fff" : "#cacaca"};
    pointer-events : ${props=>props.valid ? "auto" : "none"};

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 54px;
    border: 0;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
`;

export default FirstBoard;