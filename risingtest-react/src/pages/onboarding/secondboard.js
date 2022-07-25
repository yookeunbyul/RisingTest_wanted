import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-wanted-symbol.svg';
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Completed } from '../../svg/ic-completed.svg';
import { ReactComponent as Search } from '../../svg/ic-search.svg';
import { ReactComponent as Arrow } from '../../svg/ic-right-arrow.svg';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

const SecondBoard = () => {
    const { userId } = useSelector((state) => state.JobGroupReducer);
    const { username, userphone } = useSelector((state) => state.UserReducer);
    const { jobid, career, skills } = useSelector((state) => state.JobInfoReducer);
    const navigate = useNavigate();
    const selectRef = useRef();
    const selectCompanyRef = useRef();
    const localEmail = localStorage.getItem("email");
    const bodyFormData = new FormData();

    const [changeSchool, setChangeSchool] = useState(false);
    const [changeCompany, setChangeCompany] = useState(false);
    const [valid, setValid] = useState(false);
    const [schoolList, setSchoolList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [school, setSchool] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState(localEmail);
    const [companyID, setCompanyID] = useState("");

    skills.forEach((item) => {
        bodyFormData.append('skills[]', item);
    });

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/schools",{
            })
            .then(res => {
                console.log(res);
                setSchoolList(res.data.result);
            })
            .catch(err => console.log(err))

        axios.get("https://zezeserver.shop/app/companies",{
            })
            .then(res => {
                console.log(res);
                setCompanyList(res.data.result);
            })
            .catch(err => console.log(err))        
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
    
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    });

    useEffect(() => {
        if(school && company){
            setValid(true);
        }
    }, [school, company])

    const filtered = schoolList && schoolList.filter((itemList) => {
        return (
            itemList.name.includes(school)
        )
    });

    const Companyfiltered = companyList && companyList.filter((itemList) => {
        return (
            itemList.companyName.includes(company)
        )
    });

    const clickOutside = event => {
        if (changeSchool && !selectRef.current.contains(event.target)) {
            setChangeSchool(false);
        }

        if (changeCompany && !selectCompanyRef.current.contains(event.target)){
            setChangeCompany(false);
        }
    };

    const onChange = (e) => {
        setSchool(e.target.value);
    }

    const onClick = () => {
        navigate(`/third`);
        axios.post("https://zezeserver.shop/app/users/post-default-resume",{
            userId : `${userId}`,
            userName : `${username}`,
            email: `${email}`,
            telephone: `${userphone}`,
            jobId : `${jobid}`,
            career: `${career}`,
            companyId: `${companyID}`,
            companyName: `${company}`,
            schoolName: `${school}`,
            skills: skills,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    const onSchoolClick = () => {
        setChangeSchool(true);
    }

    const onCompanyClick = () => {
        setChangeCompany(true);
    }

    const onTypeClick = () => {
        setChangeSchool(false);
    }

    const onTypeingClick = () => {
        setChangeCompany(false);
    }

    const onListClick = (e) => {
        setChangeSchool(false);
        setSchool(e.target.value);
    }

    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    }

    const onNameClick = (e) => {
        setChangeCompany(false);
        setCompany(e.target.value);
    }

    const onCompanyId = (id) => {
        setCompanyID(id);
    }

    console.log(userId, username, email, userphone, jobid, career, companyID, company, school, skills);

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
                            <li className="completed">
                                <em>
                                    <Completed />
                                </em>
                            </li>
                            <li className="active">
                                <em>
                                    <span>2</span>
                                </em>
                                <span>학교/직장 설정</span>
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
                                아래 정보를 추가해 주세요!
                                <br />
                                더욱 정교한 추천을 받으실 수 있어요.
                            </p>
                        </div>
                        <div className="style-wrap">
                            <label htmlFor="school_name" className="style-label">학교</label>
                            <div className="input-body">
                                <div className="input-box">
                                    <input 
                                        onChange={onChange} 
                                        onClick={onSchoolClick} 
                                        className="school-name" 
                                        type="text" 
                                        name="school_name" 
                                        placeholder="검색해 주세요."
                                        value={school}
                                    />
                                    <span>
                                        <Search />
                                    </span>
                                    {changeSchool ? 
                                    <ul className="select-box" ref={selectRef}>
                                        <li className="select-option">
                                            <button type="button" onClick={onTypeClick}>직접 입력 '{school}' 사용하기</button>
                                        </li>
                                        {filtered ? (
                                            filtered.map((item, index) => {
                                                return(
                                                    <li className="select-option" key={index}>
                                                        <button type="button" value={item.name} onClick={onListClick}>{item.name}</button>
                                                    </li>
                                                )
                                            })
                                        ) : null}    
                                    </ul> : null}
                                </div>
                            </div>
                        </div>
                        <div className="style-wrap">
                            <label htmlFor="company_name" className="style-label">직장</label>
                            <div className="input-body">
                                <div className="input-box">
                                    <input 
                                        className="company-name" 
                                        type="text" 
                                        name="company_name" 
                                        placeholder="검색해 주세요."
                                        onChange={onCompanyChange}
                                        onClick={onCompanyClick}
                                        value={company} 
                                    />
                                    <span>
                                        <Search />
                                    </span>
                                    {changeCompany ? 
                                    <ul className="select-box" ref={selectCompanyRef}>
                                        <li className="select-option">
                                            <button type="button" onClick={onTypeingClick}>직접 입력 '{company}' 사용하기</button>
                                        </li>
                                        {Companyfiltered ? (
                                            Companyfiltered.map((item) => {
                                                return(
                                                    <li className="select-option" key={item.companyId} onClick={() => onCompanyId(item.companyId)}>
                                                        <button type="button" value={item.companyName} onClick={onNameClick}>{item.companyName}</button>
                                                    </li>
                                                )
                                            })
                                        ) : null}    
                                    </ul> : null}
                                </div>
                                <div className="guide">신입의 경우, '신입' 또는 '없음'을 직접 입력해 주세요.</div>
                            </div>
                        </div>
                        <Next type="button" valid={valid} onClick={onClick}>다음</Next>
                    </div>
                </div>
                <div className="skip-wrap">
                    나중에 입력할게요
                    <Arrow />
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

    .step-container > li {
        flex: none;
        height: 23px;
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
        background: #f2f4f7;
        margin-right: 6px;
        color: #ccc;
    }

    .step-container > li > span {
        display: inline-block;
        font-size: 14px;
        color: #333;
        margin-left: 4px;
        font-weight: 700;
        line-height: 23px;
    }

    .step-container > li > em > span {
        font-weight: 700;
        border: 1px solid transparent;
        height: 1em;
    }

    .step-container > li.completed > em {
        background: #36f;
        color: #fff;
    }

    .step-container > li.completed::after{
        background: #36f;
        width: 33.33%;
        position: absolute;
        content: "";
        display: block;
        bottom: -1px;
        height: 1px;
        left: 0;
    }

    .step-container > li.active {
        margin-left: 0;
        color: #333;
        margin-right: auto;
    }

    .step-container > li.active > em {
        background: #36f;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        line-height: 1em;
        border-radius: 50%;
        font-style: normal;
        margin-right: 6px;
    }

    .step-container > li.active::after{
        background: #36f;
        width: 33.33%;
        transition: width .5s;
        left: 33.33%;
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

    .style-wrap{
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

    .input-box{
        position: relative;
    }

    .school-name{
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

    .company-name{
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

    .guide{
        font-weight: 500;
        font-size: 12px;
        color: #aaa;
        margin-top: 10px;
    }

    .skip-wrap{
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        color: #767676;
    }

    .select-box{
        position: absolute;
        z-index: 1;
        width: 355px;
        max-height: 210px;
        overflow: auto;
        border: 1px solid #e1e2e3;
        border-radius: 3px;
        box-shadow: 0 2px 1px 0 rgb(0 0 0 / 10%);
        background-color: #fff;
        transform: translateY(4px);
        font-size: 16px;
        color: #333;
    }

    .select-box::-webkit-scrollbar{
        display: none;
    }

    .select-option{
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        height: 45px;
    }

    .select-option > button {
        width: 100%;
        height: 100%;
        padding-right: 20px;
        padding-left: 20px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border: none;
        background-color: #fff;

        &:hover{
            background-color: #f2f4f7;
            cursor: pointer;
        }
    }

`;

const Next = styled.button`
    background-color: ${props=>props.valid ? "#36f" : "#f2f4f7"};
    border-color: transparent;
    color: ${props=>props.valid? "#fff" : "#cacaca"};
    pointer-events : ${props=>props.valid ? "auto" : "none"};
    cursor: pointer;

    margin-top: 18px;
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

export default SecondBoard;