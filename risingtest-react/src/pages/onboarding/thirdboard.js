import styled from 'styled-components';
import { ReactComponent as Symbol } from '../../svg/ic-wanted-symbol.svg';
import { ReactComponent as Logo } from '../../svg/ic-wanted-logo.svg';
import { ReactComponent as Completed } from '../../svg/ic-completed.svg';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

const ThridBoard = () => {
    const navigate = useNavigate();
    const { userId } = useSelector((state) => state.JobGroupReducer);

    const [worryList, setWorryList] = useState([]);
    const [interests, setInterests] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const [trendList, setTrendList] = useState([]);

    const bodyFormData = new FormData();

    checkList.forEach((item) => {
        bodyFormData.append('checkList[]', item);
    });

    useEffect(() => {
        axios.get("https://prod.zezeserver.shop/app/post-tags",{
            })
            .then(res => {
                console.log(res);
                setWorryList(res.data.result.officeWorkerEmpathy);
                setInterests(res.data.result.interests);
                setTrendList(res.data.result.trend);
            })
            .catch(err => console.log(err))      
    }, [])

    const onStart = () => {
        navigate(`/`);
        axios.post("https://prod.zezeserver.shop/app/users/interestedTags",{
            userId : `${userId}`,
            postTagList : checkList,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    const onAddList = (id) => {
        setCheckList(checkList => [...checkList, id]);

        if(checkList.includes(id)){
            setCheckList(checkList => checkList.filter(check => check !== id));
        }
    }

    console.log(userId, checkList);

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
                            <li className="completed">
                                <em>
                                    <Completed />
                                </em>
                            </li>
                            <li className="active">
                                <em>
                                    <span>3</span>
                                </em>
                                <span>???????????? ??????</span>
                            </li>
                        </ul>
                    </div>
                    <div className="step-body">
                        <div className="body-head">
                            <p className="style-head">
                                ???????????? ???????????? ??????
                                <br />
                                ???????????? ????????? ????????????!
                            </p>
                        </div>
                        <div className="interests-box">
                            <ul>
                                <li className="interests-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/0a15b242.png" alt="????????? ??????" />
                                        <span>????????? ??????</span>
                                    </div>
                                    <ul className="list-wrap">
                                        {worryList ? (
                                            worryList.map((tag) => {
                                                return(
                                                    
                                                    <li key={tag.tagId}><Btn onClick={() => onAddList(tag.tagId)} click={checkList.includes(tag.tagId)}>{tag.name}</Btn></li>
                                                )
                                            })
                                        ) : null}
                                    </ul>
                                </li>
                                <li className="interests-second-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/2011f1b4.png" alt="????????????" />
                                        <span>????????????</span>
                                    </div>
                                    <ul className="list-wrap">
                                        {interests ? (
                                                interests.map((tag) => {
                                                    console.log(checkList.includes(tag.tagId));
                                                    return(
                                                        
                                                        <li key={tag.tagId}><Btn onClick={() => onAddList(tag.tagId)} click={checkList.includes(tag.tagId)}>{tag.name}</Btn></li>
                                                    )
                                                })
                                            ) : null}
                                    </ul>
                                </li>
                                <li className="interests-second-list">
                                    <div className="list-head">
                                        <img src="https://static.wanted.co.kr/images/tags/49bae778.png" alt="?????????/????????????" />
                                        <span>?????????/????????????</span>
                                    </div>
                                    <ul className="list-wrap">
                                        {trendList ? (
                                                    trendList.map((tag) => {
                                                        console.log(checkList.includes(tag.tagId));
                                                        return(
                                                            
                                                            <li key={tag.tagId}><Btn onClick={() => onAddList(tag.tagId)} click={checkList.includes(tag.tagId)}>{tag.name}</Btn></li>
                                                        )
                                                    })
                                                ) : null}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <button onClick={onStart} type="button" className="start-btn">????????? ????????????</button>
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

    .btn {
    display: inline-block;
    padding: 0 15px;
    font-size: 15px;
    height: 100%;
    font-weight: 500;
    color: #666;
    border: 1px solid transparent;
    border-radius: 21px;
    background-color: #f2f4f7;
    line-height: 1em;
    cursor: pointer;

    &.active {
        background-color: lightblue;
    }
}
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
        width: 66.66%;
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
        left: 66.66%;
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
        margin-bottom: 29px;
    }

    .interests-box{
        margin-bottom: 24px;
    }

    .interests-box > ul {
        display: flex;
        flex-wrap: wrap;
    }

    .interests-list{
        min-width: 90%;
    }

    .list-head{
        margin-bottom: 14px;
    }

    .list-head > img {
        width: 15px;
        height: 16px;
        margin-right: 4px;
        margin-top: -5px;
    }

    .list-head > span{
        font-weight: 700;
        font-size: 15px;
        color: #666;
    }

    .list-wrap{
        margin-bottom: 0;
    }

    .list-wrap > li {
        float: left;
        margin: 0 10px 16px 0;
        height: 38px;
    }

    .interests-second-list{
        min-width: 90%;
        margin-top: 13px;
    }

    .start-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 54px;
        border: 0;
        border-radius: 27px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }
`;

const Btn = styled.button`
    display: inline-block;
    padding: 0 15px;
    font-size: 15px;
    height: 100%;
    font-weight: ${props=>props.click ? "700" : "500"};
    color: ${props=>props.click ? "#36f" : "#666"};
    border: ${props=>props.click ? "1px solid #36f" : "1px solid transparent"};
    border-radius: 21px;
    background-color: ${props=>props.click ? "#fff" : "#f2f4f7"};
    line-height: 1em;
    cursor: pointer;
`;

export default ThridBoard;